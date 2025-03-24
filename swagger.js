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

  // Inject standard error responses across all paths and methods
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
      description: "Forbidden - The request is understood, but it has been refused or access is not allowed.",
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
            message: "Invalid response from upstream service."
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
  
  // Enrich core dynamic endpoints
  const enrichPath = (pathKey, method, config) => {
    if (!swaggerSpec.paths[pathKey]) swaggerSpec.paths[pathKey] = {};
    swaggerSpec.paths[pathKey][method] = {
      summary: config.summary,
      description: config.description,
      requestBody: config.requestBody,
      responses: {
        "200": {
          description: config.success || "Success",
          content: {
            "application/json": {
              schema: config.responseSchema,
              example: config.example
            }
          }
        }
      }
    };
  };
  
  // Enrich /rpc
  enrichPath("/rpc", "post", {
    summary: "Execute RPC",
    description: "Executes a remote procedure call using the specified method and parameters.",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              method: { type: "string" },
              params: { type: "object" }
            },
            required: ["method"]
          },
          example: {
            method: "user.login",
            params: {
              username: "user1",
              password: "secret"
            }
          }
        }
      }
    },
    responseSchema: {
      type: "object",
      properties: {
        result: { type: "object" },
        error: { type: "string" }
      }
    },
    example: {
      result: {
        userId: "abc123",
        token: "jwt.token.here"
      }
    }
  });
  
  // Enrich /query/multi
  enrichPath("/query/multi", "post", {
    summary: "Execute multiple queries",
    description: "Executes a batch of queries and returns their combined results.",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              queries: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    query: { type: "string" },
                    filters: { type: "object" }
                  }
                }
              }
            }
          },
          example: {
            queries: [
              { query: "genome_id:123456.7", filters: { public: true } },
              { query: "taxon_id:2697049", filters: { genome_status: "Complete" } }
            ]
          }
        }
      }
    },
    responseSchema: {
      type: "object",
      properties: {
        results: {
          type: "array",
          items: { type: "object" }
        }
      }
    },
    example: {
      results: [
        { genome_id: "123456.7", taxon_id: 2697049 },
        { genome_id: "765432.1", taxon_id: 12345 }
      ]
    }
  });
  
  // Enrich /data
  enrichPath("/data", "post", {
    summary: "Submit a data payload",
    description: "Ingests and stores user-supplied data into the system.",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              name: { type: "string" },
              type: { type: "string" },
              payload: { type: "object" }
            },
            required: ["name", "type"]
          },
          example: {
            name: "Example Dataset",
            type: "genome",
            payload: {
              genome_id: "123456.7",
              genome_name: "Test Genome"
            }
          }
        }
      }
    },
    responseSchema: {
      type: "object",
      properties: {
        status: { type: "string" },
        id: { type: "string" }
      }
    },
    example: {
      status: "success",
      id: "abc123"
    }
  });

  fs.writeFileSync("./swagger-output.yaml", yaml.stringify(swaggerSpec));
})();

module.exports = swaggerSpec;