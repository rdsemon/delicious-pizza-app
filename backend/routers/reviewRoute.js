const express = require('express');

const router = express.Router({ mergeParams: true });

const authController = require('../controllers/authController');

const reviewController = require('../controllers/reviewController');

const { getAllReview, createReview, updateReview, deleteReview } =
  reviewController;
const { protect } = authController;

router.route('/').get(getAllReview).post(protect, createReview);

router.route('/:id').patch(updateReview).delete(deleteReview);

module.exports = router;
