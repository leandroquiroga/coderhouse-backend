const { createServer } = require('http');
const path = require('path');

const express = require('express');
const cors = require('cors');
const { Server: Socket } = require('socket.io');

const { environment } = require('../configuration/environment');
const router = require('../router');
const session = require('express-session');
const passportConfig = require('../configuration/passport.config');
const passport = require('passport');
const socketControllers = require('../controllers/socketControllers');
const dbConnect = require('../database/database.connect');


class Server { 
  constructor() { 
    this.app = express();
    this.port = environment.PORT;
    this.uri = environment.URI;
    this.server = createServer(this.app);
    this.socket = new Socket(this.server);

    this.dbConnect();
    this.middleware();
    this.socket();
    this.router();
    this.template();
  };

  async dbConnect() {
    await dbConnect();
  }

  middleware() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(session(passportConfig));
    this.app.use(passport.initialize());
    this.app.use(passport.session());
  };

  router() {
    this.app.use('/v1', router)
  }
  template() {
    this.app.set('view engine', 'pug');
    this.app.set('views', path.join(__dirname + './../views'));
  };

  socket() {
    this.io.on('connection', socketControllers);
  }
  listen() {
    this.server.listen(this.port, () => {
      (this.port)
        ? console.log(`Server running on http://${this.uri}:${this.port}`)
        : console.log(`Server failded! Please contact whith administrator`)
    });
  }
}

const server = new Server();
module.exports = server;