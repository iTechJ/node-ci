var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send({message: 'Hello World!'});
});

app.listen(3000, function () {
    console.log('App listening on port 3000.');
});


