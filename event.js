$(document).ready(function(){
    $('.ice_Cream').hover(function(){
        $('.ice_Cream>strong').fadeIn(1000);},function(){
        $('.ice_Cream>strong').fadeOut(1000);
    });
    $('.frozen_Yogurt').hover(function(){
        $('.frozen_Yogurt>strong').fadeIn(1000);},function(){
        $('.frozen_Yogurt>strong').fadeOut(1000);
    });
    $('.belgian_Waffles').hover(function(){
        $('.belgian_Waffles>strong').fadeIn(1000);},function(){
        $('.belgian_Waffles>strong').fadeOut(1000);
    });
    $('.coming_Soon').hover(function(){
        $('.coming_Soon>strong').fadeIn(1000);},function(){
        $('.coming_Soon>strong').fadeOut(1000);
    });
    $('.fb').click(function(){
        window.open('https://www.facebook.com/icebaroyya');
    });
    $('.in').click(function(){
        window.open('https://www.instagram.com/icebaroyya/');
    });
    $('#footer span').click(function(){
        window.open('http://www.skinn.be');
    });
    $('.mb_Menu span').click(function(){
      if($(this).html() == "="){
          $(this).html("&times");
          $(".mb_Menu ul").slideDown(1000);
      }else{
          $(this).html("&#61");
          $(".mb_Menu ul").slideUp(1000);
      }
});
});

window.onload = function(){
    var logo = $('.logo');
    TweenMax.staggerFrom([logo], 2,{scale:0}, 0.25);
}