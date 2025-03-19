/**
 * OpenAPI Schema Generator
 * 
 * This script extracts field definitions from Solr schema files and generates
 * OpenAPI schema definitions in JSDoc format for use with swagger-jsdoc.
 * 
 * Usage: node generate-openapi-schemas.js
 */

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const readdir = promisify(fs.readdir);
const XML = require('xml2js');
const parseXML = promisify(XML.parseString);

// Path to Solr schema files
const SCHEMA_DIR = path.resolve(__dirname, '../../bvbrc-solr');
// Output file
const OUTPUT_FILE = path.resolve(__dirname, '../models/swagger-schemas.js');

// Type mapping from Solr to OpenAPI
const typeMap = {
  'string': 'string',
  'text_general': 'string',
  'text_custom': 'string',
  'text_ws': 'string',
  'string_ci': 'string',
  'int': 'integer',
  'pint': 'integer',
  'plong': 'integer',
  'long': 'integer',
  'float': 'number',
  'pfloat': 'number',
  'double': 'number',
  'pdouble': 'number',
  'boolean': 'boolean',
  'date': 'string',
  'pdate': 'string'
};

// Function to clean up field descriptions
function cleanDescription(desc) {
  if (!desc) return '';
  return desc.replace(/(\r\n|\n|\r)/gm, ' ').trim();
}

// Function to convert Solr type to OpenAPI type
function mapType(solrType) {
  if (solrType.endsWith('s')) {
    // Handle array types
    const baseType = solrType.slice(0, -1);
    const mappedType = typeMap[baseType] || 'string';
    return {
      type: 'array',
      items: {
        type: mappedType
      }
    };
  }
  
  return {
    type: typeMap[solrType] || 'string'
  };
}

// Function to process a single schema file
async function processSchemaFile(filePath, collectionName) {
  try {
    console.log(`Processing ${collectionName}...`);
    const schemaContent = await readFile(filePath, 'utf8');
    const parsedSchema = await parseXML(schemaContent);
    
    if (!parsedSchema.schema || !parsedSchema.schema.fields || !parsedSchema.schema.fields[0].field) {
      console.log(`  No fields found in ${collectionName}`);
      return null;
    }
    
    const fields = parsedSchema.schema.fields[0].field;
    const properties = {};
    
    fields.forEach(field => {
      const fieldName = field.$.name;
      const fieldType = field.$.type;
      const multiValued = field.$.multiValued === 'true';
      let description = '';
      
      if (field.$ && field.$.description) {
        description = cleanDescription(field.$.description);
      }
      
      // Skip internal fields
      if (fieldName.startsWith('_')) return;
      
      let typeInfo;
      if (multiValued) {
        typeInfo = {
          type: 'array',
          items: {
            type: typeMap[fieldType] || 'string'
          }
        };
      } else {
        typeInfo = mapType(fieldType);
      }
      
      properties[fieldName] = {
        ...typeInfo,
        description: description || `${fieldName} field`
      };
    });
    
    return {
      name: collectionName.charAt(0).toUpperCase() + collectionName.slice(1),
      properties
    };
  } catch (err) {
    console.error(`Error processing ${collectionName}:`, err);
    return null;
  }
}

// Function to generate the output file
function generateOutput(schemas) {
  let output = `/**
 * This file is auto-generated from Solr schema files.
 * Do not edit directly.
 */

/**
 * @openapi
 * components:
 *   schemas:
`;

  schemas.forEach(schema => {
    if (!schema) return;
    
    output += `*     ${schema.name}:\n`;
    output += `*       type: object\n`;
    output += `*       properties:\n`;
    
    Object.entries(schema.properties).forEach(([propName, propInfo]) => {
      output += `*         ${propName}:\n`;
      
      if (propInfo.type === 'array') {
        output += `*           type: array\n`;
        output += `*           items:\n`;
        output += `*             type: ${propInfo.items.type}\n`;
      } else {
        output += `*           type: ${propInfo.type}\n`;
      }
      
      if (propInfo.format) {
        output += `*           format: ${propInfo.format}\n`;
      }
      
      output += `*           description: ${propInfo.description}\n`;
    });
    
    output += `*\n`;
  });
  
  output += ` */\n`;
  
  return output;
}

// Main function
async function main() {
  try {
    console.log('Scanning Solr schema files...');
    const collections = await readdir(SCHEMA_DIR);
    
    const schemaFiles = [];
    
    for (const collection of collections) {
      const collectionPath = path.join(SCHEMA_DIR, collection);
      const stat = await fs.promises.stat(collectionPath);
      
      if (stat.isDirectory()) {
        const schemaFile = path.join(collectionPath, 'managed-schema');
        try {
          await fs.promises.access(schemaFile);
          schemaFiles.push({ path: schemaFile, name: collection });
        } catch (err) {
          // Skip if schema file doesn't exist
        }
      }
    }
    
    const schemas = [];
    
    for (const file of schemaFiles) {
      const schema = await processSchemaFile(file.path, file.name);
      if (schema) {
        schemas.push(schema);
      }
    }
    
    console.log(`Processed ${schemas.length} schema files`);
    const outputContent = generateOutput(schemas);
    
    // Create models directory if it doesn't exist
    const modelsDir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(modelsDir)) {
      fs.mkdirSync(modelsDir, { recursive: true });
    }
    
    await writeFile(OUTPUT_FILE, outputContent);
    console.log(`Output written to ${OUTPUT_FILE}`);
  } catch (err) {
    console.error('Error:', err);
  }
}

main();