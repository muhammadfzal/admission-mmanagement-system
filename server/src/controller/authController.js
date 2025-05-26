const bcrypt = require("bcrypt");  //bcrypt is used to secure passwords by turning them into hashed (encrypted) text.
const User = require("../models/User"); // <--- Make sure this line exists  // It allows you to create new users, find users, or check user data from your database.
const jwt = require('jsonwebtoken');
require('dotenv').config();


exports.signUp = async (req, res) => {
  try {
    const { name, mobile, email, password, role } = req.body;
    const existingUser = await User.findOne({ email });
    console.log("Existing user:", existingUser);

    if (existingUser) {
      return res.status(403).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed password:", hashedPassword);

    const newUser = new User({
      name,
      email, 
      mobile,
      password: hashedPassword,
      role,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Error in signUp controller", err);
    res.status(500).json({ message: "Error in signUp" });

  }
};
exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body; 

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      token,
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("Error in signIn", err);
    res.status(500).json({ message: "Error in signIn" });
  }
};

