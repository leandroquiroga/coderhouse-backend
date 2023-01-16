const { Router} = require('express');
const { checkAuthentication } = require('../middlewares');
const { authLoginController } = require('../controllers/authControllers');
const { homePageController,
        loginPageController,
        singUpPageController
} = require('../controllers/pagesControllers');

const router = Router();

router.get('/home', checkAuthentication, homePageController);

router.get('/auth/login', loginPageController);
router.post('/auth/login', authLoginController);


router.get('/auth/singup', singUpPageController);
// router.post('/auth/singup', singUpPageController);

module.exports = router;