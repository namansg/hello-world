var express = require("express");
var http = require("http");

var app = express();

app.get('/',function(req,res){
  res.send('Hello World');
});

app.listen(80, function() {
    console.log("Node app is running at localhost:80");
});

// http.createServer(function (request, response) {
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.end('Hello World...\n');
// }).listen(80);
// console.log('server started');
