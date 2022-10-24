const { Router } = require('express');
const { 
  getAllProducts, 
  getProductsByID,
  postNewProduct,
  putProductByID,
  deleteProduct 
  } = require('../controllers');


const route = new Router();


route.get('/', getAllProducts);
route.get('/:id', getProductsByID);
route.post('/nuevo', postNewProduct);
route.put('/:id', putProductByID);
route.delete('/:id', deleteProduct);

module.exports = route;