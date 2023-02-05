const jwt = require('jsonwebtoken');
const { environment } = require('../configuration/environment');

const responseServerError = {
  status: false,
  message: 'Ups ! Ha ocurrido un error por favor comuniquese con el administrador'
};

const responseBadRequest = {
  status: false,
  message: 'El correo ya se encuentra registrado en nuestra bases de datos'
};

const generateJWT = (id, name) => {

  return new Promise((resolve, reject) => {
    const payload = { id, name };
    jwt.sign(payload, environment.JWT_PRIVATE_KEY, { expiresIn: '1h' },
      (err, token) => {
        if (err) reject('Error al generar el token', token);
        resolve(token)
    })
  });

};

module.exports = {
  responseServerError,
  responseBadRequest,
  generateJWT,
}