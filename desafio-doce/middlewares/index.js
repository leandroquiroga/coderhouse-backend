const bCrypr = require('bcrypt');
const { request } = require('express');
const passport = require('passport');

const pageNotExist = (req, res, next) => {
  let error = new Error('Recurso no encontrado');
  error.status = 404;
  next(error);
};

const errorServer = (error, req, res, next) => {
  if (!error.status) {
    error.status = 500
    error.message = 'Internal Server Error'
  };

  console.log(error);
  res.status(error.status).json({
    message: error.message,
    code: error.status,
  });
};

const checkAuthentication = (req = request, res, next) => {

  if (!req.isAuthenticated()) {
    res.redirect('/v1/auth/login');
    return
  };
  next()
};  

const checkAuthPassaportError = (req = request, res, next) => {

  const path = req.path.split('/auth/').slice(1).join('');
  const pathRedirect = req.path

  passport.authenticate(path, { failureRedirect: `${pathRedirect}` });

  next();
};

module.exports = {
  pageNotExist,
  errorServer,
  checkAuthentication,
  checkAuthPassaportError,
}