const Tour = require('../models/tourModel.js');
const catchAsync = require('../utils/catchAsync.js');

exports.getOverview = catchAsync(async (req, res, next) => {
  //Get Tour data
  const tours = await Tour.find();

  res.status(200).render('overview', {
    title: 'All Tours',
    tours,
  });
});

exports.getTour = catchAsync(async (req, res) => {
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
  });

  res.status(200).render('tour', {
    title: 'The forest Hiker',
    tour,
  });
});
