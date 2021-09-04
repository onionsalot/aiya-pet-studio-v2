const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items');

router.get('/', itemsCtrl.getAll);
router.post('/create', itemsCtrl.create);

module.exports = router;
