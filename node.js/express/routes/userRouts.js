const express = require('express');
const userController = require('./../controllers/userController.js');
const authController = require('./../controllers/authController.js');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);

router.post('/forgotpassword', authController.forgotPassword);
router.patch('/resetpassword/:token', authController.resetPassword);

router.use(authController.protect);

router.patch('/updatemypassword', authController.updatePassword);

router.get('/me', userController.getMe, userController.getUsers);
router.patch('/updateme', userController.updateMe);
router.delete('/delateme', userController.delateMe);

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);
router
  .route('/:id')
  .get(userController.getUsers)
  .patch(userController.updateUser)
  .delete(userController.delateUser);

module.exports = router;
