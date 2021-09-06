const Item = require("../../models/item");

module.exports = {
  getAll,
  create,
  delete: deleteOne,
  update,
};


async function getAll(req, res) {
  try {
    const items = await Item.find({})
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

async function deleteOne(req, res) {
  try {
    const deletedItemID = await Item.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedItemID);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function update(req, res) {
  try {
    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedItem);
  } catch (err) {
    res.status(400).json(err);
  }
}