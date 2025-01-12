const Tour = require('./../models/tourModel.js');

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'seccess',
    data: {
      tours: 'test',
    },
  });
};

exports.getTour = (req, res) => {
  const id = req.params.id * 1;
  res.status(200).json({
    status: 'seccess',
    data: {
      tour: 'test',
    },
  });
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
    console.log(err);
    res.status(400).json({
      status: 'fail',
      data: {
        message: err,
      },
    });
  }
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'seccess',
    data: {
      tour: 'Updated',
    },
  });
};

exports.delateTour = (req, res) => {
  res.status(204).json({
    status: 'seccess',
    data: {
      tour: 'Deleted',
    },
  });
};
