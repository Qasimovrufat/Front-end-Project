$(document).ready(function(){
   
    function handlePreloader() {
        if($('.preloader').length){
        $('.preloader').delay(200).fadeOut(500);
        }
        }
         
        handlePreloader();

        function headerStyle() {
            if($('header').length){
                var windowpos = $(window).scrollTop();
                var siteHeader = $('header');
                var scrollLink = $('.scroll-to-top');
                if (windowpos > 1) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }
        
        headerStyle();
        $(window).on('scroll', function() {
            headerStyle();
        });
        if($('.scroll-to-target').length){
            $(".scroll-to-target").on('click', function() {
                var target = $(this).attr('data-target');
               // animate
               $('html, body').animate({
                   scrollTop: $(target).offset().top
                 }, 1500);
        
            });
        }

    AOS.init();
    $('.counter').countUp();

    if($(".fancybox").length) {
		$(".fancybox").fancybox({
			openEffect  : 'fade',
            closeEffect : 'fade',
            helpers : {
				media : {}
			}
		});
	}
    $(window).scroll(function(){

        if($(this).scrollTop()>70){
            $(".navbar").addClass("scrolled");
        }
        else{
            $(".navbar").removeClass("scrolled");
        }

    })
    new WOW().init();
    $(".slide").owlCarousel({
       
        loop:true,
        
        autoplay: true,
        autoplayTimeout:4000,
        smartSpeed: 700,
        nav:false,
        
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            800:{
                items:3
            },
            1024:{
                items:3
            },
            1200:{
                items:3
            },
            1600:{
                items:5
            }
        }
        
    })
    if($(window).width()<991){
        $(".navbar-collapse li").removeClass("hover");
        $('.navbar li span').click(function () {
       
            $(this).next().slideToggle();
        
        });
    }

    
    $('.navbar .hover').hover(function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(500);
    }, function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(400)
    });
    
    if($(".accordion-box").length){
        $(".accordion-box li").click(function(){
            if($(this).hasClass("active")){
                $(this).removeClass("active");
            } else {
                $(".accordion-box li").removeClass("active");
                $(this).addClass("active")
              


            }            
        });
    }
    
    if($(".testimonial-slider").length){
        $(".testimonial-slider").bxSlider({
            adaptiveHeight: true,
            auto:true,
            controls: true,
            mode: 'fade',
            pause: 7000,
            speed: 500,
            pagerCustom: ".testimonial-thumbnail",
            nextText:["<span class='fas fa-caret-right' style='font-size: 50px !important;color: white;margin: 5px;'></span>"],
            prevText:["<span class='fas fa-caret-left' style='font-size: 50px !important;color: white;margin: 5px;'></span>"]
        });
    }
	
   
})