const fs = require('fs');
const path = require('path');
const xml2js = require('xml2js');
const glob = require('glob');
const yaml = require('js-yaml');

const SOLR_DIR = path.join(__dirname, '..', 'bvbrc-solr');
const OUTPUT_FILE = path.join(__dirname, 'openapi-solr.yaml');

const parser = new xml2js.Parser();

function generatePathObject(collectionName) {
  return {
    [`/solr/${collectionName}`]: {
      get: {
        summary: `Search the ${collectionName} Solr core`,
        parameters: [
          {
            in: 'query',
            name: 'q',
            schema: { type: 'string' },
            description: 'Solr query string (e.g., genome_id:12345)',
            required: true
          },
          {
            in: 'query',
            name: 'fq',
            schema: { type: 'string' },
            description: 'Filter query'
          },
          {
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            description: 'Sort query (e.g., genome_name asc)'
          },
          {
            in: 'query',
            name: 'rows',
            schema: { type: 'integer', default: 25 },
            description: 'Number of rows to return'
          },
          {
            in: 'query',
            name: 'start',
            schema: { type: 'integer', default: 0 },
            description: 'Start offset'
          }
        ],
        responses: {
          200: {
            description: 'Query results'
          }
        }
      }
    }
  };
}

async function parseSchemaXml(file) {
  const xmlContent = fs.readFileSync(file, 'utf8');
  const result = await parser.parseStringPromise(xmlContent);
  return result;
}

async function generateOpenApiYaml() {
  const openapi = {
    openapi: '3.0.0',
    info: {
      title: 'BV-BRC Solr API',
      version: '1.0.0',
      description: 'Auto-generated documentation from Solr schemas'
    },
    paths: {}
  };

  const schemaFiles = glob.sync(`${SOLR_DIR}/*/managed-schema`);
  console.log('Found schema files:', schemaFiles.map(f => path.basename(path.dirname(f))));

  for (const file of schemaFiles) {
    const parts = file.split(path.sep);
    const collectionName = path.basename(path.dirname(file));

    try {
      await parseSchemaXml(file); // Ensures it's valid XML
      const pathObj = generatePathObject(collectionName);
      Object.assign(openapi.paths, pathObj);
      console.log(`✓ Processed: ${collectionName}`);
    } catch (err) {
      console.error(`⚠️ Failed to parse ${collectionName}:`, err.message);
    }
  }

  const yamlStr = yaml.dump(openapi, { lineWidth: 120 });
  fs.writeFileSync(OUTPUT_FILE, yamlStr, 'utf8');
  console.log(`✅ OpenAPI spec written to ${OUTPUT_FILE}`);
}

generateOpenApiYaml();