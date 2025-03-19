/**
 * Example OpenAPI path documentation for key endpoints
 * Generated from route analysis and enhanced with descriptions
 */

/**
 * @openapi
 * /antibiotics/{pubchem_cid}:
 *   get:
 *     summary: Get antibiotic details by PubChem ID
 *     description: Returns detailed information about a specific antibiotic compound
 *     tags:
 *       - antibiotics
 *     parameters:
 *       - name: pubchem_cid
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: PubChem Compound ID
 *         example: "2764"
 *     responses:
 *       '200':
 *         description: Antibiotic details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Antibiotics'
 *       '404':
 *         description: Antibiotic not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

/**
 * @openapi
 * /antibiotics/:
 *   get:
 *     summary: Query antibiotics
 *     description: |
 *       Query antibiotic compounds using Resource Query Language (RQL).
 *       
 *       Examples:
 *       - `/antibiotics/?eq(pubchem_cid,2764)` - Get antibiotic with PubChem ID 2764
 *       - `/antibiotics/?in(pharmacological_classes,(Tetracyclines,Macrolides))` - Get all tetracycline and macrolide antibiotics
 *       - `/antibiotics/?like(antibiotic_name,*mycin*)` - Get antibiotics with names containing "mycin"
 *     tags:
 *       - antibiotics
 *     parameters:
 *       - name: rql
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *         example: "eq(pubchem_cid,2764)"
 *         description: RQL query string
 *       - name: limit
 *         in: query
 *         required: false
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 25000
 *         description: Maximum number of records to return
 *       - name: sort
 *         in: query
 *         required: false
 *         schema:
 *           type: string
 *         example: "+antibiotic_name"
 *         description: Field to sort by, with + for ascending or - for descending
 *       - name: select
 *         in: query
 *         required: false
 *         schema:
 *           type: string
 *         example: "pubchem_cid,antibiotic_name,mechanism_of_action"
 *         description: Comma-separated list of fields to include in the response
 *     responses:
 *       '200':
 *         description: Query results
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Antibiotics'
 *           text/csv:
 *             schema:
 *               type: string
 *           text/tsv:
 *             schema:
 *               type: string
 *       '400':
 *         description: Invalid query
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

/**
 * @openapi
 * /surveillance/{id}:
 *   get:
 *     summary: Get surveillance record by ID
 *     description: Returns detailed information about a specific surveillance record
 *     tags:
 *       - surveillance
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: Unique surveillance record ID (UUID)
 *         example: "550e8400-e29b-41d4-a716-446655440000"
 *     responses:
 *       '200':
 *         description: Surveillance record details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Surveillance'
 *       '404':
 *         description: Record not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

/**
 * @openapi
 * /surveillance/:
 *   get:
 *     summary: Query surveillance records
 *     description: |
 *       Query epidemiological surveillance records using Resource Query Language (RQL).
 *       
 *       Examples:
 *       - `/surveillance/?eq(collection_country,United States)` - Get all US surveillance records
 *       - `/surveillance/?gt(collection_date,2021-01-01)` - Get records collected after January 1, 2021
 *       - `/surveillance/?and(eq(host_species,Homo sapiens),eq(pathogen_test_result,Positive))` - Get all positive human cases
 *     tags:
 *       - surveillance
 *     parameters:
 *       - name: rql
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *         example: "eq(collection_country,United States)"
 *         description: RQL query string
 *       - name: limit
 *         in: query
 *         required: false
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 25000
 *         description: Maximum number of records to return
 *     responses:
 *       '200':
 *         description: Query results
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Surveillance'
 *           text/csv:
 *             schema:
 *               type: string
 *           text/tsv:
 *             schema:
 *               type: string
 *       '400':
 *         description: Invalid query
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *     security:
 *       - BearerAuth: []
 */

/**
 * @openapi
 * /epitope/:
 *   post:
 *     summary: Advanced epitope query
 *     description: |
 *       Query epitopes using RQL or Solr syntax.
 *       
 *       This endpoint supports both RQL and Solr query formats through different content types.
 *       
 *       For RQL queries, use content type `application/rqlquery+x-www-form-urlencoded`.
 *       For Solr queries, use content type `application/solrquery+x-www-form-urlencoded`.
 *       
 *       Examples:
 *       - RQL: `eq(epitope_type,B-cell)`
 *       - Solr: `q=epitope_type:B-cell AND host_name:"Homo sapiens"`
 *     tags:
 *       - epitope
 *     requestBody:
 *       content:
 *         application/rqlquery+x-www-form-urlencoded:
 *           schema:
 *             type: string
 *           example: "eq(epitope_type,B-cell)"
 *         application/solrquery+x-www-form-urlencoded:
 *           schema:
 *             type: string
 *           example: "q=epitope_type:B-cell"
 *       required: true
 *     responses:
 *       '200':
 *         description: Query results
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Epitope'
 *           application/solr+json:
 *             schema:
 *               type: object
 *               properties:
 *                 responseHeader:
 *                   type: object
 *                 response:
 *                   type: object
 *                 facet_counts:
 *                   type: object
 *           text/csv:
 *             schema:
 *               type: string
 *           text/tsv:
 *             schema:
 *               type: string
 *       '400':
 *         description: Invalid query
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

/**
 * @openapi
 * /distinct/{collection}/{field}:
 *   get:
 *     summary: Get distinct field values
 *     description: |
 *       Returns distinct values for a specific field in a collection.
 *       Only specific collection/field combinations are allowed.
 *       
 *       This endpoint is useful for generating dropdown lists, facets, or filters in user interfaces.
 *     tags:
 *       - utilities
 *     parameters:
 *       - name: collection
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *           enum: 
 *             - taxonomy
 *             - epitope
 *             - genome
 *             - genome_feature
 *             - sp_gene
 *             - pathway_ref
 *             - subsystem_ref
 *             - antibiotics
 *             - surveillance
 *         description: The collection to query
 *         example: "genome"
 *       - name: field
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: The field to get distinct values for
 *         example: "host_name"
 *       - name: q
 *         in: query
 *         required: false
 *         schema:
 *           type: string
 *         description: Solr query to filter results
 *         example: "*:*"
 *     responses:
 *       '200':
 *         description: Distinct values
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               additionalProperties:
 *                 type: integer
 *             example:
 *               "Homo sapiens": 1247
 *               "Mus musculus": 356
 *               "Sus scrofa": 128
 *       '405':
 *         description: Collection/field combination not allowed
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */