/**
 * OpenAPI Path Templates
 * 
 * This file contains template OpenAPI specifications for API endpoints.
 * Copy and paste these templates to the appropriate files and fill in the details.
 */

/**
 * @openapi
 * /genome/{id}/trackList:
 *   get:
 *     summary: TODO - Add a summary
 *     description: TODO - Add a description
 *     tags:
 *       - genome

 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: TODO - Describe the id parameter
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               # TODO: Define response schema or use $ref to a defined schema
 */

/**
 * @openapi
 * /genome/{id}/tracks:
 *   get:
 *     summary: TODO - Add a summary
 *     description: TODO - Add a description
 *     tags:
 *       - genome

 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: TODO - Describe the id parameter
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               # TODO: Define response schema or use $ref to a defined schema
 */

/**
 * @openapi
 * /genome/{id}/stats/global:
 *   get:
 *     summary: TODO - Add a summary
 *     description: TODO - Add a description
 *     tags:
 *       - genome

 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: TODO - Describe the id parameter
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               # TODO: Define response schema or use $ref to a defined schema
 */

/**
 * @openapi
 * /genome/{id}/stats/region/{sequence_id}:
 *   get:
 *     summary: TODO - Add a summary
 *     description: TODO - Add a description
 *     tags:
 *       - genome

 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: TODO - Describe the id parameter
 *     parameters:
 *       - name: sequence_id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: TODO - Describe the sequence_id parameter
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               # TODO: Define response schema or use $ref to a defined schema
 */

/**
 * @openapi
 * /genome/{id}/stats/regionFeatureDensities/{sequence_id}:
 *   get:
 *     summary: TODO - Add a summary
 *     description: TODO - Add a description
 *     tags:
 *       - genome

 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: TODO - Describe the id parameter
 *     parameters:
 *       - name: sequence_id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: TODO - Describe the sequence_id parameter
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               # TODO: Define response schema or use $ref to a defined schema
 */

/**
 * @openapi
 * /genome/{id}/features/{seq_accession}:
 *   get:
 *     summary: TODO - Add a summary
 *     description: TODO - Add a description
 *     tags:
 *       - genome

 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: TODO - Describe the id parameter
 *     parameters:
 *       - name: seq_accession
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: TODO - Describe the seq_accession parameter
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               # TODO: Define response schema or use $ref to a defined schema
 */

/**
 * @openapi
 * /genome/{id}/refseqs:
 *   get:
 *     summary: TODO - Add a summary
 *     description: TODO - Add a description
 *     tags:
 *       - genome

 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: TODO - Describe the id parameter
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               # TODO: Define response schema or use $ref to a defined schema
 */

/**
 * @openapi
 * /genome/{id}/names/:
 *   get:
 *     summary: TODO - Add a summary
 *     description: TODO - Add a description
 *     tags:
 *       - genome

 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: TODO - Describe the id parameter
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               # TODO: Define response schema or use $ref to a defined schema
 */

/**
 * @openapi
 * /summary_by_taxon/{taxon_id}:
 *   get:
 *     summary: TODO - Add a summary
 *     description: TODO - Add a description
 *     tags:
 *       - summary_by_taxon

 *     parameters:
 *       - name: taxon_id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: TODO - Describe the taxon_id parameter
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               # TODO: Define response schema or use $ref to a defined schema
 */

/**
 * @openapi
 * /distinct/{collection}/{field}:
 *   get:
 *     summary: TODO - Add a summary
 *     description: TODO - Add a description
 *     tags:
 *       - distinct

 *     parameters:
 *       - name: collection
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: TODO - Describe the collection parameter
 *     parameters:
 *       - name: field
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: TODO - Describe the field parameter
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               # TODO: Define response schema or use $ref to a defined schema
 */

/**
 * @openapi
 * /taxon_category/:
 *   get:
 *     summary: TODO - Add a summary
 *     description: TODO - Add a description
 *     tags:
 *       - taxon_category

 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               # TODO: Define response schema or use $ref to a defined schema
 */

/**
 * @openapi
 * /subsystem_summary/{genome_id}:
 *   get:
 *     summary: TODO - Add a summary
 *     description: TODO - Add a description
 *     tags:
 *       - subsystem_summary

 *     parameters:
 *       - name: genome_id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: TODO - Describe the genome_id parameter
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               # TODO: Define response schema or use $ref to a defined schema
 */

/**
 * @openapi
 * /{target_id}:
 *   patch:
 *     summary: TODO - Add a summary
 *     description: TODO - Add a description
 *     tags:
 *       - {target_id}

 *     parameters:
 *       - name: target_id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: TODO - Describe the target_id parameter
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               # TODO: Define response schema or use $ref to a defined schema
 */

/**
 * @openapi
 * /{target_id}:
 *   post:
 *     summary: TODO - Add a summary
 *     description: TODO - Add a description
 *     tags:
 *       - {target_id}

 *     parameters:
 *       - name: target_id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: TODO - Describe the target_id parameter
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               # TODO: Define response schema or use $ref to a defined schema
 */

/**
 * @openapi
 * /{collection}:
 *   get:
 *     summary: TODO - Add a summary
 *     description: TODO - Add a description
 *     tags:
 *       - {collection}

 *     parameters:
 *       - name: collection
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: TODO - Describe the collection parameter
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               # TODO: Define response schema or use $ref to a defined schema
 */

/**
 * @openapi
 * /{target_id}:
 *   post:
 *     summary: TODO - Add a summary
 *     description: TODO - Add a description
 *     tags:
 *       - {target_id}

 *     parameters:
 *       - name: target_id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: TODO - Describe the target_id parameter
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               # TODO: Define response schema or use $ref to a defined schema
 */

/**
 * @openapi
 * /experiment:
 *   get:
 *     summary: TODO - Add a summary
 *     description: TODO - Add a description
 *     tags:
 *       - experiment

 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               # TODO: Define response schema or use $ref to a defined schema
 */

/**
 * @openapi
 * /experiment/{id}:
 *   get:
 *     summary: TODO - Add a summary
 *     description: TODO - Add a description
 *     tags:
 *       - experiment

 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: TODO - Describe the id parameter
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               # TODO: Define response schema or use $ref to a defined schema
 */

/**
 * @openapi
 * /experiment/{id}/id-list/{id_list}:
 *   get:
 *     summary: TODO - Add a summary
 *     description: TODO - Add a description
 *     tags:
 *       - experiment

 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: TODO - Describe the id parameter
 *     parameters:
 *       - name: id_list
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: TODO - Describe the id_list parameter
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               # TODO: Define response schema or use $ref to a defined schema
 */

/**
 * @openapi
 * /experiment/{id}/id-list/{id_list}/ids:
 *   get:
 *     summary: TODO - Add a summary
 *     description: TODO - Add a description
 *     tags:
 *       - experiment

 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: TODO - Describe the id parameter
 *     parameters:
 *       - name: id_list
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: TODO - Describe the id_list parameter
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               # TODO: Define response schema or use $ref to a defined schema
 */

/**
 * @openapi
 * /api:
 *   get:
 *     summary: TODO - Add a summary
 *     description: TODO - Add a description
 *     tags:
 *       - api

 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               # TODO: Define response schema or use $ref to a defined schema
 */

