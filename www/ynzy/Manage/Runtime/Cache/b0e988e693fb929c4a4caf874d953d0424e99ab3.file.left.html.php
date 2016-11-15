<?php /* Smarty version Smarty-3.1.6, created on 2016-07-02 08:32:40
         compiled from "E:/wamp/www/ynzy/Manage/Home/View\Index\left.html" */ ?>
<?php /*%%SmartyHeaderCode:71645766796d945b15-95512873%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'b0e988e693fb929c4a4caf874d953d0424e99ab3' => 
    array (
      0 => 'E:/wamp/www/ynzy/Manage/Home/View\\Index\\left.html',
      1 => 1466673838,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '71645766796d945b15-95512873',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_5766796d9fd4c',
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5766796d9fd4c')) {function content_5766796d9fd4c($_smarty_tpl) {?><!DOCTYPE html>
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