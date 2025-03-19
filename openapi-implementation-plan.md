# OpenAPI Implementation Plan for BVBRC API

## Overview
This plan outlines the steps to create a comprehensive OpenAPI specification for the BVBRC API system, which consists of:
1. bvbrc-api - REST API interfacing with Solr
2. bvbrc-solr - Solr schemas and configuration
3. bvbrc-js-client - JavaScript client for web applications

## Current State
- The API has basic documentation in Markdown format (`/Docs/API-tutorial.md`)
- There is a documentation endpoint at `/doc` with information about available collections
- No OpenAPI/Swagger definitions exist currently
- The API supports multiple query types: REST, RQL, and Solr
- Various response formats are supported (JSON, CSV, TSV, FASTA, etc.)

## Implementation Steps

### 1. Setup Swagger Infrastructure (1-2 days)
- Install and configure swagger-jsdoc and swagger-ui-express
- Create initial OpenAPI base document with project metadata
- Setup a swagger endpoint at /api-docs

### 2. Document API Authentication (1 day)
- Document the authentication mechanism
- Define security schemes in OpenAPI specification

### 3. Define Core Data Models (2-3 days)
- Extract schemas from Solr schema definitions in bvbrc-solr
- Define reusable components/schemas for all major data types
- Document relationships between models

### 4. Document API Endpoints (3-4 days)
- Document all REST endpoints in each router file
- Add JSDoc comments to route handlers
- Define parameters, request bodies, and responses
- Document query parameters for filtering

### 5. Document Special Query Types (1-2 days)
- Document RQL query syntax and operators
- Document Solr query syntax support
- Create examples for each query type

### 6. Document Response Formats (1-2 days)
- Define all possible response content types
- Create examples for each response format
- Document content negotiation process

### 7. Implement Swagger UI (1 day)
- Configure and customize Swagger UI
- Add examples for common operations
- Ensure documentation is accessible and user-friendly

### 8. Generate Client SDK (1-2 days)
- Use OpenAPI Generator to create an updated JavaScript client
- Compare with existing bvbrc-js-client and align functionality
- Document client usage examples

### 9. Documentation Testing & Validation (1-2 days)
- Validate OpenAPI specification with linters
- Test documentation accuracy with actual API calls
- Fix discrepancies and inconsistencies

### 10. Documentation Maintenance Plan (1 day)
- Setup automated processes to keep documentation in sync with code
- Create guidelines for documenting new endpoints
- Implement version control for API documentation

## Technical Approach

### JSDoc Implementation
We'll use JSDoc comments to document the API routes. Example format:

```javascript
/**
 * @openapi
 * /genome/{genome_id}:
 *   get:
 *     summary: Get a genome by ID
 *     description: Returns detailed information about a specific genome
 *     parameters:
 *       - name: genome_id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         example: 83332.12
 *     responses:
 *       200:
 *         description: Genome details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Genome'
 */
```

### Incorporating Solr Schemas
We'll extract field definitions from the Solr schemas to create accurate data models:

```javascript
/**
 * @openapi
 * components:
 *   schemas:
 *     Genome:
 *       type: object
 *       properties:
 *         genome_id:
 *           type: string
 *           description: Unique identifier for the genome
 *         genome_name:
 *           type: string
 *           description: Scientific name of the genome
 */
```

### Supporting Multiple Query Types
We'll document the multiple ways to query the API:

```javascript
/**
 * @openapi
 * /genome/:
 *   post:
 *     summary: Query genomes
 *     description: Query genomes using RQL or Solr syntax
 *     requestBody:
 *       content:
 *         application/rqlquery+x-www-form-urlencoded:
 *           schema:
 *             type: string
 *           example: "eq(genome_id,83332.12)"
 *         application/solrquery+x-www-form-urlencoded:
 *           schema:
 *             type: string
 *           example: "q=genome_id:83332.12"
 */
```

## Tools & Libraries
1. swagger-jsdoc - For extracting JSDoc comments
2. swagger-ui-express - For rendering Swagger UI
3. OpenAPI Generator - For client SDK generation
4. openapi-types - For TypeScript type definitions

## Timeline
Estimated total time: 2-3 weeks for full implementation