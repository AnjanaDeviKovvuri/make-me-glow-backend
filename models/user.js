const mongoose = require("mongoose");
const bycrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  { collection: "user" }
);

module.exports = mongoose.model("user", userSchema);
