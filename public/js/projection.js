// video src https://vimeo.com/154586454





var socket = io.connect('http://10.5.32.145:8080')
  //8080, "10.5.32.145"
  // var socket = io.connect()



// var socket = io.connect('http://localhost:3000') //set up a place for us to connect to, and try to connect.
var vid = document.getElementById("bgvid");

socket.on('connect', function(data) { // when we are connected do something.
  console.log("connected to the server" + socket.id); // log out our socket's id, some long garbled number letter tcching that is unique!

})

socket.on('amountToDistort', function(distortionAmount) { // if we see a projectionRectangle message then do some stuff
  console.log(distortionAmount) //see the coordinates come down.

  if (distortionAmount > 1) {
    // what im working with now
    $(".overlay")
      .css({
        'filter': 'saturate(' + distortionAmount * 0.01 + ') blur(' + distortionAmount * 0.01 + 'px)'
      });
  }
});



//
// setTimeout(function(){
//
//
//  //  $( "video" ).animate({
//  //   filter: saturate(0), blur(0)
//  // }, 5000, function() {  });
//
//     $(".overlay").css({
//       filter: 'saturate(' +  distortionAmount -= 0.04 + ') blur(' +  distortionAmount -= 0.04 + 'px)'
//     })
//
//
//
// }, 1000)

// .animate({
//   height: "toggle",
//   opacity: "toggle"
// }, {
//   duration: "slow"
// });


// setTimeout(function (){
//
// 		$("video").css({ "filter": "ease-in-out"});
// });

// setTimeout(function(){
//   window.location.reload();
// }, 1 * 60000);
