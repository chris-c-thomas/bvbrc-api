const fs = require('fs');
const yaml = require('js-yaml');

const input = fs.readFileSync('swagger-output.yaml', 'utf8');
const doc = yaml.load(input);

// flatten yaml
const flatYAML = yaml.dump(doc, { lineWidth: 120 });
fs.writeFileSync('swagger-output-flat.yaml', flatYAML);

// flatten json
const flatJSON = JSON.stringify(doc, null, 2);
fs.writeFileSync('swagger-output-flat.json', flatJSON);

console.log('✅ Flattened YAML and JSON generated.');
