setTimeout(function () {
  document.getElementById("loading").style.display = "none";
  document.getElementById("data").style.display = "block";
}, 5000);


$('.owl-carousel').owlCarousel({
  loop:true,
  margin:5,
  nav:false,
  responsiveClass:true,
  autoplay:true,
  autoplayTimeout:2500,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:2
      },
      1000:{
          items:4
      }
  }
});
//Animation

/*AOS.init();
*/
//

 $(".test-popup-link").magnificPopup({
  type: "image",
  gallery: {
    enabled: true,
  },
  removalDelay: 300,
  mainClass: "mfp-fade",
}); 

$(document).ready(function(){
  var carouselColor=$('.carousel-color').css('background-color');
  $('.navbar').css('background-color',carouselColor);
});
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
});
 //change Navbar On Scroll 
 const navbar=document.querySelector('.navbar');
 window.addEventListener("scroll",()=>{
  if(window.pageYOffset>=80){
    navbar.style.backgroundColor="#222831";
  }
  else{
navbar.style.backgroundColor="initial";
  } 
});
/*Isotope layout */

var $grid = $('.grid').isotope({
  // options
  itemSelector: '.grid-item',
  layoutMode: 'fitRows',
});

// change is-checked class on buttons
var $buttonGroup = $('.filters');
$buttonGroup.on( 'click', 'li', function( event ) {
  $buttonGroup.find('.is-checked').removeClass('is-checked');
  var $button = $( event.currentTarget );
  $button.addClass('is-checked');
  var filterValue = $button.attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
AOS.init();
