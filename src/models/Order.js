const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderId: String,
  userId: String,
  productsOrdered: [],
  totalOrderAmount: Number,
  shippingAddress: {},
  orderStatus: String,
  paymentId: String,
  paymentStatus: String,
});

module.exports = mongoose.model("Order", orderSchema);
