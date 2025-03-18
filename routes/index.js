/**
 * @swagger
 * /your-endpoint:
 *   get:
 *     summary: Short description of the endpoint
 *     description: Longer explanation of what this endpoint does
 *     parameters:
 *       - in: query
 *         name: param1
 *         required: false
 *         description: Description of param1
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Success"
 */

/**
 * @swagger
 * /your-endpoint:
 *   post:
 *     summary: Short description of the endpoint
 *     description: Handles new data submissions
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               field1:
 *                 type: string
 *                 example: "Example value"
 *               field2:
 *                 type: number
 *                 example: 42
 *     responses:
 *       201:
 *         description: Successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "12345"
 */

/**
 * @swagger
 * /your-endpoint/{id}:
 *   put:
 *     summary: Update a specific record
 *     description: Updates a record by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the record to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               field1:
 *                 type: string
 *                 example: "Updated value"
 *     responses:
 *       200:
 *         description: Successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Update successful"
 */

/**
 * @swagger
 * /your-endpoint/{id}:
 *   delete:
 *     summary: Delete a specific record
 *     description: Deletes a record by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the record to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully deleted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Delete successful"
 */
var express = require('express')
var router = express.Router()
var pkg = require('../package.json')
var config = require('../config')

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { results: [], request: req, pkg: pkg, config: config, title: 'p3api' })
})

module.exports = router
