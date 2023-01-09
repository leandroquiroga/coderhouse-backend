const { request, response } = require("express");


const homeController = (req = request, res = response) => {
  res.render('home', {
    page: 'Home',
    info: 'Bienvenido',
    name: 'Leandro',
    title: 'Dashboard',
    subtitle: 'Products',
    allProducts: []
  });
};

module.exports = homeController;