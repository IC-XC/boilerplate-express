var express = require('express');
var app = express();

console.log("Hello World");

app.get("/", function(req, res) {
  res.send("Hello Express");
});

app.get('/', (req, res) => {
  response.sendFile(__dirname+"/views/index.html");
});

// Normal usage
app.use(express.static(__dirname + "/public"));

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));


































 module.exports = app;
