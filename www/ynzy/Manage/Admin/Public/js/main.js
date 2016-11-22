/* 滑动的写法 */
/*$(document).ready(function($) {
  $('#show').click(function(event) {
    $('#box1').slideDown(1000)
  });
  $('#hide').click(function(event) {
    $('#box1').slideUp(1000)
  });
  $('#toggle').click(function(event) {
    $('#box1').slideToggle(1000)
  });
});*/
$(document).ready(function() {
    $('.ul-title').click(function(event) {
        $(this).next().slideToggle(500)
    });
    /*主菜单鼠标滑过和滑出动画*/
    $(".ul-title").mouseover(function() {
        $(this).css("background-color", "#DDDDDD");
    });
    $(".ul-title").mouseout(function() {
        $(this).css("background-color", "#EDEDED");
    });

});

$(document).ready(function() {
    /*主菜单点击动画*/
    $('.ul-title').click(function(event) {
        //判断如果有这个claa就执行这个，如果没有，就执行另外一个
        if ($(this).children('p').hasClass('icon-angle-right')) {
            $(this).children('p').attr("class", "icon-angle-down");
        } else {
            $(this).children('p').attr("class", "icon-angle-right");
        };
    });
});

$(document).ready(function() {
    $('#searchSubmit').click(function(event) {
        $('#searchForm').submit();
    });
});

$(document).ready(function() {
    $('.table tr th').click(function(event) {
        $(this).toggleClass('percent20');
    });
});
