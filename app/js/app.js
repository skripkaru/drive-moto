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

});