<?php /* Smarty version Smarty-3.1.6, created on 2016-06-19 19:10:28
         compiled from "E:/wamp/www/ynzy/Manage/Home/View\Admin\login.html" */ ?>
<?php /*%%SmartyHeaderCode:3258257667da43ddb02-51926679%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'c6ec082ef5850de79af940fdeeddf368f6eef44e' => 
    array (
      0 => 'E:/wamp/www/ynzy/Manage/Home/View\\Admin\\login.html',
      1 => 1466334113,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '3258257667da43ddb02-51926679',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_57667da450694',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_57667da450694')) {function content_57667da450694($_smarty_tpl) {?><!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <title>大美云南管理后台</title>
    <link rel="stylesheet" type="text/css" href="<?php echo @CSS_URL;?>
basic.css">
    <script type="text/javascript" src="<?php echo @JS_URL;?>
jquery-2.2.3.min.js"></script>
    <script type="text/javascript" src="<?php echo @JS_URL;?>
main.js"></script>
</head>
<body>
    <header class="top">
        <img src="<?php echo @IMG_URL;?>
logo.png" alt="logo" class="logo">
    </header>


    <form action="" class="login">
        <img src="<?php echo @IMG_URL;?>
sanjiao.png" alt="三角" class="sanjiao">
        <ul>
            <li>
                <div><img src="<?php echo @IMG_URL;?>
man.png"></div>
                <input type="text" name="user" placeholder="  管理账号">
            </li>
            <li>
                <div><img src="<?php echo @IMG_URL;?>
locked.png"></div>
                <input type="text" name="user" placeholder="  密码">
            </li>
            <li>
                <div><img src="<?php echo @IMG_URL;?>
scan-label.png"></div>
                <input type="text" name="user" placeholder="  验证码">
            </li>
        </ul>
        <div class="box1">
            <span class="text1" >验证码：</span><div class="verify"></div>
        </div>
        <input type="submit" class="login-submit-btn">
    </form>


</body>
</html><?php }} ?>