const express = require('express');
const router = express.Router();
const cartsCtrl = require('../../controllers/api/carts');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', ensureLoggedIn , cartsCtrl.getCart);
router.put('/add/:id', ensureLoggedIn , cartsCtrl.addItem);
router.put('/update/:id', ensureLoggedIn ,  cartsCtrl.updateQuantity);
router.delete('/deleteAll', ensureLoggedIn , cartsCtrl.deleteAll);
router.delete('/delete/:id', ensureLoggedIn , cartsCtrl.delete);

module.exports = router;
