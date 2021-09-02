const Category = require('../../models/category');

module.exports = {
    getAll,
    create,
    delete: deleteOne,
  };


  async function getAll(req, res) {
    try {
        const categories = await Category.find({});
        res.json(categories)
    } catch (err) {
      // Client will check for non-2xx status code
      // 400 code  = bad request
      res.status(400).json(err);
    }
  }
  
  async function create(req, res) {
    try {
        const category = await Category.create(req.body);
        res.status(201).json(category);
    } catch (err) {
      // Client will check for non-2xx status code
      // 400 code  = bad request
      res.status(400).json(err);
    }
  }

  async function deleteOne(req, res) {
    try {
        const deletedItemID = await Category.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedItemID)
    } catch (err) {
      // Client will check for non-2xx status code
      // 400 code  = bad request
      res.status(400).json(err);
    }
  }
  