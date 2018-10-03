$(document).ready(function() {

	/* Adaptive menu */
   
    // $('.menu__icon').on('click', function(){
    //     // $('.menu').addClass('menu_state_open');
    //     $(".menu__links").slideToggle();
		
    //     // $('.our-contacts').toggleClass('hidden-div');
    //     return false;
    // });
   
    $(".menu__icon").click(function() {
		$(this).toggleClass("on");
		$(".menu").slideToggle();
		$('.our-contacts').toggleClass('hidden-div')
		return false;
	});
   	

	/* Smooth scroll*/

	if( window.innerWidth >= 992 ){
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				headerHeight = $('.header').height() + 80;  
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - headerHeight
				}, 800, function() {
				target.focus();
			});
			return false;
			}
			}
		});
	}

	/***** Changed height on click (Spoiler) *****/

	$(".lawyers__read-more").click(function() {
		$(this).siblings(".lawyers__descr-wrap").toggleClass("open");

		if($(".lawyers__descr-wrap").hasClass("open")){
            $(this).closest(".lawyers__read-more").text("Скрыть");
        }
        else{
            $(this).closest(".lawyers__read-more").text("Читать полностью");
        }	
	});

	$(".review__button").click(function() {
		$(this).siblings(".audio__item").toggleClass("open");

		if($(".audio__item").hasClass("open")){
            $(this).closest(".review__button").text("Скрыть");
        }
        else{
            $(this).closest(".review__button").text("Слушать все отзывы");
        }	
	});

	
	/* Section-Doubts */

	$(".doubts__item").click(function() {
		$(this).toggleClass("open-doubts");
	});

	// fancybox

	$("a.fancy").fancybox();

	// /* Chrome Smooth Scroll */ 

	// try {
	// 	$.browserSelector();
	// 	if($("html").hasClass("chrome")) {
	// 		$.smoothScroll();
	// 	}
	// } catch(err) {
	// };


	$(".cond__button").click(function() {
		$("#form_back input[name=formname]").val($(this).text());
	}).magnificPopup({
		type:"inline",
		fixedContentPos: false,
		mainClass: 'mfp-forms'
	});

	
	

	/*******************  Табы переключатели   *******************/
	$(".tab_item").not(":first").hide();
	$(".tabs-wrapper .tab").click(function() {
		$(".tabs-wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");


// Audio
	$('audio').mediaelementplayer({
		features: ['playpause','progress','current','tracks','fullscreen'],
		audioWidth: 465,
         audioHeight: 50
	});

// AnimTION
	// wow = new WOW(
 //      {
 //        animateClass: 'animated',
 //        offset:       -100,
 //        callback:     function(box) {
 //          //console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
 //        }
 //      }
 //    );
 //    wow.init();
new WOW().init();
	/********************   M E N U  фиксированное  *********************/
	if ($(window).width() > 992)   {
		$(window).scroll(function () {
			var scrolled = $(window).scrollTop();
			if (scrolled >= 20) {
				$('header').addClass('scroll');
			}
			else {
				if (scrolled < 180) {
					$('header').removeClass('scroll');
				}
			}
		});
	}


});

	/* Flexslider */
   	
   	$(window).load(function(){
      //   $('.stories__flexslider, .lawyers__flexslider, .proof__flexslider').flexslider({
      //       animation: "slide",
      //       touch: true,
      //       // animationLoop: false,
		    // itemWidth: $('.proof__flexslider, .lawyers__flexslider, .stories__flexslider').width()/3,
		    
		    // minItems: 3,
		    // maxItems: 3
      //   });




// }
if ($('.whom-op-title').is(':hidden')) {
		$('.clients__flexslider').flexslider({
	    animation: "slide",
	    touch: true,
		itemWidth: $('.clients__flexslider').width()/4,
		minItems: 1,
		maxItems: 1,
	});
	$('.stories__flexslider, .lawyers__flexslider, .proof__flexslider').flexslider({
        animation: "slide",
        touch: true,
		itemWidth: $('.proof__flexslider, .lawyers__flexslider, .stories__flexslider').width()/2,
		minItems: 1,
		maxItems: 1,
    });		
} else if ($('.menu__icon').is(':visible')) {
	$('.clients__flexslider').flexslider({
	    animation: "slide",
	    touch: true,
		itemWidth: $('.clients__flexslider').width()/4,
		minItems: 2,
		maxItems: 2,	
	});
	$('.stories__flexslider, .lawyers__flexslider, .proof__flexslider').flexslider({
        animation: "slide",
        touch: true,       
		itemWidth: $('.proof__flexslider, .lawyers__flexslider, .stories__flexslider').width()/2,		    
		minItems: 2,
		maxItems: 2,
        });	
	}  else
	$('.clients__flexslider').flexslider({
	    animation: "slide",
	    touch: true,
		itemWidth: $('.clients__flexslider').width()/4,
		minItems: 4,
		maxItems: 4,	
	});	
	$('.stories__flexslider, .lawyers__flexslider, .proof__flexslider').flexslider({
        animation: "slide",
        touch: true,
		itemWidth: $('.proof__flexslider, .lawyers__flexslider, .stories__flexslider').width()/3,
		minItems: 3,
		maxItems: 3
    });
});


