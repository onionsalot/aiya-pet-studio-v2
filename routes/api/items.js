const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', itemsCtrl.getAll);
router.post('/create', ensureLoggedIn, itemsCtrl.create);
router.delete('/delete/:id', ensureLoggedIn, itemsCtrl.delete);
router.put('/update/:id', ensureLoggedIn, itemsCtrl.update);

module.exports = router;
