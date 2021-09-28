jQuery(document).ready(function($){

    window.onscroll = function(){
        if(window.pageYOffset > 1){
            $('#header').addClass("active");
        }else{
            $('#header').removeClass("active");
        }
    }
});

var btn = $('#servicos .button-group button');

btn.click(function (e){
    $('#servicos .button-group button').removeClass('active');
    e.target.classList.add('active');

    const selector = $(e.target).attr("data-filter");
    $('#servicos .grid').isotope({
        filter: selector
    });

});

$(window).on("load", function(e){
    $('#servicos .grid').isotope({
        filter: "*",
    });
});






/*
var btn_img = $('#servicos .grid .element-item .popup-link');

    btn_img.click(function(t){

        $('#servicos .grid .element-item .popup-link').magnificPopup({
            type: 'image'
            // other options
    });

  });

  */

  $('#servicos .grid .element-item .popup-link').magnificPopup({
    type: 'image',
    // other options
    //disableOn: 400,
    //key: 'some-key',

  gallery: {
    // options for gallery
    enabled: true
  }
  


  });


  $(document).ready(function(){

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
})

  )}