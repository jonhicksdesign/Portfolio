// On swipe event
$('.your-element').on('swipe', function(event, slick, direction){
  console.log(direction);
  // left
});

// On edge hit
$('.your-element').on('edge', function(event, slick, direction){
  console.log('edge was hit')
});

// On before slide change
$('.your-element').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  console.log(nextSlide);
});



$('.slider-area').slick({
    dots: false,
    accessibility: true,
    arrows: true,
    infinite: true,
    speed: 1500,
    centerMode: false,
    slidesToShow: 9,
    slidesToScroll: 6,
    variableWidth: true,
    touchMove: false,
    useCSS: true,
    cssEase: 'ease'
     });


$(document).on('ready', function() {
   $('.row-media').slickLightbox({
    src: 'src',
    itemSelector: '.pic img',
    caption: 'caption',
    useHistoryApi: 'true',
    captionPosition: 'dynamic'  
    
});

});

