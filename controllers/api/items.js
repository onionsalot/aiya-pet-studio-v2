const Item = require("../../models/item");

module.exports = {
  getAll,
  create,
  delete: deleteOne,
  update,
  deleteAll,
};

async function getAll(req, res) {
  try {
    const response = await Item.find({}).populate("category", "name");
    res.json({ success: true, response, msg: "OK" });
  } catch (err) {
    res.status(400).json({ success: false, err, msg: "error" });
  }
}

async function create(req, res) {
  try {
    const response = await Item.create(req.body);
    res.json({ success: true, response, msg: "OK" });
  } catch (err) {
    res.status(400).json({ success: false, err, msg: "error" });
  }
}

async function deleteOne(req, res) {
  try {
    const response = await Item.findByIdAndRemove(req.params.id);
    res.json({ success: true, response, msg: "OK" });
  } catch (err) {
    res.status(400).json({ success: false, err, msg: "error" });
  }
}

async function update(req, res) {
  try {
    const response = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({ success: true, response, msg: "OK" });
  } catch (err) {
    res.status(400).json({ success: false, err, msg: "error" });
  }
}

async function deleteAll(req, res) {
  // Postman testing only, will be removed for production.
  try {
    const response = await Item.deleteMany({});
    res.json({ success: true, response, msg: "OK" });
  } catch (err) {
    res.status(400).json(err);
  }
}
