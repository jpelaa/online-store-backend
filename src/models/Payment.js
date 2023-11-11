const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  paymentId: String,
  userId: String,
  orderId: String,
  paymentMethod: String,
  paymentStatus: String,
  amount: Number,
  currency: String,
});

module.exports = mongoose.model("Payment", paymentSchema);
