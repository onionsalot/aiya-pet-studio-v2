const express = require('express');
const router = express.Router();
const cartsCtrl = require('../../controllers/api/carts');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', ensureLoggedIn , cartsCtrl.getCart);
router.put('/add/:id', ensureLoggedIn , cartsCtrl.addItem);
router.put('/update/:id', cartsCtrl.updateQuantity);
router.delete('/delete', cartsCtrl.delete);

module.exports = router;
