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
const Express = require('express')
const Router = Express.Router({ strict: true, mergeParams: true })
const Config = require('../config')
const CONTENT_FOLDER = Config.get('contentDirectory')
const HttpParamsMiddleWare = require('../middleware/http-params')
const Fs = require('fs-extra')
const Path = require('path')

Router.use(HttpParamsMiddleWare)

Router.get('*', function (req, res, next) {
  const file = Path.join(CONTENT_FOLDER, req.params[0])
  if (Fs.existsSync(file)) {
    if (req.headers['range'] && req.headers['range'].includes('bytes=')) {
      const parts = req.headers['range'].replace('bytes=', '').split('-')
      const start = parseInt(parts[0])
      const end = parseInt(parts[1])
      return Fs.createReadStream(file, { start: start, end: end }).pipe(res)
    } else {
      Fs.createReadStream(file).pipe(res)
    }
  } else {
    console.error(`${file} does not exits`)
    next('route')
  }
})

module.exports = Router
