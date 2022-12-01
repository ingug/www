//상단 이동
$('.topMove').hide();
$(window).on('scroll', function () { //스크롤 값의 변화가 생기면
    var scroll = $(window).scrollTop(); //스크롤의 거리

    if (scroll > 500) { //500이상의 거리가 발생되면
        $('.topMove').fadeIn('slow'); //top노출
    } else {
        $('.topMove').fadeOut('fast'); //top미노출
    }
});
$('.topMove').click(function (e) { //아이콘 클릭 시 상단으로 스르륵 이동
    e.preventDefault();
    $("html,body").stop().animate({
        "scrollTop": 0
    }, 100);
});