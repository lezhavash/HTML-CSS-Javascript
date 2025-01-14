const Tour = require('./../models/tourModel.js');

exports.getAllTours = async (req, res) => {
  try {
    //1) Filtering
    const queryObj = { ...req.query };
    const exludedFields = ['page', 'sort', 'limit', 'fields'];
    exludedFields.forEach((el) => delete queryObj[el]);

    //2) Advanced Filtering
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    let query = Tour.find(JSON.parse(queryStr));

    //Sorting
    if (req.query.sort) {
      const soirtBy = req.query.soirt.split(',').json(' ');
      query = query.sort(soirtBy);
    } else {
      query = query.soirt('createdAt');
    }

    const tours = await query;

    res.status(200).json({
      status: 'seccess',
      data: {
        tours,
      },
    });
  } catch (err) {
    res.starus(404).json({
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
