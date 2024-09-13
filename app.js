const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const connectMongodb = require("./init/mongodb");
const todoRoute = require("./routes/todo");
const dotenv = require("dotenv")

//environment variables
dotenv.config();

//init app
const app = express();

//connect to mongodb
connectMongodb();

//set up ejs templating engine 
app.set("view engine", "ejs");

//set up public folder for static files
app.use(express.static(path.join(__dirname, "public")))

//body parser middleware for handling form data
app.use(bodyParser.urlencoded({ extended:true }));

//use todo route
app.use("/",todoRoute);


module.exports = app;


