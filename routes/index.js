/**
 * @swagger
 * /:
 *   get:
 *     summary: API home
 *     description: Returns general information about the API.
 *     responses:
 *       200:
 *         description: API is running
 */
var express = require('express')
var router = express.Router()
var pkg = require('../package.json')
var config = require('../config')

/* GET home page. */
/**
 * @swagger
 * /:
 *   get:
 *     summary: Auto-generated summary for GET /
 *     responses:
 *       200:
 *         description: Successful response
 */
/**
 * @swagger
 * /:
 *   get:
 *     summary: Auto-generated summary for GET /
 *     responses:
 *       200:
 *         description: Successful response
 */
router.get('/', function (req, res) {
  res.render('index', { results: [], request: req, pkg: pkg, config: config, title: 'p3api' })
})

module.exports = router
