/*
  A simple static file server
*/

var http = require('http')
  , path = require('path')
  , express = require('express');


var app = express();

app.set('port', 3000);

app.use( express.static( path.join(__dirname, '..', 'app')));


http.createServer(app).listen(app.get('port'), function(){

  console.log("Server listening on port " + app.get('port'));

});