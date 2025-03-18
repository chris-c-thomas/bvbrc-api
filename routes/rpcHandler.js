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
const BodyParser = require('body-parser')
const RpcMethods = require('../rpc')
const debug = require('debug')('p3api-server:route/rpcHandler')

module.exports = [
  BodyParser.json({ type: ['application/jsonrpc+json'], limit: '30mb' }),
  BodyParser.json({ type: ['application/json'], limit: '30mb' }),
  function (req, res, next) {
    if (!req.body) {
      next()
      return
    }
    const ctype = req.get('content-type')

    if (req.body.jsonrpc || (ctype === 'application/jsonrpc+json')) {
      if (!req.body.method) {
        throw Error('No Method Supplied')
      }

      const methodDef = RpcMethods[req.body.method]
      if (!methodDef) {
        throw Error(`Invalid Method: ${req.body.method}`)
      }

      if (methodDef.requireAuth && !req.user) {
        res.status(401)
        throw Error('Authentication Required')
      }

      if (!methodDef.validate || !methodDef.validate(req.body.params, req, res)) {
        throw Error(`RPC Parameter Validation Failed: ${req.body.params}`)
      }

      req.call_method = req.body.method
      req.call_params = req.body.params
      next()
    } else {
      next('route')
    }
  },
  function (req, res, next) {
    RpcMethods[req.call_method].execute(req.call_params, req, res).then((results) => {
      res.results = results
      next()
    }, function (err) {
      debug('Got Execute Error: ', err)
      res.error = err
      next()
    })
  },

  function (req, res, next) {
    var out = {}
    out.id = req.body.id || 0
    if (res.error) {
      out.error = res.error.toString()
    } else {
      out.result = res.results
    }

    res.write(JSON.stringify(out))
    res.end()
  }
]
