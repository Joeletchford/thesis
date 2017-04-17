// var app = require('express')() // use the express js framework to server out html files (handle the request and response on the server)
var express = require('express');
var app = express();
var server = require('http').Server( app ) // start a server instance on a port
var io = require('socket.io')(server) // use socket.io for real time connections aka. wesockets
// with wifi

var port = 8080;
var timers = require('timers');
// server.listen(port, "10.5.32.124", function() {
//   console.log("server started on ", port);
// });

//  local host

var port = process.env.PORT || 8000
var timers = require('timers');

server.listen(port, function() {
    console.log("App is running on port " + port);
});

app.use(express.static('public')); //load out anything in the 'public' folder


app.use(express.static('public')); //load out anything in the 'public' folder

var distortionAmount = 0

io.on('connection', function(socket) { // if socket.io sees a new connection, do something with them...
  //console.log(socket.id)

  socket.on('distortMore', function(data) {

    distortionAmount = distortionAmount + 9
    //dont go higher than 1500
    if(distortionAmount > 1200){
      distortionAmount = 1200;
    }

    io.emit('amountToDistort', distortionAmount);
    //console.log('more', distortionAmount);

    distortLess();
  });
})

function distortLess() {
  var interval = timers.setInterval(function() {
    if (distortionAmount > 0) {
      distortionAmount = distortionAmount - 1
      io.emit('amountToDistort', distortionAmount);
      //console.log('less', distortionAmount);
    } else {
    //PP  console.log('🐈 Interval cleared!')
      clearInterval(interval);
    }
  },600);
}
