/*===================================================================
                        SERVICE
===================================================================*/
$(function () {
    // WOW animation when scroll
    new WOW().init();
})
/*===================================================================
                        WORK
===================================================================*/
$(function () {
    $('#work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options
        gallery: {
            enabled: true
        }
    });
})

/*===================================================================
                        TEAM
===================================================================*/
$(function () {
    $('#team-members').owlCarousel({
        items:3,
        autoplay:true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
    });
});

/*===================================================================
                        TESTIMONIALS
===================================================================*/
$(function () {
    $('#customers-testimonial').owlCarousel({
        items:1,
        autoplay:true,
        loop: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
    });
});

/*===================================================================
                        STATES
===================================================================*/
$(function () {
    $('.count').counterUp({
        delay: 10,
        time: 2000,
    });
});