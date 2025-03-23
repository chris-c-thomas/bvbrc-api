const swaggerJSDoc = require("swagger-jsdoc");
const fs = require("fs");
const yaml = require("yaml");

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
     */
    `.trim();
};

const swaggerSpec = swaggerJSDoc(options);

fs.writeFileSync("./swagger-output.yaml", yaml.stringify(swaggerSpec));

module.exports = swaggerSpec;