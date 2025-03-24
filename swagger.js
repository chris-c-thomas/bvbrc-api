const swaggerJSDoc = require("swagger-jsdoc");
const fs = require("fs");
const yaml = require("yaml");
const xml2js = require('xml2js');
const glob = require('glob');
const path = require('path');

const getTagFromPath = (routePath) => {
  const segments = routePath.split('/');
  return segments[1] ? segments[1].replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) : 'General';
};

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "BV-BRC API",
      version: "1.0.0",
      description: "API documentation for BV-BRC",
    },
    servers: [
      {
        url: "https://alpha.bv-brc.org/api",
      },
    ],
  },
  apis: ["./app.js", "./routes/**/*.js"],
};

const generateJsDoc = (method, routePath) => {
  const tag = getTagFromPath(routePath);
  const model = getTagFromPath(routePath).toLowerCase(); // e.g., Genome -> genome
  return `
    /**
     * @swagger
     * /${routePath}:
     *   ${method}:
     *     tags:
     *       - ${tag}
     *     summary: Auto-generated summary for ${method.toUpperCase()} ${routePath}
     *     description: This endpoint is auto-documented based on the route declaration.
     *     responses:
     *       200:
     *         description: Successful response
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/${model}'
     */
    `.trim();
};

const swaggerSpec = swaggerJSDoc(options);

const SOLR_DIR = path.join(__dirname, '..', 'bvbrc-solr');
const schemaFiles = glob.sync(`${SOLR_DIR}/*/managed-schema`);
const parser = new xml2js.Parser();

swaggerSpec.components = swaggerSpec.components || {};
swaggerSpec.components.schemas = swaggerSpec.components.schemas || {};

const solrTypeToOpenAPI = {
  string: 'string',
  boolean: 'boolean',
  int: 'integer',
  float: 'number',
  double: 'number',
  long: 'integer',
  tdate: 'string',
  text_general: 'string'
};

const parseFields = async (filePath) => {
  const xml = fs.readFileSync(filePath, 'utf8');
  const result = await parser.parseStringPromise(xml);

  // Correct Solr structure: result.schema.fields[0].field
  const fields = result?.schema?.fields?.[0]?.field || [];
  const properties = {};

  fields.forEach(f => {
    const name = f.$.name;
    const type = solrTypeToOpenAPI[f.$.type] || 'string';
    properties[name] = { type };
  });

  return properties;
};

const injectSolrSchemas = async () => {
  for (const file of schemaFiles) {
    const name = path.basename(path.dirname(file));
    const properties = await parseFields(file);

    // Check if properties are valid before assigning
    if (Object.keys(properties).length > 0) {
      swaggerSpec.components.schemas[name] = {
        type: 'object',
        properties
      };
    }
  }
};

(async () => {
  await injectSolrSchemas();

  // Generate example objects from Solr field types
  const generateExample = (properties) => {
    const example = {};
    for (const [key, val] of Object.entries(properties)) {
      switch (val.type) {
        case 'string':
          example[key] = `${key}_example`;
          break;
        case 'integer':
          example[key] = 42;
          break;
        case 'boolean':
          example[key] = true;
          break;
        case 'number':
          example[key] = 3.14;
          break;
        default:
          example[key] = `example_${key}`;
      }
    }
    return example;
  };

  // Create example map from schemas
  const schemaExamples = {};
  for (const [name, schema] of Object.entries(swaggerSpec.components.schemas)) {
    if (schema.properties && Object.keys(schema.properties).length > 0) {
      schemaExamples[name.toLowerCase()] = generateExample(schema.properties);
    }
  }

  // Inject explicit paths for each Solr collection
  for (const [collection, example] of Object.entries(schemaExamples)) {
    const path = `/solr/${collection}`;
    const tag = getTagFromPath(path);

    swaggerSpec.paths[path] = {
      get: {
        tags: [tag],
        summary: `Search ${collection} Solr core`,
        description: `Returns records from the ${collection} Solr core.`,
        parameters: [
          {
            in: "query",
            name: "q",
            schema: { type: "string" },
            required: true,
            description: "Solr query string (e.g., genome_id:123456.7)"
          },
          {
            in: "query",
            name: "rows",
            schema: { type: "integer", default: 25 },
            required: false,
            description: "Number of records to return"
          }
        ],
        responses: {
          "200": {
            description: "Successful response",
            content: {
              "application/json": {
                schema: {
                  $ref: `#/components/schemas/${collection}`
                },
                example
              }
            }
          }
        }
      }
    };
  }

  // Inject inline examples into matching paths
  for (const path in swaggerSpec.paths) {
    for (const method of Object.keys(swaggerSpec.paths[path])) {
      const tag = getTagFromPath(path).toLowerCase();
      if (
        schemaExamples[tag] &&
        swaggerSpec.paths[path][method].responses &&
        swaggerSpec.paths[path][method].responses["200"]
      ) {
        swaggerSpec.paths[path][method].responses["200"].content = {
          "application/json": {
            schema: {
              $ref: `#/components/schemas/${tag}`
            },
            example: schemaExamples[tag]
          }
        };
      }
    }
  }
  
  // Normalize collection names for tags
  const normalizeTagName = (name) =>
    name.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  
  const solrCollections = schemaFiles.map((file) =>
    normalizeTagName(path.basename(path.dirname(file)))
  );
  
  // Inject dynamic tag groups
  swaggerSpec['x-tagGroups'] = [
    {
      name: 'Solr Collections',
      tags: solrCollections
    },
    {
      name: 'Internal API',
      tags: ['Admin', 'Auth', 'Metrics']
    },
    {
      name: 'Misc',
      tags: ['General']
    }
  ];
  
  // Inject top-level tag metadata
  swaggerSpec.tags = solrCollections.map((tag) => ({
    name: tag,
    description: `Auto-generated tag group for ${tag}`
  }));
  
  swaggerSpec.info['x-logo'] = {
    url: 'https://yourdomain.com/logo.svg',
    altText: 'BV-BRC API'
  };
  
  fs.writeFileSync("./swagger-output.yaml", yaml.stringify(swaggerSpec));
})();

module.exports = swaggerSpec;