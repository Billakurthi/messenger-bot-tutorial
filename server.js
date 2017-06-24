﻿'use strict'

var express = require('express');
var app = express();
var port = process.env.port || 1337

app.get('/', function (req, res) {
    res.send('Hello World!');
});

var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});





// var express = require("express");
// var app = express();
// var request = require("request");

// var path = require("path");
// var bodyParser = require('body-parser');

// //parse text using body parser
// app.use(bodyParser.json());

// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname + '/index.html'))
// })

// app.get('/webhook/', function (req, res) {
//     res.sendFile(path.join(__dirname + '/webhook.html'))
// })
// // var http = require('http');
// // var server = http.createServer(function(request, response) {

// //     response.writeHead(200, {"Content-Type": "text/plain"});
// //     response.end("Hello World initial app!");

// // });

// var port = process.env.PORT || 1337;
// app.listen(port);

// console.log("Server running at http://localhost:%d", port);
