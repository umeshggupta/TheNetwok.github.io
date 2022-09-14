$(document).ready(function () {
    // Header Menu

    $('#particles').particleground({
        minSpeedX: 0.1,
        maxSpeedX: 0.7,
        minSpeedY: 0.1,
        maxSpeedY: 0.7,
        directionX: 'center', // 'center', 'left' or 'right'. 'center' = dots bounce off edges
        directionY: 'center', // 'center', 'up' or 'down'. 'center' = dots bounce off edges
        density: 30000, // How many particles will be generated: one particle every n pixels
        dotColor: '#27e9c6',
        lineColor: '#27e9c6',
        particleRadius: 7, // Dot size
        lineWidth: 0.5,
        curvedLines: false,
        proximity: 140, // How close two dots need to be before they join
        parallax: true,
        parallaxMultiplier: 10, // The lower the number, the more extreme the parallax effect
        onInit: function () { },
        onDestroy: function () { }
    });
    var headerHeight = $('.header-section ').innerHeight() + 'px';
    $('body').css('padding-top', headerHeight);

    $('.clientele-grid-wrap').slick({
        dots: false,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {

                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {

                    slidesToShow: 2
                }
            }
        ]
    });
});
$(document).ready(
    function () {
        $("html").niceScroll();
    }
);
$(document).ready(function () {
    "use strict";
    $(".scroll").click(function (event) {

        event.preventDefault();

        var full_url = this.href;
        var parts = full_url.split("#");
        var trgt = parts[1];
        var target_offset = $("#" + trgt).offset();
        var target_top = target_offset.top - 60;

        $('html, body').animate({ scrollTop: target_top }, 1200);
    });
    $(".m-menu-btn").click(function () {
        $(".menu").slideToggle(600);
        $(this).toggleClass("m-menu-btn-ext");
    });

});



$(".menu ul li a").on('click', function () {
    if ($(window).width() <= 1024) {
        $(".menu").hide();
    } else {
        $(".menu").show();
    }
});
