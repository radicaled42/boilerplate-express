let express = require("express");
let bodyParser = require("body-parser");

let app = express();
require("dotenv").config();

console.log("Hello Express");

module.exports = app;

absolutePath = __dirname + "/views/index.html";

console.log(absolutePath);

// Loggin function
app.use(function (req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

// Use body-parser to Parse POST Requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Add static path to use the files under /public
app.use("/public", express.static(__dirname + "/public"));

// Frontend
app.get("/", (req, res) => {
  //   res.send("Hello Express");
  res.sendFile(absolutePath);
});

// Simple API request
app.get("/json", (req, res) => {
  let response = "Hello json";
  if (process.env["MESSAGE_STYLE"] === "uppercase") {
    response = "Hello json".toUpperCase();
  }
  res.json({ message: response });
});

// Now handler - Chain Middleware to Create a Time Server
app.get(
  "/now",
  function (req, res, next) {
    req.time = { time: new Date().toString() };
    next();
  },
  function (req, res) {
    res.json(req.time);
  }
);

// Get Route Parameter Input from the Client
app.get("/:word/echo", (req, res) => {
  res.json({ echo: req.params.word });
});

// Get Query Parameter Input from the Client
app.get("/name", (req, res) => {
  // console.log(`${req.query.first}`);
  res.json({ name: `${req.query.first} ${req.query.last}` });
});

// Get Data from POST Requests
app.post("/name", (req, res) => {
  console.log(req.body);
  res.json({ name: `${req.body.first} ${req.body.last}` });
});
