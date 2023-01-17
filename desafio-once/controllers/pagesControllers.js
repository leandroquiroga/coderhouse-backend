const { request, response } = require("express");
const product = require("../models/products");


const homePageController = async (_req = request, res = response) => {
  const allProducts = product.getProductDB();
  res.render('home', {
    page: 'Home',
    allProducts
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