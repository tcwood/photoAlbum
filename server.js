//Main server stuff

var express = require('express');
var mongoose = require('mongoose');

var bodyParser = require('body-parser');

var data = require('./client/data/data.json')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// mongoose.connect('mongodb:localhost/photoAlbum');
app.use(express.static(__dirname + '/client'));
// app.use(express.static('../index.html'));
// app.use(express.static('../styles/styles.css'));
// app.use(express.static('../components'));

app.use('/*', function(req, res, next) {
  res.header('access-control-allow-origin', '*');
  res.header('access-control-allow-headers', 'origin, x-requested-with, content-type, accept');
  next();
});


//get
app.get('/', function(res, req, next) {
  console.log('dirname' + __dirname);
  console.log('hi');
  res.sendFile(__dirname + 'client/index.html');
  // req.send(data);
});

//put

//post


console.log('photoAlbum is listening on port 3000')
app.listen(3000);

module.exports = app;