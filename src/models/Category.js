const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  categoryName: String,
  subCategory: String,
});

module.exports = mongoose.model("Category", categorySchema);
