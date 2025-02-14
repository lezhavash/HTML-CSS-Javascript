const mongoose = require('mongoose');
const validator = require('validator');
const slugify = require('slugify');

const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'You Mast have Name'],
      unique: true,
      trim: true,
      maxlength: [40, 'A tour Name must have less or equal 40 characters'],
      minlength: [10, 'A tour Name must have more or equal 10 characters'],
    },
    slug: String,
    duration: {
      type: Number,
      required: [true, 'You mast have Duration'],
    },
    maxGroupSize: {
      type: Number,
      required: [true, 'You mast have GroupSize'],
    },
    difficulty: {
      type: String,
      required: [true, 'You mast have Difficulty'],
      enum: {
        values: ['easy', 'medium', 'difficult'],
        message: 'Difficulty is either: easy, medium, difficult ',
      },
    },
    ratingsAvarage: {
      type: Number,
      default: 4.5,
      min: [1, 'Rating must be about 1.0'],
      max: [5, 'Rating must be below 5.0'],
      set: (val) => Math.round(val * 10) / 10,
    },
    ratingQuantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, 'You mast have Price'],
    },
    priceDiscount: {
      type: Number,
      validate: {
        validator: function (val) {
          return val < this.price;
        },
        message: 'Discount price should be below regular price',
      },
    },
    summary: {
      type: String,
      trim: true,
      required: [true, 'You mast have Description'],
    },
    description: {
      type: String,
      trim: true,
    },
    imageCover: {
      type: String,
      required: [true, 'You mast have Image'],
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    startDates: [Date],
    startLocation: {
      type: {
        type: String,
        default: 'Point',
        enum: ['Point'],
      },
      coordinates: [Number],
      address: String,
      description: String,
    },
    locations: [
      {
        type: {
          type: String,
          default: 'Point',
          enum: ['Point'],
        },
        coordinates: [Number],
        address: String,
        description: String,
        day: Number,
      },
    ],
    guides: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

tourSchema.index({ price: 1, ratingsAvarage: -1 });
tourSchema.index({ slug: 1 });
tourSchema.index({ startLocation: '2dsphere' });

tourSchema.virtual('durationWeeks').get(function () {
  return this.duration / 7;
});

tourSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'tour',
  localField: '_id',
});

tourSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

tourSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'guides',
    select: '-__v -passwordChangedAt',
  });
  next();
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
