import { request, response } from "express";
import { render } from "pug/lib/index.js";
import { producto } from "../../app.js";


export const getAllProducts = async(_req = request, res = response) => {
  
  try {
    const productos = await producto.getAllProducts();
    
    if (productos.length === 0) {
      // TODO: Renderizar pagina que no hay productos
      return res.render('noProductos', {
        title: 'No existen productos disponibles',
        page: 'Lista de productos'
      });
    }

    //TODO: Renderizar pagina de productos
    
    res.render('productos', {
      title: 'Todos los productos',
      page: 'Lista de productos',
      productos
    })
  } catch (error) {
    console.log(error);
  }
}