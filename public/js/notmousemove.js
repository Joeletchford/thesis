//
// $.fn.notmousemove = function(time, callback) {
//     return this.each(function(i,ele) {
//         $(ele).on({
//             mouseenter: function() {
//                 $(this).data('nomousetimer', setTimeout(callback, time));
//             },
//             mousemove: function() {
//                 clearTimeout($(this).data('nomousetimer'));
//                 $(this).data('nomousetimer', setTimeout(callback, time));
//             },
//             mouseleave: function() {
//                 clearTimeout($(this).data('nomousetimer'));
//             }
//         });
//     });
// };



//+~+~+~+~+~+as a Jquery plugin.+~+~+~+~+~+
$.fn.mouseNotMoving = function(returnRate, callback) {
    var timeout = null;
    $(this).on('mousemove', function() {
      clearInterval(timeout);
      timeout = setInterval(function() {
          // console.log('Mouse idle...');
          if(typeof callback == 'function'){ callback() };
      }, returnRate); //rate of interval

    })
