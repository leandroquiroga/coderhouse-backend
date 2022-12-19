const { createRandomProducts } = require('../helpers/createProduct');

class Products {
  constructor() {};

  productsRandom(countProduct = 5) {
    const arrProducts = [];
    for (let i = 1; i <= countProduct; i++){
      const product = createRandomProducts();
      arrProducts.push(product);
    };

    return arrProducts;
  };

};

const products = new Products();
module.exports = products