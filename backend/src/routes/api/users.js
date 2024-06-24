const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../../models/User");

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post("/", async (req, res) => {
  const { name, email, location, phone_number, password, userrole } = req.body;

  try {
    // Check if user exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }

    user = new User({
      name,
      email,
      location,
      phone_number,
      password,
      userrole,
    });

    // Encrypt password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    // Return jsonwebtoken

    res.send("User registered");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
