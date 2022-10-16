// Instancia al contenedor
const Productos = require('./contenedor');

// Instancia al servidor
const Server = require('./server');



// Cargamos los productos
const producto_uno = {
  title: 'Arroz',
  price: 120.5,
  image: 'https://static.cotodigital3.com.ar/sitios/fotos/full/00247400/00247497.jpg?3.0.138f',
};
const producto_dos = {
  title: 'Fideos',
  price: 90.5,
  image: 'https://cdn11.bigcommerce.com/s-3stx4pub31/images/stencil/1280x1280/products/1384/3751/tallarin__69727.1654263708.jpg?c=2',
};

const producto_tres = {
  title: 'Bola de lomo',
  price: 650.75,
  image: 'https://www.estanciasferguson.com.ar/images/productos/cerdo/bola-de-lomo.jpg'
};


const initApp = () => {
  const productos = new Productos('producto.txt');

  // Creamos el directorio;
  productos.createFolder();
  
  // Guardamos los productos;
  productos.save(producto_uno);
  productos.save(producto_dos);
  productos.save(producto_tres);
 
  const server = new Server();
   //Servidor corriendo
  server.listen();
};

module.exports = initApp;


