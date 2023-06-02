'use strict';

var parallax = function () {
	$(window).stellar();
};

var contentWayPoint = function () {
	var i = 0;

	$('.animate-box').waypoint(function (direction) {
		if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {
			i++;

			$(this.element).addClass('item-animate');

			setTimeout(function () {
				$('body .animate-box.item-animate').each(function (k) {
					var el = $(this);

					setTimeout(function () {
						var effect = el.data('animate-effect');

						if (effect === 'fadeIn') el.addClass('fadeIn animated-fast');
						else if (effect === 'fadeInLeft') el.addClass('fadeInLeft animated-fast');
						else if (effect === 'fadeInRight') el.addClass('fadeInRight animated-fast');
						else el.addClass('fadeInUp animated-fast');

						el.removeClass('item-animate');
					}, k * 200, 'easeInOutExpo');
				});
			}, 500);
		}
	}, {
		offset: '85%'
	});
};

var loaderPage = function () {
	$('.fh5co-loader').fadeOut(1000);
};

var getInvitedName = function () {
	const urlParams = new URLSearchParams(window.location.search);
	const name = urlParams.get('name');

	if (name) {
		const title = urlParams.get('title');
		const container = $('div#fh5co-couple').children()[0].children[0].children[0];
		const description = container.children[container.children.length - 1];
		const invitedTag = document.createElement('h3');

		if (title) invitedTag.append(
			`${title[0].toLocaleUpperCase()}${title.toLowerCase().substring(1, title.length)}. `);

		invitedTag.append(`${name[0].toLocaleUpperCase()}${name.toLowerCase().substring(1, name.length)}`);
		description.remove();
		container.append(invitedTag);
		container.append(description);
	}
}

var closeBanner = function () {
	$('a#open').click(function () {
		new Audio('backsound.mp3').play();
		$('div#fh5co-header').slideUp(3000, function () {
			$('div#page').css('position', 'relative');
		});
	});
}

var dateToCountdown = function () {
	const date = new Date(2023, 5, 18, 9, 0, 0, 0);

	simplyCountdown('.simply-countdown-one', {
		year: date.getFullYear(),
		month: date.getMonth() + 1,
		day: date.getDate()
	});
}

var goToTop = function () {
	$('.js-gotop').on('click', function (event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $('html').offset().top
		}, 500, 'easeInOutExpo');

		return false;
	});

	$(window).scroll(function () {
		var $win = $(window);

		if ($win.scrollTop() > 200) $('.js-top').addClass('active');
		else $('.js-top').removeClass('active');
	});

};

$(function () {
	parallax();
	contentWayPoint();
	loaderPage();
	getInvitedName();
	closeBanner();
	dateToCountdown();
	goToTop();
});