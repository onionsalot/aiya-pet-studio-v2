const mongoose = require("mongoose");
const Item = require("./item");

const Schema = mongoose.Schema;

const categorySchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    // items: [{ type: Schema.Types.ObjectId, ref: 'Item'}]
  },
  { timestamps: true }
);

categorySchema.post('findOneAndDelete', function (doc) {
  console.log("runs", doc._id)

  Item.updateMany(
    { "category": doc._id },
    { "category": undefined },
);
})

module.exports = mongoose.model("Category", categorySchema, "categories");
