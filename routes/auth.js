const express = require("express");
const authRouter = express.Router();
const user = require("../models/user");
const bcrypt = require("bcrypt");

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const userTest = await user.findOne({ email });

    if (!userTest) {
      return res.status(404).json({ error: "User not found" });
    }
    console.log("passwors", userTest.password);
    console.log("passwors", password);
    const isMatch = await bcrypt.compare(password, userTest.password);
    console.log("isMatch", isMatch);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.log("Error in login:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

authRouter.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const userTest = await user.findOne({ email });
    if (userTest) {
      return res.status(400).json({ error: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new user({ email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log("Error in signup:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = authRouter;
