const { request, response } = require("express");
const productos = require("../models/productos");


const homeController = async (req = request, res = response) => {
  res.render('home', {
    page: 'Home',
    info: 'Bienvenido',
    name: req.session.name,
    title: 'Dashboard',
    subtitle: 'Products',
    allProducts: await productos.getProductos()
  });
};

module.exports = homeController;