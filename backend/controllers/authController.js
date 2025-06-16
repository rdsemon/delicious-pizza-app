const catchingAsync = require('../utils/catchingAsync');
const AppError = require('../utils/appError');

const User = require('../model/userModel');

// user signup
exports.signup = catchingAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    role: req.body.role,
  });

  res.status(201).json({ status: 'success', data: { newUser } });
});

// user login
exports.login = catchingAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    return next(new AppError('please enter email and password', 404));

  const user = await User.findOne({ email }).select('password');

  if (!user || !(await user.checkPassword(password, user.password))) {
    return next(new AppError('Please provide valid eamil and password', 404));
  }

  res.status(200).json({ status: 'success', data: { user } });
});
