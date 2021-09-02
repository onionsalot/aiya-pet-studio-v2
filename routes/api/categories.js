const express = require('express');
const router = express.Router();
const CategoriesCtrl = require('../../controllers/api/categories');

router.get('/', CategoriesCtrl.getAll);
router.post('/create', CategoriesCtrl.create);

module.exports = router;
