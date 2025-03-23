const fs = require('fs');
const path = require('path');
const mergedSpec = require('../swagger');

const outputPath = path.join(__dirname, '..', 'swagger-output.json');

fs.writeFileSync(outputPath, JSON.stringify(mergedSpec, null, 2));
console.log(`✅ Merged Swagger spec exported to ${outputPath}`);