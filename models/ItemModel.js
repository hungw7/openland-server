const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");

const itemSchema = new mongoose.Schema({
  thumbLink: String,
  name: String,
  token: String,
  tokenId: String,
  price: String,
  owner: String,
  owneDisplay: String,
  ipfsUrl: String,
  status: Number,
  endAt: Date
});

// authSchema.methods.isValid = function () {
//   console.log("valid");
// };

module.exports = mongoose.model("Item", itemSchema);
