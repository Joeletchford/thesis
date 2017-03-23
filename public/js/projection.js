// var socket = io.connect() // connect to the server
var socket = io.connect('http://10.5.32.124:8080')
//set up a place for us to connect to, and try to connect.

var vid = document.getElementById("bgvid");

socket.on('connect', function(data) { // when we are connected do something.
  console.log("connected to the server" + socket.id);
  // log out our socket's id, some long garbled number letter tcching that is unique!
})

socket.on('amountToDistort', function(distortionAmount) {
  // if we see a projectionRectangle message then do some stuff
  console.log(distortionAmount) //see the coordinates come down.

  if (distortionAmount > 1) {
    // what im working with now
    $(".overlay").css({
      'filter': 'saturate(' + distortionAmount * 0.01 + ') blur(' + distortionAmount * 0.01 + 'px)'
    });
  }
}, 200);

socket.on('amountToDistort', function(distortionAmount) {
  // if we see a projectionRectangle message then do some stuff
  console.log(distortionAmount) //see the coordinates come down.

  if (distortionAmount > 0) {
    var sound1 = document.getElementById("audio1");
    var sound2 = document.getElementById("audio2");
    var s1vol = map(distortionAmount, 0, 1200, 0.0, 1.0)
    var s2vol = map(distortionAmount, 0, 1200, 0.3, 0.0)
    sound1.volume = s1vol;
    sound2.volume = s2vol;
  };
})

function map(n, start1, stop1, start2, stop2) {
  return ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
};
