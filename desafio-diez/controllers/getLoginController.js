const { request, response } = require("express");


const loginController = (req = request, res = response) => {
  
  res.render('login', {
    page: 'Login',
    title: 'Iniciar Sesion'
  });
};

module.exports = loginController;