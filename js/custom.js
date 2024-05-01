/*---------------------------------------------------------------------
	File Name: custom.js
---------------------------------------------------------------------*/


$(function () {

	"use strict";

	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);



	/* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});


	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$(".main-menu ul li.megamenu").mouseover(function () {
			if (!$(this).parent().hasClass("#wrapper")) {
				$("#wrapper").addClass('overlay');
			}
		});
		$(".main-menu ul li.megamenu").mouseleave(function () {
			$("#wrapper").removeClass('overlay');
		});
	});


	/* Scroll to Top
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(window).on('scroll', function () {
		scroll = $(window).scrollTop();
		if (scroll >= 100) {
			$("#back-to-top").addClass('b-show_scrollBut')
		} else {
			$("#back-to-top").removeClass('b-show_scrollBut')
		}
	});
	$("#back-to-top").on("click", function () {
		$('body,html').animate({
			scrollTop: 0
		}, 1000);
	});


	/* Countdown
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$('[data-countdown]').each(function () {
		var $this = $(this),
			finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function (event) {
			var $this = $(this).html(event.strftime(''
				+ '<div class="time-bar"><span class="time-box">%w</span> <span class="line-b">weeks</span></div> '
				+ '<div class="time-bar"><span class="time-box">%d</span> <span class="line-b">days</span></div> '
				+ '<div class="time-bar"><span class="time-box">%H</span> <span class="line-b">hr</span></div> '
				+ '<div class="time-bar"><span class="time-box">%M</span> <span class="line-b">min</span></div> '
				+ '<div class="time-bar"><span class="time-box">%S</span> <span class="line-b">sec</span></div>'));
		});
	});

	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('#sidebarCollapse').on('click', function () {
			$('#sidebar').toggleClass('active');
			$(this).toggleClass('active');
		});
	});

	/* Product slider 
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	// optional
	$('.carousel').carousel({
		interval: 5000000
	})


});


/* Title Animation
	 -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
var titleText = document.title;
function titleMarquee() {
	titleText = titleText.substring(1, titleText.length) + titleText.substring(0, 1);
	document.title = titleText;
	setTimeout("titleMarquee()", 140);
}


/* Toggle sidebar
	 -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
function openNav() {
	document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
	document.getElementById("mySidepanel").style.width = "0";
}


/* Scroll
	 -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
let unit = document.documentElement.scrollHeight / 100;

const onScrollKopi = () => {

	console.log(unit)

	if (screen.width >= 300 && screen.width <= 374.8) {
		window.scrollTo({ top: 0.8 * unit });
	}
	else if (screen.width >= 375 && screen.width <= 427.8) {
		window.scrollTo({ top: 0.8 * unit });
	}
	else if (screen.width >= 428 && screen.width <= 539.8) {
		window.scrollTo({ top: 0.8 * unit });
	}
	else if (screen.width >= 540 && screen.width <= 767.8) {
		window.scrollTo({ top: 0.85 * unit });
	}
	else if (screen.width >= 768 && screen.width <= 1023.8) {
		window.scrollTo({ top: 1.7 * unit });
	}
	else if (screen.width >= 1024 && screen.width <= 1124.8) {
		window.scrollTo({ top: 2.45 * unit });
	}
	else if (screen.width >= 1125 && screen.width <= 1199.8) {
		window.scrollTo({ top: 2.48 * unit });
	}
	else if (screen.width >= 1200 && screen.width <= 1439.8) {
		window.scrollTo({ top: 2.48 * unit });
	}
	else if (screen.width >= 1440) {
		window.scrollTo({ top: 2.48 * unit });
	}
}


/* Google Translate
	 -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
function googleTranslateElementInit() {
	new google.translate.TranslateElement({ pageLanguage: 'ind' }, 'google_translate_element');
}