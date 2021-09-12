const Cart = require("../../models/cart");

module.exports = {
  getCart,
  addItem,
  updateQuantity,
  delete: deleteOne,
  deleteAll,
};

async function getCart(req, res) {
  try {
    const cart = await Cart.findOne({ userId: req.user, paid: false });
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
      console.log("No cart... Adding cart...");
      const createdCart = await Cart.create({
        userId: req.user,
        items: [
          {
            item: req.params.id,
            quantity: 1,
          },
        ],
      });
      res.json(createdCart);
    } else {
      console.log("Cart exists, Adding Item...");

      const newItem = await Cart.findOneAndUpdate(
        { userId: req.user, paid: false, "items.item": { $ne: req.params.id } },
        { $push: { items: { item: req.params.id, quantity: 1 } } },
        { new: true }
      );
      res.json(newItem);
    }
  } catch (err) {
    res.status(400).json(err);
  }
}

async function updateQuantity(req, res) {
  try {
    const result = await Cart.findOneAndUpdate(
      { userId: req.user, paid: false, "items.item": req.params.id },
      {
        $set: {
          "items.$.quantity": Number(req.body.quantity),
        },
      },
      { new: true }
    );

    res.json(result);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function deleteOne(req, res) {
  // Postman testing only, will be removed for production.
  try {
    const deleted = await Cart.updateOne(
      { userId: req.user, paid: false },
      { $pull: { items: { item: req.params.id } } }
    );
    res.json(deleted);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function deleteAll(req, res) {
  // Postman testing only, will be removed for production.
  try {
    const deleted = await Cart.deleteMany({});
    res.json(deleted);
  } catch (err) {
    res.status(400).json(err);
  }
}
