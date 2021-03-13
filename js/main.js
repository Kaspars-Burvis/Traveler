
new Swiper('.swiper-container-video', {
	loop: true,
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	spaceBetween: 30,
	effect: 'coverflow',
	autoplay: {
		delay: 4500,
		disableOnInteraction: false,
	},
	coverflowEffect: {
		rotate: 0,
		stretch: -120,
		depth: 250,
		modifier: 1,
		slideShadows: false,
	},
});

let swiperPicture = new Swiper('.swiper-container-picture', {
	loop: true,
	grabCursor: true,
	spaceBetween: 0,
	slidesPerView: 1,
	autoplay: {
		delay: 3500,
		disableOnInteraction: false,
	},
});

let swiperText = new Swiper('.swiper-container-text', {
	loop: true,
	grabCursor: true,
	spaceBetween: 0,
	slidesPerView: 1,
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
	navigation: {
		nextEl: '.arrow-next',
		prevEl: '.arrow-prev',
	},
});

swiperPicture.controller.control = swiperText;
swiperText.controller.control = swiperPicture;

document.querySelector('.burger').addEventListener('click', function (e) {
	e.preventDefault();
	if (this.classList.contains('burger__active')) {
		this.classList.remove('burger__active');
		document.querySelector('.menu-nav').classList.remove('menu-nav__active');
	} else {
		this.classList.add('burger__active');
		document.querySelector('.menu-nav').classList.add('menu-nav__active');
	}
});

const animItems = document.querySelectorAll('._anim-items');
if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) & pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}