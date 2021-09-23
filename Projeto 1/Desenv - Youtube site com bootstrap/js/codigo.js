jQuery(document).ready(function($){

    window.onscroll = function(){
        if(window.pageYOffset > 100){
            $('#header').addClass("active");
        }else{
            $('#header').removeClass("active");
        }
    }
})

var btn = $('#servicos .button-group button');

btn.click(function (e){
    $('#servicos .button-group button').removeClass('active');
    e.target.classList.add('active');

    const selector = $(e.target).attr("data-filter");
    $('#servicos .grid').isotope({
        filter: selector
    })

})

$(window).on("load", function(){
    $('#servicos .grid').isotope({
        filter: "*",
    })
})

