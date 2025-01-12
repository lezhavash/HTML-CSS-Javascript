const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'You Mast have Name'],
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, 'You mast have Price'],
  },
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
