const express = require("express");
const ejs = require("ejs");

// Create express app
const app = express();



// Initialize Body Parser Middleware to parse data sent by users in the request object
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // to parse HTML form data

// Initialize ejs Middleware
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));

// routes
app.get("/", (req, res) => {
  res.render("index");
});
// routes
app.get("/my_fun_facts", (req, res) => {
    res.render("html/my_fun_facts");
  });
  // routes
app.get("/my_resume", (req, res) => {
    res.render("html/my_resume");
  });
  // routes
app.get("/my_trivia", (req, res) => {
    res.render("html/my_trivia");
  });

app.post("/insertstudents", (req, res) => {
  
});



// Setup server ports
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

