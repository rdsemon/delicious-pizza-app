const mongoose = require('mongoose');
const main = require('../utils/mongooseConnection');

main();

const pizzaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Pizza name is required'],
    minLength: [5, 'Name must be at last 5 characters'],
    maxLength: [20, 'Name should have less then 20 characters'],
  },
  price: {
    type: Number,
    required: [true, 'Pizza must need a price'],
  },
  description: {
    type: String,
    required: [true, 'Pizza must have a description'],
    minLength: [30, 'Description must be at last 30 characters'],
    maxLength: [100, 'Description should have less then 100 characters '],
  },
  ingredients: {
    type: [String],
    required: [true, 'Pizza must need some ingredients'],
  },
  imageUrl: {
    type: String,
    // required: [true, 'Pizza must need an image'],
  },
  isVegetarian: {
    type: Boolean,
  },
  isSpicy: {
    type: Boolean,
  },
  category: {
    type: String,
    enum: [
      'Classic',
      'Healthy',
      'Cheese Lovers',
      'White Sauce',
      'Spicy',
      'Special',
    ],
  },
});

const Pizza = mongoose.model('Pizza', pizzaSchema);

module.exports = Pizza;
