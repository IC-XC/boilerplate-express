var express = require('express');
var app = express();

console.log("Hello World");

app.get("/", function(req, res) {
  res.send("Hello Express");
});

app.get('/', (req, res) => {
  response.sendFile(__dirname+"/views/index.html");
});


































 module.exports = app;
