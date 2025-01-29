const User = require('../models/userModel');
const { use } = require('../routes/tourRouts');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) {
      newObj[el] = obj[el];
    }
  });
  return newObj;
};

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

exports.updateMe = catchAsync(async (req, res, next) => {
  if (req.body.password || req.body.passwordConform) {
    return next(new AppError('You can not update password', 401));
  }

  const filterBody = filterObj(req.body, 'name', 'email');
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filterBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: 'seccess',
    data: {
      user: updatedUser,
    },
  });
});

exports.delateMe = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(204).json({
    status: 'seccess',
    data: null,
  });
});

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
