const {Schema, model} = require('mongoose');

const user_schema = new Schema({
  name: {
    type: String,
    require: true,
    minLength: 3,
    maxLength: 100,
    trim: true
  },
  college: {
    type: String,
    required: false,
    default: ""
  },
})

const UserModel = model('user', user_schema);

module.exports = {UserModel};
