const path = require('path');
const { createServer } = require('http');

const express = require('express');
const session = require('express-session');
const cors = require('cors');
const { Server: Socket } = require('socket.io');
const cookieParser = require('cookie-parser');

const { envieroment } = require('../configuration/envieroment');
const router = require('../router');
const { errorServer, pageNotExist } = require('../middlewares');
const dbConnect = require('../configuration/db.connect');
const socketControllers = require('../controllers/socketController');
const sessionConfig = require('../configuration/session.config');

class Server {
  constructor() {
    this.app  = express();
    this.port = envieroment.URI_PORT;
    this.url = envieroment.URI_URL;
    this.cookies = envieroment.COOKIES_SECRET;
    this.server = createServer(this.app);
    this.io = new Socket(this.server);
    
    this.dbConnect();
    this.middleware()
    this.template();
    this.socket();
    this.router();
    this.error();
  };

  async dbConnect() {
    await dbConnect()
  }

  middleware() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser(this.cookies))
    this.app.use(session(sessionConfig))
  };

  template() {
    this.app.set('view engine', 'pug');
    this.app.set('views', path.join(__dirname + './../views'))
  }
  router() {
    this.app.use('/v1', router);
  };

  socket() {
    this.io.on('connection', socketControllers)
  }
  error() {
    this.app.use(pageNotExist);
    this.app.use(errorServer);
  };

  listen() {
    this.server.listen(this.port, () => {
      (this.port)
        ? console.log(`Server running on http://${this.url}:${this.port}/v1`)
        : console.log(`Server faild, please contact with administrator`)
    });
  };
};

const server = new Server();

module.exports = server;