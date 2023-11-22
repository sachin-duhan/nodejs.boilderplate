const { crud_router } = require('../../common/router');
const { UserModel } = require('./schema');

const userRouter = crud_router(UserModel);

module.exports = {userRouter};

