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

const mySecret = process.env["MESSAGE_STYLE"];

if (mySecret === "uppercase") {
  message = "Hello json".toUpperCase();
} else {
  message = "Hello json";
}

console.log(message);

// Simple API request
app.get("/json", (req, res) => {
  res.json({ message: message });
});
