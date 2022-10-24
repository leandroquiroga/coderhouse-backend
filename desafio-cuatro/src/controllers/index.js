const fs = require('fs')
const { response, request } = require('express');

// Obtenemos TODOS los productos
const getAllProducts = async(_req = request, res = response) => {

  try {
    const prodcutos = await fs.promises.readFile('./src/data/products.json', 'utf-8');
    const arrayProductos = JSON.parse(prodcutos);
    
    // Preguntamos si hay productos
    if(arrayProductos.length === 0){
      return res.status(400).json({
        mensaje: 'No hay productos disponibles, por favor ingrese nuevos productos',
      });
    };
  
    

    res.status(200).json({
      mensaje: 'Retorna todos los productos',
      arrayProductos
    });
    
  } catch (error) {
    res.status(500).json({
      mensaje: 'Ups! Ha ocurrido un error, por favor consulte con el administrador',
      error: error.message
    });
  };

};

// Obtenemos un producto por ID
const getProductsByID = async(req = request, res = response) => {
  const id  = Number(req.params.id);

  try {
    const prodcutos = await fs.promises.readFile('./src/data/products.json', 'utf-8');
      
    const arrayProductos = JSON.parse(prodcutos);
    
    // Buscamos el producto por ID
    const producto = arrayProductos.find( producto => producto.id === id);
  
    // Preguntamos si existe el producto
    if(!producto){
      return res.status(400).json({
        mensaje: `No existe el producto con el ID: ${id}`
      });
    };
  
    // Si existe el producto entonces mostromos la coincidencia
    res.status(200).json({
      mensaje: 'Retorna un prodcuto por id: ',
      producto
    });
    
  } catch (error) {
    res.status(500).json({
      mensaje: 'Ups! Ha ocurrido un error, por favor consulte con el administrador',
      error: error.message
    });
  }
};

//TODO: Realizar el POST
const postNewProduct = (req = request, res = response) => {
  const data = req.body;

  res.send
  res.status(201).json({
    mensaje: 'Se ha creado un nuevo producto', 
    data
  });
};

// Editamos un producto por ID 
const putProductByID = async(req = request, res = response) => {
  const id  = Number(req.params.id);
  const {price, title} = req.body;

  try {
    const productos = await fs.promises.readFile('./src/data/products.json', 'utf-8');
    
    const arrayProductos = JSON.parse(productos);

    // Buscamos el producto por ID
    const existeProducto = arrayProductos.find( producto => producto.id === id);
  
    // Preguntamos si existe el producto
    if(!existeProducto){
      return res.status(400).json({
        mensaje: `No existe el producto con el ID: ${id}`
      });
    };
  
    // Preguntamos si el precio existe
    if(!price){
      return res.status(400).json({
        mensaje: `Se debe colocar un precio`
      });
    };

    // Preguntamos si el nombre del existe
    if(!title){
      return res.status(400).json({
        mensaje: `Se debe colocar un titulo`
      });
    };


    // Actualizamos Productos
    arrayProductos.forEach(prod => {
      if(prod.id === id){
        prod.id = id;
        prod.price = price,
        prod.title = title,
        prod.image = producto.image
      };
    });

    // Sobrescribimos los producutos acutualzados
    await fs.promises.writeFile('./src/data/products.json', JSON.stringify(arrayProductos));
  
    res.status(200).json({
      mensaje: 'Se ha actualziado un nuevo producto', 
    });
  } catch (error) {
    res.status(500).json({
      mensaje: 'Ups! Ha ocurrido un error, por favor consulte con el administrador',
      error: error.message
    });
  };

};

// Eliminamos un producto
const deleteProduct = async(req = request, res = response ) => {
  const id = Number(req.params.id);

  try {
    const productos = await fs.promises.readFile('./src/data/products.json', 'utf-8');
    
    const arrayProductos = JSON.parse(productos);

    // Buscamos el producto por ID
    const existeProducto = arrayProductos.find( producto => producto.id === id);
  
    // Preguntamos si existe el producto
    if(!existeProducto){
      return res.status(400).json({
        mensaje: `No existe el producto con el ID: ${id}`
      });
    };

    const nuevoArrayProducto = arrayProductos.filter(producto => producto.id !== id);

    await fs.promises.writeFile('./src/data/products.json', JSON.stringify(nuevoArrayProducto));


    res.status(200).json({
      mensaje: `Se ha eliminado un producto con ID ${id}`
    });

  } catch (error) {
    res.status(500).json({
      mensaje: 'Ups! Ha ocurrido un error, por favor consulte con el administrador',
      error: error.message
    });
  };

};

module.exports = {
  getAllProducts,
  getProductsByID,
  postNewProduct,
  putProductByID,
  deleteProduct,
}