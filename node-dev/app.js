#!/usr/bin/env nodejs
var http = require('http');
var ip = "127.0.0.1";
http.createServer(function (request, response) {
  // Send the HTTP header 
  // HTTP Status: 200 : OK
  // Content Type: text/plain
  response.writeHead(200, {'Content-Type': 'text/plain'});
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  var greetings = "Hello " + ip;
  // Send the response body as "Hello World"
  response.end(greetings);
}).listen(8080, ip);

// Console will print the message
console.log('Server running at '+ip+':8080/');
