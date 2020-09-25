$(document).ready(function(){
  $('.slider-area').slick({
    dots: false,
    accessibility: true,
    arrows: true,
    infinite: true,
    speed: 500,
    centerMode: false,
    slidesToShow: 10,
    slidesToScroll: 8,
    variableWidth: true,
    touchMove: true,
    useCSS: true,
    cssEase: 'ease',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          prevArrow: false,
          nextArrow: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

$(document).on('ready', function() {
   $('.slider-area').slickLightbox({
    src: 'src',
    itemSelector: '.pic img',
});
});
