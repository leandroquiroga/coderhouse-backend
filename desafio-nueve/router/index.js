const { Router } = require('express');
const { productControllers } = require('../controllers/productControllers');
const { chatContoller } = require('../controllers/chatContoller');

const router = Router();

router.get('/productos-test', productControllers);
router.get('/chat', chatContoller );


module.exports = router