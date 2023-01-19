const chatModel = require('../models/chat');

const socketController = async (socket) => {
  socket.emit('user_connect', await chatModel.getChatNormalized());

  socket.on('new_chat_user', async (payload, callback) => {
    const { user, text, id} = payload;
    const { userName, name, lastName, year, alias, avatar } = user;
    const { message } = text;
    
    const arrUser = [userName, name, lastName, year, alias, avatar, message];

    if (arrUser.includes('')) {
      return callback({
        status: false,
        message: 'Todos los campos son obligatorios'
      });
    };
    const data = { id, user, text };
    await chatModel.getSaveNewChat(data);
    socket.broadcast.emit('new_chat_user', await chatModel.getChatNormalized());

    callback({
      status: true,
      message: 'Recibiste un nuevo chat'
    })
  });
};

module.exports = socketController;