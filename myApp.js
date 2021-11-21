var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello Express');
});

app.gett('/', function (req, res) {
  res.sendFile('__dirname + relativePath/file.ext');
});



































 module.exports = app;
