$(document).ready(function() {

	/* Adaptive menu */
   
    $('.menu__icon').on('click', function(){
        $('.menu').toggleClass('menu_state_open');
        $('.our-contacts').toggleClass('hidden-div');
    });
     

   	
	/*  Catalog-main */

	$('.submenu li').click(function(){
		$divId = $(this).attr('target');

		$('.klishe-row').hide(400);
		$('#'+$divId).show(400);

		$('.submenu li').removeClass('active');
		$(this).addClass('active');

	});

	/* Smooth scroll*/

	if( window.innerWidth >= 992 ){
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				headerHeight = $('.header').height() + 0;  
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

	/***** Changed height on click *****/

	$(".lawyers__read-more").click(function() {
		$(this).siblings(".lawyers__descr-wrap").toggleClass("open");

		if($(".lawyers__descr-wrap").hasClass("open")){
            $(this).closest(".lawyers__read-more").text("Скрыть");
        }
        else{
            $(this).closest(".lawyers__read-more").text("Читать полностью");
        }	
	});

	
	/* Section-Doubts */

	$(".doubts__item").click(function() {
		$(this).toggleClass("open-doubts");
	});

	// fancybox

	$("a.fancy").fancybox();

	/* Pop-Up forms */

	$(".order-call").click(function() {
		$("#form_back h5").html($(this).text());
		$("#form_back input[name=formname]").val($(this).text());
	}).magnificPopup({
		type:"inline",
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
		audioWidth: 364,
         audioHeight: 70
	});

});

	/* Flexslider */
   	
   	$(window).load(function(){
        $('.stories__flexslider, .lawyers__flexslider, .proof__flexslider').flexslider({
            animation: "slide",
            touch: true,
            // animationLoop: false,
		    itemWidth: $('.proof__flexslider, .lawyers__flexslider, .stories__flexslider').width()/3,
		    
		    minItems: 3,
		    maxItems: 3
        });
// if ($('.opent-menu').is(':visible')) {



// } else {



// }
$('.clients__flexslider').flexslider({
            animation: "slide",
            touch: true,
            // animationLoop: false,
		    itemWidth: $('.clients__flexslider').width()/4,
		    
		    minItems: 4,
		    maxItems: 4
        });
 
 
    });


