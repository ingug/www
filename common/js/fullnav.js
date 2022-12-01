
$(document).ready(function() {

   var smh=$('.main').height();  //비주얼 이미지의 높이를 리턴한다   900px
   var on_off=false;  //false(안오버)  true(오버)
   
       $('#headerArea').mouseenter(function(){
          // var scroll = $(window).scrollTop();
           $(this).css('background','#fff');
           $('h1 a').css('background','url(https://ig0930.cafe24.com/common/images/logo2.png) no-repeat center');
           $('.dropdownmenu li a, #headerArea .rightMenu li a').css('color','#333'); 
          
           on_off=true;
       });
   
      $('#headerArea').mouseleave(function(){
           var scroll = $(window).scrollTop();  //스크롤의 거리
           
           if(scroll<smh-50 ){
               $(this).css('background','rgba(0, 0, 0,.6)').css('border-bottom','none'); 
               $('h1 a').css('background','url(https://ig0930.cafe24.com/common/images/logo.png) no-repeat center');
               $('.dropdownmenu li a, #headerArea .rightMenu li a').css('color','#fff');
           }else{
               $(this).css('background','#fff'); 
               $('h1 a').css('background','url(https://ig0930.cafe24.com/common/images/logo2.png) no-repeat center')
               $('.dropdownmenu li a, #headerArea .rightMenu li a').css('color','#333');
           }
          on_off=false;    
      });
   
      $(window).on('scroll',function(){//스크롤의 거리가 발생하면
           var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수
           //console.log(scroll);

           if(scroll>smh-50){//스크롤300까지 내리면
               $('#headerArea').css('background','#fff').css('border-bottom','1px solid #ccc');
               $('h1 a').css('background','url(https://ig0930.cafe24.com/common/images/logo2.png) no-repeat center')
               $('.dropdownmenu li a, #headerArea .rightMenu li a').css('color','#333');
           }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
              if(on_off==false){    //마우스가 안오버했을때
                   $('#headerArea').css('background','rgba(0, 0, 0,.6)').css('border-bottom','none');
                   $('h1 a').css('background','url(https://ig0930.cafe24.com/common/images/logo.png) no-repeat center')
                   $('.dropdownmenu li a, #headerArea .rightMenu li a').css('color','#fff');
              }
           }; 
           
        });

  
    //2depth 열기/닫기
    $('ul.dropdownmenu').hover(
       function() { 
          $('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
          $('#headerArea').animate({height:320},'fast').clearQueue();
       },function() {
          $('ul.dropdownmenu li.menu ul').hide(); //모든 서브를 다 닫아라
          $('#headerArea').animate({height:110},'fast').clearQueue();
     });
    
     //1depth 효과
     $('ul.dropdownmenu li.menu').hover(
       function() { 
           $('.depth1, #headerArea .rightMenu li a',this).css('color','#30ad15');
       },function() {
          $('.depth1, #headerArea .rightMenu li a',this).css('color','#333');
     });
     
    
     //tab 처리
     $('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
        $('ul.dropdownmenu li.menu ul').slideDown('normal');
        $('#headerArea').animate({height:320},'fast').clearQueue();
     });

    $('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {        
        $('ul.dropdownmenu li.menu ul').slideUp('fast');
        $('#headerArea').animate({height:110},'normal').clearQueue();
    });

    //패밀리사이트
    $('.family_box>a').click(function (e) {
		e.preventDefault();
		if ($(this).hasClass('selected')) {
			$(this).removeClass('selected');
			$('.family_box ul').slideUp(200, function () {
				$('.family_box>a').css('border-radius', '22.5px');
			});
		} else {
			$(this).addClass('selected');
			$('.family_box ul').slideDown(200);
			$('.family_box>a').css({ 'border-radius': '0 0 22.5px 22.5px' });
		}
	});



    //topmove
    $('.topMove').hide();
    
    $(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
        var scroll = $(window).scrollTop(); //스크롤의 거리
        var scrollFoot = $('#footerArea').offset().top - $(window).height() + 60; // 푸터에서의 값 계산
        
        if(scroll > 300){ // 300이상의 거리가 발생되면
            $('.topMove').fadeIn('slow');  // top 보이기

            if(scroll < scrollFoot){ // footer보다 작으면 bottom:20, fixed
                $('.topMove').css('bottom',20).css('position','fixed');
            } else { // footer보다 크면 bottom:200, absolute
                $('.topMove').css('bottom',200).css('position','fixed');
            };
    
        }else{
            $('.topMove').fadeOut('fast'); // top 감추기
        }
    });
    
    $('.topMove a').click(function(e){
        e.preventDefault();
        $("html,body").stop().animate({"scrollTop":0},500);//상단으로  이동
    });
});
