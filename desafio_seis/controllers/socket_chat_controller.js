const chats  = require('../models/chat.js')

const socketControllerChat = async(socket) => {
  socket.emit('chat', await chats.getAllChats());

  socket.on('new_message_client', async(payload, callback) => {
    const { nombre, texto } = payload;

    // Chequeamos que llegue los datos correctos
    if (nombre === '' || texto === '') {
      return callback({
        status: false,
        message: 'Todos los campos son obligatorios',
      });
    };
    await chats.newProduct(payload)
    

    socket.broadcast.emit('new_message_server', await chats.getAllChats());
    // Ejecutamos la alerta
    callback({
      status: true,
      message: 'Recibiste un nuevo mensaje'
    });
  });
};

module.exports = socketControllerChat