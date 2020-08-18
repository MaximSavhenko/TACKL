$(document).ready(function(){
	
	$('.foryou__slider , .bestsellers__slider').slick({
		arrows: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
			  breakpoint: 1025,
			  settings: {
				arrows: true,
				slidesToShow: 3,
				slidesToScroll: 3
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				arrows: true,
				slidesToShow: 1,
				slidesToScroll: 1,
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		]
	});
});


// function toggleMobileMenu() {
// 	var item = document.querySelector('.foryou__slider-items'),
// 	var slickSlide = document.querySelector('.slick-slider'),
// 	var slickActive = document.querySelector('.slick-active');
// 	if (item = slickActive) {
// 		item.onclick = function () {
			
// 		};
// 	}
// };


function toggleMobileMenu() {
	var btnMenu = document.querySelector('.header__btn-menu'),
		navWrap = document.querySelector('.header__wrap-nav');
  
	btnMenu.onclick = function () {
	  document.body.classList.toggle('overflow');
	  btnMenu.classList.toggle('active');
	  navWrap.classList.toggle('active');
	};
};

toggleMobileMenu();