const app = {};



//Start
app.init = function () {
    // Stop Flickity carousel when focused within carousel
    const $carousel = $('.carousel').flickity({
        autoPlay: 2500
    });

    $(".carousel-cell").on('focusin', function () {
        $carousel.flickity('stopPlayer');
    });

};

//Document Ready
$(() => app.init());