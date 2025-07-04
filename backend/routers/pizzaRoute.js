const express = require('express');

const router = express.Router();

const pizzaController = require('../controllers/pizzaController');
// const authController = require('../controllers/authController');
const reviewRoute = require('./reviewRoute');

const { getAllpizza, getOnePizza, createPizza, updatePizza, deletePizza } =
  pizzaController;

// const { protect } = authController;
router.use('/:pizzaId/review', reviewRoute);
router.route('/').get(getAllpizza).post(createPizza);

router.route('/:id').get(getOnePizza).patch(updatePizza).delete(deletePizza);
module.exports = router;
