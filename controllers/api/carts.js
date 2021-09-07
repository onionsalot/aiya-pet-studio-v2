const Cart = require("../../models/cart");

module.exports = {
  getCart,
  addItem,
  updateQuantity,
  delete: deleteOne,
};

async function getCart(req, res) {
  try {
    res.json();
  } catch (err) {
    res.status(400).json(err);
  }
}

async function addItem(req, res) {
  try {
    res.json();
  } catch (err) {
    res.status(400).json(err);
  }
}

async function updateQuantity(req, res) {
  try {
    res.json();
  } catch (err) {
    res.status(400).json(err);
  }
}

async function deleteOne(req, res) {
  try {
    res.json();
  } catch (err) {
    res.status(400).json(err);
  }
}
