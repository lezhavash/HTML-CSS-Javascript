const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllUsers = catchAsync(async (req, res) => {
  const users = await User.find();

  res.status(200).json({
    status: 'seccess',
    results: users.length,
    data: {
      users,
    },
  });
});

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Test',
  });
};

exports.getUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Test',
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Test',
  });
};

exports.delateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'Test',
  });
};
