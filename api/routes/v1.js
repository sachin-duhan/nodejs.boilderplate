const {Router} = require('express');
const { userRouter } = require('../modules/user/routes');
const { taskRouter } = require('../modules/task/routes');

const v1Router = Router();

v1Router.use('/user', userRouter);
v1Router.use('/task', taskRouter)

module.exports = {v1Router};
