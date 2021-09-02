module.exports = {
  getAll,
};

const fake = [
  {
    name: "Item 1",
    category: "sticker",
    price: "22",
    description: "test test test test",
    tags: "cute",
    type: "buyable",
    images: "",
  },

  {
    name: "Item 2",
    category: "crayon",
    price: "18",
    description: "test2 tes2t 2test t2e2st",
    tags: "cute, dog",
    type: "buyable",
    images: "",
  },
];

async function getAll(req, res) {
  try {
    res.json(fake);
  } catch (err) {
    // Client will check for non-2xx status code
    // 400 code  = bad request
    res.status(400).json(err);
  }
}
