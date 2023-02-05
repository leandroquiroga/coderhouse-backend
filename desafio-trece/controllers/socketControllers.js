const products = require("../models/products");

const socketControllers = async (socket) => {

  socket.emit('ALL_PRODUCTS', await products.getProductDB());

  socket.on('NEW_PRODUCTS', async (data, callback) => {

    const { name, price, url_image } = data;
    const arrProperties = [name, price, url_image];

    if (arrProperties.includes('')) {
      return callback({
        status: false,
        message: 'Todos los campos son obligatorios',
      });
    };

    await products.newProduct(data);
    socket.broadcast.emit('ALL_PRODUCTS', await products.getProductDB());
    callback({
      status: true,
      message: 'Se agrego un nuevo producto'
    });
    
  });
};

module.exports = socketControllers;