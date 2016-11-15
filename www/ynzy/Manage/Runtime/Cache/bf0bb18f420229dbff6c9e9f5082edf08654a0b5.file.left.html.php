<?php /* Smarty version Smarty-3.1.6, created on 2016-08-28 09:28:17
         compiled from "D:/phpStudy/WWW/ynzy/Manage/Admin/View\Index\left.html" */ ?>
<?php /*%%SmartyHeaderCode:32290576baafabec798-99523583%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'bf0bb18f420229dbff6c9e9f5082edf08654a0b5' => 
    array (
      0 => 'D:/phpStudy/WWW/ynzy/Manage/Admin/View\\Index\\left.html',
      1 => 1470618938,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '32290576baafabec798-99523583',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_576baafac2afa',
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_576baafac2afa')) {function content_576baafac2afa($_smarty_tpl) {?><!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="zh">

<head>
    <meta charset="UTF-8">
    <title>大美云南管理后台</title>
    <link rel="stylesheet" href="<?php echo @ADMIN_CSS_URL;?>
font-awesome.min.css" />
    <link rel="stylesheet" href="<?php echo @ADMIN_CSS_URL;?>
font-awesome.min.css" />
    <link rel="stylesheet" type="text/css" href="<?php echo @ADMIN_CSS_URL;?>
basic.css">
    <script type="text/javascript" src="<?php echo @ADMIN_JS_URL;?>
jquery-2.2.3.min.js"></script>
    <script type="text/javascript" src="<?php echo @ADMIN_JS_URL;?>
main.js"></script>
</head>
<style>
html {
    overflow-x: hidden;
    /* 禁止横向滚动条 */
}

body {
    background-color: #F7F7F7;
}
</style>

<body>
    <div class="left">
        <div class="shop-system">
            <div class="ul-title"><i class="icon-home font-size16"></i>&nbsp&nbsp&nbsp店铺系统&nbsp&nbsp&nbsp
                <p class="icon-angle-right"></p>
            </div>
            <ul class="ul-container hide" id="ul-container1">
                <li><a class="left-btn" href="<?php echo @__MODULE__;?>
/Shop/shop" target="right">店铺管理</a></li>
                <li><a class="left-btn" href="../Shop/register" target="right">注册店铺</a></li>
                <li><a class="left-btn" href="../Member/member" target="right">注册会员</a></li>
            </ul>
        </div>
        <div class="shop-system">
            <div class="ul-title"><i class="icon-lock font-size16"></i>&nbsp&nbsp&nbsp权限设置&nbsp&nbsp&nbsp
                <p class="icon-angle-right"></p>
            </div>
            <ul class="ul-container hide">
                <li><a class="left-btn" href="../Auth/giftauth" target="right">进货有礼</a></li>
                <li><a class="left-btn" href="../Auth/wedauth" target="right">婚庆推广</a></li>
                <li><a class="left-btn" href="../Auth/group" target="right">分组列表</a></li>
                <li><a class="left-btn" href="../Manage/admin.html" target="right">管理员表</a></li>
            </ul>
        </div>
        <div class="shop-system">
            <div class="ul-title"><i class="icon-shopping-cart font-size16"></i>&nbsp&nbsp&nbsp进货有礼&nbsp&nbsp&nbsp
                <p class="icon-angle-right"></p>
            </div>
            <ul class="ul-container hide">
                <li><a class="left-btn" href="../Gift/giftshop" target="right">参与店铺</a></li>
                <li><a class="left-btn" href="welcome.html" target="right">奖品设置</a></li>
                <li><a class="left-btn" href="welcome.html" target="right">兑奖情况</a></li>
            </ul>
        </div>
        <div class="shop-system">
            <div class="ul-title"><i class="icon-heart font-size16"></i>&nbsp&nbsp&nbsp婚宴推广&nbsp&nbsp&nbsp
                <p class="icon-angle-right"></p>
            </div>
            <ul class="ul-container hide">
                <li><a class="left-btn" href="../Wed/wedshop" target="right">预定信息</a></li>
                <li><a class="left-btn" href="welcome.html" target="right">奖品设置</a></li>
                <li><a class="left-btn" href="welcome.html" target="right">兑奖情况</a></li>
            </ul>
        </div>
    </div>
</body>

</html>
<?php }} ?>