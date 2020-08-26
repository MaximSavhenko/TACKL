$(document).ready(function(){
	
	$(".header__img-card").click(function(){
		return newFunction();
	});
	$(".header__card-closeBtn").click(function(){
		return newFunction_1();
	});
	
	$('.foryou__slider , .bestsellers__slider').slick({
		arrows: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
			  breakpoint: 1025,
			  settings: {
				arrows: true,
				slidesToShow: 2,
				slidesToScroll: 2
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



function newFunction_1() {
	$(".header__card-list").removeClass('active');
};
function newFunction() {
	$(".header__card-list").addClass('active');
};



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