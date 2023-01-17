const { Router} = require('express');
const { checkAuthentication, checkAuthPassaportError } = require('../middlewares');

const {
        authLoginController,
        authSingUpController,
        logoutSingUpController
} = require('../controllers/authControllers');

const {
        homePageController,
        loginPageController,
        singUpPageController
} = require('../controllers/pagesControllers');

const router = Router();

router.get('/home', checkAuthentication ,homePageController);

router.get('/auth/login', loginPageController);
router.post('/auth/login', checkAuthPassaportError ,authLoginController);

router.get('/auth/singup', singUpPageController);
router.post('/auth/singup', checkAuthPassaportError, authSingUpController);

router.get('/auth/logout', logoutSingUpController)

module.exports = router;