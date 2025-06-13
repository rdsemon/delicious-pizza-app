const mongoose = require('mongoose');

async function main() {
  try {
    await mongoose.connect(process.env.MONGOOSE_URL);
    console.log('connection successfull');
  } catch (err) {
    console.error(err);
    console.log('connection fail');
  }
}

module.exports = main;
