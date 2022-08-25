let express = require("express");
let app = express();

console.log("Hello Express");

module.exports = app;

absolutePath = __dirname + "/views/index.html";

console.log(absolutePath);

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  //   res.send("Hello Express");
  res.sendFile(absolutePath);
});
