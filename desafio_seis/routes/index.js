const { Router } = require('express');
const {pageChatController, pageInitController} = require('../controllers/index.js');

const router = new Router();
const routerChat = new Router();

router.get('/', pageInitController);
routerChat.get('/', pageChatController);

module.exports = {
  router,
  routerChat
};