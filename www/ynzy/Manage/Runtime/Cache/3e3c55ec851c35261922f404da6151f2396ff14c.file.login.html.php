<?php /* Smarty version Smarty-3.1.6, created on 2016-06-23 20:03:47
         compiled from "D:/phpStudy/WWW/ynzy/Manage/Admin/View\Admin\login.html" */ ?>
<?php /*%%SmartyHeaderCode:11904576bd023775482-34632426%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '3e3c55ec851c35261922f404da6151f2396ff14c' => 
    array (
      0 => 'D:/phpStudy/WWW/ynzy/Manage/Admin/View\\Admin\\login.html',
      1 => 1466674899,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '11904576bd023775482-34632426',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_576bd0237dada',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_576bd0237dada')) {function content_576bd0237dada($_smarty_tpl) {?><!DOCTYPE html>
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
    </header>


    <form action="<?php echo @__SELF__;?>
/login" method="post" enctype="multipart/form-data" class="login">
        <img src="<?php echo @ADMIN_IMG_URL;?>
sanjiao.png" alt="三角" class="sanjiao">
        <ul>
            <li>
                <div><img src="<?php echo @ADMIN_IMG_URL;?>
man.png"></div>
                <input type="text" name="admin_admin" placeholder="  管理员账号">
            </li>
            <li>
                <div><img src="<?php echo @ADMIN_IMG_URL;?>
locked.png"></div>
                <input type="text" name="admin_password" placeholder="  密码">
            </li>
            <li>
                <div><img src="<?php echo @ADMIN_IMG_URL;?>
scan-label.png"></div>
                <input type="text" name="admin_verify" placeholder="  验证码">
            </li>
        </ul>
        <div class="box1">
            <span class="text1" >验证码：</span><div class="verify"></div>
        </div>
        <input type="submit" class="login-submit-btn">
    </form>


</body>
</html><?php }} ?>