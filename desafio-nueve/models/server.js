const path = require('path');
const { createServer } = require('http');

const express = require('express');
const cors = require('cors');
const { Server: Socket } = require('socket.io');

const envirioment = require('../configuration/envirioment');
const router = require('../router');


class Server{
  constructor() {
    this.app = express();
    this.port = envirioment.PORT;
    this.url = envirioment.URL;
    this.server = createServer(this.app);
    this.io = new Socket(this.server);


    this.middeleware();
    this.router();
    this.templeates();
    // this.socket()
  };

  middeleware() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: true }));
  };

  router() {
    this.app.use('/api', router);
  }

  templeates() {
    this.app.set('view engine', 'pug');
    this.app.set('views', path.join(__dirname + './../views'));
  };

  socket() {
    this.io.on('connection' /* chatSocketController */)
  };

  listen() {
    this.server.listen(this.port , () => {
      (this.port)
        ? console.log(`Server running on http://${this.url}:${this.port}`)
        : console.log(`Server faild, please contact with administrator`)
    });
  };
};

module.exports = Server;