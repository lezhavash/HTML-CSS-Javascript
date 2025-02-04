const express = require('express');
const reviewController = require('./../controllers/reviewController.js');

const router = express.Router();

router
  .route('/')
  .get(reviewController.getAllReview)
  .post(reviewController.createReview);

module.exports = router;
