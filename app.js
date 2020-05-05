var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 4000;

const fs = require('fs')
var array;
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

var validateCount;

app.post("/", function(req,res){
    var value = req.body.selection;
    value2 = value.toString();
    let {PythonShell} = require('python-shell')
    let pyshell = new PythonShell('exe_plates.py');

    if(value == "LP"){
        pyshell.on('message', function (message) {
            // received a message sent from the Python script (a simple "print" statement)
            console.log(message);
        });
        pyshell.end(function () {
            console.log('finished');
        });
        function update(){
            array = fs.readFileSync('validation.txt').toString().split("\n");
            validateCount = array[0];
            res.render('Faik2D', {validateCount: validateCount});
        }
        setTimeout(update, 3000);
    }
});

app.get("/", function(req,res){
  
    res.render('FaikHomepage');
});
app.get("/Faik2D", function(req,res){
  
    array = fs.readFileSync('validation.txt').toString().split("\n");
    validateCount = array[0];
    res.render('Faik2D', {validateCount: validateCount});
});
app.get("/FaikTutorial", function(req,res){
  
    res.render('FaikTutorial');
});
app.listen(port, () =>{
    console.log("Server is started!!");
});