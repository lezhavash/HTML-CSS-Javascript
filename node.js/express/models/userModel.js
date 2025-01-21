const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

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
    unique: true,
    validate: [validator.isEmail, ' Valid Email'],
  },
  photo: {
    type: String,
  },
  password: {
    type: String,
    required: [true, 'Please procide Your Password'],
    maxlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please Conform Password'],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: 'Password are note Same',
    },
  },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return;
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword,
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
