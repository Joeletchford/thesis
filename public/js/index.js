


$(document).ready(function() {
  // socket stuff
  var socket = io.connect('http://10.5.32.133:8080')

  socket.on('connect', function(data) { // when connected, do something
    console.log("connected to the server" + socket.id); // log out out id
  })
 var sd1 = $("#audio1")[0];
  var sd2 = $("#audio2")[0];

  $(window).mousemove(_.throttle(function(e) {
    socket.emit('distortMore', true)
  }));
  // sound


  socket.on('amountToDistort', function(distortionAmount) {

    console.log(distortionAmount)

    if (distortionAmount > 0) {


      var sound1 = document.getElementById("audio1");
      var sound2 = document.getElementById("audio2");

      var s2vol = map(distortionAmount, 0, 1500, 0.0, 1.0)
      var s1vol = map(distortionAmount, 0, 1500, 1.0, 0.0)
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





// this is  where im attempting to creat an on load sond element
