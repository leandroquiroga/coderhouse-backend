const { request, response } = require('express');
const chats = require('../models/chat.js');
const products = require('../models/productos.js')

const pageInitController = async (_req = request, res = response, socket) => {

  res.render('inicio', {
    page: 'Inicio',
    subtitle:'Productos',
    title: 'Cargar producto',
    allProducts: await products.getAllProductsDB()
  })
};

const pageChatController = async (_req = request, res = response, socket) => {

  res.render('chat', {
    page: 'Chat',
    title: 'Bienvenidos a nuestro chat',
    allChats: await chats.getAllChats()
  })
};

module.exports = {
  pageInitController,
  pageChatController
};