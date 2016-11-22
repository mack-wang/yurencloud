<?php /* Smarty version Smarty-3.1.6, created on 2016-06-30 00:16:56
         compiled from "/var/www/html/ynzy/Manage/Home/View/Index/failed.html" */ ?>
<?php /*%%SmartyHeaderCode:13707428365773b4ca19d8f0-34971049%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'b22e309cb1a3480a627c0b7a6acda7f0ac46ec0f' => 
    array (
      0 => '/var/www/html/ynzy/Manage/Home/View/Index/failed.html',
      1 => 1467205575,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '13707428365773b4ca19d8f0-34971049',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_5773b4ca1e7d6',
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5773b4ca1e7d6')) {function content_5773b4ca1e7d6($_smarty_tpl) {?><!DOCTYPE html>
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
    <header class="home-top">
        <img src="<?php echo @HOME_IMG_URL;?>
logo.png" alt="logo" class="home-logo">
    </header>

    <div class="tijiao">
        <span class="login-success">验证码输入错误或者验证超时，请重试！</span>
        <span class="span-input">© 博渊堂 · 版权所有 2013-2018</span>
    </div>

</body>
</html>
<?php }} ?>