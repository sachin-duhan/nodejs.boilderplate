const { LOGGER } = require('./logger');

const { StatusCodes } = require("http-status-codes")

function logErrors (err, req, res, next) {
    LOGGER.error(err.stack);
    next(err)
}


function clientErrorHandler (err, req, res, next) {
    if (req.xhr) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ error: 'Something failed!' })
    } else {
      next(err)
    }
}
  

function errorHandler (err, req, res) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR)
    res.json({ error: err })
}

module.exports = {logErrors, clientErrorHandler, errorHandler};