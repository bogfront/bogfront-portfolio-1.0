

$(document).ready(function(){

    var worksSlider = new Swiper ('.works-slider', {
        direction: 'horizontal',
        loop: true,
        mousewheelControl: true,

        scrollbar: '.swiper-scrollbar'
    });

    $('.works-slider-left').on('click', function(){
        worksSlider.slidePrev();
    });

    $('.works-slider-right').on('click', function(){
        worksSlider.slideNext();
    });

    $('.works-slider-container').parallax();

});