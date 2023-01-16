const { environment } = require("./environment");


const passportConfig = {
  secret: environment.PASSPORT_SECRET,
  cookie: {
    httpOnly: false,
    secure: false,
    maxAge: environment.EXPIRATION_TIME,
  },
  rolling: true,
  reserve: true,
  saveUninitialized: false,
};

module.exports = passportConfig;