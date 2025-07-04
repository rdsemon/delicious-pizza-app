const catchingAsync = require('../utils/catchingAsync');
const Review = require('../model/reviewModel');
const AppError = require('../utils/appError');

exports.getAllReview = catchingAsync(async (req, res, next) => {
  let filter = {};
  if (req.params.pizzaId) filter = { pizza: req.params.pizzaId };
  const review = await Review.find(filter);

  res.status(200).json({ status: 'success', data: { review } });
});

exports.createReview = catchingAsync(async (req, res, next) => {
  if (!req.body.user) req.body.user = req.user.id;
  if (!req.body.pizza) req.body.pizza = req.params.pizzaId;

  const review = await Review.create(req.body);

  res.status(201).json({ status: 'success', data: { review } });
});

exports.updateReview = catchingAsync(async (req, res, next) => {
  const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
    runValidators: true,
    new: true,
  });

  if (!review) {
    next(
      new AppError(`can't update review with this id ${req.params.id}`, 404)
    );
  }

  res.status(200).json({ status: 'success', data: { review } });
});

exports.deleteReview = catchingAsync(async (req, res, next) => {
  const review = await Review.findByIdAndDelete(req.params.id);

  if (!review) {
    next(new AppError('deleting review fail'));
  }

  res.status(204).json({ status: 'success' });
});
