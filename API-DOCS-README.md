# BV-BRC API Documentation

This project implements OpenAPI Specification (OAS) documentation for the BV-BRC API using Swagger UI.

## Setup

The OpenAPI documentation is implemented using the following components:

1. **swagger-jsdoc**: Extracts JSDoc annotations from code to build OpenAPI spec
2. **swagger-ui-express**: Serves Swagger UI to visualize and interact with the API
3. **swagger-cli**: Validates OpenAPI specification

## Accessing the Documentation

When the API server is running, you can access the Swagger UI at:

```
http://localhost:3001/api-docs
```

This interactive documentation allows you to:
- Browse all available API endpoints
- Read detailed information about request parameters and response formats
- Test API calls directly from the browser
- Download the OpenAPI specification in JSON format

## How the Documentation Works

The API documentation is generated from the following sources:

1. Base configuration in `swagger-config.js`
2. JSDoc annotations in route handler files
3. Additional annotations in `swagger-annotations.js`

### Key Files

- `swagger-config.js`: Base OpenAPI configuration and file paths to scan
- `swagger-annotations.js`: Contains schema definitions and some endpoint documentation
- `app.js`: Initializes and serves Swagger UI
- `public/swagger.json`: Generated OpenAPI specification (created by build process)

## Updating the Documentation

### Adding Documentation for a New Endpoint

To document a new endpoint, add JSDoc comments before your route handler function:

```javascript
/**
 * @openapi
 * /my-new-endpoint:
 *   get:
 *     summary: Brief description
 *     description: Detailed description
 *     tags:
 *       - tag_name
 *     parameters:
 *       - name: param_name
 *         in: query
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MySchema'
 */
router.get('/my-new-endpoint', function(req, res) {
  // Your implementation
});
```

### Adding a New Schema

To define a new data model, add it to `swagger-annotations.js`:

```javascript
/**
 * @openapi
 * components:
 *   schemas:
 *     MyNewSchema:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier
 *         name:
 *           type: string
 *           description: Name of the object
 */
```

## Generating and Validating Documentation

Run the following commands to generate and validate the OpenAPI specification:

```bash
# Generate OpenAPI specification
npm run generate-docs

# Validate the specification
npm run validate-docs
```

## Query Types

The BV-BRC API supports three query formats:

1. **REST Style**: Direct resource access by ID 
   - Example: `GET /genome/83332.12`

2. **RQL (Resource Query Language)**: Query using a structured syntax
   - Example: `GET /genome/?eq(genome_id,83332.12)`
   - Content-Type: `application/rqlquery+x-www-form-urlencoded`

3. **Solr Query**: Query using Apache Solr syntax
   - Example: `GET /genome/?q=genome_id:83332.12`
   - Content-Type: `application/solrquery+x-www-form-urlencoded`

## Response Formats

The API supports multiple response formats through content negotiation:

- `application/json`: Standard JSON response
- `application/solr+json`: Full Solr response including facets
- `text/csv`: Comma-separated values
- `text/tsv`: Tab-separated values
- `application/vnd.openxmlformats`: Excel format
- `application/dna+fasta`: DNA sequences in FASTA format
- `application/protein+fasta`: Protein sequences in FASTA format

Specify the desired format using the `Accept` header.