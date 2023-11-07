const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  userId: String,
  productId: String,
  rating: Number,
  review: String,
});

module.exports = mongoose.model("Review", reviewSchema);
