const express = require('express');
const router = express.Router();
const CategoriesCtrl = require('../../controllers/api/categories');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', CategoriesCtrl.getAll);
router.post('/create', ensureLoggedIn, CategoriesCtrl.create);
router.delete('/delete/:id', ensureLoggedIn, CategoriesCtrl.delete)
router.put('/update/:id', ensureLoggedIn, CategoriesCtrl.update); // update name
router.delete('/deleteAll', ensureLoggedIn , CategoriesCtrl.deleteAll);

module.exports = router;
