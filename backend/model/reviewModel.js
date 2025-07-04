const mongoose = require('mongoose');
const Pizza = require('./pizzaModel');

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: [true, 'Please provide your review'],
      trim: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: [true, 'Please provide a rating'],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    // parent reference
    pizza: {
      type: mongoose.Schema.ObjectId,
      ref: 'Pizza',
      required: [true, 'A review must need a tour id'],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'A review must need a user'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: 'name',
  });
  next();
});
// calculate average rating
reviewSchema.statics.calcAverageRating = async function (pizzaId) {
  const stats = await this.aggregate([
    {
      $match: { pizza: pizzaId },
    },
    {
      $group: {
        _id: '$pizza',
        nRating: { $sum: 1 },
        avgRating: { $avg: '$rating' },
      },
    },
  ]);

  if (stats.length > 0) {
    await Pizza.findByIdAndUpdate(pizzaId, {
      ratingQuantity: stats[0].nRating,
      ratingsAverage: stats[0].avgRating,
    });
  } else {
    await Pizza.findByIdAndUpdate(pizzaId, {
      ratingQuantity: 0,
      ratingsAverage: 4.7,
    });
  }
};

// calculate rating after create
reviewSchema.post('save', function () {
  this.constructor.calcAverageRating(this.pizza);
});

// store the doc before update/delete
reviewSchema.pre(/^findOneAnd/, async function (next) {
  this.r = await this.model.findOne();
});
// calculationg after update and delete
reviewSchema.post(/^findOneAnd/, async function (next) {
  this.r.constructor.calcAverageRating(this.r.pizza);
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
