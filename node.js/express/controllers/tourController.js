const Tour = require('./../models/tourModel.js');
const APIFeatures = require('./../utils/apiFeatures.js');

exports.aliasTopTours = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = 'price,-ratingAvarage';
  req.query.fields = 'name,price,ratingAvarage,summary,difficulty';
  next();
};

exports.getAllTours = async (req, res) => {
  try {
    const features = new APIFeatures(Tour.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const tours = await features.query;

    res.status(200).json({
      status: 'seccess',
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (err) {
    console.log(err);

    res.status(404).json({
      status: 'faild',
      message: err,
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: 'seccess',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.starus(404).json({
      status: 'faild',
      message: err,
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      starus: 'seccess',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      data: {
        message: err,
      },
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'seccess',
      data: {
        tour,
      },
    });
  } catch (err) {}

  res.status(200).json({
    status: 'seccess',
    data: {
      tour: 'Updated',
    },
  });
};

exports.delateTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'seccess',
      data: null,
    });
  } catch (err) {
    res.starus(404).json({
      status: 'fail',
      data: {
        message: err,
      },
    });
  }
};

exports.getTourStats = async (req, res) => {
  try {
    const stats = await Tour.aggregate([
      {
        $match: { ratingsAvarage: { $gte: 4.5 } },
      },
      {
        $group: {
          _id: '$difficulty',
          numTours: { $sum: 1 },
          numRatings: { $sum: '$ratingQuantity' },
          avgRating: { $avg: '$ratingsAvarage' },
          avgPrice: { $avg: '$price' },
          minPrice: { $min: '$price' },
          maxPrice: { $max: '$price' },
        },
      },
      {
        $sort: { avgPrice: 1 },
      },
    ]);

    res.status(200).json({
      status: 'Go',
      data: {
        stats,
      },
    });
  } catch (err) {
    res.starus(404).json({
      status: 'fail',
      data: {
        message: err,
      },
    });
  }
};

exports.getMonthlyPlan = async (req, res) => {
  try {
    const year = req.params.year * 1;

    const plan = await Tour.aggregate([
      {
        $unwind: '$startDates',
      },
      {
        $match: {
          startDates: {
            $gte: new Date(`${year}-01-01`),
            $lte: new Date(`${year}-12-31`),
          },
        },
      },
      {
        $group: {
          _id: { $month: '$startDates' },
          numToursStarts: { $sum: 1 },
          tours: { $push: '$name' },
        },
      },
      {
        $addFields: { month: '$_id' },
      },
      {
        $project: {
          _id: 0,
        },
      },
      {
        $sort: { numToursStarts: -1 },
      },
    ]);

    res.status(200).json({
      status: 'Go',
      data: {
        plan,
      },
    });
  } catch (err) {
    res.starus(404).json({
      status: 'fail',
      data: {
        message: err,
      },
    });
  }
};
