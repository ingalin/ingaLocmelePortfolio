const app = {};

//Start
app.init = function () {
// set Flickity autoplay
    const $carousel = $('.carousel').flickity({
        autoPlay: 2500
    });
// Stop Flickity carousel when focused within carousel
    $(".carousel-cell").on('focusin', function () {
        $carousel.flickity('stopPlayer');
    });
};

//Document Ready
$(() => app.init());