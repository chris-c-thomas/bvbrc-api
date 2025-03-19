# BV-BRC API Documentation

This project implements OpenAPI Specification (OAS) documentation for the Bacterial and Viral Bioinformatics Resource Center (BV-BRC) API using Swagger UI.

## Overview

The BV-BRC API provides access to various bioinformatics data including:
- Genome data
- Genomic features (genes, proteins, etc.)
- Pathways
- Protein families
- Specialty genes
- Taxonomy
- Protein structures
- Subsystems
- Antibiotics data
- Transcriptomics data

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

## API Base URLs

- Production API: `https://www.bv-brc.org/api`
- Development API: `https://www.bv-brc.org/api/dev`

## Authentication

Some API endpoints require authentication, especially for accessing private data or performing operations that modify data. Authentication is done via JWT tokens:

```
POST /authenticate
Content-Type: application/x-www-form-urlencoded

username=user@example.com&password=your_password
```

Include the token in the Authorization header:

```
GET /genome/?eq(owner,user@example.com)
Authorization: Bearer un=user@example.com|tokenid=1c04a34e-d351-4a79-b24c-123456789abc
```

## Query Types

The BV-BRC API supports three query formats:

### 1. REST Style

Direct resource access by ID:
```
GET /genome/83332.12
```

### 2. RQL (Resource Query Language)

Query using a structured syntax:
```
GET /genome/?eq(genome_id,83332.12)
Content-Type: application/rqlquery+x-www-form-urlencoded
```

#### RQL Operators

- **Comparison Operators**:
  - `eq(field,value)` - Equal to
  - `ne(field,value)` - Not equal to
  - `gt(field,value)` - Greater than
  - `ge(field,value)` - Greater than or equal to
  - `lt(field,value)` - Less than
  - `le(field,value)` - Less than or equal to
  - `in(field,(value1,value2,...))` - In a list of values
  - `out(field,(value1,value2,...))` - Not in a list of values

- **Logical Operators**:
  - `and(condition1,condition2,...)` - All conditions must be true
  - `or(condition1,condition2,...)` - Any condition must be true
  - `not(condition)` - Condition must be false

- **Additional Operators**:
  - `contains(field,value)` - Field contains the value (substring match)
  - `keyword(value)` - Performs a keyword search across all fields
  - `sort(+field,-field)` - Sort by fields, + for ascending, - for descending
  - `limit(count,start)` - Limit the number of results
  - `select(field1,field2,...)` - Select only specific fields

#### RQL Examples

```
# Get genomes with a specific name pattern
/genome/?contains(genome_name,Escherichia coli)

# Get features of a specific type from a genome
/genome_feature/?and(eq(genome_id,83332.12),eq(feature_type,CDS))

# Get genomes with multiple conditions
/genome/?and(eq(genome_status,Complete),gt(gc_content,50))

# Get results with sorting and limiting
/genome/?eq(genus,Escherichia)&sort(+genome_name)&limit(10)

# Get only specific fields
/genome/?eq(genome_id,83332.12)&select(genome_id,genome_name,taxon_id)
```

### 3. Solr Query

Query using Apache Solr syntax:
```
GET /genome/?q=genome_id:83332.12
Content-Type: application/solrquery+x-www-form-urlencoded
```

or

```
POST /genome/
Content-Type: application/solrquery+x-www-form-urlencoded

q=genome_id:83332.12&fq=genome_status:Complete&sort=genome_name asc&rows=10
```

Solr query parameters:
- `q` - Main query
- `fq` - Filter query
- `sort` - Sort order
- `rows` - Number of results
- `start` - Starting offset
- `fl` - Fields to return
- `facet` - Enable faceting
- `facet.field` - Fields to facet on

## Response Formats

The API supports multiple response formats through content negotiation:

- `application/json`: Standard JSON response
- `application/solr+json`: Full Solr response including facets
- `text/csv`: Comma-separated values
- `text/tsv`: Tab-separated values
- `application/vnd.openxmlformats`: Excel format
- `application/dna+fasta`: DNA sequences in FASTA format
- `application/protein+fasta`: Protein sequences in FASTA format

Specify the desired format using the `Accept` header:

```
GET /genome_feature/?eq(genome_id,83332.12)&eq(feature_type,CDS)
Accept: application/protein+fasta
```

## Technical Documentation

### How the Documentation Works

The API documentation is generated from the following sources:

1. Base configuration in `swagger-config.js`
2. JSDoc annotations in route handler files
3. Additional annotations in `swagger-annotations.js`
4. Generated schemas from Solr schema definitions

### Key Files

- `swagger-config.js`: Base OpenAPI configuration and file paths to scan
- `swagger-annotations.js`: Contains schema definitions and some endpoint documentation
- `models/swagger-schemas.js`: Generated schemas from Solr definitions
- `app.js`: Initializes and serves Swagger UI
- `public/swagger.json`: Generated OpenAPI specification (created by build process)
- `tools/generate-openapi-schemas.js`: Tool to extract Solr schemas
- `tools/generate-openapi-paths.js`: Tool to generate path templates 

### Updating the Documentation

#### Adding Documentation for a New Endpoint

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

#### Adding a New Schema

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

### Generating and Validating Documentation

Run the following commands to generate and validate the OpenAPI specification:

```bash
# Generate OpenAPI specification
npm run generate-docs

# Validate the specification
npm run validate-docs
```

## Rate Limiting

The API implements rate limiting to ensure fair usage. Current limits:
- Authenticated users: 100 requests per minute
- Anonymous users: 30 requests per minute

## Error Handling

The API returns standard HTTP status codes and error messages:

```json
{
  "status": 404,
  "message": "Not Found"
}
```

Common error codes:
- 400: Bad Request (invalid query)
- 401: Unauthorized (authentication required)
- 403: Forbidden (insufficient permissions)
- 404: Not Found (resource doesn't exist)
- 429: Too Many Requests (rate limit exceeded)
- 500: Internal Server Error

## Additional Resources

- [API Tutorial](./Docs/API-tutorial.md)
- [GitHub Repository](https://github.com/BV-BRC/bvbrc-api)