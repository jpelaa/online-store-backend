const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: String,
  userName: String,
  email: String,
  password: String,
  shippingAddress: {},
  address: {},
  ordersHistory: [],
  cart: [],
});

module.exports = mongoose.model("User", userSchema);
