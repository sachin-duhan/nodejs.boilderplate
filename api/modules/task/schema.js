const {Schema, model} = require('mongoose');

const task_schema = new Schema({
  title: {
    type: String,
    require: true,
    minLength: 3,
    maxLength: 100,
    trim: true
  },
  description: {
    type: String,
    required: false,
    default: ""
  },
  status: {
    type: String,
    enum: ["completed", "in_progress", "on_hold", "blocked", "pending"],
    default: "pending"
  }
})

const TaskModel = model('task', task_schema);

module.exports = {TaskModel};
