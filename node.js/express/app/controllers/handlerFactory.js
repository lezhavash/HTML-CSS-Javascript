const catchAsync = require('./../utils/catchAsync.js');
const AppError = require('./../utils/appError.js');
const APIFeatures = require('./../utils/apiFeatures.js');

exports.getOne = (Model, populate) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    if (populate) query = query.populate(populate);
    const doc = await query;
    if (!doc) {
      return next(new AppError('No tour found with that ID', 404));
    }

    res.status(200).json({
      status: 'seccess',
      data: {
        data: doc,
      },
    });
  });

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);
    res.status(201).json({
      starus: 'seccess',
      data: {
        data: doc,
      },
    });
  });

exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!doc) {
      return next(new AppError('No tour found with that ID', 404));
    }
    res.status(200).json({
      status: 'seccess',
      data: {
        data: doc,
      },
    });
  });

exports.delateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);
    if (!doc) {
      return next(new AppError('No tour found with that ID', 404));
    }
    res.status(204).json({
      status: 'seccess',
      data: null,
    });
  });

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    //Allow nested Get
    let filter = {};
    if (req.params.tourId) filter = { tour: req.params.tourId };

    const features = new APIFeatures(Model.find(filter), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const doc = await features.query;

    res.status(200).json({
      status: 'seccess',
      results: doc.length,
      data: {
        data: doc,
      },
    });
  });
