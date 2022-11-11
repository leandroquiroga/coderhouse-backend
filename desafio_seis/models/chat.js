const fs = require('fs');

class Chats {
  constructor() {};
  
  // Obrenemos todos los Chats
  async getAllChats() {
    try {      
      const allChats = await fs.promises.readFile('./data/arrayChat.json', 'utf-8');
      const arrAllChats = JSON.parse(allChats);

      return arrAllChats;

    } catch (err) {
      throw new Error(err)
    };
  };

  // Almacenamos un nuevo chat
  async newProduct(newChat) {
    const allChats = await this.getAllChats();

    allChats.push(newChat);

    await fs.promises.writeFile('./data/arrayChat.json', JSON.stringify(allChats));

    return allChats
   }
};

const chats = new Chats();
module.exports = chats;