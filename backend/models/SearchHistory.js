const mongoose = require("mongoose");

const SearchHistorySchema = new mongoose.Schema({
  city: { type: String, required: true },
  temp: { type: Number },
  sky: { type: String },
  searchedAt: { type: Date, default: Date.now },
  icon: { type: String },
});

module.exports = mongoose.model("SearchHistory", SearchHistorySchema);
