jQuery((function(o){o(window).scroll((function(){o(this).scrollTop()>1?o(".scroll-top-wrapper").addClass("show"):o(".scroll-top-wrapper").removeClass("show")})),o(".scroll-top-wrapper").on("click",(function(){return o("html, body").animate({scrollTop:0},600),!1})),o(".dropdown").hover((function(){o(this).find(".dropdown-menu").first().stop(!0,!0).slideDown(150)}),(function(){o(this).find(".dropdown-menu").first().stop(!0,!0).slideUp(150)}));var e=0;o(".dropdown .caret").on("click",(function(s){s.preventDefault(),0===e?(o(this).closest("li").find(".dropdown-menu").first().stop(!0,!0).slideDown(150),e++):(o(this).closest("li").find(".dropdown-menu").first().stop(!0,!0).slideUp(150),e=0)}));var s=(jQuery(".sticky-header").offset()||{top:NaN}).top;isNaN(s)||jQuery(window).scroll((function(){var o=jQuery(".sticky-header");scroll=jQuery(window).scrollTop(),scroll>=s?o.addClass("fix-top"):o.removeClass("fix-top")})),o("#owl-slider").owlCarousel({loop:!0,margin:15,nav:!0,dots:!0,autoplay:!0,autoplayTimeout:4e3,autoplayHoverPause:!0,responsive:{0:{items:1},600:{items:3},1e3:{items:3}}}),o("#owl-slider-two").owlCarousel({loop:!0,margin:0,nav:!0,dots:!0,autoplay:!0,autoplayTimeout:4e3,autoplayHoverPause:!0,responsive:{0:{items:1},600:{items:1},1e3:{items:1}}}),o("#owl-slider-three").owlCarousel({loop:!0,margin:15,nav:!0,dots:!0,autoplay:!0,autoplayTimeout:4e3,autoplayHoverPause:!0,responsive:{0:{items:1},600:{items:2},1e3:{items:2}}}),o(".widget-instagram .popup-gallery").addClass("owl-carousel"),o(".widget-instagram .popup-gallery").owlCarousel({loop:!1,margin:15,nav:!0,dots:!1,autoplay:!0,autoplayTimeout:2e3,autoplayHoverPause:!0,responsive:{0:{items:1},600:{items:3},1e3:{items:5},1440:{items:8}}})}));
