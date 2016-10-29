var socket = io.connect('http://150.253.89.139:3000') //set up a place for us to connect to, and try to connect.
var vid = document.getElementById("bgvid");

socket.on('connect', function(data){ // when we are connected do something.
  console.log("connected to the server" + socket.id); // log out our socket's id, some long garbled number letter thing that is unique!

})

socket.on('amountToDistort', function(distortionAmount){ // if we see a projectionRectangle message then do some stuff
  console.log(distortionAmount) //see the coordinates come down.

  // if(distortionAmount > 1){
  //   console.log("do something else too!");
	// 	$('#bgvid').css(
	// 		'filter', 'brightness(' +  distortionAmount + '%)');
// }

if(distortionAmount > 1){
	$("video").css({
      filter: 'saturate(' +  distortionAmount * 0.04 + ') blur(' +  distortionAmount * 0.04 + 'px)'
})

}

});

setTimeout(function(){


  $( "video" ).animate({
   filter: saturate(0); blur(0) ,
 }, 5000, function() {  });

    $("video").css({
      filter: 'saturate(' +  distortionAmount -= 0.04 + ') blur(' +  distortionAmount -= 0.04 + 'px)'
    })



}, 1000)

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
