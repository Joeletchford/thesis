


$(document).ready(function() {
  // socket stuff
  var socket = io.connect('http://10.5.32.195:8080')

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
// Instituut JS


	/*
	* Basic Count Up from Date and Time
	* Author: @mrwigster / trulycode.com
	*/
/*
	window.onload=function() {
	  // Month,Day,Year,Hour,Minute,Second
	  upTime('jun,01,2016,18:30:00'); // ****** Change this line!
	}
	function upTime(countTo) {
	  now = new Date();
	  countTo = new Date(countTo);
	  difference = (now-countTo);

	  days=Math.floor(difference/(60*60*1000*24)*1);
	  hours=Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
	  mins=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
	  secs=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);

	  document.getElementById('days').firstChild.nodeValue = days;
	  document.getElementById('hours').firstChild.nodeValue = hours;
	  document.getElementById('minutes').firstChild.nodeValue = mins;
	  document.getElementById('seconds').firstChild.nodeValue = secs;

	  clearTimeout(upTime.to);
	  upTime.to=setTimeout(function(){ upTime(countTo); },1000);
	}
*/


  var images = new Array('images/blueridge.gif', 'images/james.gif', 'images/cityrva.gif', 'images/nrg1.gif', 'images/nrg.gif', 'images/city.gif', 'images/camp.gif', 'images/nrg1.gif', 'images/blueridge.gif', 'images/blueridge.gif');
	 var _milliseconds = 100;
   var _second = _milliseconds * 60;
   var _minute = _second * 60;
   var _hour = _minute * 60;
   var _day = _hour * 24;

   var interval = setInterval(function()
   {
       var date = new Date();
       var end = new Date('12/26/2017 7:30 PM');
       var distance = (end - date);

    if (distance < 0) {
             var distance = (Math.abs(distance))
            }

       var hourz = String(Math.floor(distance/_hour));
       var minutes = String(Math.floor((distance%_hour)/_minute));
       var seconds = String(Math.floor((distance%_minute)/_second));
			 var mili = String(Math.floor((distance%_second)/_milliseconds));

   if(hourz < 100)
      {
       if (hourz < 10)
        {
	        $('#hour0').attr('src', images[0]);
          $('#hour1').attr('src', images[0]);
          $('#hour2').attr('src', images[hourz.charAt(0)]);
         }
        else
         {
          $('#hour0').attr('src', images[0]);
          $('#hour1').attr('src', images[hourz.charAt(0)]);
          $('#hour2').attr('src', images[hourz.charAt(1)]);
         }
       }
      else
      {
          $('#hour0').attr('src', images[hourz.charAt(0)]);
          $('#hour1').attr('src', images[hourz.charAt(1)]);
          $('#hour2').attr('src', images[hourz.charAt(2)]);
      }

       if(minutes < 10)
      {
          $('#minute1').attr('src', images[0]);
          $('#minute2').attr('src', images[minutes.charAt(0)]);
      }
      else
      {
          $('#minute1').attr('src', images[minutes.charAt(0)]);
          $('#minute2').attr('src', images[minutes.charAt(1)]);
      }

       if(seconds < 10)
      {
          $('#second1').attr('src', images[0]);
          $('#second2').attr('src', images[seconds.charAt(0)]);
      }
      else
      {
          $('#second1').attr('src', images[seconds.charAt(0)]);
          $('#second2').attr('src', images[seconds.charAt(1)]);
      }
			if(mili < 10)
		 {
				 $('#mili1').attr('src', images[0]);
				 $('#mili2').attr('src', images[mili.charAt(0)]);
		 }
		 else
		 {
				 $('#mili1').attr('src', images[mili.charAt(0)]);
				 $('#mili2').attr('src', images[mili.charAt(1)]);
		 }
	 })





});






//stupid nesting links in home page
