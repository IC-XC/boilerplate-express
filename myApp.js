var express = require('express');
var app = express();


/* 7) Implement a Root-Level Request Logger Middleware*/
app.use(function (req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

/*require('dotenv').config();

npm install dotenv
const dotenv=require(“dotenv”)
dotenv.config();*/

/*const mySecret = process.env['MESSAGE_STYLE'];
console.log(mySecret);*/



/* 1) Meet the Node console */
console.log("Hello World");

/* 2) Start a Working Express Server */
/*app.get('/', (req, res) => {
  res.send('Hello Express')
})*/

/* 3) Serve an HTML File */
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

/* 4) Serve Static Assets */
//app.use(express.static(__dirname + "/public"));

app.use("/public", express.static(__dirname + "/public"));

/* 5) Serve JSON on a Specific Route */
/*app.get('/', (req, res) => {
  res.json({"message": 'Hello json'})
})*/

/* 6) Use the .env File */
app.get("/json", (req, res) => {
if (process.env.MESSAGE_STYLE==="uppercas"){
res.json({
message: "Hello json"
}).toUpperCase();
}
else {
res.json({
message: "Hello json"
});
}
});

/* 8) Chain Middleware to Create a Time Server */
app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.send({
      time: req.time
    });
  }
);

/* 9) Get Route Parameter Input from the Client */
app.get("/:word/echo", (req, res) => {
  const { word } = req.params;
  res.json({
    echo: word
  });
});

/* 10) Get Query Parameter Input from the Client */
app.get("/name", function(req, res) {
  var firstName = req.query.first;
  var lastName = req.query.last;
 
  var { first: firstName, last: lastName } = req.query;
  
  res.json({
    name: `${firstName} ${lastName}`
  });
});










 module.exports = app;
