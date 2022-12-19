const { faker } = require('@faker-js/faker');
faker.locale = 'es';


function createRandomProducts () {
  return {
    name: faker.commerce.product(),
    price: faker.commerce.price(),
    image: faker.image.unsplash.image(),
  };
};

module.exports = {
  createRandomProducts
};