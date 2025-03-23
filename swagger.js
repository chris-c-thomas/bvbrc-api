const swaggerJSDoc = require("swagger-jsdoc");
const fs = require("fs");
const yaml = require("yaml");
const xml2js = require('xml2js');
const glob = require('glob');
const path = require('path');

const getTagFromPath = (routePath) => {
  const segments = routePath.split('/');
  return segments[1] ? segments[1].charAt(0).toUpperCase() + segments[1].slice(1) : 'General';
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
        url: "http://localhost:3001",
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
  const fields = result.schema.field || [];
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

    swaggerSpec.components.schemas[name] = {
      type: 'object',
      properties
    };
  }
};

(async () => {
  await injectSolrSchemas();
  fs.writeFileSync("./swagger-output.yaml", yaml.stringify(swaggerSpec));
})();

module.exports = swaggerSpec;