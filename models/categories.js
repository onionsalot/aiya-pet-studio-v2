const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: { type: String, required: true, unique: true},
  items: [{ type: Schema.Types.ObjectId, ref: 'Item'}]
}, { timestamps: true });

module.exports = mongoose.model("Category", categorySchema, "categories");
