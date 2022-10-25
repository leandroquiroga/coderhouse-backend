import { Router } from 'express'
import {
  deleteProduct,
  getAllProducts,
  getProductsByID,
  postNewProduct,
  putProductByID,

} from '../controllers/index.js';


export const route = new Router();


route.get('/', getAllProducts);
route.get('/:id', getProductsByID);
route.post('/' ,postNewProduct);
route.put('/:id', putProductByID);
route.delete('/:id', deleteProduct);