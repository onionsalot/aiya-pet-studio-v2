const Cart = require("../../models/cart");

module.exports = {
  getCart,
  addItem,
  updateQuantity,
  delete: deleteOne,
};

async function getCart(req, res) {
  try {
    const cart = await Cart.find({});
    res.json(cart);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function addItem(req, res) {
    // addItem will create a cart if user has no "unpaid" cart, otherwise add item to unpaid cart.
  try {
    const cart = await Cart.findOne({ userId: req.user, paid: false });
    if (!cart) {
        console.log('No cart... Adding cart...')
        const createdCart = await Cart.create(
          {
            userId: req.user,
            items: [
              {
                item: req.params.id,
                quantity: 1,
              }
            ],
          }
        );
        res.json(createdCart);
    } else {
        console.log('Cart exists, Adding Item...')

        const newItem = await Cart.findOneAndUpdate( { userId: req.user, paid: false, "items.item": {$ne: req.params.id}}, {$push: {items: {"item": req.params.id, "quantity":2}}} )
        res.json(newItem);
    }
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
    const deleted = await Cart.deleteMany({ });
    res.json(deleted);
  } catch (err) {
    res.status(400).json(err);
  }
}
