import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
config();

import { route } from '../routes/index.js'

export class Server {
  
  constructor(){
    this.app  = express();
    this.port = process.env.PORT || 3000;

    // TODO: Usar el metodo de los middleware
    this.middleware();
    // TODO: Usar el metodo de las rutas 
    this.routes();
  };

  middleware(){
    this.app.use(express.urlencoded({extended: false}));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static('public'));
  }
  routes(){
    this.app.use('/api/productos', route );
  };

  listen(){
    this.app.listen(this.port, () => {
      (this.port) 
        ? console.log(`Servidor corriendo en http://localhost:${this.port}`)
        : console.log('Fallo la conexion al servidor, por favor contanctece con el administrador');
    });
  }
};