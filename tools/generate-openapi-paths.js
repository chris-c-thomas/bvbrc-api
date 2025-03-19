/**
 * OpenAPI Path Generator
 * 
 * This script analyzes route handlers in Express files and generates stub
 * OpenAPI path definitions that can be filled in with detailed documentation.
 * 
 * Usage: node generate-openapi-paths.js
 */

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const readdir = promisify(fs.readdir);

// Path to route files
const ROUTES_DIR = path.resolve(__dirname, '../routes');
// Output file
const OUTPUT_FILE = path.resolve(__dirname, '../swagger-path-templates.js');

// Helper function to extract route patterns from Express router definitions
function extractRoutes(content) {
  const routes = [];
  
  // Match router.[method] patterns like router.get, router.post, etc.
  const routerRegex = /router\.(get|post|put|delete|patch)\(['"]([^'"]+)['"]/g;
  let match;
  
  while ((match = routerRegex.exec(content)) !== null) {
    const method = match[1];
    const path = match[2];
    
    // Skip internal routes and routes with regex
    if (path.includes(':') && !path.includes('/:dataType') && !path.includes('/:collection')) {
      // This is a parameterized route - keep it
      routes.push({ method, path });
    } else if (!path.includes('*') && !path.includes('(') && !path.includes('.') && path !== '/') {
      // This is a static route - keep it
      routes.push({ method, path });
    }
  }
  
  // Also match app.[method] patterns
  const appRegex = /app\.(get|post|put|delete|patch)\(['"]([^'"]+)['"]/g;
  while ((match = appRegex.exec(content)) !== null) {
    const method = match[1];
    const path = match[2];
    
    // Skip internal routes
    if (!path.includes('*') && !path.includes('(') && !path.includes('.') && path !== '/') {
      routes.push({ method, path });
    }
  }
  
  return routes;
}

// Generate OpenAPI path stub for a route
function generatePathStub(route) {
  const { method, path } = route;
  
  // Convert Express path params to OpenAPI path params
  const openApiPath = path.replace(/:([^/]+)/g, '{$1}');
  
  // Extract parameter names
  const paramMatches = path.match(/:([^/]+)/g);
  const params = paramMatches ? paramMatches.map(p => p.slice(1)) : [];
  
  const endpoint = `/**
 * @openapi
 * ${openApiPath}:
 *   ${method}:
 *     summary: TODO - Add a summary
 *     description: TODO - Add a description
 *     tags:
 *       - ${openApiPath.split('/')[1] || 'default'}
${params.map(param => `
 *     parameters:
 *       - name: ${param}
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: TODO - Describe the ${param} parameter`).join('')}
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               # TODO: Define response schema or use $ref to a defined schema
 */
`;

  return endpoint;
}

// Main function
async function main() {
  try {
    console.log('Analyzing route files...');
    const routeFiles = await readdir(ROUTES_DIR);
    
    let allRoutes = [];
    
    for (const file of routeFiles) {
      if (!file.endsWith('.js')) continue;
      
      const filePath = path.join(ROUTES_DIR, file);
      console.log(`Processing ${file}...`);
      
      const content = await readFile(filePath, 'utf8');
      const routes = extractRoutes(content);
      
      console.log(`  Found ${routes.length} routes`);
      allRoutes = allRoutes.concat(routes);
    }
    
    console.log(`Found ${allRoutes.length} total routes`);
    
    // Generate output
    let output = `/**
 * OpenAPI Path Templates
 * 
 * This file contains template OpenAPI specifications for API endpoints.
 * Copy and paste these templates to the appropriate files and fill in the details.
 */

`;
    
    allRoutes.forEach(route => {
      output += generatePathStub(route);
      output += '\n';
    });
    
    await writeFile(OUTPUT_FILE, output);
    console.log(`Templates written to ${OUTPUT_FILE}`);
  } catch (err) {
    console.error('Error:', err);
  }
}

main();