const { request, response } = require('express');
const products = require('../models/productos.js')

const pageInitController = async (_req = request, res = response, socket) => {

  res.render('inicio', {
    page: 'Inicio',
    subtitle:'Productos',
    title: 'Cargar producto',
    allProducts: await products.getAllProducts()
  })
};

module.exports = pageInitController;