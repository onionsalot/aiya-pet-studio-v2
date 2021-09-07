const express = require('express');
const router = express.Router();
const cartsCtrl = require('../../controllers/api/carts');

router.get('/', cartsCtrl.getCart);
router.put('/add/:id', cartsCtrl.addItem);
router.put('/update/:id', cartsCtrl.updateQuantity);
router.delete('/delete/:id', cartsCtrl.delete);
// router.post('/create', cartsCtrl.create);

module.exports = router;
