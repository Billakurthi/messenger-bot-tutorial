var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
    res.send('Hello World!');
});

// // viewed at http://localhost:8080
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/index.html'));
// });

// app.get('/webhook', function(req, res) {
//     res.sendFile(path.join(__dirname + '/webhook.html'));
// });


var port = process.env.port || 1337
app.listen(port);