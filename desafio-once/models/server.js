const { createServer } = require('http');

const express = require('express');
const cors = require('cors');
const { Server: Socket } = require('socket.io');

const { environment } = require('../configuration/environment');


class Server { 
  constructor() { 
    this.app = express();
    this.port = environment.PORT;
    this.uri = environment.URI;
    this.server = createServer(this.app);
    this.socket = new Socket(this.server);
  };

  middleware() {
    this.app.use(cors());
  }
  listen() {
    this.server.listen(this.port, () => {
      (this.port)
        ? console.log(`Server running on http://${this.uri}:${this.port}/v1`)
        : console.log(`Server failded! Please contact whith administrator`)
    });
  }
}

const server = new Server();
module.exports = server;