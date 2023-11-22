const { LOGGER } = require('./logger');

const { StatusCodes } = require("http-status-codes")

function logErrors (err, req, res, next) {
    LOGGER.error(err.stack);
    next(err)
}


function clientErrorHandler (err, req, res, next) {
    if (req.xhr) {
      const _status = res.status || StatusCodes.INTERNAL_SERVER_ERROR
      return res.status(_status).json({ error: 'Something failed!' })
    } else {
      next(err)
    }
}
  

function errorHandler (err, req, res) {
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    message: "Internal server error",
    data: err
  })
}

module.exports = {logErrors, clientErrorHandler, errorHandler};
