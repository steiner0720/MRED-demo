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
			if(nextIndex == 2){
				TweenMax.staggerTo('.product-title span', .2, {x: -30, opacity: 1, delay: 0}, .05);
			}
			if(nextIndex != 2){
				TweenMax.staggerTo('.product-title span', .2, {x: 0, opacity: 0, delay: 0}, .05);
			}
			
		}, //***
		afterLoad: function(anchorLink, index){
		},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});

	var swiper = new Swiper('.swiper-container', {
		centeredSlides: true,
		speed: 1200,
		loop: true,
		autoplay: {
		delay: 3000,
		disableOnInteraction: false,
		}
	});

	var swiperProduct = new Swiper('.swiper-container_product', {
		centeredSlides: true,
		speed: 1200,
		loop: true,
		allowTouchMove: false,
	});
	$('.product-next_page').click(function(){
		swiperProduct.slideNext();
	})
	$('.product-prev_page').click(function(){
		swiperProduct.slidePrev();
	})
	


	// menu UX //
	$(function(){
		$('.menu-left li').hover(function(){
			var self   = $(this),
				index  = self.index();
			$('.menu-left_bg-img').eq(index).find('img').css({'opacity': '1'})
		}, function(){
			$('.menu-left_bg-img img').css({'opacity': '0'})
		})
	})
	$(function(){
		$('.nav-menu_btn').click(function(){
			$('.menu-left').addClass('menu-left-add')
			$('.menu').addClass('menu-add')
			$('.nav-menu_btn').addClass('nav-menu_btn-add')
			$('.nav-menu-close').css({'display': 'block'})
			setTimeout(function(){
				TweenMax.staggerTo('.menu-left li', .3, {x: -150, opacity: 1, delay: 0}, .1);
				TweenMax.staggerTo('.menu-right li', .3, {x: 150, opacity: 1, delay: 0}, .1);
			}, 300)

			$('.menu-left_bg-df').addClass('menu-left_bg-df-add')
			$('.menu-mask').addClass('menu-mask-add')
		})
		$('.nav-menu-close, .menu-left li').click(function(){
			TweenMax.staggerTo('.menu-left li', .2, {x: 0, opacity: 0, delay: 0}, .1);
			TweenMax.staggerTo('.menu-right li', .2, {x: 0, opacity: 0, delay: 0}, .1);
			$('.menu-left_bg-df').removeClass('menu-left_bg-df-add')
			$('.menu-mask').removeClass('menu-mask-add')
			$('.menu').removeClass('menu-add')
			$('.menu-left').removeClass('menu-left-add')
			$('.nav-menu_btn').removeClass('nav-menu_btn-add')
			$('.nav-menu-close').css({'display': 'none'})

		})
	})
	
	// certificate-open //
	$(function(){
		$('.certificate-wrap').fadeOut()
		$('.certificate-wrap').addClass('certificate-wrap-add')
		$('.certificate-close, .certificate-mask').click(function(){
			$('.certificate-wrap').fadeOut()
		})
		$('.menu-certificate, .contact-info_icon-btn').click(function(){
			$('.certificate-wrap').fadeIn()
		})
	})
	$(function(){
		$('.certificate-left').click(function(){
			$('.c1').css({'display': 'block'})
			$('.c2').css({'display': 'none'})
		})
		$('.certificate-right').click(function(){
			$('.c2').css({'display': 'block'})
			$('.c1').css({'display': 'none'})
		})
	})

	$(function(){
		$('.contact-location_top-wrap').click(function(){
			$('.contact-locate_iframe').toggleClass('contact-locate_iframe-add')
			$('.contact-locate_btn').toggleClass('contact-locate_btn-add')
		})
	})

	// product-list-open //
	$(function(){
		$('.product-list').fadeOut()
		$('.product-list').addClass('product-list-add')
		$('.menu-left li, .nav-top_wrap .nav-logo, .product-list_back-wrap').click(function(){
			$('.product-list').fadeOut()
			$('.product-list_product-wrap').empty();
			$.fn.fullpage.setMouseWheelScrolling(true);
			$.fn.fullpage.setAllowScrolling(true);
		})
		$('.product-btn').click(function(){
			$('.product-list').fadeIn()
			$.fn.fullpage.setMouseWheelScrolling(false);
			$.fn.fullpage.setAllowScrolling(false);
		})
	})



	// product-list-render //
	$(function(){
		$.ajax({ 
			type: 'GET', 
			url: 'js/product.json', 
			dataType: 'json',
			success: function (response) {
				$('.product-btn, .product-prev_page, .product-next_page').click(function(){
					$('.product-list_product-wrap').empty();
					var responsenum = [response.cleaner, response.facecare, response.facemask]
					var responseLength = responsenum[swiperProduct.realIndex].length
					for (i = 0; i < responseLength; ++i){
						var pcat = [response.cleaner[i], response.facecare[i], response.facemask[i]]
						$('.product-list_product-wrap').append(
							$("<div class='product-list_product-box'><div class='product-box_img'><img src='images/productImg/" + pcat[swiperProduct.realIndex].imgSrc + "'/></div><div class='product-box_info-wrap'><div class='product-box_name'><p>" + pcat[swiperProduct.realIndex].name + "</p></div><div class='product-box_price'><p>$"+ ' ' + pcat[swiperProduct.realIndex].price + "</p></div></div>"),
							);
					};
				})
			},
			error:function(xhr){
				}
		});

	})


	// product-lestinfo-render //
	$(function(){
		$.ajax({ 
			type: 'GET', 
			url: 'js/product_list.json', 
			dataType: 'json',
			success: function (data) { 
				var datanumber = [data.cleaner, data.facecare, data.facemask]
				$('.product-list_en-title p').html(datanumber[swiperProduct.realIndex].pageInfo.en_title)
				$('.product-list_ch-title p').html(datanumber[swiperProduct.realIndex].pageInfo.en_title)
				$('.product-list_txt p').html(datanumber[swiperProduct.realIndex].pageInfo.ch_content)
				$('.product-list_icon img').attr('src', 'images/' + datanumber[swiperProduct.realIndex].pageInfo.svgSrc)
				$('.product-list_bg-img img').attr('src', 'images/' + datanumber[swiperProduct.realIndex].pageInfo.bgImg)
				$('.product-prev_page .product-page_txt p').html(datanumber[swiperProduct.realIndex].paginationLeft.name)
				$('.product-prev_page .product-page_img img').attr('src', 'images/' + datanumber[swiperProduct.realIndex].paginationLeft.src)
				$('.product-next_page .product-page_txt p').html(datanumber[swiperProduct.realIndex].paginationRight.name)
				$('.product-next_page .product-page_img img').attr('src', 'images/' + datanumber[swiperProduct.realIndex].paginationRight.src)
				$('.product-prev_page').click(function(){
					swiperProduct.slidePrev();
					$('.product-list_en-title p').html(datanumber[swiperProduct.realIndex].pageInfo.en_title)
					$('.product-list_ch-title p').html(datanumber[swiperProduct.realIndex].pageInfo.en_title)
					$('.product-list_txt p').html(datanumber[swiperProduct.realIndex].pageInfo.ch_content)
					$('.product-list_icon img').attr('src', 'images/' + datanumber[swiperProduct.realIndex].pageInfo.svgSrc)
					$('.product-list_bg-img img').attr('src', 'images/' + datanumber[swiperProduct.realIndex].pageInfo.bgImg)
					$('.product-prev_page .product-page_txt p').html(datanumber[swiperProduct.realIndex].paginationLeft.name)
					$('.product-prev_page .product-page_img img').attr('src', 'images/' + datanumber[swiperProduct.realIndex].paginationLeft.src)
					$('.product-next_page .product-page_txt p').html(datanumber[swiperProduct.realIndex].paginationRight.name)
					$('.product-next_page .product-page_img img').attr('src', 'images/' + datanumber[swiperProduct.realIndex].paginationRight.src)
				})
				$('.product-next_page').click(function(){
					swiperProduct.slideNext();
					$('.product-list_en-title p').html(datanumber[swiperProduct.realIndex].pageInfo.en_title)
					$('.product-list_ch-title p').html(datanumber[swiperProduct.realIndex].pageInfo.en_title)
					$('.product-list_txt p').html(datanumber[swiperProduct.realIndex].pageInfo.ch_content)
					$('.product-list_bg-img img').attr('src', 'images/' + datanumber[swiperProduct.realIndex].pageInfo.bgImg)
					$('.product-list_icon img').attr('src', 'images/' + datanumber[swiperProduct.realIndex].pageInfo.svgSrc)
					$('.product-prev_page .product-page_txt p').html(datanumber[swiperProduct.realIndex].paginationLeft.name)
					$('.product-prev_page .product-page_img img').attr('src', 'images/' + datanumber[swiperProduct.realIndex].paginationLeft.src)
					$('.product-next_page .product-page_txt p').html(datanumber[swiperProduct.realIndex].paginationRight.name)
					$('.product-next_page .product-page_img img').attr('src', 'images/' + datanumber[swiperProduct.realIndex].paginationRight.src)
				})
			},
			error:function(xhr){
				}
		});
	})


	// product-page open //



	// product-page render //
	$('.buy').fadeOut()
	$('.buy').addClass('buy-add')
	$('.menu-left li, .nav-top_wrap .nav-logo, .buy-cat_wrap').click(function(){
		$('.buy').fadeOut()
	})
	$(document).on('click', '.product-list_product-box', function(){
		// product-page open //
		$('.buy').fadeIn()
		var self   = $(this),
			index  = self.index();
		$.ajax({
			type: 'GET', 
			url: 'js/product.json', 
			dataType: 'json',
			success: function (product) {
				var pnumber = [product.cleaner[index], product.facecare[index], product.facemask[index]]
				$('.buy-type p').html(pnumber[swiperProduct.realIndex].type)
				$('.buy-price p').html('$'+ ' ' + pnumber[swiperProduct.realIndex].price)
				$('.buy_content p').html(pnumber[swiperProduct.realIndex].content)
				$('.buy-cat p').html(pnumber[swiperProduct.realIndex].category)
				$('.buy-name p').html(pnumber[swiperProduct.realIndex].name)
				$('.buy-product_ml-val p').html(pnumber[swiperProduct.realIndex].ml + ' ' + 'ml')
				$('.buy-active a').attr('href', pnumber[swiperProduct.realIndex].buySrc)
				$('.buy-product_img img').attr('src',"images/productImg/" + pnumber[swiperProduct.realIndex].imgSrc)
				$('.buy-cat_icon img').attr('src',"images/" + pnumber[swiperProduct.realIndex].svgSrc)
				$('.buy-ingredient_content p').html(pnumber[swiperProduct.realIndex].ingredient)
				// page change //
				var page = [product.cleaner, product.facecare, product.facemask]
				var pagen = index + 1
				var pagep = index - 1
				var pagelength = page[swiperProduct.realIndex].length
				if (pagep < 0){
					pagep = pagelength -1
				}
				if (pagen > pagelength -1){
					pagen = 0
				}
				var prevp = [product.cleaner[pagep], product.facecare[pagep], product.facemask[pagep]]
				var nextp = [product.cleaner[pagen], product.facecare[pagen], product.facemask[pagen]]
				$('.buy-pagination_prev .buy-pagination_name p').html(prevp[swiperProduct.realIndex].name)
				$('.buy-pagination_next .buy-pagination_name p').html(nextp[swiperProduct.realIndex].name)
				$('.buy-pagination_prev').click(function(){
					pagep --
					pagen --
					index --
					if (pagep < 0){
						pagep = pagelength -1
					}
					if (pagep > pagelength -1){
						pagep = 0
					}
					if (pagen < 0){
						pagen = pagelength -1
					}
					if (pagen > pagelength -1){
						pagen = 0
					}
					if (index < 0){
						index = pagelength -1
					}
					if (index > pagelength -1){
						index = 0
					}
					var prevp = [product.cleaner[pagep], product.facecare[pagep], product.facemask[pagep]]
					var nextp = [product.cleaner[pagen], product.facecare[pagen], product.facemask[pagen]]
					var pnumber = [product.cleaner[index], product.facecare[index], product.facemask[index]]
					$('.buy-pagination_prev .buy-pagination_name p').html(prevp[swiperProduct.realIndex].name)
					$('.buy-pagination_next .buy-pagination_name p').html(nextp[swiperProduct.realIndex].name)
					$('.buy-type p').html(pnumber[swiperProduct.realIndex].type)
					$('.buy-price p').html('$'+ ' ' + pnumber[swiperProduct.realIndex].price)
					$('.buy_content p').html(pnumber[swiperProduct.realIndex].content)
					$('.buy-cat p').html(pnumber[swiperProduct.realIndex].category)
					$('.buy-name p').html(pnumber[swiperProduct.realIndex].name)
					$('.buy-product_ml-val p').html(pnumber[swiperProduct.realIndex].ml + ' ' + 'ml')
					$('.buy-active a').attr('href', pnumber[swiperProduct.realIndex].buySrc)
					$('.buy-product_img img').attr('src',"images/productImg/" + pnumber[swiperProduct.realIndex].imgSrc)
					$('.buy-cat_icon img').attr('src',"images/" + pnumber[swiperProduct.realIndex].svgSrc)
					$('.buy-ingredient_content p').html(pnumber[swiperProduct.realIndex].ingredient)
				})
				
				$('.buy-pagination_next').click(function(){
					pagep ++
					pagen ++
					index ++
					if (pagep < 0){
						pagep = pagelength -1
					}
					if (pagep > pagelength -1){
						pagep = 0
					}
					if (pagen < 0){
						pagen = pagelength -1
					}
					if (pagen > pagelength -1){
						pagen = 0
					}
					if (index < 0){
						index = pagelength -1
					}
					if (index > pagelength -1){
						index = 0
					}
					var prevp = [product.cleaner[pagep], product.facecare[pagep], product.facemask[pagep]]
					var nextp = [product.cleaner[pagen], product.facecare[pagen], product.facemask[pagen]]
					var pnumber = [product.cleaner[index], product.facecare[index], product.facemask[index]]
					$('.buy-pagination_prev .buy-pagination_name p').html(prevp[swiperProduct.realIndex].name)
					$('.buy-pagination_next .buy-pagination_name p').html(nextp[swiperProduct.realIndex].name)
					$('.buy-type p').html(pnumber[swiperProduct.realIndex].type)
					$('.buy-price p').html('$'+ ' ' + pnumber[swiperProduct.realIndex].price)
					$('.buy_content p').html(pnumber[swiperProduct.realIndex].content)
					$('.buy-cat p').html(pnumber[swiperProduct.realIndex].category)
					$('.buy-name p').html(pnumber[swiperProduct.realIndex].name)
					$('.buy-product_ml-val p').html(pnumber[swiperProduct.realIndex].ml + ' ' + 'ml')
					$('.buy-active a').attr('href', pnumber[swiperProduct.realIndex].buySrc)
					$('.buy-product_img img').attr('src',"images/productImg/" + pnumber[swiperProduct.realIndex].imgSrc)
					$('.buy-cat_icon img').attr('src',"images/" + pnumber[swiperProduct.realIndex].svgSrc)
					$('.buy-ingredient_content p').html(pnumber[swiperProduct.realIndex].ingredient)
				})
			},
			error:function(xhr){
				}
		})


	});



})