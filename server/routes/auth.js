const express = require("express");
const bcrypt = require("bcrypt");
const { User } = require("../models/Users");
const {
  validateUser,
  validateUserRegisteration,
} = require("../validators/authValidation");

const router = express.Router();

router.use(express.json());

router.post("/auth-signup", async (req, res) => {
  try {
    const { error } = validateUserRegisteration(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ error: "User already exists!!" });
    }

    user = await User.findOne({ phone: req.body.phone });
    if (user) {
      return res.status(400).json({ error: "User already exists!!" });
    }

    const { name, email, password, phone } = req.body;
    user = new User({ name, email, phone });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();
    const token = user.generateAuthToken();

    user.password = undefined;
    res.status(200).json({ user, token });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/auth-login", async (req, res) => {
  try {
    const { error } = validateUser(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ message: "Invalid credentials!!" });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(400).json({ message: "Invalid credentials!!" });
    }

    const token = user.generateAuthToken();
    user.password = undefined;
    res.json({ token, user });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
