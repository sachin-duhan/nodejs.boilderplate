const {Schema, model} = require('mongoose');

const adminSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  encryptedPassword: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

const AdminModel = model('admin', adminSchema);

module.exports = {AdminModel};
