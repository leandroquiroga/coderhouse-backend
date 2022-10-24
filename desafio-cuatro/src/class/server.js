const express = require('express');
const cors = require('cors');
const route = require('../routes');
require('dotenv').config();


class Server {
  
  constructor(){
    this.app  = express();
    this.port = process.env.PORT || 3000;

    // TODO: Usar el metodo de los middleware
    this.middleware();
    // TODO: Usar el metodo de las rutas 
    this.routes();
  };

  middleware(){
    this.app.use('/api/productos/nuevo', express.static('public'));
    this.app.use(express.urlencoded({extended: true}));
    this.app.use(cors());
    this.app.use(express.json());
  }
  routes(){
    this.app.use('/api/productos', route);
  };

  listen(){
    this.app.listen(this.port, () => {
      (this.port) 
        ? console.log(`Servidor corriendo en http://localhost:${this.port}`)
        : console.log('Fallo la conexion al servidor, por favor contanctece con el administrador');
    });
  }
};


module.exports = Server;