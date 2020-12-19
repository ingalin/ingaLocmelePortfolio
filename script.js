const app = {};



//Start
app.init = function () {

    const $carousel = $('.carousel').flickity({
        autoPlay: 2500
    });

    $(".carousel-cell").on('focusin', function () {
        $carousel.flickity('stopPlayer');
    });



};

//Document Ready
$(() => app.init());