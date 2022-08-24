let express = require("express");
let app = express();

console.log("Hello World");

app.get("/", (req, res) => {
  res.send("GET request to the homepage");
});

module.exports = app;
