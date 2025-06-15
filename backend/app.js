const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');
const pizzaRoute = require('./routers/pizzaRoute');
const globalErrorHandaler = require('./controllers/errorController');
const AppError = require('./utils/appError');

dotenv.config({ path: './config.env' });

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

console.log(process.env.NODE_ENV);

app.use(express.json());

app.use('/api/v1/pizza', pizzaRoute);

app.all(/(.*)/, (req, res, next) => {
  next(new AppError(`can't find url ${req.originalUrl} route`, 404));
});

app.use(globalErrorHandaler);

module.exports = app;
