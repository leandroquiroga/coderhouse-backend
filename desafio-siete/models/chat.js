const fs = require('fs');
const { options } = require('../configuration/options.sqlite3');
const knexDB = require('knex');

class Chats {
  constructor() {
    this.configDB = options;
  };
  
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
  };

  // Obtenemos todos los chats 
  async getAllChatsDB() {
    try {
      const knex = knexDB(this.configDB);
      const data = await knex
        .from('chats')
        .select('*')
      knex.destroy();
      return data
    } catch (err) {
      console.log(err.message);
      throw new Error(err);
    };
  };

  // Guardamos todos los datos en la bases de datos
  async saveNewChat(chat) {
    try {
      const knex = knexDB(this.configDB);
      await knex('chats').insert(chat);
      knex.destroy();
      return {
        status: true,
        message: 'Recibiste un nuevo mensaje'
      };
    } catch (err) {
      console.log(err.message);
      throw new Error(err);
    }
  }
};

const chats = new Chats();
module.exports = chats;