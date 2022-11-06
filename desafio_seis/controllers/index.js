const { request, response } = require('express');
const productos = require('../data/productos.json')
const pageInitController = (_req = request, res = response, socket) => {
  res.render('inicio', {
    page: 'Inicio',
    subtitle:'Productos',
    title: 'Cargar producto',
    productos
  })
};

module.exports = pageInitController;