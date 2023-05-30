
/* ======================================== Quantitiy======================================== */
$(function() {
    $('.increase').on('click', function() {
        var $qty = $(".number");
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal)) {
            $qty.val(currentVal + 1);
        }
    });
    $('.decrease').on('click', function() {
        var $qty = $(".number");
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal) && currentVal > 0) {
            $qty.val(currentVal - 1);
        }
    });
});

// 
$('.testiMonial-slidee').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    autoplay:true,
    center:true,
    dots:true,
    autoplayTimeout:3000,
    // navText: ['<span class="fa fa-long-arrow-left"></span>','<span class="fa fa-long-arrow-right"></span>'],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        900:{
            items:2,
            nav:false
        },
        1000:{
            items:2,
            nav:true,
        },
        1200:{
            items:3,
            nav:true,
        }
    }
});