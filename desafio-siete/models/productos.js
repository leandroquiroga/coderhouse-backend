const fs = require('fs');
const { options } = require('../configuration/options.mariaDB.js');
const knexDB = require('knex');

let arrProducts = [];

class Products {
  constructor(name) {
    this.folderName = name;
    this.product = arrProducts;  
    this.configDB = options;
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
  };

  // Almacenamos un nuevo producto a la bases de datos; 
  async insertDB(newProduct) {
    try {
      const knex = knexDB(this.configDB);

      await knex('products').insert(newProduct);
      
      knex.destroy();
      
      return {
        status: true,
        message: 'Se ha agregado un nuevo producto'
      }
    } catch (err) {
      console.log(err);
      knex.destroy();
      throw new Error(err);
    };
  };

  // Buscamos TODOS los productos en la bases de datos
  async getAllProductsDB() {
    try {
      const knex = knexDB(this.configDB);

      const data = await knex
        .from('products')
        .select('name', 'url_imagen', 'price');
      
      knex.destroy();

      return data
      // return JSON.parse(JSON.stringify(data[0]));
                            
    } catch (erro) {
      
    }
  }
};

const products = new Products();
module.exports = products;