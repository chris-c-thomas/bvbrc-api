// generate-jsdoc-bootstrap.js
const recast = require('recast');
const glob = require('glob');
const fs = require('fs-extra');
const path = require('path');

// Using __dirname (the directory of the current script) and navigating up one level
// to reach the project root, then into the routes directory.
// This ensures the script works correctly regardless of the current working directory.
const ROUTES_DIR = path.join(__dirname, '..', 'routes');

const getHttpMethodFromLine = line => {
  const match = line.match(/\.(get|post|put|delete|patch|all)\s*\(\s*['"`]/i);
  return match ? match[1].toLowerCase() : null;
};

const getPathFromLine = line => {
  const match = line.match(/\.(get|post|put|delete|patch|all)\s*\(\s*['"`]([^'"`]+)['"`]/i);
  return match ? match[2] : null;
};

const generateJsDoc = (method, routePath) => {
  return `
/**
 * @swagger
 * ${routePath.startsWith('/') ? '' : '/'}${routePath}:
 *   ${method}:
 *     summary: Auto-generated summary for ${method.toUpperCase()} ${routePath}
 *     responses:
 *       200:
 *         description: Successful response
 */
`.trim();
};

const processRouteFile = async file => {
  try {
    console.log(`Processing file: ${file}`);
    
    let code;
    try {
      // Using synchronous file reading for better performance and reliability
      code = fs.readFileSync(file, 'utf8');
      console.log(`Successfully read file: ${file}`);
    } catch (err) {
      console.error(`Error reading file ${file}:`, err);
      return;
    }
    
    if (!code || typeof code !== 'string') {
      console.error(`Invalid file content for ${file}. Content is ${code === null ? 'null' : typeof code}`);
      return;
    }
    
    const lines = code.split('\n');
    console.log(`File ${file} has ${lines.length} lines`);
    const newLines = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const method = getHttpMethodFromLine(line);
    const routePath = getPathFromLine(line);

    if (method && routePath) {
      const doc = generateJsDoc(method, routePath);
      newLines.push(doc);
    }

    newLines.push(line);
  }

    const newCode = newLines.join('\n');
    
    try {
      await fs.writeFile(file, newCode, 'utf8');
      console.log(`Updated: ${file}`);
    } catch (err) {
      console.error(`Error writing to file ${file}:`, err);
    }
  } catch (err) {
    console.error(`Unexpected error processing file ${file}:`, err);
  }
};

const run = async () => {
  try {
    console.log(`Looking for route files in: ${ROUTES_DIR}`);
    const files = glob.sync(`${ROUTES_DIR}/**/*.js`);
    
    if (!files || files.length === 0) {
      console.error(`No JS files found in ${ROUTES_DIR}. Please check the directory path.`);
      return;
    }
    
    console.log(`Found ${files.length} route files to process`);
    
    for (const file of files) {
      await processRouteFile(file);
    }
    
    console.log('JSDoc blocks added!');
  } catch (err) {
    console.error('Error running the script:', err);
  }
};

run();