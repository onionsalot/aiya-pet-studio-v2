const Category = require("../../models/category");

module.exports = {
  getAll,
  create,
  delete: deleteOne,
  update,
  deleteAll,
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

async function deleteAll(req, res) {
  // Postman testing only, will be removed for production.
  try {
    const response = await Category.deleteMany({});
    res.json({ success: true, response, msg: "OK" });
  } catch (err) {
    res.status(400).json(err);
  }
}
