var socket = io.connect('http://150.253.89.139:3000') // connect to the server
var vid = document.getElementById("bgvid");

socket.on('connect', function(data){ // when connected, do something
  console.log("connected to the server" + socket.id); // log out out id
})



$(window).scroll(function(e){ // on click, so something
  console.log(e) // see the results of the click event.

  socket.emit('distortMore', true) // send out a message of distortMore to the server, it will handle the details (party planning)!


})


/*
*
* Gestion de l'interactivité avec jQuery
*
*/


$(document).ready(
	function(){

		/*
		* ----------------------------------------------------------------------
		* Le script est à insérer ci-dessous
		* ----------------------------------------------------------------------
		*/



		/*
			* ----------------------------------------------------------------------
			* SCROLL VERTICAL
			* ----------------------------------------------------------------------
			*/


		var compteur = 0;



		$(window).click(
			function(){
				// eq = numéro div
				//$('.project').eq(0).show();
				$('.project').removeClass('inview');
				$('.project').eq( compteur ).addClass('shown');
				$('.project').eq( compteur ).addClass('inview');
				$('.project').draggable();
				// chnage position X,Y
				$('.project').eq( compteur ).css('left',_posX + 'px');
				$('.project').eq( compteur ).css('top',_posY + 'px');
				$('.about').addClass('shown');

				// Chnagement image vignette
				$('#curseur').attr('src', 'images/vignettes/vignette_' + (compteur+2) + '.png');

				compteur+= 1;

				var currentImage = $('.project.shown');
				if(currentImage.hasClass("video")){
					console.log('vid');
					$(".vidplayer").trigger('play');
				   } else {
				     $(".vidplayer").trigger('pause');
					}
			}

		);

	 $('.except').click(function(event){
		 event.stopPropagation();
	});

		$('.about-content').click(
			function(){
				$('.about-box').toggleClass("shown hidden");
			}
		);

		// $('.about-box').click(
		// 	function(){
		// 		$('.about-box').addClass('hidden');
		// 	}
		// );





		/*
		* ----------------------------------------------------------------------
		* PRELOADING
		* ----------------------------------------------------------------------
		*/

		$.preLoadImages(
			"img/marta.mp4"
   );

		/*
		* ----------------------------------------------------------------------
		* MOUSEOVER
		* ----------------------------------------------------------------------
		*/


      //    $("img[id!='curseur']").hover(
			// function(){
      //       	this.src = this.src.replace("_bitmap","_quadri");
      //       },
      //       function(){
      //       	this.src = this.src.replace("_quadri","_bitmap");
      //       }
      //    );

		/*
		* ----------------------------------------------------------------------
		* POSITION SOURIS
		* ----------------------------------------------------------------------
		*/

		var _posX;
		var _posY;

		$('body').mousemove(
			function(e){
				_posX = e.pageX;
				_posY = e.pageY;
				// Position curseur
				$('#curseur').css('left', _posX);
				$('#curseur').css('top', _posY);
			}
		);


		// ----------------------------------------------------------------------

});

(function($) {
var cache = [];
$.preLoadImages = function() {
  var args_len = arguments.length;
  for (var i = args_len; i--;) {
	var cacheImage = document.createElement('img');
	cacheImage.src = arguments[i];
	cache.push(cacheImage);
  }
}
})(jQuery)


	/*
		* ----------------------------------------------------------------------
		* CROIX FERMETURE FENETRE
		* ----------------------------------------------------------------------
		*/

		//
		// 	$('.project .croix').click(
		// 	function(){
		// 		$('.project').eq( compteur ).hide();
		// 		return false;
		// 	}
		// );
