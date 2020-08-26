// $(window).scroll(function () {
	
// 	var scrollToElem = $('#banner').offset().top

// 	 if ($(window).scrollTop() >= scrollToElem) {
// 	 $('#navbar').addClass('sticky-top');
// 	 } else {
// 	 $('#navbar').removeClass('sticky-top');
// 	 }
//    });

(function($) {

    "use strict";
	
	$(window).on("load", function() {
		
		/* ----------------------------------------------------------- */
        /*  TEXT ROTATOR ANIMATION
		/* ----------------------------------------------------------- */
		if ($("#selector").length) {
			$("#selector").animatedHeadline({
				 animationType: "clip"
			});
		}
		
	});    
})(jQuery);


