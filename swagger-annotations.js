/**
 * This file contains Swagger/OpenAPI annotations for the API.
 * These annotations are used to generate the OpenAPI specification.
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Error:
 *       type: object
 *       properties:
 *         status:
 *           type: integer
 *           format: int32
 *           description: HTTP status code
 *         message:
 *           type: string
 *           description: Error message
 *
 *     Genome:
 *       type: object
 *       properties:
 *         genome_id:
 *           type: string
 *           description: Unique identifier for the genome
 *         genome_name:
 *           type: string
 *           description: Scientific name of the genome
 *         taxon_id:
 *           type: integer
 *           description: Taxonomy identifier
 *         genome_status:
 *           type: string
 *           description: Status of the genome (e.g., complete, WGS, etc.)
 *         assembly_accession:
 *           type: string
 *           description: Assembly accession number
 *         contigs:
 *           type: integer
 *           description: Number of contigs in the genome
 *         plasmids:
 *           type: integer
 *           description: Number of plasmids in the genome
 *         completion_date:
 *           type: string
 *           format: date
 *           description: Date when the genome was completed
 *         publication:
 *           type: string
 *           description: Publication PubMed IDs, comma-separated
 *
 *     GenomeFeature:
 *       type: object
 *       properties:
 *         feature_id:
 *           type: string
 *           description: Unique identifier for the feature
 *         genome_id:
 *           type: string
 *           description: Genome identifier this feature belongs to
 *         annotation:
 *           type: string
 *           description: Annotation source (e.g., PATRIC, RefSeq)
 *         feature_type:
 *           type: string
 *           description: Type of feature (e.g., CDS, rRNA, tRNA)
 *         start:
 *           type: integer
 *           description: Start position in the sequence
 *         end:
 *           type: integer
 *           description: End position in the sequence
 *         strand:
 *           type: string
 *           enum: ["+", "-"]
 *           description: Strand orientation
 *         gene:
 *           type: string
 *           description: Gene symbol
 *         product:
 *           type: string
 *           description: Product name or description
 *         aa_sequence:
 *           type: string
 *           description: Amino acid sequence
 *         na_sequence:
 *           type: string
 *           description: Nucleotide sequence
 */

/**
 * @openapi
 * /authenticate:
 *   post:
 *     summary: Authenticate user
 *     description: Authenticates a user and returns a token to be used for subsequent API calls
 *     tags:
 *       - authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 description: User's username or email
 *               password:
 *                 type: string
 *                 format: password
 *                 description: User's password
 *     responses:
 *       '200':
 *         description: Authentication successful
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: 'un=user@example.com|tokenid=1c04a34e-d351-4a79-b24c-123456789abc'
 *       '401':
 *         description: Authentication failed
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

/**
 * @openapi
 * /genome/{genome_id}:
 *   get:
 *     summary: Get a genome by ID
 *     description: Returns detailed information about a specific genome
 *     tags:
 *       - genome
 *     parameters:
 *       - name: genome_id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         example: "83332.12"
 *     responses:
 *       '200':
 *         description: Genome details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Genome'
 *             example:
 *               genome_id: "83332.12"
 *               genome_name: "Mycobacterium tuberculosis H37Rv"
 *               taxon_id: 83332
 *               assembly_accession: "GCA_000195955.2"
 *       '404':
 *         description: Genome not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *
 * /genome/:
 *   get:
 *     summary: Query genomes using RQL
 *     description: Query genomes using Resource Query Language (RQL)
 *     tags:
 *       - genome
 *     parameters:
 *       - name: rql
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *         example: "eq(genome_id,83332.12)"
 *         description: RQL query string
 *     responses:
 *       '200':
 *         description: Query results
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Genome'
 *       '400':
 *         description: Invalid query
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *   
 *   post:
 *     summary: Query genomes
 *     description: Query genomes using RQL or Solr syntax
 *     tags:
 *       - genome
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
 *     responses:
 *       '200':
 *         description: Query results
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Genome'
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
 *           application/vnd.openxmlformats:
 *             schema:
 *               type: string
 *               format: binary
 *       '400':
 *         description: Invalid query
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *
 * /genome_feature/{feature_id}:
 *   get:
 *     summary: Get a genome feature by ID
 *     description: Returns detailed information about a specific genomic feature
 *     tags:
 *       - genome_feature
 *     parameters:
 *       - name: feature_id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         example: "RefSeq.1001732.3.AKUQ01000008.CDS.655540.656001.rev"
 *     responses:
 *       '200':
 *         description: Feature details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GenomeFeature'
 *       '404':
 *         description: Feature not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *
 * /genome_feature/:
 *   get:
 *     summary: Query genome features
 *     description: Query genome features using RQL
 *     tags:
 *       - genome_feature
 *     parameters:
 *       - name: rql
 *         in: query
 *         required: true
 *         schema:
 *           type: string
 *         example: "eq(genome_id,83332.12)"
 *         description: RQL query string
 *     responses:
 *       '200':
 *         description: Query results
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/GenomeFeature'
 *           application/dna+fasta:
 *             schema:
 *               type: string
 *           application/protein+fasta:
 *             schema:
 *               type: string
 */