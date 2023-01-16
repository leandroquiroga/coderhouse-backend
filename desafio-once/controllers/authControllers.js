const { request, response } = require("express");

const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;

const UserSchema = require('./../schemas/users');
const { checkPassword, createHash } = require("./../auth/auth");

const authLoginController = (_req = request, res = response) => {
  passport.use('login', new LocalStrategy((email, password, done) => {
    UserSchema.findOne((email)), (err, user) => {
      if (err) return done(err);

      // Verifica que el usuario exista
      if (!user) {
        res.status(400).json({
          status: false,
          message: 'Email incorrecto'
        });
        return done(null, false)
      };
        
      // Verifica que la contraseña coincida
      if (!checkPassword(user, password)) {
        res.status(400).json({
          status: false,
          message: 'Contraseña incorrecto'
        });
          
        return done(null, false)
      };
        
      return done(null, user);
    }
  },
  ));
};

const authSingUpController = (req = request, res = response) => {
  passport.use('singup', new LocalStrategy({
    passReqToCallback: true
  },
    ( email, password, done) => {
      UserSchema.findOne({ email }), (err, user) => {
        if (err) return done(err);
        
        // Verifica si el usuario existe
        if (user) {
          res.status(400).json({
            status: false,
            message: 'El usuario ya existe, por favor ingrese otro email'
          });
          return done(null, false);
        };

        // Creamos el nuevo usuario
        const newUser = {
          name: req.body.name,
          password: createHash(password),
          email: req.body.email
        };

        UserSchema.create(newUser, (err, userWithId) => {
          if (err) return done(err);

          return done(null, userWithId)
        });
      };
    },
  ))
};

module.exports = {
  authLoginController,
  authSingUpController
}