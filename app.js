const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//middleware
app.use(express.json());
app.use(cors());
 //routes
const userRoute=require('./routes/user.route')


app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

// route colling
app.use("/",userRoute)




module.exports = app;
