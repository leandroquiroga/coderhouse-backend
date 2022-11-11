const products = require('../models/productos.js');

const socketController = async (socket) => {
  // Eventos que se emiten cuando el usuario esta online 
  socket.emit('all_products', await products.getAllProducts());

  // Escucha el nuevo producto ingresado 
  socket.on('new_product', async (payload, callback) => {
    
    const { name, price, url_imagen } = payload

    // Chequeamos que llegue los datos correctos
    if (name === '' || price === '' || url_imagen === '') {
      return callback({
        status: false,
        message: 'Todos los campos son obligatorios',
      });
    };

    // Agregamos el nuevo producto;
    await products.newProduct(payload);
    // Emitimos los productos actualizados
    socket.broadcast.emit('all_products', await products.getAllProducts());

    // Ejecutamos la alerta
    callback({
      status: true,
      message: 'Se ha agregado un nuevo producto'
    });
  });
  
};


module.exports = socketController