const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  currency: String,
  color: String,
  gender: String, // Men || Women || Adult || Kid
  ageGroup: String,
  groupCode: String,
  size: String,
  availableSizes: [],
  stockQuantity: Number,
  description: String,
  images: [],
  category: String,
  categoryId: String,
  marketedBy: String,
  countryOfOrigin: String,
  brand: String,
  productCode: String,
  netQuantity: String,
  mrp: Number,
  seller: String,
  occasion: String, // Casual || Formal || Party || Semiformal
  sleeveLength: String, // Half Sleave || Full Sleeve || Sleeveless
  pattern: String, //Checked || Colourblocked || Faded || Printed || SelfDesign || Solid || Striped
  patternType: String, //
  washCare: String, // DryClean || Handwash || Machinewash,
  weavePattern: String, // Chambray || Corduroy || Denim || Flannel || Knitted || Oxford || Regular || Seersucker || Twill
  searchPossibles: String, // Printed shirt || Trendy
  noOfPockets: String,
  mainFabricType: String,
  secondaryFabricType: String,
  material: String, // 100% Cotton || 100% Rayon
  collarType: String, // Collar || Button Down || Cuban Collar
  length: String, //Short || Long
  fit: String, // Boxy || Oversized || Regular Fit || skinny Fit || Slim fit || Tailored Fit
});

module.exports = mongoose.model("Product", productSchema);
