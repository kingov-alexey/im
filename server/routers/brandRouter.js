const Router = require('express');
const router = new Router();
const brandController = require('../controllers/brandController');

router.post('/', brandController.create); // чтобы создавать бренд
router.get('/', brandController.getAll); // чтобы получить все бренды

module.exports = router;
