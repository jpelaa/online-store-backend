const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Men", "Women", "Kids"],
    required: true,
  },
  currency: {
    type: String,
    enum: ["IND"],
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  groupCode: {
    type: String,
    required: true,
  },
  sizeGroup: { type: String, required: true },
  size: {
    type: String,
    enum: ["S", "M", "L", "XL", "XXL"],
    required: true,
  },
  description: { type: String, required: true },
  images: {
    type: [
      {
        type: String,
      },
    ],
    default: undefined, // No default value, the array starts empty
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  countryOfOrigin: {
    type: String,
    enum: ["india"],
    required: true,
  },
  occasion: {
    type: String,
    enum: ["Casual", "Formal", "Party", "Semiformal"],
    required: true,
  },
  brand: { type: String, default: "tenc" },
  mrp: Number,
  seller: { type: String, default: "tenc" },
  sleeveLength: {
    type: String,
    enum: ["Half Sleave", "Full Sleeve", "Sleeveless"],
    required: true,
  },
  pattern: {
    type: String,
    enum: ["Checked", "Plain", "Printed", "Striped"],
    required: true,
  },
  washCare: {
    type: String,
    enum: ["DryClean", "Handwash", "Machinewash"],
    required: true,
    default: "Machinewash",
  },
  weavePattern: {
    type: String,
    enum: [
      "Regular",
      "Twill",
      "Oxford",
      "Poplin",
      "Chambray",
      "Corduroy",
      "Denim",
      "Flannel",
      "Knitted",
      "Seersucker",
    ],
    required: true,
    default: "Regular",
  },
  searchPossibles: {
    type: String,
    default: "Trendy collection ",
  },
  noOfPockets: {
    type: Number,
    default: 1,
  },
  mainFabricType: {
    type: String,
    enum: ["Cotton", "Linen", "Polyester", "Rayon", "Viscose", "Satin"],
    required: true,
    default: "Cotton",
  },
  secondaryFabricType: {
    type: String,
    enum: ["Cotton", "Linen", "Polyester", "Rayon", "Viscose", "Satin"],
    default: undefined,
  },
  mainFabricTypePercentage: {
    type: Number,
    required: true,
  },
  collarType: {
    type: String,
    enum: ["Spread", "Button-Down", "Cuban", "Mandarin"],
    default: "Spread",
  },
  length: {
    type: String,
    enum: ["Short", "Long", "Regular"],
    default: "Regular",
  },
  fit: {
    type: String,
    enum: ["Regular-Fit", "Slim-Fit", "Drop-Shoulder", "Tailored-Fit"],
    default: undefined,
  },
});

module.exports = mongoose.model("Product", productSchema);
