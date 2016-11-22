<?php /* Smarty version Smarty-3.1.6, created on 2016-06-29 17:16:45
         compiled from "/var/www/html/ynzy/Manage/Admin/View/Index/left.html" */ ?>
<?php /*%%SmartyHeaderCode:19764156577391fdc80ab1-78574154%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'a519fb0ba4208b7adc8b999057f6a91ef4577f4f' => 
    array (
      0 => '/var/www/html/ynzy/Manage/Admin/View/Index/left.html',
      1 => 1466924320,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '19764156577391fdc80ab1-78574154',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_577391fdce825',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_577391fdce825')) {function content_577391fdce825($_smarty_tpl) {?><!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <title>大美云南管理后台</title>
    <link rel="stylesheet" type="text/css" href="<?php echo @ADMIN_CSS_URL;?>
basic.css">
    <script type="text/javascript" src="<?php echo @ADMIN_JS_URL;?>
jquery-2.2.3.min.js"></script>
    <script type="text/javascript" src="<?php echo @ADMIN_JS_URL;?>
main.js"></script>
</head>
<style>
    html{ overflow-x: hidden;/* 禁止横向滚动条 */ }
    body{ background-color: #F7F7F7; }
</style>
<body>
<div class="left">
    <div class="shop-system">
        <div class="ul-title">店铺系统</div>
        <ul class="ul-container hide" id="ul-container1">
            <li><a class="left-btn" href="../Shop/shop" target="right">店铺管理</a></li>
            <li><a class="left-btn" href="../Member/member" target="right">会员管理</a></li>
        </ul>
    </div>
    <div class="shop-system">
        <div class="ul-title">权限设置</div>
        <ul class="ul-container hide">
            <li><a class="left-btn" href="../Auth/giftauth" target="right">进货有礼</a></li>
            <li><a class="left-btn" href="../Auth/wedauth" target="right">婚庆推广</a></li>
            <li><a class="left-btn" href="../Auth/group" target="right">分组列表</a></li>
            <li><a class="left-btn" href="../Manage/admin.html" target="right">管理员表</a></li>
        </ul>
    </div>
    <div class="shop-system">
        <div class="ul-title">进货有礼</div>
        <ul class="ul-container hide">
            <li><a class="left-btn" href="../Gift/gift.html" target="right">参与店铺</a></li>
            <li><a class="left-btn" href="welcome.html" target="right">奖品设置</a></li>
            <li><a class="left-btn" href="../Gift/check.html" target="right">进货审核</a></li>
            <li><a class="left-btn" href="welcome.html" target="right">兑奖情况</a></li>
        </ul>
    </div>
    <div class="shop-system">
        <div class="ul-title">婚宴推广</div>
        <ul class="ul-container hide">
            <li><a class="left-btn" href="welcome.html" target="right">参与店铺</a></li>
            <li><a class="left-btn" href="welcome.html" target="right">奖品设置</a></li>
            <li><a class="left-btn" href="welcome.html" target="right">参与会员</a></li>
            <li><a class="left-btn" href="welcome.html" target="right">兑奖情况</a></li>
        </ul>
    </div>
</div>
</body>
</html>
<?php }} ?>