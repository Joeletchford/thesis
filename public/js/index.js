var socket = io.connect('http://10.5.32.159:8080') // connect to

socket.on('connect', function(data) { // when connected, do something
    console.log("connected to the server" + socket.id); // log out out id
})
var sound = new Howl({
  urls: ['images/forest.mp3']
});

var sound2 = new Howl({
  urls: ['images/white.mp3']
});

$(window).mousemove(_.throttle(function(e) {
    socket.emit('distortMore', true);
		timeout = setInterval(function() {
				console.log('Mouse idle...');
				clearInterval(timeout);
////this is where you put the code to do things...
				sound.play();
				// sound2.play();
		}, 200);
}));

$(document).mouseNotMoving(200,function(){
  console.log("mouse not moving...")
	sound2.play();
})



/*
 * ----------------------------------------------------------------------
 * allows drag on mobile
 * ----------------------------------------------------------------------
 */




! function(a) {
    function f(a, b) {
        if (!(a.originalEvent.touches.length > 1)) {
            a.preventDefault();
            var c = a.originalEvent.changedTouches[0],
                d = document.createEvent("MouseEvents");
            d.initMouseEvent(b, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null), a.target.dispatchEvent(d)
        }
    }
    if (a.support.touch = "ontouchend" in document, a.support.touch) {
        var e, b = a.ui.mouse.prototype,
            c = b._mouseInit,
            d = b._mouseDestroy;
        b._touchStart = function(a) {
            var b = this;
            !e && b._mouseCapture(a.originalEvent.changedTouches[0]) && (e = !0, b._touchMoved = !1, f(a, "mouseover"), f(a, "mousemove"), f(a, "mousedown"))
        }, b._touchMove = function(a) {
            e && (this._touchMoved = !0, f(a, "mousemove"))
        }, b._touchEnd = function(a) {
            e && (f(a, "mouseup"), f(a, "mouseout"), this._touchMoved || f(a, "click"), e = !1)
        }, b._mouseInit = function() {
            var b = this;
            b.element.bind({
                touchstart: a.proxy(b, "_touchStart"),
                touchmove: a.proxy(b, "_touchMove"),
                touchend: a.proxy(b, "_touchEnd")
            }), c.call(b)
        }, b._mouseDestroy = function() {
            var b = this;
            b.element.unbind({
                touchstart: a.proxy(b, "_touchStart"),
                touchmove: a.proxy(b, "_touchMove"),
                touchend: a.proxy(b, "_touchEnd")
            }), d.call(b)
        }
    }
}(jQuery);





////////////////


$(document).ready(
    function() {

        var element = 0;



        $(window).click(
            (function() {
                $('#showall').click(function(e) {
                    $('.project,.imgdrag').show();

                });
            })
        );
        $(function() {
            var a = 3;
            $('.project, .imgdrag').draggable({
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

    });
//
// Sounds
//

// $(document).on('mousemove', function() {
//     clearInterval(timeout);
//     timeout = setInterval(function() {
//         console.log('Mouse idle...');
// ////this is where you put the code to do things...
// 				sound.play();
// 				// sound2.play();
//     }, 200); //rate of interval
// });



// // +~+~+~+~+~ raw jQ/jS +~+~+~+~+~~+
// var timeout = null;
// $(document).on('mousemove', function() {
//     clearInterval(timeout);
//     timeout = setInterval(function() {
//         console.log('Mouse idle...');
//         //this is where you put the code to do things...
//     }, 200); //rate of interval
// });
//
//
//
//
// //how to use the jQuery plugin.
// $(document).mouseNotMoving(200,function(){
//   console.log("mouse not moving...")
// })
