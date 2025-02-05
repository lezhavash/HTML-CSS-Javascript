const express = require('express');
const userController = require('./../controllers/userController.js');
const authController = require('./../controllers/authController.js');
const reviewController = require('./../controllers/reviewController.js');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);

router.post('/forgotpassword', authController.forgotPassword);
router.patch('/resetpassword/:token', authController.resetPassword);
router.patch(
  '/updatemypassword',
  authController.protect,
  authController.updatePassword,
);

router.patch('/updateme', authController.protect, userController.updateMe);
router.delete('/delateme', authController.protect, userController.delateMe);

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);
router
  .route('/:id')
  .get(userController.getUsers)
  .patch(userController.updateUser)
  .delete(userController.delateUser);

router
  .route('/:tourId/veviews')
  .post(
    authController.protect,
    authController.restrictTo('user'),
    reviewController.createReview,
  );

module.exports = router;
