/*
	SCROLLING.JS - Last updated: 16.06.15
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------

var topMenu = $(".logo");
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
	var href = $(this).attr("href");
	var viewportWidth = $(window).width();
	var offsetTop;

	// If Mobile or Portrait - factor in logo (sections have no vertical padding)
	if (viewportWidth <= 641) {
		offsetTop = href === "#" ? 0 : $(href).offset().top - 50; // we know 50
	} else if (viewportWidth <= 768) {
		offsetTop = href === "#" ? 0 : $(href).offset().top - (topMenuHeight+60);
	} else if (viewportWidth <= 1024) {
		offsetTop = href === "#" ? 0 : $(href).offset().top - (topMenuHeight);
	} else {
		offsetTop = href === "#" ? 0 : $(href).offset().top;
	}

	e.preventDefault();

	$('html, body').stop().animate({
		scrollTop: offsetTop
		}, 300);
});

//==================================================
//
//==================================================