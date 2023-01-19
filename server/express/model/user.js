const mongoose = require("mongoose");
require("dotenv").config();

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: { type: String },
  records : {type:Object},
  token: { type: String },
},{strict:false});

module.exports = mongoose.model("user", userSchema);