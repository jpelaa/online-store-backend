const mongoose = require("mongoose");

async function connectToDatabase() {
  try {
    const uri =
      "mongodb+srv://tenclifestyles:tenclifestyles@tenc.z2jflud.mongodb.net/?retryWrites=true&w=majority";

    await mongoose.connect(uri);
    console.log("Successfully connected to database");
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  connectToDatabase,
};
