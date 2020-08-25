var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 5000;

const fs = require('fs')
var array;
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

var validation;

app.post("/", function(req,res){
    var value = req.body.selection;
    let {PythonShell} = require('python-shell')
    let pyshell = new PythonShell('exe_plates.py');
    console.log(value);
    if(value == "LP"){
        console.log(value);
        pyshell.on('message', function (message) {
            console.log(message);
        });
        pyshell.end(function () {
            console.log('finished');
        });
        function update(){
            array = fs.readFileSync('validation.txt').toString().split("\n");
            validation = array[0];
            res.render('Faik2D', {validation: validation});
        }
        setTimeout(update, 5000);
    }
    else{
        console.log(value);
        let pyshell2 = new PythonShell('exe_faces.py');
        pyshell2.on('message', function (message) {
            console.log(message);
        });
        pyshell2.end(function () {
            console.log('finished');
        });
        function update2(){
            array = fs.readFileSync('validation.txt').toString().split("\n");
            validation = array[0];
            res.render('Faik2D', {validation: validation});
        }
        setTimeout(update2, 5000);
    }
});

app.get("/", function(req,res){
  
    res.render('FaikHomepage');
});
app.get("/Faik2D", function(req,res){
  
    array = fs.readFileSync('validation.txt').toString().split("\n");
    validation = array[0];
    res.render('Faik2D', {validation: validation});
});
app.get("/FaikTutorial", function(req,res){
  
    res.render('FaikTutorial');
});
app.listen(port, () =>{
    console.log("Server is started!!");
});