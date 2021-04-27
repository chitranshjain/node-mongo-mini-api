const mongoose = require("mongoose");

const Product = require("./models/product");

mongoose
  .connect(
    "YOUR_MONGODB_ATLAS_URI"
  )
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch(() => {
    console.log("Connection attempt failed!");
  });

const createProduct = async (req, res, next) => {
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });

  const result = await createdProduct.save();

  res.json({ product: result });
};

const getProducts = async (req, res, next) => {
  const products = await Product.find().exec();
  res.json({ products });
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
