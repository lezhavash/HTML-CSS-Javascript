const Review = require('./../models/reviewModel.js');
const catchAsync = require('./../utils/catchAsync.js');
const AppError = require('./../utils/appError.js');

exports.getAllReview = catchAsync(async (req, res, next) => {});

exports.createReview = catchAsync(async (req, res, next) => {
  const newReview = await Review.create(req.body);
  res.status(201).json({
    status: 'seccess',
    data: {
      review: newReview,
    },
  });
});
