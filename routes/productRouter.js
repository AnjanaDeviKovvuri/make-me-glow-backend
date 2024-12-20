const express = require("express");
const productRouter = express.Router();
const products = require("../models/products");

productRouter.get("/products", async (req, res) => {
  try {
    const productsData = await products.find();

    if (!productsData || productsData.length === 0) {
      return res.status(404).send("No products found.");
    }

    res.status(200).json(productsData);
  } catch (err) {
    console.log("inside");
    res.status(400).send("ERROR:" + err.message);
  }
});

module.exports = productRouter;
