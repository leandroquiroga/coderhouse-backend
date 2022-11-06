const { Router } = require('express');
const pageInitController = require('../controllers/index.js');

const router = new Router();

router.get('/', pageInitController);


module.exports = router;