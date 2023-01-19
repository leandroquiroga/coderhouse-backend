import { Router } from 'express';
import { pageInit } from '../controllers/init_controllers.js';
import { postNewProduct } from '../controllers/products_controllers.js';
import { getAllProducts } from '../controllers/allProducts_controller.js';

export const router = new Router();

router.get('/home', pageInit);
router.get('/productos', getAllProducts);
router.post('/productos', postNewProduct);