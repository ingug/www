$('.scrolldown').click(function(){
    screenHeight = $(window).height();
    $('html,body').animate({'scrollTop':screenHeight}, 1000);
});