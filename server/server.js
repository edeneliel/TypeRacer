var express = require('express');
var path = require('path');
require('babel-polyfill');
var app = express();

app.use(express.static(__dirname + '/../dist'));

app.get('/', function (request, response){
    response.sendFile(path.resolve(__dirname, '/../dist/index.html'))
});

app.get("/getRandomPhrase", (req, res) => {
    res.send("Eden Eliel making a Typeracer")
});

app.listen(process.env.PORT, function () {
    console.log("server started on port... " + process.env.PORT)
});