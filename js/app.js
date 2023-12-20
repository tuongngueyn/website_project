$(document).ready(function(){
    //
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items:1,
        smartSpeed:1000,
        navText:['PREV','NEXT'],
        dots:false,
        responsive:{
            0:{
              nav:false,
            },
            700:{
              nav:true,
            }
          
        }
    })
    $('#project-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
      
        smartSpeed:1000,
         margin:24,
        dots:true,
        responsive:{
            0:{
                items:1,
                dots:false,
                margin:0,
            },
            768:{
              items:2,
            },
            1140:
            {
               items:2,
               center:true,
            }
          
        }
    })
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      dots:true,
      items:1,
      smartSpeed:800,
   
  })

});