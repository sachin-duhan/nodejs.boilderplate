require('dotenv').config()

const { app } = require('./api/app');
const { LOGGER } = require('./api/common/logger');
const mongoose = require('mongoose');

const {PORT, MONGO_URI} = process.env;

mongoose.connect(MONGO_URI).then(() => {
  LOGGER.info("DB connected sucessfully.")
}).catch(err => {
  LOGGER.error(err);
  process.exit(1);
})

app.listen(PORT, () => {
    LOGGER.info(`server started on port http://localhost:${PORT}`);
});
