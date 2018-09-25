$(document).ready(function() {

	/* Adaptive menu */
   
    $('.menu__icon').on('click', function(){
        $('.menu').toggleClass('menu_state_open');
        $('.our-contacts').toggleClass('hidden-div');
    });
     
   	/* Download file */

   	$(".upfile1").click(function () {
    	$(".file1").trigger('click');
	});
	$(".upfile2").click(function () {
    	$(".file2").trigger('click');
	});
	$(".upfile3").click(function () {
    	$(".file3").trigger('click');
	});
	$(".upfile4").click(function () {
    	$(".file4").trigger('click');
	});
	$(".upfile5").click(function () {
    	$(".file5").trigger('click');
	});
	$(".upfile6").click(function () {
    	$(".file6").trigger('click');
	});
	$(".upfile7").click(function () {
    	$(".file7").trigger('click');
	});
	$(".upfile8").click(function () {
    	$(".file8").trigger('click');
	});
	$(".upfile9").click(function () {
    	$(".file9").trigger('click');
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

	$(".lawyers__read-more--1").click(function() {
		$(".lawyers__descr-wrap--1").toggleClass("open");
		$(".lawyers__read-more--1").text("Скрыть");	

		if($(".lawyers__descr-wrap--1").hasClass("open")){
            $(".lawyers__read-more--1").text("Скрыть");
        }
        else{
            $(".lawyers__read-more--1").text("Читать далее");
        }	
	});

	$(".lawyers__read-more--2").click(function() {
		$(".lawyers__descr-wrap--2").toggleClass("open");
		$(".lawyers__read-more--2").text("Скрыть");	

		if($(".lawyers__descr-wrap--2").hasClass("open")){
            $(".lawyers__read-more--2").text("Скрыть");
        }
        else{
            $(".lawyers__read-more--2").text("Читать далее");
        }	
	});

	$(".lawyers__read-more--3").click(function() {
		$(".lawyers__descr-wrap--3").toggleClass("open");
		$(".lawyers__read-more--3").text("Скрыть");	

		if($(".lawyers__descr-wrap--3").hasClass("open")){
            $(".lawyers__read-more--3").text("Скрыть");
        }
        else{
            $(".lawyers__read-more--3").text("Читать далее");
        }	
	});

	/* Section-Doubts */

	$(".doubts__item").click(function() {
		$(".doubts__item").toggleClass("open-doubts");
	});


	/* Pop-Up forms */

	$(".order-call").click(function() {
		$("#form_back h5").html($(this).text());
		$("#form_back input[name=formname]").val($(this).text());
	}).magnificPopup({
		type:"inline",
		mainClass: 'mfp-forms'
	});

});

	/* Flexslider */
   	
   	$(window).load(function(){
        $('.stories__flexslider, .lawyers__flexslider, .proof__flexslider').flexslider({
            animation: "slide",
            touch: true,
            // animationLoop: false,
		    itemWidth: 250,
		    
		    minItems: 3,
		    maxItems: 3
        });

        $('.clients__flexslider').flexslider({
            animation: "slide",
            touch: true,
            // animationLoop: false,
		    itemWidth: 150,
		    
		    minItems: 4,
		    maxItems: 4
        });
 
    });


