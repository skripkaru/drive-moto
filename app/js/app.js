window.addEventListener('DOMContentLoaded', function () {

	const introSlider = new Swiper('.intro-slider', {
		loop: true,
		pagination: {
			el: '.swiper-pagination',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})

	const productsSlider = new Swiper('.products-slider .swiper-container', {
		loop: true,
		slidesPerView: 4,
		spaceBetween: 20,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		observer: true,
		observeParents: true
	})

	function addActiveClass(btns) {
		const allBtns = document.querySelectorAll(btns);

		allBtns.forEach(btn => {
			btn.addEventListener('click', () => {
				btn.classList.toggle('active');
			})
		})
	}

	addActiveClass('.product-item__favorite');

});

(function ($) {
	$(function () {

		$('nav.tabs__nav').on('click', 'button:not(.active)', function () {
			$(this).addClass('active').siblings().removeClass('active')
				.closest('div.tabs').find('div.tabs__content-item').removeClass('active')
				.eq($(this).index()).addClass('active');
		})


		$('.filter-style').styler();


		$('.filter__item-drop, .filter-btn__extra').on('click', function() {
			$(this).toggleClass('active')
			$(this).next().slideToggle('200')
		})

		$(".js-range-slider").ionRangeSlider({
			type: "double",
		});

		$('.catalog__filter-btngrid').on('click', function() {
			$(this).addClass('active')
			$('.catalog__filter-btnline').removeClass('active')
			$('.product-item').removeClass('product-item__line')
		})

		$('.catalog__filter-btnline').on('click', function() {
			$(this).addClass('active')
			$('.catalog__filter-btngrid').removeClass('active')
			$('.product-item').addClass('product-item__line')
		})

		
		

	});
})(jQuery);





