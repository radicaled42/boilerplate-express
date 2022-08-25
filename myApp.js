let express = require("express");
let app = express();

console.log("Hello Express");

module.exports = app;

absolutePath = __dirname + "/views/index.html";

console.log(absolutePath);

app.get("/", (req, res) => {
  //   res.send("Hello Express");
  res.sendFile(absolutePath);
});
