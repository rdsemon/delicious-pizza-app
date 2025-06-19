const express = require('express');

const router = express.Router();

const authController = require('../controllers/authController');

const userController = require('../controllers/userController');

const {
  signup,
  login,
  forgetPassword,
  resetPassword,
  updatePassword,
  protect,
} = authController;

const { createUser, getAllUsers, deActiveMe, reActivateMe, updateMe } =
  userController;

router.post('/signup', signup);
router.post('/login', login);
router.post('/forgetpassword', forgetPassword);
router.patch('/resetpassword/:token', resetPassword);
router.patch('/ReActiveMe', reActivateMe);

router.patch('/updatepassword', protect, updatePassword);
router.patch('/deActiveMe', protect, deActiveMe);
router.patch('/updateMe', protect, updateMe);

router.route('/').post(createUser).get(getAllUsers);

module.exports = router;
