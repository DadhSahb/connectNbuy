const express = require("express");
const bcrypt = require("bcrypt");
const { User } = require("../models/Users");

const {
  validateUser,
  validateUserRegisteration,
} = require("../validators/authValidation");
const { connection } = require("../config/db");

const router = express.Router();

router.post("/auth-signup", async (req, res) => {
  try {
    const { error } = validateUserRegisteration(req.body);
    if (error) {
      return res.status(400);
    }
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).send("User already exists!!");
    }

    user = await User.findOne({ phone: req.body.phone });
    if (user) {
      return res.status(400).send("User already exists!!");
    }

    const { name, email, password, phone } = req.body;
    user = new User({ name, email, phone });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();
    const token = user.generateAuthToken();

    user.password = undefined;
    res.send({ user, token });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/auth-login", async (req, res) => {
  try {
    const { error } = authValidation(req.body);
    if (error) {
      return res.status(400).send(error.details);
    }
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).send("Invalid credentials!!");
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) return res.status(400).send("Invalid credentials!!");

    const token = user.generateAuthToken();
    user.password = undefined;
    res.json({ token, user });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});
module.exports = router;
