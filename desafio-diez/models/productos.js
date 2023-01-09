const schemaProductos = require('./../schemas/product.schema');

class Productos {
  constructor() {
    this.productos = [];
  };

  async getProductos() {
    try {
      this.productos = await schemaProductos.find();
      return this.productos;
    } catch (error) {
      throw new Error(error);
    };
  };

  async nuevoProducto(data) {
    try {
      const producto = new schemaProductos(data);
      await producto.save();
    } catch (error) {
      throw new Error(error);
    }
  }
};

const productos = new Productos();
module.exports = productos;