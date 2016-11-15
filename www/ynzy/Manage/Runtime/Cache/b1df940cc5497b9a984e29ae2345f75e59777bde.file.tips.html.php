<?php /* Smarty version Smarty-3.1.6, created on 2016-08-11 23:53:37
         compiled from "F:/WWW/ynzy/Manage/Home/View\Index\tips.html" */ ?>
<?php /*%%SmartyHeaderCode:72657ac9d3059e692-39644698%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'b1df940cc5497b9a984e29ae2345f75e59777bde' => 
    array (
      0 => 'F:/WWW/ynzy/Manage/Home/View\\Index\\tips.html',
      1 => 1470930746,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '72657ac9d3059e692-39644698',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_57ac9d305fca2',
  'variables' => 
  array (
    'tips' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_57ac9d305fca2')) {function content_57ac9d305fca2($_smarty_tpl) {?><!DOCTYPE html>
<html lang="zh">

<head>
    <meta charset="UTF-8">
    <title>注册</title>
    <link rel="stylesheet" type="text/css" href="<?php echo @HOME_CSS_URL;?>
basic.css">
    <link rel="stylesheet" type="text/css" href="<?php echo @HOME_CSS_URL;?>
font-awesome.min.css">
    <script type="text/javascript" src="<?php echo @HOME_JS_URL;?>
jquery-2.2.3.min.js"></script>
    <script type="text/javascript" src="<?php echo @HOME_JS_URL;?>
main.js"></script>
</head>

<body>
    <div class="top-container">
        <header class="home-top">
            <img src="<?php echo @HOME_IMG_URL;?>
logo.png" alt="logo" class="home-logo">
        </header>
        <div class="tijiao loginBgcolor">
        <center class="register-tips"><?php echo $_smarty_tpl->tpl_vars['tips']->value;?>
</center>
    </div>
        <span class="footer">© 博渊堂 · 版权所有 2013-2018</span>
</body>

</html>
<?php }} ?>