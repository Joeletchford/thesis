// var app = require('express')() // use the express js framework to server out html files (handle the request and response on the server)
var express = require('express');
var app = express();
var server = require('http').Server( app ) // start a server instance on a port
var io = require('socket.io')(server) // use socket.io for real time connections aka. wesockets
var port = 3005;

var timers = require('timers');

server.listen(port, function() { // set up a server on port 3000, do a callback when it started successfully
  console.log("server started on ", port);
});

app.use(express.static('public')); //load out anything in the 'public' folder

var distortionAmount = 0

io.on('connection', function(socket) { // if socket.io sees a new connection, do something with them...
  console.log(socket.id)

  socket.on('distortMore', function(data) {

    distortionAmount = distortionAmount + 20
    io.emit('amountToDistort', distortionAmount);
    console.log('more', distortionAmount);

    distortLess();
  });
})

function distortLess() {
  var interval = timers.setInterval(function() {
    if (distortionAmount > 0) {
      distortionAmount = distortionAmount - 1
      io.emit('amountToDistort', distortionAmount);
      console.log('less', distortionAmount);
    } else {
      console.log('🐈 Interval cleared!')
      clearInterval(interval);
    }
  }, 200);
}
