$(function(){
	//fullPage-function //
	$('#fullpage').fullpage({
		//Navigation
		lockAnchors: false,
		anchors:['intro', 'product', 'news', 'contact'],
		scrollingSpeed: 800,
		//events
		onLeave: function(index, nextIndex, direction){
			if(index == 1 && direction =='down'){
			}
			if(index == 2 && direction =='up'){
				
			}
			if(index == 2 && direction =='down'){
			}
			if(index == 3 && direction =='up'){
			}
			if(index == 3 && direction =='down'){
			}
			if(index == 4 && direction =='up'){
			}
			if(nextIndex == 1){
			}
			if(nextIndex != 1){
			}
		}, //***
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});

	var swiper = new Swiper('.swiper-container', {
		centeredSlides: true,
		speed: 1600,
		loop: true,
		autoplay: {
		delay: 2500,
		disableOnInteraction: false,
		}
	});

	var swiperProduct = new Swiper('.swiper-container_product', {
		centeredSlides: true,
		speed: 1400,
		loop: true,
		allowTouchMove: false,
	});
	$('.product-next_page').click(function(){
		swiperProduct.slideNext();
	})
	$('.product-prev_page').click(function(){
		swiperProduct.slidePrev();
	})




})