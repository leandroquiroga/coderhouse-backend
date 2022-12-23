const fs = require('fs');
const utils = require('util');
const { denormalize, normalize } = require('normalizr');

const { postSchema, textSchema } = require('../helpers/schema.normalize');

class Chat {
  constructor() {};
  
  async getAllChats() {
    try {
      const allUser = await fs.promises.readFile('./data/chat.json', 'utf-8');
      const allChats = await fs.promises.readFile('./data/text.json', 'utf-8');
      const arrAllUsers = JSON.parse(allUser);
      const arrAllChats = JSON.parse(allChats);
      return {
        arrAllChats,
        arrAllUsers
      };
    } catch (error) {
      throw new Error(error.message);
    };
  }
  
  async getSaveNewChat(data) {
    try {
      const { arrAllChats, arrAllUsers } = await this.getAllChats();
      const { author } = arrAllUsers;
      const { messages } = arrAllChats;
      const { user, text } = data;
      
      // Guardamos los autores
      author.push(user);
      await fs.promises.writeFile('./data/chat.json', JSON.stringify(author));
      // Guardamos los mensajes
      messages.push(text)
      await fs.promises.writeFile('./data/text.json', JSON.stringify(messages));
    } catch (error) {
      throw new Error(error.message);
    }
  };

  async getChatNormalized() {
    try {
      const { arrAllChats, arrAllUsers } = await this.getAllChats();
      const authors = normalize(arrAllUsers, postSchema);
      const messages = normalize(arrAllChats, textSchema);     
      return {
        authors,
        messages
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };

  async getChatDesnormalized() {
    try {
      const {authors, messages} = await this.getChatNormalized();
      const authorsDenormalized = denormalize(authors.result, postSchema, authors.entities);
      const messageDenormalized = denormalize(messages.result, textSchema, messages.entities);
      return {
        messageDenormalized,
        authorsDenormalized
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };

  async getAverageMessages() {
    try {
      const { messages } = await this.getChatNormalized();
      const { messageDenormalized } = await this.getChatDesnormalized();

      const averageMessages = Math.floor(JSON.stringify(messageDenormalized).length * 100 / JSON.stringify(messages).length )
      
      return 100 - averageMessages;

    } catch (error) {
      throw new Error(error.message)
    }
  };
};
const chat = new Chat();

module.exports = chat;