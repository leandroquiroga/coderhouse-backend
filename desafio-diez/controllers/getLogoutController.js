const { request, response } = require("express");


const logoutController = (req = request, res = response) => {
  res.render('logout', {
    page: 'Cerrando Sesion..',
    title: 'Hasta luego',
    name: 'Leandro'
  });
};

module.exports = logoutController;