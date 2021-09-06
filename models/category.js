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

categorySchema.post('findOneAndDelete', async function (doc) {
  // console.log("runs", doc._id)

  await Item.updateMany(
    { "category": doc._id },
    {"$set":{"category": null}},
);
})

module.exports = mongoose.model("Category", categorySchema, "categories");
