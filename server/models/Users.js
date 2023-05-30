const mongoose = require("mongoose");
const config = require("config");
const jwt = require("jsonwebtoken");
const { jwtPrivateKey } = require("../config/default");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
    default: "USER",
  },
});

UserSchema.methods.generateAuthToken = ()  => {
    const token = jwt.sign(
        {id:this.id,name: this.name, role:this.role},
        config.get(jwtPrivateKey),
        {expiresIn:3600000}
    )
    return token;
}
const User = mongoose.model("User", UserSchema);

exports.User = User;
