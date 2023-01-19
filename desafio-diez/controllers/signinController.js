const { request, response } = require("express");


const signinController = (req = request, res = response) => {
  const { name: user } = req.body;
  if (!user) {
    return res.status(400).json({
      message: 'Ingrese un nombre por favor',
      status: false,
    });
  };
  
  const name = 'Nombre';
  const value = user;
  const config = {
    signed: true,
    maxAge: 10000
  } 

  res.cookie(name, value, config);    
  req.session.name = value

  res.status(200).json({
    message: 'Iniciando Sesion..',
    status: true
  })
};

module.exports = signinController