import { response, request } from 'express';
import { producto } from '../../app.js';


// Obtenemos TODOS los productos
export const getAllProducts = async(_req = request, res = response) => {
  try {
    // Obtenemos los productos
    const productos = await producto.getAllProducts();
    // Preguntamos si hay productos
    if(productos.length === 0){
      return res.status(400).json({
        mensaje: 'No hay productos disponibles, por favor ingrese nuevos productos',
        status: false
      });
    };

    res.status(200).json({
      status: true,
      mensaje: 'Retorna todos los productos',
      productos
    });
    
  } catch (error) {
    res.status(500).json({
      mensaje: 'Ups! Ha ocurrido un error, por favor consulte con el administrador',
      status: false
    });
  };

};

// Obtenemos un producto por ID
export const getProductsByID = async(req = request, res = response) => {
  const id  = Number(req.params.id);
  try {
    const productoFiltrado = await producto.filterProduct(id);

    // Preguntamos si existe el producto
    if(productoFiltrado.length === 0){
      return res.status(400).json({
        mensaje: `No existe el producto con el ID: ${id}`,
        status: false
      });
    };
  
    // Si existe el producto entonces mostromos la coincidencia
    res.status(200).json({
      status: true,
      mensaje: 'Retorna un prodcuto por id: ',
      productoFiltrado
    });
    
  } catch (error) {
    res.status(500).json({
      mensaje: 'Ups! Ha ocurrido un error, por favor consulte con el administrador',
      status: false
    });
  }
};


export const postNewProduct = async(req = request, res = response) => {
  
  try {
    const data = req.body;
    const {name, price, url_imagen} = data;

    if(!name){
      return res.status(400).json({
        status: false,
        mensaje: 'El campo nombre es obligatorio'
      });
    };

    if(!price){
      return res.status(400).json({
        status: false,
        mensaje: 'El campo precio es obligatorio'
      });
    };

    if(!url_imagen){
      return res.status(400).json({
        status: false,
        mensaje: 'El campo URL es obligatorio'
      });
    };


    if(!data){
      return res.status(400).json({
        mensaje: 'Los campos son obligatorios'
      });
    };

   const info = await producto.newProduct(data);

    res.status(200).json({
      status: true,
      mensaje: 'Se ha creado un nuevo producto', 
      info
    });
    
  } catch (error) {
    res.status(500).json({
      status: false,
      mensaje: 'Ups! Comuniquese con el administrador'
    });
  }
};

// Editamos un producto por ID 
export const putProductByID = async(req = request, res = response) => {
  const id  = Number(req.params.id);
  const {price, name} = req.body;

  try {
    const productoFiltrado =  await producto.filterProduct(id);
  
    // Preguntamos si existe el producto
    if(!productoFiltrado){
      return res.status(400).json({
        mensaje: `No existe el producto con el ID: ${id}`,
        status: false
      });
    };
  
    // Preguntamos si el precio existe
    if(!price){
      return res.status(400).json({
        mensaje: `Se debe colocar un precio`,
        status: false
      });
    };

    // Preguntamos si el nombre del existe
    if(!name){
      return res.status(400).json({
        mensaje: `Se debe colocar un titulo`,
        status: false
      });
    };

    const prodcutoActualizado = { name, price };
    await producto.putProducts(id, prodcutoActualizado)  

    res.status(200).json({
      mensaje: 'Se ha actualziado un nuevo producto', 
      status: true
    });
  } catch (error) {
    res.status(500).json({
      mensaje: 'Ups! Ha ocurrido un error, por favor consulte con el administrador',
      status: false
    });
  };

};

// Eliminamos un producto
export const deleteProduct = async(req = request, res = response ) => {
  const id = Number(req.params.id);

  try {
    // const productos = await prodcuto.getAllProducts();
    // Buscamos el producto por ID
    const existeProducto = await producto.filterProduct(id);

    // Preguntamos si existe el producto
    if(existeProducto.length === 0){
      return res.status(400).json({
        mensaje: `No existe el producto con el ID: ${id}`
      });
    };
    // Eliminamos el producto
    await producto.deleteProduct(id);

    res.status(200).json({
      mensaje: `Se ha eliminado un producto con ID ${id}`,
      status: true
    });

  } catch (error) {
    res.status(500).json({
      mensaje: 'Ups! Ha ocurrido un error, por favor consulte con el administrador',
      status: false
    });
  };

};
