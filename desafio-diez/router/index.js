const { Router } = require("express");
const loginController = require("../controllers/getLoginController");
const homeController = require("../controllers/getHomeController");
const logoutController = require("../controllers/getLogoutController");

const router = Router();

router.get('/auth/login', loginController);
router.get('/auth/logout', logoutController);
router.get('/home', homeController);

module.exports = router