$(document).ready(function() {


  var smh=$('.visual').height();
  // gnb 스크롤 이벤트 체크
  $(window).on('scroll',function(){//스크롤의 거리가 발생하면
      var scroll = $(window).scrollTop();  //스크롤의 거리를 리턴하는 함수
      //console.log(scroll);
      
      if(scroll>100){//스크롤300까지 내리면
          $('#headerArea').addClass('on');
      } else {//스크롤 내리기 전 디폴트(마우스올리지않음)
          $('#headerArea').removeClass('on');
      };
  });




   var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
 	
   $(".menu_open").click(function() { //메뉴버튼 클릭시
       
       var documentHeight =  $(document).height();
       $("#gnb").css('height',documentHeight); 

      if(op==false){
        $("#gnb").animate({right:0,opacity:1}, 'fast');
        $('#headerArea').addClass('mn_open');
        op=true;
      }else{
        $("#gnb").animate({right:'-100%',opacity:0}, 'fast');
        $('#headerArea').removeClass('mn_open');
        op=false;
      }

   });
   
   
    //2depth 메뉴 교대로 열기 처리 
    var onoff=[false,false,false,false,false,false];
    var arrcount=onoff.length; //6
    
    console.log(arrcount);
    
    $('#gnb .depth1 h3 a').click(function(){
        var ind=$(this).parents('.depth1').index();
        
        console.log(ind);
        
       if(onoff[ind]==false){
        //$('#gnb .depth1 ul').hide();
        $(this).parents('.depth1').find('ul').slideDown('slow');
        $(this).parents('.depth1').siblings('li').find('ul').slideUp('fast');
         for(var i=0; i<arrcount; i++) onoff[i]=false; 
         onoff[ind]=true;
           
         $('.depth1 span').text('+');   
         $(this).find('span').text('-');   
            
       }else{
         $(this).parents('.depth1').find('ul').slideUp('fast'); 
         onoff[ind]=false;   
           
         $(this).find('span').text('+');     
       }
    }); 
    
    

   //  topmove
    $(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
       var scroll = $(window).scrollTop(); //스크롤의 거리
      
       if(scroll > 200){ // 300이상의 거리가 발생되면
           $('.topMove').fadeIn('slow');  // top 보이기    
       }else{
           $('.topMove').fadeOut('fast'); // top 감추기
      }
   });
  
   $('.topMove a').click(function(e){
       e.preventDefault();
       $("html,body").stop().animate({"scrollTop":0},500); //상단으로 스르륵 이동합니다.
   });




   //패밀리사이트
   $('.family_box>a').click(function (e) {
		e.preventDefault();
		if ($(this).hasClass('on')) {
			$(this).removeClass('on');
			$('.family_box ul').slideUp(200, function () {
				
			});
		} else {
			$(this).addClass('on');
			$('.family_box ul').slideDown(200);
			
		}
	});

  
  });


