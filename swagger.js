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
      description: "API documentation for BV-BRC",
      "x-logo": {
        url: "https://yourdomain.com/logo.svg",
        altText: "BV-BRC API"
      }
    },
    servers: [
      {
        url: "https://alpha.bv-brc.org/api"
      }
    ]
  },
  apis: ["./routes/**/*.js", "./app.js"]
};

const swaggerSpec = swaggerJSDoc(options);

// Util to normalize tag names
const getTagFromPath = (routePath) => {
  const segments = routePath.split("/");
  return segments[1]
    ? segments[1].replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    : "General";
};

// Parse a Solr schema.xml or managed-schema into OpenAPI properties
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

// Inject Solr schemas into components.schemas
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

  // Generate example objects from schemas
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

  // Inject /solr/{collection} paths
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

  // Inject default error responses for all paths/methods
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
      description: "Internal Server Error - Something went wrong on the server.",
      content: {
        "application/json": {
          example: {
            error: "Internal Server Error",
            message: "An unexpected error occurred."
          }
        }
      }
    },
    "502": {
      description: "Bad Gateway - Invalid response from upstream.",
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
      description: "Service Unavailable - Try again later.",
      content: {
        "application/json": {
          example: {
            error: "Service Unavailable",
            message: "Server is overloaded or under maintenance."
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

  // Inject tag metadata
  const allTags = Object.keys(schemaExamples).map(getTagFromPath);
  swaggerSpec.tags = allTags.map((tag) => ({
    name: tag,
    description: `Auto-generated tag group for ${tag}`
  }));

  swaggerSpec["x-tagGroups"] = [
    {
      name: "Solr Collections",
      tags: allTags
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
})();