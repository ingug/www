

$(window).on('scroll',function(){
  var scroll = $(window).scrollTop();
  //스크롤top의 좌표를 담는다

  if(scroll>500){ 
      $('.busness').addClass('busnesson');
  }else{
    $('.busness').removeClass('busnesson');
  }if(scroll>900){ 
    $('.sus').addClass('suson');
  }else{
  $('.sus').removeClass('suson');
  }if(scroll>1900){ 
    $('.con_saf').addClass('con_safon');
  }else{
  $('.con_saf').removeClass('con_safon');
  }if(scroll>2700){ 
    $('.conMid').addClass('conMidon');
  }else{
  $('.conMid').removeClass('conMidon');
  }if(scroll>3500){ 
    $('.news').addClass('newson');
  }else{
  $('.news').removeClass('newson');
  }if(scroll>4000){
    $('.recruit').addClass('recruiton');
  }else{
  $('.recruit').removeClass('recruiton');
  }                

  } );