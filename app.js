

const express = require("express");

const app = express();

const bodyParser = require("body-parser");

const ejs = require("ejs");

const anime = require('animejs');



app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.render("home")
})

app.get("/about", function(req, res) {
  res.render("about")
})

app.get("/contact", function(req, res) {
  res.render("contact")
})

app.get("/projects", function(req, res) {
  res.render("projects")
})





app.listen(3000, function() {
  console.log("Server is running on port 3000")
})


