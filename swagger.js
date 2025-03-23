const swaggerJSDoc = require("swagger-jsdoc");
const fs = require("fs");
const yaml = require("yaml");

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

const swaggerSpec = swaggerJSDoc(options);

fs.writeFileSync("./swagger-output.yaml", yaml.stringify(swaggerSpec));

module.exports = swaggerSpec;