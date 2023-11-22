const  fs = require('fs');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const {StatusCodes} = require('http-status-codes');
const {apiRouter} = require('./routes');
const {clientErrorHandler, errorHandler, logErrors} = require('./common/error.handler');
const {appAdmin, adminRouter} = require('../admin/setup');

const app = express();

app.use(express.json());

// TODO: handle CORS() & domain whitelisting.
// TODO: API Rate limiting.

// access logs - incoming request to the API server.
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'logs', 'access.log'), { flags: 'a' })
app.use(morgan('combined', { stream: accessLogStream }));


app.use(appAdmin.options.rootPath, adminRouter);
app.get('/health', (req, res) => res.status(StatusCodes.OK).json("ok"));
app.use('/api', apiRouter);

// No matching route.
app.use((req, res, next) => {
  const error = new Error('Invalid Request');
  res.status = StatusCodes.NOT_FOUND;
  next(error);
})

// ! req encountered some error. Thus catching the same.
app.use(logErrors)
app.use(clientErrorHandler)
app.use(errorHandler)

module.exports = {app};
