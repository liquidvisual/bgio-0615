/*
    ANIMATION.JS - Last updated: 12.06.15

    - Notes -

    Uses jQuery Transit for animations
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// Intro Animation
//-----------------------------------------------------------------

$(window).load(function() {

	// Another approach - has more delay though

	// $('.trickle-logos-1').show().css('opacity', 0).transition({ opacity: 100 },
	// 	800, function(){
	// 		$('.trickle-logos-2').show().css('opacity', 0).transition({ opacity: 100 },
	// 			800, function(){
	// 				$('.trickle-logos-3').show().css('opacity', 0).transition({ opacity: 100 },
	// 					800, function(){
	// 						$('.hero-body-text').show().css('opacity', 0).transition({ opacity: 100 },
	// 						 800, function(){
	// 						 	$('.footer').show().css('opacity', 0).transition({ opacity: 100 }, 2000);
	// 				});
	// 			});
	// 		});
	// 	});

	if ($('.animation-enabled').length) {
		$('.trickle-logos-1').show().css('opacity', 0).transition({ opacity: 100, delay: 0 }, 1000);
		$('.trickle-logos-2').show().css('opacity', 0).transition({ opacity: 100, delay: 500 }, 1000);
		$('.trickle-logos-3').show().css('opacity', 0).transition({ opacity: 100, delay: 1500 }, 1000);
		$('.hero-body-text').show().css('opacity', 0).transition({ opacity: 100, delay: 2000 }, 1000);
		$('.logo, .footer, .topbar').show().css('opacity', 0).transition({ opacity: 100, delay: 2500 }, 2000);
	}
});

//==================================================
//
//==================================================