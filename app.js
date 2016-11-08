// "start": "npm run build:watch",

//this is for the package json account to change when using node

// var app = require('express')() // use the express js framework to server out html files (handle the request and response on the server)
var express = require('express');
var app = express();
var server = require('http').Server(app) // start a server instance on a port
var io = require('socket.io')(server) // use socket.io for real time connections aka. wesockets
  // var port = process.env.PORT || 8000

server.listen(3002, function() { // set up a server on port 3000, do a callback when it started successfully
  console.log("server started on 3002");
});

app.use(express.static('public')); //load out anything in the 'public' folder

var distortionAmount = 0

io.on('connection', function(socket) { // if socket.io sees a new connection, do something with them...
  console.log(socket.id)

  socket.on('distortMore', function(data) {

    distortionAmount = distortionAmount + 1

    io.emit('amountToDistort', distortionAmount);
  })
  socket.on('distortLess', function(data) {
    distortionAmount = distortionAmount - 10

    io.emit('amountToDistort', distortionAmount);
  })
})
