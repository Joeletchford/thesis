
$.fn.notmousemove = function(time, callback) {
    return this.each(function(i,ele) {
        $(ele).on({
            mouseenter: function() {
                $(this).data('nomousetimer', setTimeout(callback, time));
            },
            mousemove: function() {
                clearTimeout($(this).data('nomousetimer'));
                $(this).data('nomousetimer', setTimeout(callback, time));
            },
            mouseleave: function() {
                clearTimeout($(this).data('nomousetimer'));
            }
        });
    });
};
