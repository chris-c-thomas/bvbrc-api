#!/usr/bin/env node --unhandled-rejections=strict

var config = require('./config');
var debug = require('debug')('p3api-server:app');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var cors = require('cors');

var swaggerJsdoc = require("swagger-jsdoc");
var swaggerUi = require("swagger-ui-express");

var hpiSearchRouter = require('./routes/hpiSearch');
var dataTypeRouter = require('./routes/dataType');
var downloadRouter = require('./routes/download');
var multiQueryRouter = require('./routes/multiQuery');
var contentRouter = require('./routes/content');
var rpcHandler = require('./routes/rpcHandler');
var jbrowseRouter = require('./routes/JBrowse');
var genomePermissionRouter = require('./routes/genomePermissionRouter');
var dataRouter = require('./routes/dataRouter');
var indexer = require('./routes/indexer');
var docRouter = require('./routes/documentation');
var indexRouter = require('./routes/index');

var pkgJSON = require("./package.json");
var sleep = require("sleep-promise");

process.on('uncaughtException', (err, origin) => {
  console.log(`Uncaught Exception. [${(new Date()).toISOString()}] ${err}, ${origin}`);
});
process.on('unhandledRejection', (reason, promise) => {
  console.log(`Unhandled Rejection. [${(new Date()).toISOString()}] reason: ${reason}, promise:`, promise);
});

var app = module.exports = express();
process.send = process.send || function(){};

const listener  = app.listen(config.get('http_port') || 3001, function(){
  console.log(`Listening on port ${listener.address().port}`);
  process.send("ready");
});

const swaggerUi = require("swagger-ui-express");
const fs = require("fs");

if (fs.existsSync("./swagger-output.json")) {
  const swaggerFile = require("./swagger-output.json");
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
}

// Middleware setup
app.use(logger('[:date[iso]] :remote-ip :method :url :status :response-time ms - :res[content-length]'));
app.use(cors({ origin: true, methods: ['GET,POST,PUT,DELETE'], credentials: true, maxAge: 86400 }));
app.use(cookieParser());

// Define routes
app.use('/indexer', indexer);
app.use('/doc', docRouter);
app.post('/', rpcHandler);
app.use('/resources', express.static('public'));
app.use('/content', contentRouter);
app.use('/query', multiQueryRouter);
app.use('/hpi/search', hpiSearchRouter);
app.use('/data', dataRouter);
app.use('/permissions/genome', genomePermissionRouter);

// 404 and error handling
app.use(function (req, res, next) {
  console.error(`Unable to find router.`, req);
  res.status(404).json({ status: 404, message: "Not Found" });
});

app.use(function (error, req, res, next) {
  res.status(error.status || 500).json({ status: error.status || 500, message: error.message || "Internal Server Error" });
});