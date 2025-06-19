const pick = require('lodash.pick');
const User = require('../model/userModel');
const AppError = require('../utils/appError');
const catchingAsync = require('../utils/catchingAsync');
const sendJwtToken = require('../utils/jwtToken');

exports.createUser = catchingAsync(async (req, res, next) => {
  console.log(req.body);
});

exports.getAllUsers = catchingAsync(async (req, res, next) => {
  const user = await User.find().select('name email role');

  res.status(200).json({ status: 'suceess', data: { user } });
});

// de-active a user
exports.deActiveMe = catchingAsync(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(
    req.user.id,
    { active: false },
    { new: true, runValidators: true }
  );

  if (!user) {
    return next(new AppError('can not find any user', 404));
  }

  res.status(200).json({ status: 'success', message: 'De-Active successfull' });
});

// re-active a user
exports.reActivateMe = catchingAsync(async (req, res, next) => {
  // get the email
  const { email } = req.body;

  if (!email) {
    return next(new AppError('Please provide your mail', 400));
  }

  const user = await User.findOneAndUpdate(
    { email },
    { active: true },
    { new: true, runValidators: true }
  );

  if (!user) {
    return next(new AppError('user re-active fail', 404));
  }
  // send json token
  sendJwtToken(user, res, 200);
});

// update user information
exports.updateMe = catchingAsync(async (req, res, next) => {
  const { password, confirmPassword } = req.body;

  if (password || confirmPassword) {
    return next(new AppError('this route is not for update password', 404));
  }
  const filterObj = pick(req.body, ['name', 'email']);

  const user = await User.findByIdAndUpdate(req.user.id, filterObj, {
    new: true,
    runValidators: true,
  }).select('name email');

  if (!user) {
    return next(AppError('user update fail', 404));
  }

  res.status(200).json({ status: 'success', data: { user } });
});
