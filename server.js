require('dotenv').config()

const {app} = require('./api/app');
const {LOGGER} = require('./api/common/logger');

const {PORT} = process.env;

app.listen(PORT, () => {
    LOGGER.info(`server started on port http://localhost:${PORT}`);
});
