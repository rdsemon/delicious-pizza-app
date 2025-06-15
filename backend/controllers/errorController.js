const AppError = require('../utils/appError');

const handleCastError = (err) => {
  const message = `Invalid ${err.path} ${err.value}`;
  return new AppError(message, 404);
};

const handleValidationError = (err) => {
  const messages = Object.values(err.errors).map((el) => el.message);
  const message = `Validation failed: ${messages.join(', ')}`;
  return new AppError(message, 400);
};

const sendErrDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
    error: err,
  });
};

const sendErrProd = (err, res) => {
  if (err.isOperational) {
    res
      .status(err.statusCode)
      .json({ status: err.status, message: err.message });
  } else {
    // console.error('error❌', err);
    res.status(500).json({ status: 'error', message: 'something went wrong' });
  }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  err.message = err.message || 'bad request';

  if (process.env.NODE_ENV === 'development') {
    sendErrDev(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = {
      ...err,
      name: err.name,
      message: err.message,
    };

    if (error.name === 'CastError') error = handleCastError(error);
    if (error.name === 'ValidationError') error = handleValidationError(error);

    sendErrProd(error, res);
  }
};
