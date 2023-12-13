$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 3,
        infinite: false,
        waitForAnimate: false,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});