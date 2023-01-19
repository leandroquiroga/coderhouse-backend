import express, { response } from 'express';
import cors from 'cors';
import { config } from 'dotenv';
config();

import { router } from '../routes/index.js';



export class Server {
  
  constructor(){
    this.app  = express();
    this.port = process.env.PORT || 3000;

    this.templates();
    
    this.middleware();

    this.routes();
  };

  middleware(){
    this.app.use(cors());
    this.app.use(express.urlencoded({extended: true}));
    this.app.use(express.json());
  }
  templates() {
    this.app.set('view engine', 'pug');
    this.app.set('views', './src/views');
  }
  
  routes() {
    this.app.use('/api', router)
  };

  listen(){
    this.app.listen(this.port, () => {
      (this.port) 
        ? console.log(`Servidor corriendo en http://localhost:${this.port}/api/home`)
        : console.log('Fallo la conexion al servidor, por favor contanctece con el administrador');
    });
  }
};