# BV-BRC API Documentation Enhancement Tasks

## Integrating Solr Schemas into OpenAPI Documentation

After analyzing the Solr schemas in the `bvbrc-solr` directory, we have a comprehensive set of field definitions that should be incorporated into the API documentation. The following tasks need to be completed to enhance the OpenAPI documentation:

### 1. Schema Integration

- [x] Run schema generator (`npm run generate-schemas`) to convert Solr schemas to OpenAPI formats
- [x] Run path template generator (`npm run generate-paths`) to create endpoint templates
- [ ] Review and clean up generated schemas
- [ ] Add proper references to schemas in the OpenAPI specification
- [ ] Add examples for each key data type

### 2. Key Collections to Document First

These collections have the most useful APIs and should be prioritized:

| Collection | Description | Key Fields | Priority |
|------------|-------------|------------|----------|
| genome | Genome metadata | genome_id, genome_name, taxon_id | High |
| genome_feature | Genomic features | feature_id, genome_id, annotation | High |
| pathway | Metabolic pathways | pathway_id, pathway_name | Medium |
| antibiotics | Antibiotic compounds | pubchem_cid, antibiotic_name | Medium |
| epitope | Immune epitopes | epitope_id, epitope_sequence | Medium |
| surveillance | Clinical/epidemiological data | id, collection_date, pathogen_test_result | High |
| taxonomy | Taxonomic information | taxon_id, taxon_name | Medium |

### 3. Endpoint Documentation Tasks

For each key collection:

1. Document the `GET /{collection}/{id}` endpoint
   - Add parameter descriptions
   - Link to appropriate schema
   - Add example response

2. Document the `GET /{collection}/` (query) endpoint
   - Document RQL query syntax and examples
   - Document common query parameters
   - Add examples of query and response

3. Document the `POST /{collection}/` endpoint
   - Document both RQL and Solr query options
   - Document all possible response formats
   - Add security requirements where applicable

### 4. Path Integration Tasks

1. Update `openapi.yaml` with new paths
   - Use the templates generated in `swagger-path-templates.js`
   - Organize endpoints by collection/tag
   - Add meaningful operation IDs

2. Add examples for JBrowse endpoints
   - Document the genome browser integration endpoints
   - Provide examples of track configuration

3. Add documentation for utility endpoints
   - `/distinct/{collection}/{field}`
   - `/summary_by_taxon/{taxon_id}`
   - `/taxon_category/`

### 5. Testing and Validation

1. Generate the OpenAPI JSON from the enhanced documentation
   ```
   npm run generate-docs
   ```

2. Validate the specification
   ```
   npm run validate-docs
   ```

3. Test the documentation in Swagger UI
   ```
   npm start
   ```
   Then visit: http://localhost:3000/api-docs

4. Verify each endpoint against actual API responses

## Implementation Notes

### Schema Organization

- Each Solr collection corresponds to an OpenAPI schema
- Fields should be organized logically with similar fields grouped together
- Required fields should be marked based on Solr uniqueKey definitions

### Query Parameter Documentation

RQL query syntax examples should include:
- Basic equality: `eq(genome_id,83332.12)`
- Range queries: `gt(genome_length,5000000)`
- Complex queries: `and(eq(genome_status,Complete),eq(host_name,Homo sapiens))`

Solr query examples should include:
- Basic field query: `q=genome_id:83332.12`
- Wildcard queries: `q=genome_name:Escherichia*`
- Filter queries: `fq=genome_length:[5000000 TO *]`

### Resource URLs

Each collection should follow this URL pattern:
- Collection list/query: `/{collection}/`
- Single item: `/{collection}/{id}`
- Special operations: `/{collection}/{operation}`

### Authentication Requirements

For protected endpoints, document security requirements:
```yaml
security:
  - BearerAuth: []
```

Include clear documentation on how to obtain authentication tokens.