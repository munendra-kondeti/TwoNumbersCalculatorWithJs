
const express = require("express");
const bodyParser = require("body-parser");

var app = express();
// attaching body parser to the express 
app.use(bodyParser.urlencoded({extended:true}))

// sending the index.html file with get method.
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

// Accepting the post request from the user with the post method.
app.post("/",(req,res)=>{
    var num1= Number(req.body.num1);
    var num2= Number(req.body.num2);
    var result = num1+num2;
    res.send("Sum of the numbers "+ result);
});

// We are listening the on the post 4000
var portNumber = 4000;
app.listen(portNumber,()=> console.log("running at "+portNumber));