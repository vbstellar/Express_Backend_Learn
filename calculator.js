const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    var a = Number(req.body.num1);
    var b = Number(req.body.num2);

    var result = a +b;

    res.send("The result of the calculation is: " +result);
})

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname+"/bmiCalculator.html");
})

app.post("/bmicalculator", function(req, res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var resultBMI = (weight / (height*height))*10000;
    res.send("Your BMI is: "+resultBMI);
})

app.listen(3000, ()=>{
    console.log("Started server using localhost:3000")
})