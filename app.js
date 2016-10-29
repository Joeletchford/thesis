// var app = require('express')() // use the express js framework to server out html files (handle the request and response on the server)
var express = require('express');
var app = express();
var server = require('http').Server( app ) // start a server instance on a port
var io = require('socket.io')(server) // use socket.io for real time connections aka. wesockets

server.listen(3000, function(){ // set up a server on port 3000, do a callback when it started successfully
  console.log("server started on 3000");
})

app.use(express.static('public')); //load out anything in the 'public' folder



var distortionAmount = 0
//
//
// 			setInterval(function(){
// 				distortionAmount = 0
// 	}, 1 * 30000)


io.on('connection', function(socket){  // if socket.io sees a new connection, do something with them...
  console.log(socket.id) // prints out the socket that connected (ie: all users + the projection)

  socket.on('distortMore', function(data){ //look for any messages with the 'addRectangle'

  distortionAmount = distortionAmount + 1

    io.emit('amountToDistort', distortionAmount); // send out a message to the projection to add a rect to the screen.

  })
	})
