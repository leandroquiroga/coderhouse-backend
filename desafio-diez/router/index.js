const { Router } = require("express");
const loginController = require("../controllers/getLoginController");
const homeController = require("../controllers/getHomeController");
const logoutController = require("../controllers/getLogoutController");
const signinController = require("../controllers/signinController");
const { validateSession } = require("../middlewares");
const signoutController = require("../controllers/signoutController");

const router = Router();

router.get('/auth/login' ,loginController);
router.get('/auth/logout', logoutController);
router.get('/home' ,homeController);

router.post('/auth/login', signinController);
router.post('/auth/logout', signoutController);
module.exports = router