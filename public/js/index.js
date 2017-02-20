


$(document).ready(function() {
  // socket stuff
  var socket = io.connect('http://10.5.32.175:8080')

  socket.on('connect', function(data) { // when connected, do something
    console.log("connected to the server" + socket.id); // log out out id
  })
 // var sd1 = $("#audio1")[0];
 //  var sd2 = $("#audio2")[0];

  $(window).mousemove(_.throttle(function(e) {
    socket.emit('distortMore', true)
  }));
  // sound


  socket.on('amountToDistort', function(distortionAmount) {

    console.log(distortionAmount)

    if (distortionAmount > 0) {


      var sound1 = document.getElementById("audio1");
      var sound2 = document.getElementById("audio2");

      // var s2vol = map(distortionAmount, 0, 1500, 0.0, 1.0)
      // var s1vol = map(distortionAmount, 0, 1500, 1.0, 0.0)
      // sound2.volume = s2vol;
      // sound1.volume = s1vol;

		};
  });

  function map(n, start1, stop1, start2, stop2) {
    return ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
  };



  // other event listeners
  var element = 0;
  var a = 3;

  $(window).click((function() {
    $('#showall').click(function(e) {
      $('.project,.imgdrag').show();

    });
  }));

  $('.project, .imgdrag, .imgdrag2').draggable({
    axis: "x,y",
    containment: "body",
    start: function(event, ui) {
      $(this).css("z-index", a++);
    }
  });

  $('drag div').click(function() {
    $(this).addClass('top').removeClass('bottom');
    $(this).siblings().removeClass('top').addClass('bottom');
    $(this).css("z-index", a++);
  });

  $("a").click(function() {
    $(".top").removeClass("top").addClass("bottom");
    var box = $(this).attr("href");
    //alert(box);
    $(box).addClass("top");
    $(box).css("z-index", a++);
  });

});





// block clock image set




jQuery(document).ready(function( $ ) {

  var images = new Array('images/1.png', 'images/2.png', 'images/3.png', 'images/4.png', 'images/5.png', 'images/6.png', 'images/7.png', 'images/8.png', 'images/9.png', 'images/10.png','images/11.png', 'images/12.png', 'images/13.png', 'images/14.png', 'images/15.png', 'images/16.png', 'images/17.png', 'images/18.png', 'images/19.png', 'images/20.png'
);

	// var _second = 1000;
  //  var _minute = _second * 60;
  //  var _hour = _minute * 60;
  //  var _day = _hour * 24;
	//
  //  var interval = setInterval(function()
  //  {
  //      var date = new Date();
  //      var end = new Date('05/14/2017 7:30 PM');
  //      var distance = (end - date);
	//
  //   if (distance < 0) {
  //            var distance = (Math.abs(distance))
  //           }
	//
  //      var hourz = String(Math.floor(distance/_hour));
  //      var minutes = String(Math.floor((distance%_hour)/_minute));
  //      var seconds = String(Math.floor((distance%_minute)/_second));
	// 		//  var mili = String(Math.floor((distance%_second)/_milliseconds));
	//
  //  if(hourz < 100)
  //     {
  //      if (hourz < 20)
  //       {
	//         // $('#hour0').attr('src', images[0]);
  //         $('#hour1').attr('src', images[0]);
  //         $('#hour2').attr('src', images[hourz.charAt(0)]);
  //        }
  //       else
  //        {
  //         // $('#hour0').attr('src', images[0]);
  //         $('#hour1').attr('src', images[hourz.charAt(0)]);
  //         $('#hour2').attr('src', images[hourz.charAt(1)]);
  //        }
  //      }
  //     else
  //     {
  //         // $('#hour0').attr('src', images[hourz.charAt(0)]);
  //         $('#hour1').attr('src', images[hourz.charAt(1)]);
  //         $('#hour2').attr('src', images[hourz.charAt(2)]);
  //     }
	//
  //      if(minutes < 20)
  //     {
  //         $('#minute1').attr('src', images[0]);
  //         $('#minute2').attr('src', images[minutes.charAt(0)]);
  //     }
  //     else
  //     {
  //         $('#minute1').attr('src', images[minutes.charAt(1)]);
  //         $('#minute2').attr('src', images[minutes.charAt(2)]);
  //     }
	//
  //      if(seconds < 20)
  //     {
  //         $('#second1').attr('src', images[0]);
  //         $('#second2').attr('src', images[seconds.charAt(0)]);
  //     }
  //     else
  //     {
  //         $('#second1').attr('src', images[seconds.charAt(0)]);
  //         $('#second2').attr('src', images[seconds.charAt(1)]);
  //     }
	//  },1000)

	var seconds = 0;
	var minutes = 0;

var timer = setInterval(function(){
	//do somehting ever 1000ms = 1s
	seconds++ // add one to the seconds
	var randomImage = Math.floor(Math.random() * images.length + 1);
	var randomImage2 = Math.floor(Math.random() * images.length + 1);
	$('#second1').attr('src', images[randomImage]);
  $('#second2').attr('src', images[randomImage2]);


	if (seconds >= 60){ //if were at a minute
		seconds = 0; // reset the counter to 0, start again.
		//its been a minute
		minutes++;
		var randomImage3 = Math.floor(Math.random() * images.length + 1);
		var randomImage4 = Math.floor(Math.random() * images.length + 1);
		$('#minute1').attr('src', images[randomImage3]);
		$('#minute2').attr('src', images[randomImage4]);


	}

	if(minutes >= 60){
		//its been an hour
		minutes = 0
		var randomImage5 = Math.floor(Math.random() * images.length + 1);
		var randomImage6 = Math.floor(Math.random() * images.length + 1);
		$('#hour1').attr('src', images[randomImage5]);
		$('#hour2').attr('src', images[randomImage6]);

	}

},1000)



});






//stupid nesting links in home page
