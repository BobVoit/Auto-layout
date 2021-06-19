$(document).ready(function() {
    $('.cars__slider').slick({
        dots: true,
        infinite: false,
        slidesToShow: 3,
        arrows: false,
        appendDots: $('.cars__slider-dots'),
        variableWidth: true,
        // fade: true
    })
});