const fs = require('fs');

// Contador
let id = 1;

// Array de productos que se va incrementar su contenido por cada producto agregado
let arrProducto = [];

class Contenedor{

  constructor(name){
    this.name = name;
    this.producto = arrProducto;
    this.producto_id = id;
  };

  // Metodo para crear el directorio
  async createFolder(){
    try {
      const existeCarpeta = fs.existsSync('./data');
      
      // Chequeamos que el directorio exista
      if(!existeCarpeta){
        await fs.promises.mkdir('./data');
         console.log(`Se ha creado la carpeta data en su directorio raiz`);
        return
      };

      return
    } catch (err) {
      throw new Error(err);
    };
  };

  // Metodo guardar archivo
  async save(producto){

    try {

      // Buscamos los productos
      const existsProductos = fs.existsSync(`./data/${this.name}`);
      // Chequeamos si los productos existen
      if(!existsProductos) {
        // Creamos el ID
        producto.id = this.producto_id++;
        // Lo guardamos en el arreglo
        this.producto.push(producto);
        // Utilizamos el file system para guardar todos los productos en un txt
        await fs.promises.writeFile(`./data/${this.name}`, JSON.stringify(this.producto));
        // Retornamos el id del producto actual 
        return console.log(`Se a creado un nuevo producto - ID:${producto.id}`);
      };

      return

    } catch (err) {
      throw new Error(err);
    };
  };
};

module.exports = Contenedor;