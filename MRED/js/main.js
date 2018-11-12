$(function(){
	//fullPage-function //
	$('#fullpage').fullpage({
		//Navigation
		lockAnchors: false,
		anchors:['intro', 'product', 'news', 'contact'],
		scrollingSpeed: 800,
		//events
		onLeave: function(index, nextIndex, direction){
			if(nextIndex == 1){
				$('.pagination-prev, .pagination-num_border:eq(0)').addClass('pagination_page-leave')
				$('.nav-page_gotop').addClass('display-default')
				$('.nextPage').removeClass('display-default')
			}
			if(nextIndex != 1){
				$('.pagination-prev, .pagination-num_border:eq(0)').removeClass('pagination_page-leave')
				$('.nav-page_gotop').removeClass('display-default')
				$('.nextPage').addClass('display-default')
			}
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
				document.getElementById("video_cleaner").play()
				document.getElementById("video_care").play()
				document.getElementById("video_mask").play()
				$('.product-prev_page, .product-next_page').click(function(){
					document.getElementById("video_cleaner").play()
					document.getElementById("video_care").play()
					document.getElementById("video_mask").play()
				})
			}
			if(nextIndex != 2){
				TweenMax.staggerTo('.product-title span', .2, {x: 0, opacity: 0, delay: 0}, .05);
				document.getElementById("video_cleaner").pause()
				document.getElementById("video_care").pause()
				document.getElementById("video_mask").pause()
			}
			// pagination function //
			$(function(){
				setTimeout(function(){
					$('.pagination-prev .pagination-num span').html(nextIndex - 1)
					$('.pagination-num_btn .pagination-num span').html(nextIndex)
					$('.pagination-next .pagination-num span').html(nextIndex + 1)
				}, 300)

				$('.pagination-num, .pagination-txt_ani').addClass('pagination-num_add')
			})
			
		}, //***
		afterLoad: function(anchorLink, index){
			$('.pagination-txt_ani span').html(window.location.hash.slice(1))
			$('.pagination-num, .pagination-txt_ani').removeClass('pagination-num_add')
		},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});

	$('.contact-body').mouseenter(function(){
		$.fn.fullpage.setAllowScrolling(false);
	})
	$('.contact-body').mouseleave(function(){
		$.fn.fullpage.setAllowScrolling(true);
	})
	
	// index slide //
	var swiper = new Swiper('.swiper-container', {
		centeredSlides: true,
		speed: 1200,
		loop: true,
		autoplay: {
		delay: 3000,
		disableOnInteraction: false,
		}
	});
	// product slide //
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
	// index pagination UX //
	$('.gotop-btn').click(function(){
		$.fn.fullpage.moveTo('intro', 1);
	})
	$('.intro-btn, .menu-cleaner, .menu-faceCare, .menu-faceMask').click(function(){
		$.fn.fullpage.moveTo('product', 2);
	})
	$('.menu-cleaner').click(function(){
		swiperProduct.slideTo(1)
	})
	$('.menu-faceCare').click(function(){
		swiperProduct.slideTo(2)
	})
	$('.menu-faceMask').click(function(){
		swiperProduct.slideTo(3)
	})
	$('.menu-contact').click(function(){
		$.fn.fullpage.moveTo('contact', 4);
	})
	$('.pagination-prev').click(function(){
		$.fn.fullpage.moveSectionUp();
	})
	$('.pagination-next').click(function(){
		$.fn.fullpage.moveSectionDown();
	})

	// intro video //

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
		$('.menu-certificate, .contact_certificate .contact_info-txt').click(function(){
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
		$('.contact_locate-header').click(function(){
			$('.contact-body').toggleClass('contact-body-add')
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
					for (i = 0; i < responseLength; ++ i){
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


	// article-UX //
	$(function(){
		$('.article, .writings').fadeOut()
		// close //
		$('.writings-header_back-wrap, .menu-left li').click(function(){
			$('.writings').fadeOut()
		})
		$('.article-back_wrap, .menu-cleaner, .menu-faceCare, .menu-faceMask, .menu-contact').click(function(){
			$('.article').fadeOut()
		})
		// open //
		$('.menu-news').click(function(){
			$('.article').fadeIn()
		})
		$('.news-wrap').click(function(){
			$('.writings').fadeIn()
		})
	})



	// hot-news render//
	$(function(){
		$.ajax({
			type: 'GET',
			url: 'js/article_list.json',
			dataType: 'json',
			success: function(recommend){
				for(i = 0; i < 3; ++i){
					$('.buy-recommend_content-wrap').append(
						$("<div class='buy-recommend_item'><div class='buy-recommend_img'><img src='images/" + recommend[i].bgImg + "'></div><div class='buy-recommend_content'><p>" + recommend[i].title + "</p></div></div>"),
						);
				}
				$(document).on('click', '.buy-recommend_item', function(){
					$('.writings').fadeIn()
					var self   = $(this),
					index  = self.index();
					var datalength = recommend.length
					var pagen = index
					$('.writings-header_title-name p').html(recommend[index].title)
					$('.writings-header_title-time p').html(recommend[index].time)
					$('.writings-header_subtitle p').html(recommend[index].subtitle)
					$('.writings-body_title p').html(recommend[index].title)
					$('.writings-body_content p').html(recommend[index].content)
					$('.writings-bg_img img').attr('src', 'images/' + recommend[index].bgImg)
					$('.writings-body_img img').attr('src', 'images/' + recommend[index].imgSrc)
					$('.writings-pagination_prev').click(function(){
						pagen --
						if( pagen < 0){
							pagen = datalength -1
						}
						$('.writings-header_title-name p').html(recommend[pagen].title)
						$('.writings-header_title-time p').html(recommend[pagen].time)
						$('.writings-header_subtitle p').html(recommend[pagen].subtitle)
						$('.writings-body_title p').html(recommend[pagen].title)
						$('.writings-body_content p').html(recommend[pagen].content)
						$('.writings-bg_img img').attr('src', 'images/' + recommend[pagen].bgImg)
						$('.writings-body_img img').attr('src', 'images/' + recommend[pagen].imgSrc)
					})
					$('.writings-pagination_next').click(function(){
						pagen ++
						if( pagen > datalength -1){
							pagen = 0
						}
						$('.writings-header_title-name p').html(recommend[pagen].title)
						$('.writings-header_title-time p').html(recommend[pagen].time)
						$('.writings-header_subtitle p').html(recommend[pagen].subtitle)
						$('.writings-body_title p').html(recommend[pagen].title)
						$('.writings-body_content p').html(recommend[pagen].content)
						$('.writings-bg_img img').attr('src', 'images/' + recommend[pagen].bgImg)
						$('.writings-body_img img').attr('src', 'images/' + recommend[pagen].imgSrc)
					})
				})
			},
			error: function(xhr){
				
			}
		})

	})


	// index-article_first render //
	$(document).on('click', '.news-wrap:eq(0)', function(){
		$.ajax({
			type: 'GET', 
			url: 'js/article_list.json', 
			dataType: 'json',
			success: function (articleData) {
				var datalength = articleData.length
				var pagen = 0
				$('.writings-pagination_prev').click(function(){
					pagen --
					if( pagen < 0){
						pagen = datalength -1
					}
					$('.writings-header_title-name p').html(articleData[pagen].title)
					$('.writings-header_title-time p').html(articleData[pagen].time)
					$('.writings-header_subtitle p').html(articleData[pagen].subtitle)
					$('.writings-body_title p').html(articleData[pagen].title)
					$('.writings-body_content p').html(articleData[pagen].content)
					$('.writings-bg_img img').attr('src', 'images/' + articleData[pagen].bgImg)
					$('.writings-body_img img').attr('src', 'images/' + articleData[pagen].imgSrc)
				})
				$('.writings-pagination_next').click(function(){
					pagen ++
					if( pagen > datalength -1){
						pagen = 0
					}
					$('.writings-header_title-name p').html(articleData[pagen].title)
					$('.writings-header_title-time p').html(articleData[pagen].time)
					$('.writings-header_subtitle p').html(articleData[pagen].subtitle)
					$('.writings-body_title p').html(articleData[pagen].title)
					$('.writings-body_content p').html(articleData[pagen].content)
					$('.writings-bg_img img').attr('src', 'images/' + articleData[pagen].bgImg)
					$('.writings-body_img img').attr('src', 'images/' + articleData[pagen].imgSrc)
				})
			},
			error:function(xhr){
				}
		});
	});
	// index-article_sec render //
	$(document).on('click', '.news-wrap:eq(1)', function(){
		$.ajax({
			type: 'GET', 
			url: 'js/article_list.json', 
			dataType: 'json',
			success: function (articleData) {
				var datalength = articleData.length
				var pagen = 1
				$('.writings-pagination_prev').click(function(){
					pagen --
					if( pagen < 0){
						pagen = datalength -1
					}
					$('.writings-header_title-name p').html(articleData[pagen].title)
					$('.writings-header_title-time p').html(articleData[pagen].time)
					$('.writings-header_subtitle p').html(articleData[pagen].subtitle)
					$('.writings-body_title p').html(articleData[pagen].title)
					$('.writings-body_content p').html(articleData[pagen].content)
					$('.writings-bg_img img').attr('src', 'images/' + articleData[pagen].bgImg)
					$('.writings-body_img img').attr('src', 'images/' + articleData[pagen].imgSrc)
				})
				$('.writings-pagination_next').click(function(){
					pagen ++
					if( pagen > datalength -1){
						pagen = 0
					}
					$('.writings-header_title-name p').html(articleData[pagen].title)
					$('.writings-header_title-time p').html(articleData[pagen].time)
					$('.writings-header_subtitle p').html(articleData[pagen].subtitle)
					$('.writings-body_title p').html(articleData[pagen].title)
					$('.writings-body_content p').html(articleData[pagen].content)
					$('.writings-bg_img img').attr('src', 'images/' + articleData[pagen].bgImg)
					$('.writings-body_img img').attr('src', 'images/' + articleData[pagen].imgSrc)
				})
			},
			error:function(xhr){
				}
		});
	});


	// article-list-render //
	$(function(){
		$.ajax({ 
			type: 'GET', 
			url: 'js/article_list.json', 
			dataType: 'json',
			success: function (articleData) {
				// index render //
				var indexArticleA = 0
				var indexArticleB = 1
				$('.news-date p').eq(indexArticleA).html(articleData[indexArticleA].time)
				$('.news-title p').eq(indexArticleA).html(articleData[indexArticleA].title)
				$('.news-txt p').eq(indexArticleA).html(articleData[indexArticleA].subtitle)
				$('.news-img img').eq(indexArticleA).attr('src', 'images/' + articleData[indexArticleA].bgImg)
				$('.news-date p').eq(indexArticleB).html(articleData[indexArticleB].time)
				$('.news-title p').eq(indexArticleB).html(articleData[indexArticleB].title)
				$('.news-txt p').eq(indexArticleB).html(articleData[indexArticleB].subtitle)
				$('.news-img img').eq(indexArticleB).attr('src', 'images/' + articleData[indexArticleB].bgImg)
				// index read click //
				$('.news-wrap').eq(indexArticleA).click(function(){
					$('.writings-header_title-name p').html(articleData[indexArticleA].title)
					$('.writings-header_title-time p').html(articleData[indexArticleA].time)
					$('.writings-header_subtitle p').html(articleData[indexArticleA].subtitle)
					$('.writings-body_title p').html(articleData[indexArticleA].title)
					$('.writings-body_content p').html(articleData[indexArticleA].content)
					$('.writings-bg_img img').attr('src', 'images/' + articleData[indexArticleA].bgImg)
					$('.writings-body_img img').attr('src', 'images/' + articleData[indexArticleA].imgSrc)
				})
				$('.news-wrap').eq(indexArticleB).click(function(){
					$('.writings-header_title-name p').html(articleData[indexArticleB].title)
					$('.writings-header_title-time p').html(articleData[indexArticleB].time)
					$('.writings-header_subtitle p').html(articleData[indexArticleB].subtitle)
					$('.writings-body_title p').html(articleData[indexArticleB].title)
					$('.writings-body_content p').html(articleData[indexArticleB].content)
					$('.writings-bg_img img').attr('src', 'images/' + articleData[indexArticleB].bgImg)
					$('.writings-body_img img').attr('src', 'images/' + articleData[indexArticleB].imgSrc)
				})
				$('.article-list_wrap').empty();
				var articleLength = articleData.length
				for(i = 0; i < articleLength; ++ i){
					$('.article-list_wrap').append(
						$("<div class='article-list_box'><div class='article-box_img-wrap'><div class='article-box_img-mask'></div><div class='article-box_img'><div class='article-box_btn'><div class='article-box_btn-text'><p>read</p></div><div class='article-box_btn-icon'><img src='images/svg/triangle_white.svg'/></div></div><img src='images/" + articleData[i].bgImg + "' /></div></div><div class='article-box_info-wrap'><div class='article-box_title'><p>" + articleData[i].title + "</p></div><div class='article-box_subtitle'><p>" + articleData[i].subtitle + "</p></div></div></div>"),
						);
				}
			},
			error:function(xhr){
				}
		});
	})




	// writings-render
	$(function(){
		$(document).on('click', '.article-list_box', function(){
			$('.writings').fadeIn()
			var self   = $(this),
			index  = self.index();
			$.ajax({
				type: 'GET',
				url: 'js/article_list.json',
				dataType: 'json',
				success: function(writingData){
					var datalength = writingData.length
					var pagen = index
					$('.writings-header_title-name p').html(writingData[index].title)
					$('.writings-header_title-time p').html(writingData[index].time)
					$('.writings-header_subtitle p').html(writingData[index].subtitle)
					$('.writings-body_title p').html(writingData[index].title)
					$('.writings-body_content p').html(writingData[index].content)
					$('.writings-bg_img img').attr('src', 'images/' + writingData[index].bgImg)
					$('.writings-body_img img').attr('src', 'images/' + writingData[index].imgSrc)
					$('.writings-pagination_prev').click(function(){
						pagen --
						if( pagen < 0){
							pagen = datalength -1
						}
						$('.writings-header_title-name p').html(writingData[pagen].title)
						$('.writings-header_title-time p').html(writingData[pagen].time)
						$('.writings-header_subtitle p').html(writingData[pagen].subtitle)
						$('.writings-body_title p').html(writingData[pagen].title)
						$('.writings-body_content p').html(writingData[pagen].content)
						$('.writings-bg_img img').attr('src', 'images/' + writingData[pagen].bgImg)
						$('.writings-body_img img').attr('src', 'images/' + writingData[pagen].imgSrc)
					})
					$('.writings-pagination_next').click(function(){
						pagen ++
						if( pagen > datalength -1){
							pagen = 0
						}
						$('.writings-header_title-name p').html(writingData[pagen].title)
						$('.writings-header_title-time p').html(writingData[pagen].time)
						$('.writings-header_subtitle p').html(writingData[pagen].subtitle)
						$('.writings-body_title p').html(writingData[pagen].title)
						$('.writings-body_content p').html(writingData[pagen].content)
						$('.writings-bg_img img').attr('src', 'images/' + writingData[pagen].bgImg)
						$('.writings-body_img img').attr('src', 'images/' + writingData[pagen].imgSrc)
					})
				},
				error: function(){

				}
			})
		})
	})



	// product-listinfo-render //
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
				$('.product-list_header-img img').attr('src', 'images/' + datanumber[swiperProduct.realIndex].pageInfo.headerImg)
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
					$('.product-list_header-img img').attr('src', 'images/' + datanumber[swiperProduct.realIndex].pageInfo.headerImg)
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
					$('.product-list_header-img img').attr('src', 'images/' + datanumber[swiperProduct.realIndex].pageInfo.headerImg)
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