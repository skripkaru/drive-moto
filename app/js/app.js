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
	})

	function addFavorite(btns) {
		const favoriteBtns = document.querySelectorAll(btns);

		favoriteBtns.forEach(btn => {
			btn.addEventListener('click', () => {
				btn.classList.toggle('active');
			})
		})
	}

	addFavorite('.product-item__favorite');

	const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
		const header = document.querySelector(headerSelector),
			tab = document.querySelectorAll(tabSelector),
			content = document.querySelectorAll(contentSelector);
	
		function hideTabContent() {
			content.forEach(item => {
				item.style.display = 'none';
			})
	
			tab.forEach(item => {
				item.classList.remove(activeClass);
			})
		}
	
		function showTabContent(i = 0) {
			content[i].style.display = display;
			tab[i].classList.add(activeClass);
		}
	
		hideTabContent();
		showTabContent();
	
		header.addEventListener('click', (e) => {
			const target = e.target;
			if (target &&
				(target.classList.contains(tabSelector.replace(/\./, '')) ||
					target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
				tab.forEach((item, i) => {
					if (target == item || target.parentNode == item) {
						hideTabContent();
						showTabContent(i);
					}
				})
			}
		})
	};
	
	tabs('.search__inner', '.search__tabs-item', '.search__content-item', 'active')
	tabs('.products__tabs-wrapper', '.products__tab', '.products__content-item', 'active')
	tabs('.products-popular__tabs-wrapper', '.products-popular__tab', '.products-popular__content-item', 'active')




});


