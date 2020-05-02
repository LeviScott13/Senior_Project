var express = require('express');
var app = express();
var port = 4000;

const fs = require('fs')
var array = fs.readFileSync('validation.txt').toString().split("\n");
app.set("view engine", "ejs");
app.use(express.static("public"));

var validatedImage;
var validateCount;

app.get("/", function(req,res){
  
    res.render('FaikHomepage');
});
app.get("/Faik2D", function(req,res){
  
    validatedImage = array[0];
    validateCount = array[1];
    res.render('Faik2D', {validatedImage: validatedImage, validateCount: validateCount});
});
app.get("/FaikTutorial", function(req,res){
  
    res.render('FaikTutorial');
});
app.listen(port, () =>{
    console.log("Server is started!!");
});