const express = require("express");
const config = require("config");
const { connect } = require("./config/db");

const PORT = 3000;
const app = express();

//api's routes
const auth = require("./routes/auth");
connect();


app.use("/auth", auth);

app.listen(PORT, function () {
  console.log(`App is listening on the port ${PORT}`);
});
