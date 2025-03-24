const fs = require("fs");
const path = require("path");
const yaml = require("yaml");
const swaggerJSDoc = require("swagger-jsdoc");
const xml2js = require("xml2js");
const glob = require("glob");

const SOLR_DIR = path.join(__dirname, "..", "bvbrc-solr");
const schemaFiles = glob.sync(`${SOLR_DIR}/*/managed-schema`);
const parser = new xml2js.Parser();

const solrTypeToOpenAPI = {
  string: "string",
  boolean: "boolean",
  int: "integer",
  float: "number",
  double: "number",
  long: "integer",
  tdate: "string",
  text_general: "string"
};

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "BV-BRC API",
      version: "1.0.0",
      description: "API documentation for the Bacterial and Viral Bioinformatics Resource Center (BV-BRC)",
      "x-logo": {
        url: "https://yourdomain.com/logo.svg",
        altText: "BV-BRC API"
      },
      contact: {
        name: "BV-BRC Support",
        url: "https://www.bv-brc.org/contact",
        email: "help@bv-brc.org"
      },
      license: {
        name: "MIT",
        url: "https://opensource.org/licenses/MIT"
      }
    },
    servers: [
      {
        url: "https://alpha.bv-brc.org/api",
        description: "Alpha development server"
      },
      {
        url: "https://www.bv-brc.org/api",
        description: "Production server"
      }
    ],
    externalDocs: {
      description: "BV-BRC Documentation",
      url: "https://www.bv-brc.org/docs"
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
          description: "JWT token for authentication"
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ]
  },
  apis: ["./routes/**/*.js", "./app.js"]
};

const swaggerSpec = swaggerJSDoc(options);

const getTagFromPath = (routePath) => {
  const segments = routePath.split("/");
  // If the path starts with /solr/, use the collection name as the tag
  if (segments[1] === "solr" && segments.length > 2) {
    return `Solr - ${segments[2].replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}`;
  }
  return segments[1]
    ? segments[1].replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    : "General";
};

const parseFields = async (filePath) => {
  const xml = fs.readFileSync(filePath, "utf8");
  const result = await parser.parseStringPromise(xml);
  const fields = result?.schema?.fields?.[0]?.field || [];
  const properties = {};

  fields.forEach((f) => {
    const name = f.$.name;
    const type = solrTypeToOpenAPI[f.$.type] || "string";
    properties[name] = { type };
  });

  return properties;
};

const injectSolrSchemas = async () => {
  swaggerSpec.components = swaggerSpec.components || {};
  swaggerSpec.components.schemas = swaggerSpec.components.schemas || {};

  for (const file of schemaFiles) {
    const collection = path.basename(path.dirname(file));
    const properties = await parseFields(file);
    if (Object.keys(properties).length > 0) {
      swaggerSpec.components.schemas[collection] = {
        type: "object",
        properties
      };
    }
  }
};

