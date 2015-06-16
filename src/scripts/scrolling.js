/*
	SCROLLING.JS - Last updated: 16.06.15
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------

var topMenu = $(".topbar");
var topMenuHeight = topMenu.outerHeight();
var menuItems = $('.topbar, .off-canvas-menu').find('a');

//-----------------------------------------------------------------
// Click Logo: Jump to Top
//-----------------------------------------------------------------

$('.global-header .logo').click(function(e){
	e.preventDefault();
	$('html, body').stop().animate({ scrollTop: 0 }, 500);
});

//-----------------------------------------------------------------
// Scrolling Logic
//-----------------------------------------------------------------

$(window).scroll(function(){
	var scrollTop = $(this).scrollTop();

	// Add bottom-border to Mobile header when scrolling
	if (scrollTop > 0) {
		$('.js-global-header').addClass('has-border');
	} else {
		$('.js-global-header').removeClass('has-border');
	}
});

//-----------------------------------------------------------------
// Click to Scroll Animation
//-----------------------------------------------------------------

menuItems.click(function(e){
	var href = $(this).attr("href"),
	offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;

	e.preventDefault();

	$('html, body').stop().animate({
		scrollTop: offsetTop
		}, 300);
});

//==================================================
//
//==================================================