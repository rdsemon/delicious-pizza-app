const dotenv = require('dotenv');

const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

async function main() {
  try {
    await mongoose.connect(process.env.MONGOOSE_URL);
    console.log('connection successfull');
  } catch (err) {
    console.error(err);
    console.log('connection fail');
  }
}

main();

module.exports = main;
