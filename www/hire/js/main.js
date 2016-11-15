var swiper = new Swiper('.swiper-container', {
    pagination: 'null',
    paginationClickable: true,
    direction: 'vertical',
    loop:false,
});
$('#next').click(function(){
    swiper.slideTo(1, 1000, false);//切换到第一个slide，速度为1秒
});

$(function () {
    setTimeout(function () {
        $(".invite").addClass('avtive');
    }, 1000);
})

$("#music_btn").click(function(){
    var music = document.getElementById("mama");
    if(music.paused){
        music.play();
        $("#music_btn").attr("src","img/voice-o.png");
    }else{
    music.pause();
    $("#music_btn").attr("src","img/voice-c.png");
    }
});