const { createServer } = require('http');

const express = require('express');
const cors = require('cors');
const { Server: Socket } = require('socket.io');

const { envieroment } = require('../configuration/envieroment');
const router = require('../router');
const { errorServer, pageNotExist } = require('../middlewares');

class Server {
  constructor() {
    this.app  = express();
    this.port = envieroment.URI_PORT;
    this.url = envieroment.URI_URL;
    this.server = createServer(this.app);
    this.io = new Socket(this.server);
    
    this.middleware()
    this.router();
    this.error();
  };

  middleware() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  };

  router() {
    this.app.use('/v1', router);
  };

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