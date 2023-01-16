const bCrypr = require('bcrypt');

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

  res.status(error.status).json({
    message: error.message,
    code: error.status,
  });
};

const checkAuthentication = (req, res, next) => {
  
  if (!req.isAuthenticated()) {
    res.redirect('/v1/auth/login');
    return
  };
  next()
};  


module.exports = {
  pageNotExist,
  errorServer,
  checkAuthentication,

}