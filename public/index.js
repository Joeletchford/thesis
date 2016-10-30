var socket = io.connect('http://150.253.89.139:3000') // connect to the server
var vid = document.getElementById("bgvid");

socket.on('connect', function(data) { // when connected, do something
    console.log("connected to the server" + socket.id); // log out out id
})



$(window).click(function(e) { // on click, so something
    console.log(e) // see the results of the click event.

    socket.emit('distortMore', true) // send out a message of distortMore to the server, it will handle the details (party planning)!


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

/*
 */


$(document).ready(
        function() {

            var element = 0;



            $(window).click(
                function() {
                    // eq = numéro div
                    // $('.project').eq(0).show();
                    // $('.project').removeClass('inview');
                    $('.project').eq(element).addClass('shown');
                    $('.project').eq(element).addClass('inview');
                    $('.project').draggable();
                    $('.about').addClass('shown');


                    // allows divs to be placed on click-- X,Y
                    // $('.project').eq( element ).css('left',_posX + 'px');
                    // $('.project').eq( element ).css('top',_posY + 'px');
                    // $('.project').eq( element ).addClass('inview');


                    element += 1;

                    var currentImage = $('.project.shown');
                    if (currentImage.hasClass("video")) {
                        console.log('vid');
                        $(".vidplayer").trigger('play');
                    } else {
                        $(".vidplayer").trigger('pause');
                    }


                    if (currentImage) {
	                            $('.project').addClass('front');

	                        }


                    }

                );

                $('.except').click(function(event) {
                    event.stopPropagation();
                });

                $('.about-content').click(
                    function() {
                        $('.about-box').toggleClass("shown hidden");
                    }
                ); $('.about-box').click(
                    function() {
                        $('.about-box').addClass('hidden');
                    }
                );



            });

        /*
         * ----------------------------------------------------------------------
         * POSITION 	of divs
         * ----------------------------------------------------------------------
         */

        // var _posX;
        // var _posY;
        //
        // $('body').mousemove(
        //     function(e) {
        //         _posX = e.pageX;
        //         _posY = e.pageY;
        //         // Position curseur
        //         $('#curseur').css('left', _posX);
        //         $('#curseur').css('top', _posY);
        //     }
        // );


        // ----------------------------------------------------------------------

        // });
