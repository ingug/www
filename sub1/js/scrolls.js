$(document).ready(function () {
        
    $('.tab_menu .tab1').addClass('spy');
    //첫번째 서브메뉴 활성화
    
    //첫번째 내용글 애니메이션 처리
    var smh= $('.tabs').offset().top;  //메인 비주얼의 높이
    var h1= $('.con1').offset().top ;
    var h2= $('.con2').offset().top ;
    var h3= $('.con3').offset().top ;
    console.log(h1,h2,h3,smh)

     //스크롤의 좌표가 변하면.. 스크롤 이벤트
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
    console.log(scroll)

        //스크롤top의 좌표를 담는다
       

        //sticky menu 처리
        if(scroll>smh){ 
            $('.tabs').addClass('tabson');
            //스크롤의 거리가 350px 이상이면 서브메뉴 고정
            $('header').hide();
        }else{
            $('.tabs').removeClass('tabson');
            //스크롤의 거리가 350px 보다 작으면 서브메뉴 원래 상태로
            $('header').show();
        }
        
        
        
       
        //모든 서브메뉴 비활성화~ 불꺼!!!
        
        
         //스크롤의 거리의 범위를 처리
        if(scroll>=0 && scroll<h1){
           
            $('.tab1').addClass('spy');
            //첫번째 서브메뉴 활성화
            
            //첫번째 내용 콘텐츠 애니메이
        }else if(scroll>=h1 && scroll<h2){
            $('.tab2').addClass('spy');
            
            //두번째 서브메뉴 활성화
        
        }else if(scroll>=h2 && scroll<h3){
            $('.tab3').addClass('spy');
            
            //세번째 서브메뉴 활성화
           
        } else if(scroll>=h3){
            $('.tab3').addClass('spy');
           
        //     //네번째 서브메뉴 활성화
        }
             
        // }
        
        
        
        
        //스크롤의 거리의 범위를 처리
        if(scroll>500){
            $('.tab_menu .tab1').removeClass('spy');
            $('.tab_menu .tab1').addClass('spy');
            //첫번째 서브메뉴 활성화
            
            
            //첫번째 내용 콘텐츠 애니메이
        }else if(scroll>=500 && scroll<1300){
            $('.tab_menu .tab2').removeClass('spy');
            $('.tab_menu .tab2').addClass('spy');
            //두번째 서브메뉴 활성화
            
           
        }else if(scroll>=1300 && scroll<1800){
            $('.tab_menu .tab3').removeClass('spy');
            $('.tab_menu .tab3').addClass('spy');
            //세번째 서브메뉴 활성화
            
           
        }else if(scroll>=1800){
            $('.tab_menu .tab3').removeClass('spy');
            $('.tab_menu .tab3').addClass('spy');
            //네번째 서브메뉴 활성화

        }
        
       
        
    });


});