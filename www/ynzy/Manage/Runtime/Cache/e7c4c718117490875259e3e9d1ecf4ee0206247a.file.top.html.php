<?php /* Smarty version Smarty-3.1.6, created on 2016-06-29 17:16:45
         compiled from "/var/www/html/ynzy/Manage/Admin/View/Index/top.html" */ ?>
<?php /*%%SmartyHeaderCode:297623465577391fdd2ba75-54784870%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'e7c4c718117490875259e3e9d1ecf4ee0206247a' => 
    array (
      0 => '/var/www/html/ynzy/Manage/Admin/View/Index/top.html',
      1 => 1466864450,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '297623465577391fdd2ba75-54784870',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_577391fdd8d99',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_577391fdd8d99')) {function content_577391fdd8d99($_smarty_tpl) {?><!DOCTYPE html>
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
<header class="top">
    <img src="<?php echo @ADMIN_IMG_URL;?>
logo.png" alt="logo" class="logo">
    <div class="change-password">
        <a href="">欢迎：<?php echo $_SESSION['admin_name'];?>
管理员</a>
        <a href="<?php echo @__CONTROLLER__;?>
/right" target="right">首页</a>
    	<a href="<?php echo @__MODULE__;?>
/Manage/changepwd" target="right">修改密码</a>
    	<a href="<?php echo @__MODULE__;?>
/Manage/logout" target="_top">退出系统</a>
    </div>
</header>
</body>
</html>
<?php }} ?>