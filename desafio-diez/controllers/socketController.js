const productos = require("../models/productos");


const socketControllers = async (socket) => {
  socket.emit('ALL_ PRODUCTS', await productos.getProductos());
  socket.on('NEW_PRODUCTS', async (data, callback) => {
    const { name, price, url_image } = data;
    const arrProperties = [name, price, url_image];

    if (arrProperties.includes('')) {
      return callback({
        status: false,
        message: 'Todos los campos son obligatorios',
      });
    };

    await productos.nuevoProducto(data);
    socket.broadcast.emit('ALL_ PRODUCTS', await productos.getProductos());
    callback({
      status: true,
      message: 'Se agrego un nuevo producto'
    });
    
  });
};

module.exports = socketControllers;