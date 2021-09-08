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
    // addItem will create a cart if user has no "unpaid" cart, otherwise add item to unpaid cart.
  try {
    const cart = await Cart.find({ userId: req.user });
    if (!cart.length) {
        console.log('No cart... Adding cart...')

    } else {
        console.log('Cart exists, Adding Item...')

    }
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
