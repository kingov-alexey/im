const Router = require('express');
const router = new Router();
const typeController = require('../controllers/typeController');

router.post('/', typeController.create); // чтобы создавать тип
router.get('/', typeController.getAll); // чтобы получить все типы

module.exports = router;
