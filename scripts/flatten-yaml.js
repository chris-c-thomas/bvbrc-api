const fs = require('fs');
const yaml = require('js-yaml');

const input = fs.readFileSync('swagger-output.yaml', 'utf8');
const doc = yaml.load(input); // expands anchors

// flatten yaml
const flatYaml = yaml.dump(doc, { lineWidth: 120 });
fs.writeFileSync('swagger-output-flat.yaml', flatYaml);

// flatten json
const flatJson = JSON.stringify(doc, null, 2);
fs.writeFileSync('swagger-output-flat.json', flatJson);

console.log('✅ Flattened YAML saved as swagger-output-flat.yaml');
console.log('✅ Flattened JSON saved as swagger-output-flat.json');