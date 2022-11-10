const fs = require('fs');
const path = require('path');
const { createServer } = require('http');

const express = require('express');
const cors = require('cors');
const { Server: Socket } = require('socket.io')

const router = require('../routes/index.js');
// const productos = require('../data/productos.json');
const socketController = require('../controllers/socket_controller.js');
class Server {
  
  constructor() {
    this.app    = express();
    this.port   = process.env.PORT || 3000;
    this.server = createServer(this.app);
    this.io     = new Socket(this.server);
    
    this.socket();
    this.middleware();
    this.router();
    this.templates()
  };

  middleware() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: true }));
  };

  templates() {
    this.app.set('view engine', 'pug');
    this.app.set('views', path.join(__dirname + './../views'))
  }

  router() {
    this.app.use('/v1/productos', router);
  };

   socket() {
    this.io.on('connection', socketController)
  };
  
  //TODO: Realizar el chat entre el cliente y el servidor

  listen() {
    this.server.listen(this.port,
      (this.port)
        ? console.log(`Server running on http://localhost:${this.port}/v1/productos`)
        : console.log('Server Faild, please contact with administrator')
    );
  };
};


module.exports = Server;