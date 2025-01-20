const mongoose = require('mongoose');
const validator = require('validator');
const { validate } = require('./tourModel');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'You Mast have Name'],
  },
  email: {
    type: String,
    required: [true, 'You Mast have Email'],
    trim: true,
    lowercase: true,
    validate: [validator.isEmail, ' Valid Email'],
  },
  photo: {
    type: String,
  },
  password: {
    type: String,
    required: [true, 'Please procide Your Password'],
    maxlength: 8,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please Conform Password'],
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
