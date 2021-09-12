const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemsSchema = new Schema({
    item: { type: Schema.Types.ObjectId, ref: "Item"},
            quantity: Number,
}, { _id: false });

const cartSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User"},
    items: [itemsSchema],
    paid: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model("Cart", cartSchema);
