const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const indexRoutes = require("./routes/index.js");

const app = express();
dotenv.config();



app.use(cors());
app.options("*", cors());
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

// .env variables

const PORT = process.env.PORT || 4000;

// Routers
app.use("/", indexRoutes);

app.get("/", (req, res) => {
  return res.send("KAYAM HABIT BUILDER STAGING LIVE");
});



module.exports = app;