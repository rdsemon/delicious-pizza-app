const express = require('express');

const router = express.Router();

const authController = require('../controllers/authController');

const userController = require('../controllers/userController');

const { signup, login } = authController;

const { createUser } = userController;

router.post('/signup', signup);
router.post('/login', login);

router.route('/').post(createUser);

module.exports = router;
