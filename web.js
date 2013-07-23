var express  = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
var readIn = new Buffer(fs.readFileSync('index.html'));
response.send(readIn.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

