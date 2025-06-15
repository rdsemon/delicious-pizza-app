const express = require('express');

const pizzaController = require('../controllers/pizzaController');

const router = express.Router();

const { getAllpizza, getOnePizza, createPizza, updatePizza, deletePizza } =
  pizzaController;

router.route('/').get(getAllpizza).post(createPizza);

router.route('/:id').get(getOnePizza).patch(updatePizza).delete(deletePizza);
module.exports = router;
