jQuery(document).ready(function($){

    window.onscroll = function(){
        if(window.pageYOffset > 100){
            $('#header').addClass("active");
        }else{
            $('#header').removeClass("active");
        }
    }
})