const express = require("express");
const cors = require("cors");
const config = require("config");
const { connect } = require("./config/db");

const PORT = 5000;
const app = express();
connect();

// using CORS 
app.use(cors());

// API routes
const auth = require("./routes/auth");

app.use("/auth", auth);

app.listen(PORT, function () {
  console.log(`App is listening on the port ${PORT}`);
});
