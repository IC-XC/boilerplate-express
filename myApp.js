
var express = require('express');
var app = express();

/*require('dotenv').config();

npm install dotenv
const dotenv=require(“dotenv”)
dotenv.config();*/

const mySecret = process.env['MESSAGE_STYLE'];
console.log(mySecret);

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

















 module.exports = app;
