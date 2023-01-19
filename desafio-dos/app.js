const producto = require("./class/contenedor.class");

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

// Descomentar para probar la aplicacion


// Creamos el directorio
// producto.createFolder();

// Agregamos los nuevos productos
// producto.save(producto_uno);
// producto.save(producto_dos);
// producto.save(producto_tres);

// // Obtenemos todos los productos
//producto.getAll();

// // Obtenemos un elemento en particular
// producto.getById(2);

// // Eliminamos un producto
// producto.deleteByID(2);

// // Eliminamos todos los productos
// producto.deleteAll();