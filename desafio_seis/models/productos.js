const fs = require('fs');

let arrProducts = [];

class Products {
  constructor(name) {
    this.folderName = name;
    this.product    = arrProducts;  
  };
  
  // Obrenemos todos los productos
  async getAllProducts() {
    try {      
      const products = await fs.promises.readFile('./data/products.json', 'utf-8');
      const arrProducts = JSON.parse(products);

      return arrProducts;

    } catch (err) {
      throw new Error(err)
    };
  };

  // Almacenamos un nuevo producto
  async newProduct(newProduct) {
    const products = await this.getAllProducts();

    products.push(newProduct);

    await fs.promises.writeFile('./data/products.json', JSON.stringify(products));

    return products
   }
};

const products = new Products();
module.exports = products;