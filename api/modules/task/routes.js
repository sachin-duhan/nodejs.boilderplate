const { crud_router } = require('../../common/router');
const { TaskModel } = require('./schema');

const taskRouter = crud_router(TaskModel);

module.exports = {taskRouter};
