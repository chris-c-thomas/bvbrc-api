const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');

// Get absolute path to the api directory
const apiDir = path.resolve(__dirname, '..');

// Read the swagger output file
const input = fs.readFileSync(path.join(apiDir, 'swagger-output.yaml'), 'utf8');
const doc = yaml.load(input);

// flatten yaml
const flatYAML = yaml.dump(doc, { lineWidth: 120 });
fs.writeFileSync(path.join(apiDir, 'swagger-output-flat.yaml'), flatYAML);

// flatten json
const flatJSON = JSON.stringify(doc, null, 2);
fs.writeFileSync(path.join(apiDir, 'swagger-output-flat.json'), flatJSON);

console.log('✅ Flattened YAML and JSON generated.');
