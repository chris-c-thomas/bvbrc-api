# OpenAPI Implementation Plan for BVBRC API

## Overview
This plan outlines the steps to create a comprehensive OpenAPI specification for the BVBRC API system, which consists of:
1. bvbrc-api - REST API interfacing with Solr
2. bvbrc-solr - Solr schemas and configuration
3. bvbrc-js-client - JavaScript client for web applications

## Current State
- Initial OpenAPI specification created in openapi.yaml
- Basic API endpoints documented for genome and genome_feature
- Schema definitions available in models/swagger-schemas.js
- Swagger configuration and annotations set up

## Implementation Steps (Remaining)

### 1. Expand API Endpoints Documentation
- [ ] Document all data types in the API (identified in routes/dataType.js)
- [ ] Add more detailed parameter descriptions and examples
- [ ] Expand response schema documentation for all endpoints
- [ ] Document all special routes in dataRouter.js
- [ ] Document authentication flow completely

### 2. Enhance Schema Documentation
- [ ] Integrate all Solr schema definitions into the OpenAPI specification
- [ ] Document relationships between models
- [ ] Add extended descriptions and examples for key data types
- [ ] Document enum values for relevant fields

### 3. Document Query Parameters
- [ ] Document RQL syntax and operators with examples
- [ ] Document Solr query syntax with examples
- [ ] Create comprehensive examples for filtering and sorting
- [ ] Document special query parameters (facets, limit, select)

### 4. Document Response Formats
- [ ] Document all response formats (JSON, CSV, TSV, FASTA, etc.)
- [ ] Add examples for each response format
- [ ] Document how to request specific response formats

### 5. Create Usage Examples
- [ ] Create examples for common operations
- [ ] Document use cases for different data types
- [ ] Create tutorials for complex operations

### 6. Generate JavaScript Client SDK
- [ ] Generate TypeScript definitions from OpenAPI spec
- [ ] Generate client code for the JavaScript client
- [ ] Document client usage examples

### 7. Implement Testing & Validation
- [ ] Validate the OpenAPI specification with tools
- [ ] Create test scripts to validate API responses match the spec
- [ ] Fix discrepancies and inconsistencies

## Technical Implementation

### 1. OpenAPI Path Templates
For each data type identified in routes/dataType.js, create path templates:

```yaml
/data_type/{id}:
  get:
    summary: Get a data_type by ID
    description: Returns detailed information about a specific data_type
    tags:
      - data_type
    parameters:
      - name: id
        in: path
        required: true
        schema:
          type: string
        example: "example_id"
    responses:
      '200':
        description: Data type details
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/DataType'
      '404':
        description: Not found
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Error'

/data_type/:
  get:
    summary: Query data_type using RQL
    description: Query data_type using Resource Query Language (RQL)
    tags:
      - data_type
    parameters:
      - name: rql
        in: query
        required: true
        schema:
          type: string
        example: "eq(id,example_id)"
        description: RQL query string
    responses:
      '200':
        description: Query results
        content:
          application/json:
            schema:
              type: array
              items:
                $ref: '#/components/schemas/DataType'
      '400':
        description: Invalid query
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Error'
  
  post:
    summary: Query data_type
    description: Query data_type using RQL or Solr syntax
    tags:
      - data_type
    requestBody:
      content:
        application/rqlquery+x-www-form-urlencoded:
          schema:
            type: string
          example: "eq(id,example_id)"
        application/solrquery+x-www-form-urlencoded:
          schema:
            type: string
          example: "q=id:example_id"
    responses:
      '200':
        description: Query results
        content:
          application/json:
            schema:
              type: array
              items:
                $ref: '#/components/schemas/DataType'
          application/solr+json:
            schema:
              type: object
          text/csv:
            schema:
              type: string
          text/tsv:
            schema:
              type: string
      '400':
        description: Invalid query
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Error'
```

### 2. RQL Query Documentation
Create a dedicated section for RQL query syntax:

```yaml
components:
  schemas:
    RQLQuery:
      type: string
      description: |
        Resource Query Language (RQL) is a query language designed for use in REST APIs.
        
        Basic operators:
        - eq(field,value) - Equal to
        - ne(field,value) - Not equal to
        - gt(field,value) - Greater than
        - ge(field,value) - Greater than or equal to
        - lt(field,value) - Less than
        - le(field,value) - Less than or equal to
        - in(field,(value1,value2,...)) - In a list of values
        - out(field,(value1,value2,...)) - Not in a list of values
        
        Logical operators:
        - and(condition1,condition2,...) - All conditions must be true
        - or(condition1,condition2,...) - Any condition must be true
        - not(condition) - Condition must be false
        
        Examples:
        - eq(genome_id,83332.12)
        - and(eq(feature_type,CDS),eq(annotation,PATRIC))
        - or(eq(genome_id,83332.12),eq(genome_id,83332.13))
```

### 3. Timeline
Estimated completion time: 2 weeks