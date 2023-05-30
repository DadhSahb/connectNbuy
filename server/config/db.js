const mongoose = require("mongoose");
const config = require("config");

const db = config.get("mongoURI");

const connect = async () => {
  try {
    await mongoose.connect(db);
    console.log("mongoDB connected");
  } catch (error) {
    console.log(error.message);
  }
};
const connection = mongoose.connection;

exports.connect = connect;
exports.connection = connection;
