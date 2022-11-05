import { createServer } from 'http';
import express from "express";
import cors from 'cors';
import { Server as Socket } from 'socket.io';

import router from '../routes/index.js';

class Server {
  
  constructor() {
    this.app    = express();
    this.port   = process.env.PORT || 3000;
    this.server = createServer(this.app);
    this.io     = new Socket(this.server);
    

    this.socket();
    this.middleware();
    this.router();
  };

  middleware() {
    this.app.use(express.static('public'));
    this.app.use(express.json());
    this.app.use(cors());
  };

  router() {
    this.app.use('/v1/productos', router);
  };

  socket() {
    this.io.on('connection', (socket) => {
      console.log('User connected');
    });
  }

  listen() {
    this.server.listen(this.port,
      (this.port)
        ? console.log(`Server running on http://localhost:${this.port}/v1`)
        : console.log('Server Faild, please contact with administrator')
    );
  };
};


export default Server;