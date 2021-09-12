const Category = require("../../models/category");

module.exports = {
  getAll,
  create,
  delete: deleteOne,
  update,
};

async function getAll(req, res) {
  try {
    const response = await Category.find({});
    res.json({ success: true, response, msg: "OK" });
  } catch (err) {
    res.status(400).json({ success: false, err, msg: "error" });
  }
}

async function create(req, res) {
  try {
    const response = await Category.create(req.body);
    res.json({ success: true, response, msg: "OK" });
  } catch (err) {
    res.status(400).json({ success: false, err, msg: "error" });
  }
}

async function deleteOne(req, res) {
  try {
    const response = await Category.findOneAndDelete({ _id: req.params.id });
    res.json({ success: true, response, msg: "OK" });
  } catch (err) {
    res.status(400).json({ success: false, err, msg: "error" });
  }
}

async function update(req, res) {
  try {
    const response = await Category.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name },
      { new: true }
    );
    res.json({ success: true, response, msg: "OK" });
  } catch (err) {
    res.status(400).json({ success: false, err, msg: "error" });
  }
}

// async function addItem(req, res) {
//   try {
//     const updatedItem = await Category.findOneAndUpdate(
//       req.params.id,
//       { $push: { items: req.params.iid } },
//       { returnOriginal: false }
//     );

//     res.status(200).json(updatedItem);
//   } catch (err) {
//     // Client will check for non-2xx status code
//     // 400 code  = bad request
//     res.status(400).json(err);
//   }
// }