(async () => {
  await injectSolrSchemas();

  const generateExample = (properties) => {
    const example = {};
    for (const [key, val] of Object.entries(properties)) {
      switch (val.type) {
        case "string":
          example[key] = `${key}_example`;
          break;
        case "integer":
          example[key] = 42;
          break;
        case "boolean":
          example[key] = true;
          break;
        case "number":
          example[key] = 3.14;
          break;
        default:
          example[key] = `example_${key}`;
      }
    }
    return example;
  };

  const schemaExamples = {};
  for (const [name, schema] of Object.entries(swaggerSpec.components.schemas)) {
    if (schema.properties && Object.keys(schema.properties).length > 0) {
      schemaExamples[name.toLowerCase()] = generateExample(schema.properties);
    }
  }

  for (const [collection, example] of Object.entries(schemaExamples)) {
    const pathKey = `/solr/${collection}`;
    const collectionName = collection.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    const tag = `Solr - ${collectionName}`;
    
    swaggerSpec.paths[pathKey] = {
      get: {
        tags: [tag],
        summary: `Search ${collectionName} collection`,
        description: `Returns records from the ${collectionName} Solr collection.`,
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
          },
          {
            in: "query",
            name: "sort",
            schema: { type: "string" },
            required: false,
            description: "Sort field(s) and direction (e.g., genome_id asc)"
          },
          {
            in: "query",
            name: "fl",
            schema: { type: "string" },
            required: false,
            description: "Fields to return (comma-separated)"
          },
          {
            in: "query",
            name: "facet",
            schema: { type: "boolean" },
            required: false,
            description: "Enable faceting"
          }
        ],
        responses: {
          "200": {
            description: "Successful response",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    response: {
                      type: "object",
                      properties: {
                        numFound: { type: "integer" },
                        start: { type: "integer" },
                        docs: {
                          type: "array",
                          items: { $ref: `#/components/schemas/${collection}` }
                        }
                      }
                    }
                  }
                },
                example: {
                  response: {
                    numFound: 10,
                    start: 0,
                    docs: [example]
                  }
                }
              }
            }
          }
        }
      }
    };
  }

  const standardErrors = {
    "400": {
      description: "Bad Request - The request could not be understood or was missing required parameters.",
      content: {
        "application/json": {
          example: {
            error: "Bad Request",
            message: "The provided input is invalid or incomplete."
          }
        }
      }
    },
    "401": {
      description: "Unauthorized - Authentication is required and has failed or has not yet been provided.",
      content: {
        "application/json": {
          example: {
            error: "Unauthorized",
            message: "Authentication token is missing or invalid."
          }
        }
      }
    },
    "403": {
      description: "Forbidden - Access is denied.",
      content: {
        "application/json": {
          example: {
            error: "Forbidden",
            message: "You do not have permission to access this resource."
          }
        }
      }
    },
    "404": {
      description: "Not Found - The resource could not be found.",
      content: {
        "application/json": {
          example: {
            error: "Not Found",
            message: "The requested resource was not found."
          }
        }
      }
    },
    "500": {
      description: "Internal Server Error - An unexpected condition was encountered.",
      content: {
        "application/json": {
          example: {
            error: "Internal Server Error",
            message: "Something went wrong on the server."
          }
        }
      }
    },
    "502": {
      description: "Bad Gateway - The server received an invalid response from an upstream server.",
      content: {
        "application/json": {
          example: {
            error: "Bad Gateway",
            message: "Upstream service failed to respond properly."
          }
        }
      }
    },
    "503": {
      description: "Service Unavailable - The server is currently unable to handle the request due to temporary overload or maintenance.",
      content: {
        "application/json": {
          example: {
            error: "Service Unavailable",
            message: "Server is temporarily unavailable. Please try again later."
          }
        }
      }
    }
  };

  for (const path in swaggerSpec.paths) {
    for (const method of Object.keys(swaggerSpec.paths[path])) {
      const op = swaggerSpec.paths[path][method];
      op.responses = op.responses || {};
      for (const code in standardErrors) {
        if (!op.responses[code]) {
          op.responses[code] = standardErrors[code];
        }
      }
    }
  }


  // Tag aggregation and deduplication
  const extraTags = ["Admin", "Auth", "Metrics", "General"];
  
  // Create tags for each Solr collection
  const solrTags = Object.keys(swaggerSpec.components.schemas || {}).map(collection => 
    `Solr - ${collection.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}`
  );
  
  // Get non-solr route tags
  const routeTags = [];
  for (const path in swaggerSpec.paths) {
    if (!path.startsWith('/solr/')) {
      for (const method in swaggerSpec.paths[path]) {
        const operation = swaggerSpec.paths[path][method];
        if (operation.tags) {
          routeTags.push(...operation.tags);
        }
      }
    }
  }
  
  const uniqueRouteTags = Array.from(new Set(routeTags));
  const allTagNames = Array.from(new Set([...solrTags, ...uniqueRouteTags, ...extraTags]));

  // Top-level tag objects
  swaggerSpec.tags = allTagNames.map((tag) => ({
    name: tag,
    description: tag.startsWith('Solr - ') 
      ? `Solr collection for ${tag.substring(7)}`
      : `API endpoints for ${tag}`
  }));

  // Group tags for sidebar grouping
  swaggerSpec["x-tagGroups"] = [
    {
      name: "Solr Collections",
      tags: solrTags
    },
    {
      name: "API Endpoints",
      tags: uniqueRouteTags.filter(tag => !extraTags.includes(tag))
    },
    {
      name: "Internal API",
      tags: ["Admin", "Auth", "Metrics"]
    },
    {
      name: "Misc",
      tags: ["General"]
    }
  ];
  fs.writeFileSync("./swagger-output.yaml", yaml.stringify(swaggerSpec));
  fs.writeFileSync("./swagger-output.json", JSON.stringify(swaggerSpec, null, 2));
})();