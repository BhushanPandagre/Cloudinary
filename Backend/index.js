var express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();


mongoose.connect('mongodb://127.0.0.1:27017/cloudinary');
const PORT = process.env.PORT || 8000;

// var productRouter = require("./router/productRoute.js")
// const prorouter = require("./route/proRouter.js")
var app = express();
app.use(express.json());
var cors = require("cors");
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
// app.use("/product",prorouter);
const route=require("./route/proRouter")

app.use("/product", route)


app.listen(PORT , (req,res)=>{
console.log("app is runing 8000");
});

