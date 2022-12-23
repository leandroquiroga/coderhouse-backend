const { request, response } = require("express");
const chatModel = require('../models/chat');

const chatContoller = async (_req = request, res = response) => {

  // Enviamos al PUG los datos desnormalizados
  const { authorsDenormalized: user,  messageDenormalized: chat} = await chatModel.getChatDesnormalized();

 const averageMessages = await chatModel.getAverageMessages()
  res.render('chat', {
    page: 'Inicio',
    allChats: chat.messages,
    allUsers: user.author,
    average: averageMessages
  })
};

module.exports = {
  chatContoller,
}