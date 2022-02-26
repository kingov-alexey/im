const Router = require('express');
const router = new Router();

router.post('/'); // чтобы создавать бренд
router.get('/'); // чтобы получить все бренды

module.exports = router;
