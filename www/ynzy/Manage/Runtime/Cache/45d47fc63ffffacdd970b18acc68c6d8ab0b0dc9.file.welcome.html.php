<?php /* Smarty version Smarty-3.1.6, created on 2016-06-24 01:45:02
         compiled from "E:/wamp/www/ynzy/Manage/Admin/View\Index\welcome.html" */ ?>
<?php /*%%SmartyHeaderCode:4771576c201e84edc6-86068364%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '45d47fc63ffffacdd970b18acc68c6d8ab0b0dc9' => 
    array (
      0 => 'E:/wamp/www/ynzy/Manage/Admin/View\\Index\\welcome.html',
      1 => 1466673839,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '4771576c201e84edc6-86068364',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_576c201e96820',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_576c201e96820')) {function content_576c201e96820($_smarty_tpl) {?><!DOCTYPE html>
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
<body>
<ul class="welcome-ul">
	<li><img src="<?php echo @ADMIN_IMG_URL;?>
v-card.png" alt="" class="pic1"><strong>Admin</strong>
		<span></span>
	</li>
	<li><img src="<?php echo @ADMIN_IMG_URL;?>
House.png" alt="" class="pic1"><strong>187</strong>
		<span>家店铺</span>
	</li>
	<li><img src="<?php echo @ADMIN_IMG_URL;?>
man-2.png" alt="" class="pic1"><strong>2455</strong>
		<span>名会员</span>
	</li>
	<li><img src="<?php echo @ADMIN_IMG_URL;?>
clock.png" alt="" class="pic1"><strong>15：33 2016-6-18</strong>
		<span>登入时间</span>
	</li>
	<li><img src="<?php echo @ADMIN_IMG_URL;?>
computer.png" alt="" class="pic1"><strong>170.0.0.1</strong>
		<span>登入IP地址</span>
	</li>
</ul>



</body>
</html><?php }} ?>