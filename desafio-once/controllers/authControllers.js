const { request, response } = require("express");
const bcrypt = require('bcrypt');

const UserSchema = require('./../schemas/users');
const { checkPassword } = require("./../auth/auth");
const { responseServerError, responseBadRequest, generateJWT } = require("../utils");

const authLoginController = async (req = request, res = response) => {
  const { email, password } = req.body;

  try {
    // Buscamos el usuario
    let user = await UserSchema.findOne({ email });
    // Chequeamos si existe el usuario en la base de datos  
    if (!user) return res.status(400).json(responseBadRequest);
    
    // Validamos contraseña
    const validPassword = await checkPassword(user, password);
    if (!validPassword) return res.status(400).json({
      status: false,
      message: 'Las contraseñas no coinciden'
    });
    // Generamos el token
    const token = await generateJWT(user.id);
    return res.status(200).json({
      status: true,
      name: user.name,
      token,
    });
  } catch (error) {
    res.status(500).json(responseServerError);
  }
};

const authSingUpController = async (req = request, res = response) => {
  const { email, password, name } = req.body;

  try {
    let user = await UserSchema.findOne({ email });
    // Chequeamos si existe el usuario en la base de datos  
    if (user) return res.status(400).json(responseBadRequest);

    // Encriptamos la contraseña y guardamos el usuario 
    user = new UserSchema(req.body);
    const saltRounds = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, saltRounds);
    await user.save();

    // Generamos el token
    const token = await generateJWT(user.id, name);

    return res.status(200).json({
      status: true,
      message: 'Se ha creado un nuevo usario',
      user,
      token
    });
  } catch (error) {
    res.status(500).json(responseServerError);
  }

};

const logoutSingUpController = (_req = request, res = response) => {
  res.render('logout', {
    page: 'Logout',
    title: 'Hasta luego',
    ancla: 'Inicia Sesion'
  }) 
};

module.exports = {
  authLoginController,
  authSingUpController,
  logoutSingUpController
}