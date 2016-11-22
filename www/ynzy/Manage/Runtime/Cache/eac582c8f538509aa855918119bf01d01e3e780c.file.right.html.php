<?php /* Smarty version Smarty-3.1.6, created on 2016-06-29 17:16:45
         compiled from "/var/www/html/ynzy/Manage/Admin/View/Index/right.html" */ ?>
<?php /*%%SmartyHeaderCode:1123736782577391fddfc274-96844798%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'eac582c8f538509aa855918119bf01d01e3e780c' => 
    array (
      0 => '/var/www/html/ynzy/Manage/Admin/View/Index/right.html',
      1 => 1466904576,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '1123736782577391fddfc274-96844798',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'Think' => 0,
    'shopCount' => 0,
    'memberCount' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_577391fde7539',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_577391fde7539')) {function content_577391fde7539($_smarty_tpl) {?><!DOCTYPE html>
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
    body{ background-color: #F7F7F7; }
</style>
<body>
<ul class="welcome-ul">
	<li><img src="<?php echo @ADMIN_IMG_URL;?>
v-card.png" alt="" class="pic1"><strong><?php echo $_SESSION['admin_name'];?>
<!-- 原本是<?php echo $_smarty_tpl->tpl_vars['Think']->value['session']['admin_name'];?>
 --></strong>
		<span>管理员</span>
	</li>
	<li><img src="<?php echo @ADMIN_IMG_URL;?>
House.png" alt="" class="pic1"><span></span><strong><?php echo $_smarty_tpl->tpl_vars['shopCount']->value;?>
</strong>
		<span>家店铺</span>
	</li>
	<li><img src="<?php echo @ADMIN_IMG_URL;?>
man-2.png" alt="" class="pic1"><strong><?php echo $_smarty_tpl->tpl_vars['memberCount']->value;?>
</strong>
		<span>名会员</span>
	</li>
	<li><img src="<?php echo @ADMIN_IMG_URL;?>
clock.png" alt="" class="pic1"><strong><?php echo $_SESSION['admin_last_logintime'];?>
</strong>
		<span>登入时间</span>
	</li>
</ul>
</body>
</html>
<?php }} ?>