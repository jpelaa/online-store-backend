const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: String,
  products: String,
  quantity: Number,
  totalCartValue: Number,
});

module.exports = mongoose.model("Cart", cartSchema);
