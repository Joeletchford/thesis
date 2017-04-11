


$(document).ready(function() {
  // socket stuff

	// wifi this is it
  // var socket = io.connect('http://10.5.30.131:8080')



	//
	var socket = io.connect() // connect to the server




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

      var s2vol = map(distortionAmount, 0, 1200, 0.0, 1.0)
      var s1vol = map(distortionAmount, 0, 1200, 0.6, 0.0)
      sound2.volume = s2vol;
      sound1.volume = s1vol;

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






//  dat second clock







jQuery(document).ready(function( $ ) {

  var images = new Array('images/layer1.png', 'images/layer2.png', 'images/layer3.png', 'images/layer4.png', 'images/layer5.png', 'images/layer6.png', 'images/layer7.png', 'images/layer8.png', 'images/layer9.png', 'images/layer10.png', 'images/layer11.png'
);


	var seconds = 0;
	var minutes = 0;

var timer = setInterval(function(){
	//do somehting ever 1000ms = 1s
	seconds++ // add one to the seconds
	var randomImage = Math.floor(Math.random() * images.length + 1);
	var randomImage2 = Math.floor(Math.random() * images.length + 1);
	$('#sec1').attr('src', images[randomImage]);
  $('#sec2').attr('src', images[randomImage2]);


	if (seconds >= 60){ //if were at a minute
		seconds = 0; // reset the counter to 0, start again.
		//its been a minute
		minutes++;
		var randomImage3 = Math.floor(Math.random() * images.length + 1);
		var randomImage4 = Math.floor(Math.random() * images.length + 1);
		$('#min1').attr('src', images[randomImage3]);
		$('#min2').attr('src', images[randomImage4]);
	}

	if(minutes >= 60){
		//its been an hour
		minutes = 0
		var randomImage5 = Math.floor(Math.random() * images.length + 1);
		var randomImage6 = Math.floor(Math.random() * images.length + 1);
		$('#ho1').attr('src', images[randomImage5]);
		$('#ho2').attr('src', images[randomImage6]);
	}
},1000)
});




//fthird right


function myFunction() {
    var x = document.getElementById('myDIV');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function myFunction2() {
    var x = document.getElementById('myDIV2');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function myFunction3() {
    var x = document.getElementById('myDIV3');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
function myFunction4() {
    var x = document.getElementById('myDIV4');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}


// block horizontal scroll
