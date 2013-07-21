var express = require('express');
var fs = require('fs');
var buf = require('buffer');

var app = express.createServer(express.logger());
var fileBuf = fs.readFileSync('index.html');
var content = fileBuf.toString();

app.get('/', function(request, response) {
  response.send(content);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
