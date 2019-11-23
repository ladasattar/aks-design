$(function () {

	$(window).on('load', function () {
		$('.onload').addClass("hideLoader");

		$('body').css({ 'overflow-y': 'unset' })

		setTimeout(function () {
			$('.onload').css({ 'display': 'none' })
		}, 1000);
	})

	var nav = $('nav'),
		heightNav = nav.outerHeight();

	$(window).on('scroll', function () {
		var offsetNav = $(this).scrollTop();
		if (offsetNav > heightNav) {
			nav.css({
				'box-shadow': '0px 3px 3px rgba(0, 0, 0, 0.04)'
			})
		}
		else {
			nav.css({
				'box-shadow': 'none'
			})
		}
	})

	// Show search box
	$('.searchIcon').on('click', function () {
		$('.search-box').addClass('show-search-box');
	})

	// Hide search box
	$('.hideSearch').on('click', function () {
		$('.search-box').removeClass('show-search-box');
	})

	// Show sidenav & hide bars icon
	$('.barsIcon').on('click', function () {
		$('.sidenav').addClass('show-sidenav');
		$('.barsIcon').addClass('hideBars');
		$('.side-menu').addClass('show-side-menu');
		$('html, body').css({
			'overflow': 'hidden'
		})
	})

	// Hide sidenav
	$('.sidenavTimesIcon').on('click', function () {
		$('.sidenav').removeClass('show-sidenav');
		$('.barsIcon').removeClass('hideBars');
		$('.side-menu').removeClass('show-side-menu');
		$('html, body').css({
			'overflow': 'unset'
		})
	})

	// Hide search box when clicked outside
	window.addEventListener('click', function (e) {
		if (document.getElementById('nav').contains(e.target)) {

		} else {
			$('.search-box').removeClass('show-search-box');
		}
	});

	// Hide sidenav when clicked outside
	window.addEventListener('click', function (e) {
		if (document.getElementById('sidenav').contains(e.target)) {
			$('.sidenav').removeClass('show-sidenav');
			$('.barsIcon').removeClass('hideBars');
			$('.side-menu').removeClass('show-side-menu');
		} else {

		}
	});

	// Sticky Floating Sort & Filter
	function checkOffset() {
		var a = $(document).scrollTop() + window.innerHeight;
		var b = $('footer').offset().top;
		if (a < b) {
			$('.floating-sort-filter').css({
				'position': 'fixed',
				'bottom': '10px'
			});
		} else {
			$('.floating-sort-filter').css({
				'position': 'absolute',
				'bottom': '-60px'
			});
		}
	}
	$(document).ready(checkOffset);
	$(document).scroll(checkOffset);

	// Times Filter Responsive
	$('#iconFilterResponsive').on('click', function () {
		$('.filter-responsive').addClass('show-filter-responsive');
		$('html, body').css({
			'overflow': 'hidden'
		})
		setTimeout(function () {
			$('.submit-btn-filter').css('bottom', '0');
		}, 50)
	})
	$('#timesFilterResponsive').on('click', function () {
		$('.filter-responsive').removeClass('show-filter-responsive');
		$('html, body').css({
			'overflow': 'unset'
		})
		setTimeout(function () {
			$('.submit-btn-filter').css('bottom', '-100%');
		}, 0)
	})


	// Times Filter Responsive
	$('#iconSortResponsive').on('click', function () {
		$('.sort-responsive').addClass('show-sort-responsive');
		$('html, body').css({
			'overflow': 'hidden'
		})
	})
	$('#timesSortResponsive').on('click', function () {
		$('.sort-responsive').removeClass('show-sort-responsive');
		$('html, body').css({
			'overflow': 'unset'
		})
	})

})