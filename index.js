var express = require('express');
var app = express();
var http = require( 'http' )
var proxywrap = require('findhit-proxywrap');
var proxiedHttp = proxywrap.proxy(http);
var srv = proxiedHttp.createServer(app);

app.get('/', function (req, res) {
  res.send( 'IP = ' + req.connection.remoteAddress + ':' + req.connection.remotePort )
});

app.get('/headers', function (req, res) {
  res.send(req.headers);
});

app.get('/hc', function (req, res) {
  res.send('healthy');
});

app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});

var port = process.env.PORT || 3000;
srv.listen(port);
