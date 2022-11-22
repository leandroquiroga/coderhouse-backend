const chats  = require('../models/chat.js')

const socketControllerChat = async(socket) => {
  socket.emit('chat', await chats.getAllChatsDB());

  socket.on('new_message_client', async(payload, callback) => {
    const { nombre, texto } = payload;

    // Chequeamos que llegue los datos correctos
    if (nombre === '' || texto === '') {
      return callback({
        status: false,
        message: 'Todos los campos son obligatorios',
      });
    };
    const info = await chats.saveNewChat(payload)
    

    socket.broadcast.emit('new_message_server', await chats.getAllChatsDB());
    // Ejecutamos la alerta
    callback(info);
  });
};

module.exports = socketControllerChat