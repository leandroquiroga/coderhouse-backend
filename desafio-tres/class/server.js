const fs = require('fs');
const express = require('express');
const { request, response } = require('express');
require('dotenv').config();

class Server{
  
  constructor(){
    this.app = express()
    this.port = process.env.PORT || 8080;
    // Rutas
    this.routes();
  }


  routes(){
    this.app.get('/productos', async(_req = request, res = response) => {
      try {
        // Traemos los productos
        const data = await fs.promises.readFile('./data/producto.txt', 'utf-8');
        
        // Parseamos la informacion; 
        const productos = JSON.parse(data);
        
        return res.status(200).json({
          mensaje: 'Todos los productos disponibles',
          productos
        });

      } catch (err) {
        throw new Error(err);
      }

    });


    this.app.get('/productosRandom', async(_req = request, res = response) => {
    
      try {
        // Traemos los productos
        const data = await fs.promises.readFile('./data/producto.txt', 'utf-8');
      
        // Parseamos productos
        const productos = JSON.parse(data);

        //Creamos un ID unico entre el 1 y 3
        let id = Math.floor(Math.random() * 3 + 1);

        // Filtramos producto unico 
        const producto = productos.filter(prod => prod.id === id);

        return res.status(200).json({
          mensaje: `ID: ${id}`,
          producto
        });
      } catch (err) {
        throw new Error(err);
      };
    }); 
  };

  listen(){
    this.app.listen(this.port, () => {
      (this.port)
        ? console.log(`Servidor corriendo en http://localhost:${this.port}/productos`)
        : console.log(`No se pudo acceder al servidor, intente luego`)
    });
  }
};


module.exports = Server;