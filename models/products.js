const mongoose = require("mongoose");

const productschema = new mongoose.Schema({
  product: {
    type: String,
  },
  brand: {
    type: String,
  },
  type: {
    type: String,
  },
});

module.exports = mongoose.model("products", productschema);
