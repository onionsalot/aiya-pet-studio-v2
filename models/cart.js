const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User"},
    items: [
        {
            item: { type: Schema.Types.ObjectId, ref: "Item"},
            quantity: Number,
        }
    ],
    paid: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model("Cart", cartSchema);
