const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = express();

app.get('/', (req, res) => res.send('hello world'));

module.exports = app;
