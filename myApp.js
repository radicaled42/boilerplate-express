let express = require("express");
let app = express();
require("dotenv").config();

console.log("Hello Express");

module.exports = app;

absolutePath = __dirname + "/views/index.html";

console.log(absolutePath);

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

app.use(function (req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});
