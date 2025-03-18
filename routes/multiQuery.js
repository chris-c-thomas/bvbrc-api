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
const BodyParser = require('body-parser')
const debug = require('debug')('p3api-server:route/multiQuery')
const HttpParamsMiddleware = require('../middleware/http-params')
const AuthMiddleware = require('../middleware/auth')
const { httpRequest } = require('../util/http')
const Config = require('../config')

async function subQuery (dataType, query, opts) {
  return httpRequest({
    port: Config.get('http_port'),
    headers: {
      'Content-Type': 'application/rqlquery+x-www-form-urlencoded',
      Accept: opts.accept || 'application/json',
      Authorization: opts.authorization || ''
    },
    method: 'POST',
    path: `/${dataType}`
  }, query)
    .then((body) => JSON.parse(body))
}

Router.use(HttpParamsMiddleware)
Router.use(AuthMiddleware)

Router.post('*', [
  BodyParser.json({ extended: true }),
  function (req, res, next) {
    debug('req.body: ', req.body)
    const defs = []
    res.results = {}

    Object.keys(req.body).forEach(function (qlabel) {
      var qobj = req.body[qlabel]
      res.results[qlabel] = {}

      defs.push(subQuery(qobj.dataType, qobj.query, {
        accept: qobj.accept,
        authorization: (req.headers && req.headers['authorization']) ? req.headers['authorization'] : ''
      }).then(function (result) {
        debug('RES: ', qlabel, result.length)
        res.results[qlabel].result = result
      }))
    })

    Promise.all(defs).then(() => {
      next()
    }, (err) => {
      next(err)
    })
  },

  function (req, res, next) {
    res.set('content-type', 'application/json')
    res.end(JSON.stringify(res.results))
  }
])

module.exports = Router
