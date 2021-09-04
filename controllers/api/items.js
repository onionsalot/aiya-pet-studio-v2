const Item = require("../../models/item");

module.exports = {
  getAll,
  create,
};


async function getAll(req, res) {
  try {
    const items = await Item.find({}).populate('category');
    res.status(201).json(items);
  } catch (err) {
    res.status(400).json(err);
  }
}


async function create(req, res) {
  try {
    const item = await Item.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json(err);
  }
}