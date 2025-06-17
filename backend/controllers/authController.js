const jwt = require('jsonwebtoken');
const catchingAsync = require('../utils/catchingAsync');
const AppError = require('../utils/appError');
const sendMail = require('../utils/sendMail');

const User = require('../model/userModel');

const sendJwtToken = (id) => {
  const jwtToken = jwt.sign({ id: id }, process.env.JWT_SECRET_CODE, {
    expiresIn: process.env.JWT_EXPIRE_IN_HOUR,
  });

  return jwtToken;
};

// user signup
exports.signup = catchingAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    role: req.body.role,
    passwordChangedAt: req.body.passwordChangedAt,
  });

  const token = sendJwtToken(newUser._id);
  res.status(201).json({ status: 'success', token, data: { newUser } });
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

  const token = sendJwtToken(user._id);
  res.status(200).json({ status: 'success', token });
});

// protect the route
exports.protect = catchingAsync(async (req, res, next) => {
  // get the token
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  // check the token
  if (!token) return next(new AppError('Please login first', 401));

  // verify the token
  const decode = jwt.verify(token, process.env.JWT_SECRET_CODE);

  // verify the user according to token
  const user = await User.findById(decode.id);

  if (!user) {
    return next(
      new AppError('The user belonging to this token no longer exists.', 404)
    );
  }
  //verify if the password change after get the token
  if (user.changePasswordAfter(decode.iat))
    return next(
      new AppError('password change recently please login agian', 401)
    );

  req.user = user;

  next();
});

// resteicted rote
exports.restictedTo =
  (...roles) =>
  (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new AppError('You are not permited to do this action', 401));
    }

    next();
  };

// forgetPassword route
exports.forgetPassword = catchingAsync(async (req, res, next) => {
  // get user according to the email
  const { email } = req.body;
  if (!email) {
    return next(new AppError('Please enter your email', 404));
  }
  const user = await User.findOne({ email });

  // check if the user exist
  if (!user) {
    return next(new AppError('user dose not exist to this email', 404));
  }
  // create passwordResetToken
  user.createPasswordResetToken();

  // save the information in database
  await user.save({ validateBeforeSave: false });
  const { passwordResetToken, passwordExpire } = user;

  // send the mail
  try {
    await sendMail(email, passwordResetToken, passwordExpire);

    res
      .status(200)
      .json({ status: 'success', message: 'mail send to your account' });
  } catch (err) {
    console.error(err);
    user.passwordResetToken = undefined;
    user.passwordExpire = undefined;
    await user.save({ validateBeforeSave: false });
    next(new AppError('Mail sent fail', 404));
  }
});
