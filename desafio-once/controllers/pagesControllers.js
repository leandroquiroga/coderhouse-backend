const { request, response } = require("express")

const homePageController = (_req = request, res = response) => {
  res.render('home', {
    page: 'Home',
    allProducts: []
  })
};

const loginPageController = (_req = request, res = response) => {
  res.render('login', {
    page: 'Login',
    title: 'Inicia Sesión'
  })
};

const singUpPageController = (_req = request, res = response) => {
  res.render('singup', {
    page: 'Sing up',
    title: 'Registrate'
  })
}


module.exports = {
  homePageController,
  loginPageController,
  singUpPageController
}