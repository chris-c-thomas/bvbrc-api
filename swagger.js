const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "BV-BRC API",
    description: "API documentation for BV-BRC",
    version: "1.0.0",
  },
  host: "localhost:3001",
  schemes: ["http"],
  basePath: "/",
  consumes: ["application/json"],
  produces: ["application/json"],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./app.js"]; // Scans app.js and its imported routes

swaggerAutogen(outputFile, endpointsFiles).then(() => {
  console.log("Swagger documentation generated!");
});