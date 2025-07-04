const dotenv = require('dotenv');
const express = require('express');
const ratelimit = require('express-rate-limit');
const helmet = require('helmet');

const morgan = require('morgan');

// express router module
const pizzaRoute = require('./routers/pizzaRoute');
const userRouter = require('./routers/userRoute');
const reviewRouter = require('./routers/reviewRoute');
// error handeling module
const sanitize = require('./utils/sanitize');
const globalErrorHandaler = require('./controllers/errorController');
const AppError = require('./utils/appError');

dotenv.config({ path: './config.env' });

const app = express();

app.use(helmet());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

console.log(process.env.NODE_ENV);

app.use(express.json({ limit: '10kb' }));

app.use((req, res, next) => {
  if (req.body) req.body = sanitize(req.body);
  if (req.params) req.params = sanitize(req.params);
  if (req.query) req.query = sanitize(req.query);

  next();
});

const limiter = ratelimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  message: 'Too many request from this ip. Please try again 15 minutes letter',
});

app.use('/api', limiter);
app.use('/api/v1/pizza', pizzaRoute);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/review', reviewRouter);

app.all(/(.*)/, (req, res, next) => {
  next(new AppError(`can't find url ${req.originalUrl} route`, 404));
});

app.use(globalErrorHandaler);

module.exports = app;
