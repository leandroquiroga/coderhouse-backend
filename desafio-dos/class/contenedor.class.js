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
      // Creamos el ID
      producto.id = this.producto_id++;
      // Lo guardamos en el arreglo
      this.producto.push(producto);
      // Utilizamos el file system para guardar todos los productos en un txt
      await fs.promises.writeFile(`./data/${this.name}`, JSON.stringify(this.producto));
      // Retornamos el id del producto actual 
      return console.log(`Se a creado un nuevo producto - ID:${producto.id}`);

    } catch (err) {
      throw new Error(err);
    };
  };

  // Metodo para buscar un id en particular
  async getById(id){

    try {
      // Recuperamos todos los productos
      const data = await fs.promises.readFile(`./data/${this.name}`, 'utf-8');

      // Parseamos la informacion 
      const arrProducto = JSON.parse(data);

      // Filtramos el producto por id
      const productoFiltrado = arrProducto.filter(prod => prod.id === id);

      // Retornamos el producto filtrado
      return console.log(`Producto - ${id}: ${productoFiltrado}`);      
    
    } catch (err) {
      throw new Error(err);
    };

  };

  // Metodo para recuperar TODOS los productos
  async getAll(){

    try {
      // Recuperamos todos los productos
      const data = await fs.promises.readFile(`./data/${this.name}`, 'utf-8');

      // Parseamos la informacion 
      const productos = JSON.parse(data);

      return console.log('Todos los productos: ', productos); 
    } catch (err) {
      throw new Error(err);
    };
  };

  // Metodo para eliminar un producto por ID 
  async deleteByID(id){

    try {
      // Recuperamos todos los elementos
      const data = await fs.promises.readFile(`./data/${this.name}`, 'utf-8');
          
      // Parseamos los datos
      const productos = JSON.parse(data);

      // Eliminamos el producto por id
      const nuevoArreglo = productos.filter(prod => prod.id !== id);

      // Guardamos el nuevo arreglo filtrado
      await fs.promises.writeFile(`./data/${this.name}`, JSON.stringify(nuevoArreglo));
      
      console.log(`Se elimino el producto con el id: ${id}`);
    } catch (err) {
      throw new Error(err);
    };
  };

  // Metodo para eliminar TODOS los elementos del archivo
  async deleteAll(){
    await fs.promises.writeFile(`./data/${this.name}`, JSON.stringify([]));
    console.log(`Se han eliminado todos los productos`);
  };

};

const producto = new Contenedor('producto.txt');


module.exports = producto;