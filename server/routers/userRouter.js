const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');

router.post('/registration', userController.registration); // регистрация
router.post('/login', userController.login); // авторизация
router.get('/auth', userController.check); // авторизован пользователь или нет

module.exports = router;
