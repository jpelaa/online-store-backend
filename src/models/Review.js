const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  userId: String,
  productId: String,
  rating: Number,
  review: String,
  comment: String,
  date_added: String,
});

module.exports = mongoose.model("Review", reviewSchema);
