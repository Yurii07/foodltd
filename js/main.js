$('.equipment').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
  nextArrow: '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
  responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      arrows: false,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,arrows: false,
      slidesToScroll: 1
    }
  }
  ]
});

$('.goods').slick({
 arrows: true,
 prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
 nextArrow: '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
 rows: 2,
 dots: true,
 infinite: false,
 speed: 300,
 slidesToShow: 3,
 slidesToScroll: 1,
 responsive: [
 {
  breakpoint: 1024,
  settings: {
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: true
  }
},
{
  breakpoint: 600,
  settings: {
    slidesToShow: 2,
    arrows: false,
    slidesToScroll: 2
  }
},
{
  breakpoint: 480,
  settings: {
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1
  }
}
]
});

// scroll Down animate

$(".encircle").click(function(event){
  $('html, body').animate({
   scrollTop: $(".box2").offset().top
 });
});

// ------

$(window).scroll(function(){
  if ($(window).scrollTop() >= 200) {
   $(".navbar").addClass("sticky-top");
 } else {
  $(".navbar").removeClass("sticky-top");
}
});

// ------

$("#rightmenu").click(function(){
  $(".pushy-right").css('right', '200px');
  return false;
});

$('.text-right').click(function(){
 $(".pushy-right").css('right', '0px');

 return false;
});

// ------

$("#sideLeftPushy").Pushy({
  button: "side-left-pushy-button",        
  menuPosition: "left"
});

$("#sideRightPushy").Pushy({
  button: "side-right-pushy-button",        
  menuPosition: "right"        
});



$(function() {
  $('.validity').validity()
  .on('submit', function(e) {
    var $this = $(this),
    $btn = $this.find('[type="submit"]');
    $btn.button('loading');
    if (!$this.valid()) {
      e.preventDefault();
      $btn.button('reset');
    }
  });
});
