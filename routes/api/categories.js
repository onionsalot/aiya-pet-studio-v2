const express = require('express');
const router = express.Router();
const CategoriesCtrl = require('../../controllers/api/categories');

router.get('/', CategoriesCtrl.getAll);
router.post('/create', CategoriesCtrl.create);
router.delete('/delete/:id', CategoriesCtrl.delete)
router.put('/update/:id', CategoriesCtrl.update); // update name
// router.put('/addItem/:id/:iid', CategoriesCtrl.addItem);

module.exports = router;
