const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  currency: String,
  stockQuantity: Number,
  images: String,
  category: String,
  seller: String,
});

module.exports = mongoose.model("Product", productSchema);
