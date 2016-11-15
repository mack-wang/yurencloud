<?php /* Smarty version Smarty-3.1.6, created on 2016-06-23 17:24:25
         compiled from "D:/phpStudy/WWW/ynzy/Manage/Home/View\Index\left.html" */ ?>
<?php /*%%SmartyHeaderCode:1867657688f05175f72-44934025%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '2dbef8e9fcf8ff99051ae93144293e93b5c130e2' => 
    array (
      0 => 'D:/phpStudy/WWW/ynzy/Manage/Home/View\\Index\\left.html',
      1 => 1466673836,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '1867657688f05175f72-44934025',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_57688f051c030',
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_57688f051c030')) {function content_57688f051c030($_smarty_tpl) {?><!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <title>大美云南管理后台</title>
    <link rel="stylesheet" type="text/css" href="<?php echo @HOME_CSS_URL;?>
basic.css">
    <script type="text/javascript" src="<?php echo @HOME_JS_URL;?>
jquery-2.2.3.min.js"></script>
    <script type="text/javascript" src="<?php echo @HOME_JS_URL;?>
main.js"></script>
</head>
<body>
<div class="left">
    <div class="shop-system">
        <div class="ul-title">店铺系统</div>
        <ul class="ul-container">
            <li><a class="left-btn" href="../Shop/shop.html" target="right">店铺管理</a></li>
            <li><a class="left-btn" href="../Member/member.html" target="right">会员管理</a></li>
        </ul>
    </div>
    <div class="shop-system">
        <div class="ul-title">权限设置</div>
        <ul class="ul-container">
            <li><a class="left-btn" href="welcome.html" target="right">分组名称</a></li>
            <li><a class="left-btn" href="welcome.html" target="right">分组权限</a></li>
        </ul>
    </div>
    <div class="shop-system">
        <div class="ul-title">进货有礼</div>
        <ul class="ul-container">
            <li><a class="left-btn" href="../Gift/gift.html" target="right">参与店铺</a></li>
            <li><a class="left-btn" href="welcome.html" target="right">奖品设置</a></li>
            <li><a class="left-btn" href="../Gift/check.html" target="right">进货审核</a></li>
            <li><a class="left-btn" href="welcome.html" target="right">兑奖情况</a></li>
        </ul>
    </div>
    <div class="shop-system">
        <div class="ul-title">婚宴推广</div>
        <ul class="ul-container">
            <li><a class="left-btn" href="welcome.html" target="right">参与店铺</a></li>
            <li><a class="left-btn" href="welcome.html" target="right">奖品设置</a></li>
            <li><a class="left-btn" href="welcome.html" target="right">参与会员</a></li>
            <li><a class="left-btn" href="welcome.html" target="right">兑奖情况</a></li>
        </ul>
    </div>
</div>
</body>
</html><?php }} ?>