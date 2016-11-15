<?php /* Smarty version Smarty-3.1.6, created on 2016-07-06 23:35:30
         compiled from "E:/wamp/www/ynzy/Manage/Home/View\Wed\wed.html" */ ?>
<?php /*%%SmartyHeaderCode:20457577919eb61ae11-01315119%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '28eba3b2624102dda43bfdde2dd19b042992e202' => 
    array (
      0 => 'E:/wamp/www/ynzy/Manage/Home/View\\Wed\\wed.html',
      1 => 1467818079,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '20457577919eb61ae11-01315119',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_577919eb6caab',
  'variables' => 
  array (
    'tips' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_577919eb6caab')) {function content_577919eb6caab($_smarty_tpl) {?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>大重九高端婚宴喜烟个性化定制</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
    <meta name="format-detection" content="telephone=no" />
    <link rel="stylesheet" href="<?php echo @HOME_CSS_URL;?>
wed.css">
    <link rel="stylesheet" href="<?php echo @HOME_CSS_URL;?>
swiper-3.3.1.min.css">
    <link rel="stylesheet" href="<?php echo @HOME_CSS_URL;?>
animate.min.css">
</head>
<body>
    <audio autoplay="autoplay" loop="loop">
        <source src="<?php echo @HOME_IMG_URL;?>
wed/iloveyou.mp3" type="audio/mpeg">
        浏览器不支持该音乐
    </audio>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide first">
                <img class="bg" src="<?php echo @HOME_IMG_URL;?>
wed/bg.png"></img>
                <img class="dcjlogo" src="<?php echo @HOME_IMG_URL;?>
wed/dcjlogo.png"></img>
                <span class="t-title">大重九高端婚宴喜烟个性化定制（火热报名中）</span>
                <span class="t-zhun">尊贵 • 浪漫 • 雅致</span>
                <strong class="t-special">大重九婚庆喜烟套餐特别定制</strong>
                <span class="t-rich">丰富的婚庆服务组合选择 , 丰厚的礼包回馈</span>
                <img class="tcdjlogo" src="<?php echo @HOME_IMG_URL;?>
wed/tcdjlogo.png"></img>
                <img class="yanbao hide" src="<?php echo @HOME_IMG_URL;?>
wed/yanbao.png"></img>
                <img class="car hide" src="<?php echo @HOME_IMG_URL;?>
wed/car.png"></img>
                <img class="flower1" src="<?php echo @HOME_IMG_URL;?>
wed/flower1.png"></img>
                <img class="flower2" src="<?php echo @HOME_IMG_URL;?>
wed/flower2.png"></img>
            </div>
            <div class="swiper-slide second">
                <img class="bg" src="<?php echo @HOME_IMG_URL;?>
wed/bg.png"></img>
                <img class="dcjlogo" src="<?php echo @HOME_IMG_URL;?>
wed/dcjlogo.png"></img>
                <span class="t-title">大重九高端婚宴喜烟个性化定制（火热报名中）</span>
                <img class="tcdjlogo" src="<?php echo @HOME_IMG_URL;?>
wed/tcdjlogo.png"></img>
                <span class="t-zhun">尊贵 • 浪漫 • 雅致</span>
                <img class="gift1" src="<?php echo @HOME_IMG_URL;?>
wed/gift399.png"></img>
                <img class="gift2" src="<?php echo @HOME_IMG_URL;?>
wed/gift999.png"></img>
                <img class="gift3" src="<?php echo @HOME_IMG_URL;?>
wed/gift2299.png"></img>
                <img class="gift4" src="<?php echo @HOME_IMG_URL;?>
wed/gift2999.png"></img>
                <span class="t-p3">
                赠送价值399元大礼包
                </span>
                <span class="t-p6">
                赠送价值999元大礼包
                </span>
                <span class="t-p10">
                赠送价值2299元大礼包
                </span>
                <span class="t-p20">
                赠送价值2999元大礼包
                </span>
                <strong class="t-3">订购3条</strong>
                <strong class="t-6">订购6条</strong>
                <strong class="t-10">订购10条</strong>
                <strong class="t-20">订购20条</strong>
            </div>
            <div class="swiper-slide third">
                <strong class="t-special2">大重九·天长地九预定表</strong>
                <form class="wedform" action="<?php echo @__CONTROLLER__;?>
/addwed" method="post" enctype="multipart/form-data">
                    <div class="formdiv">
                        <span>姓名：</span>
                        <input type="text" name="wed_name" placeholder="<?php echo $_smarty_tpl->tpl_vars['tips']->value['wed_name'];?>
">
                    </div>
                    <div class="formdiv">
                        <span>电话：</span>
                        <input type="text" name="wed_tel" placeholder="<?php echo $_smarty_tpl->tpl_vars['tips']->value['wed_tel'];?>
">
                    </div>
                    <div class="formdiv">
                        <span>预定数量(条)：</span>
                        <input type="text" name="wed_order" id="order" placeholder="<?php echo $_smarty_tpl->tpl_vars['tips']->value['wed_order'];?>
">
                    </div>
                    <input type="hidden" name="wed_shop_tel" value="<?php echo $_SESSION['shop_tel'];?>
">
                    <input type="submit" name="wed_submit" class="submitbtn">
                </form>
                <span class="t-rich2-2">名额有限，先到先得 <br>活动时间：2016 年 <br>活动地点：杭州/宁波/温州/金华/台州</span>
                <img class="flower1" src="<?php echo @HOME_IMG_URL;?>
wed/flower1.png"></img>
                <img class="flower2" src="<?php echo @HOME_IMG_URL;?>
wed/flower2.png"></img>
            </div>
        </div>
    </div>
<script src="<?php echo @HOME_JS_URL;?>
jquery-2.2.3.min.js"></script>
<script src="<?php echo @HOME_JS_URL;?>
swiper-3.3.1.min.js"></script>
<script type="text/javascript">
    var swiper = new Swiper('.swiper-container', {
    pagination: 'null',
    paginationClickable: true,
    direction: 'vertical',
    loop:false,
});

$(function () {
    setTimeout(function () {
  $(".invite").addClass('avtive');
    }, 1000);
})
</script>
</body>
</html>
<?php }} ?>