//
// $( ".image" ).draggable({ containment: ".box" });


$(document).ready(function() {
    var a = 3;
    $('#image1, #image2, #image3, #image4').draggable({
		scroll: false,
		 containment: '.outershell',
   	start: function(event, ui) { $(this).css("z-index", a++); }
});
    $('#box img').click(function() {
        $(this).addClass('top').removeClass('bottom');
        $(this).siblings().removeClass('top').addClass('bottom');
        $(this).css("z-index", a++);

    });
});
