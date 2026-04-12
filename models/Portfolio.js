const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
  name: String,
  bio: String,
  skills: Array,
  github: String,
  linkedin: String,
  image: String,
  experience: Array,
  projects: Array,
});

module.exports = mongoose.model("Portfolio", portfolioSchema);