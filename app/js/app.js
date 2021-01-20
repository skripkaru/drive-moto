window.addEventListener('DOMContentLoaded', function () {
	const mySwiper = new Swiper('.swiper-container', {
		loop: true,
		pagination: {
			el: '.swiper-pagination',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})

	const tabTriggers = document.querySelectorAll('.search__tabs-item'),
	tabContents = document.querySelectorAll('.search__content-item');

	tabTriggers.forEach(function (trigger) {
		trigger.addEventListener('click', function () {
			let id = this.getAttribute('data-tab'),
				content = document.querySelector(`.search__content-item[data-tab='${id}']`),
				activeTrigger = document.querySelector('.search__tabs-item.active'),
				activeContent = document.querySelector('.search__content-item.active');

			activeTrigger.classList.remove('active');
			trigger.classList.add('active');

			activeContent.classList.remove('active');
			content.classList.add('active');
		});
	});

});


