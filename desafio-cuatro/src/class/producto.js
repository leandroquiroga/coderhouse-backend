// const fs = require('fs');
import fs from 'fs';


export class Producto {
  constructor(){};

  async getAllProducts(){
    const prodcutos = await fs.promises.readFile('./src/data/products.json', 'utf-8');
    const arrayProductos = JSON.parse(prodcutos);

    return arrayProductos;
  };

  async filterProduct(id){
    const productos = await fs.promises.readFile('./src/data/products.json', 'utf-8');
    const arrayProductos = JSON.parse(productos);
    
    const productoFiltrado = arrayProductos.filter(prod => prod.id === id);

    return productoFiltrado
  };

  async newProduct(newProdcuto){

    const productos = await this.getAllProducts();

    newProdcuto.id = productos.length + 1;
    productos.push(newProdcuto);

    await fs.promises.writeFile('./src/data/products.json', JSON.stringify(productos));
    
    return newProdcuto;
  }

  async putProducts(id, producto){
    const arrayProductos = await this.getAllProducts();

    arrayProductos.forEach(prod => {
      if(prod.id === id){
        prod.price = producto.price,
        prod.name = producto.name
      };
    }); 

    await fs.promises.writeFile('./src/data/products.json', JSON.stringify(arrayProductos));
  };

  async deleteProduct(id){
    const prodcutos = await this.getAllProducts()
    const nuevoArrProducto = prodcutos.filter(prod => prod.id !== id);

    await fs.promises.writeFile('./src/data/products.json', JSON.stringify(nuevoArrProducto));
  }
};

// module.exports = prodcuto