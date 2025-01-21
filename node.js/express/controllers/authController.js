const catchAsync = require('../utils/catchAsync.js');
const User = require('./../models/userModel.js');

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);

  res.status(201).json({
    status: 'Success',
    data: {
      user: newUser,
    },
  });
});
