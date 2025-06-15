const fs = require('fs');

const Pizza = require('../../model/pizzaModel');

const pizzaData = JSON.parse(
  fs.readFileSync(`${__dirname}/pizza.json`, 'utf8')
);

async function importPizzaData() {
  try {
    pizzaData.map(async (pizza) => await Pizza.create(pizza));
    console.log('Pizza upload successfully');
  } catch (err) {
    console.error(err);
    console.log('Pizza upload fail');
  }
}

async function deletePizzaData() {
  try {
    await Pizza.deleteMany();
    console.log('pizza deleting successfull');
  } catch (err) {
    console.error(err);
    console.log('pizza deleting fail');
  }
}

if (process.argv[2] === '--import') {
  importPizzaData();
} else if (process.argv[2] === '--delete') {
  deletePizzaData();
}
