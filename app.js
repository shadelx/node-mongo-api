const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();

// get DB link connection
dotenv.config();
const mongoUrl = process.env.DATABASE_URL;
mongoose.connect(mongoUrl);
const database = mongoose.connection;
// check connection error
database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

require('./middlewares/authenticate')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1> home page<h1/>");
});

//  main route
app.use("/api", require("./routes"));

app.listen(process.env.PORT || 3000, () => {
  console.log(`express on port 3000`);
});
