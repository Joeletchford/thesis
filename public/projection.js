// <<<<<<< HEAD
// var socket = io.connect('http://localhost:3000')
// =======
var socket = io.connect()
// >>>>>>> d60cd851ef3aa6d4fb34c3b7d44d128a47afaa2a


// var socket = io.connect('http://localhost:3000') //set up a place for us to connect to, and try to connect.
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

	    //  var filterVal = 'saturate(' +  distortionAmount * 0.01 + ') blur(' +  distortionAmount * 0.01 + 'px)';

//  stole this off of Stack this morning to play with a new possible approach with the animate function, tried animate before but had nothing work


			$(".overlay").on('focus',function(){
			   $(this).animate({width:100,mozTransition:'width 500ms ease-out',webkitTransition:'width 500ms ease-out',transition:'filter ease-out'},0,function(){
			       $("#navlinks")
			            .delay(500)
			            .css({display:'block'});
			   });
			});





// what im working with now
		   $(".overlay")
	         .css({'filter': 'saturate(' +  distortionAmount * 0.01 + ') blur(' +  distortionAmount * 0.01 + 'px)'
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
