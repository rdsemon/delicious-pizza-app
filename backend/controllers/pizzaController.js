const Pizza = require('../model/pizzaModel');
const AppError = require('../utils/appError');

const catchAsync = require('../utils/catchingAsync');
//for getting all the pizzas
exports.getAllpizza = catchAsync(async (req, res, next) => {
  const data = await Pizza.find();

  res
    .status(200)
    .json({ status: 'success', totalPizza: data.length, data: { data } });
});
// get one pizzabuId
exports.getOnePizza = catchAsync(async (req, res, next) => {
  const data = await Pizza.findById(req.params.id);

  if (!data) {
    return next(
      new AppError(`can't find pizza with this ${req.params.id} id`, 404)
    );
  }

  res.status(200).json({ status: 'success', data });
});
//create one pizza
exports.createPizza = catchAsync(async (req, res) => {
  const data = await Pizza.create(req.body);

  res.status(201).json({ status: 'success', data });
});

//update pizza
exports.updatePizza = catchAsync(async (req, res, next) => {
  const data = await Pizza.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!data) {
    return next(
      new AppError(`can't update pizza with this ${req.params.id} id`, 404)
    );
  }

  res.status(200).json({ status: 'success', data });
});

// delete the pizza
exports.deletePizza = catchAsync(async (req, res, next) => {
  await Pizza.findByIdAndDelete(req.params.id);

  res.status(204).json({ message: 'successfully deleted item' });
});
