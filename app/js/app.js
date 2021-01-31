window.addEventListener('DOMContentLoaded', function () {

	const introSlider = new Swiper('.intro-slider', {
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
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
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		observer: true,
		observeParents: true,
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4,
			},
		}
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

		$('.filter__item-drop, .filter-btn__extra').on('click', function () {
			$(this).toggleClass('active')
			$(this).next().slideToggle('200')
		})

		$(".js-range-slider").ionRangeSlider({
			type: "double",
		});

		$('.catalog__filter-btngrid').on('click', function () {
			$(this).addClass('active')
			$('.catalog__filter-btnline').removeClass('active')
			$('.product-item').removeClass('product-item__line')
		})

		$('.catalog__filter-btnline').on('click', function () {
			$(this).addClass('active')
			$('.catalog__filter-btngrid').removeClass('active')
			$('.product-item').addClass('product-item__line')
		})

		$('#rateYo').rateYo({
			starWidth: "23px",
			normalFill: "#C4C4C4",
			ratedFill: "#1C62CD"
		});

		$('.menu__btn').on('click', function () {
			$('.mobile-menu').toggleClass('active')
		})

		$('.mobile-menu__close').on('click', function () {
			$('.mobile-menu').removeClass('active')
		})

		$('.footer__top-drop').on('click', function(){
			$(this).next().slideToggle()
			$(this).toggleClass('active')
		})

		$('.catalog__filter-btnfilter').on('click', function(){
			$('.aside-filter').slideToggle()
		})

	});
})(jQuery);





