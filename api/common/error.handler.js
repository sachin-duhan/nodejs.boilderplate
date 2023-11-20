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
  

function errorHandler (err, req, res, next) {
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: "Internal server error",
      data: err
  })
}
module.exports = {logErrors, clientErrorHandler, errorHandler};