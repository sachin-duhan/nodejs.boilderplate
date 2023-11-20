const winston = require('winston');
const { name, version } = require('../../package.json');

const LOGGER = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: `${name}_${version}` },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'api/logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'api/logs/combined.log' }),
  ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  LOGGER.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

module.exports = {LOGGER};