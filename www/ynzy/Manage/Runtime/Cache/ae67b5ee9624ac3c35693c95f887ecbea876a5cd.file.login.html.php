<?php /* Smarty version Smarty-3.1.6, created on 2016-07-07 09:29:33
         compiled from "D:/phpStudy/WWW/ynzy/manage/Admin/View\Manage\login.html" */ ?>
<?php /*%%SmartyHeaderCode:18393577db07d1b4b89-79801153%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'ae67b5ee9624ac3c35693c95f887ecbea876a5cd' => 
    array (
      0 => 'D:/phpStudy/WWW/ynzy/manage/Admin/View\\Manage\\login.html',
      1 => 1467611963,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '18393577db07d1b4b89-79801153',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_577db07d21a4a',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_577db07d21a4a')) {function content_577db07d21a4a($_smarty_tpl) {?><!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <title>大美云南管理后台</title>
    <link rel="stylesheet" href="<?php echo @ADMIN_CSS_URL;?>
font-awesome.min.css" />
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
" method="post" enctype="multipart/form-data" class="login">
        <img src="<?php echo @ADMIN_IMG_URL;?>
sanjiao.png" alt="三角" class="sanjiao">
        <ul>
            <li>
                <div><img src="<?php echo @ADMIN_IMG_URL;?>
man.png"></div>
                <input type="text" name="admin_name" maxlength="20" placeholder="  管理员账号">
            </li>
            <li>
                <div><img src="<?php echo @ADMIN_IMG_URL;?>
locked.png"></div>
                <input type="password" name="admin_password" placeholder="  密码">
            </li>
            <li>
                <div><img src="<?php echo @ADMIN_IMG_URL;?>
scan-label.png"></div>
                <input type="text" name="admin_verify" placeholder="  验证码">
            </li>
        </ul>
        <div class="box1">
            <span class="text1" >验证码：</span><div class="verify"><img src="<?php echo @__MODULE__;?>
/Verify/verifyImg"
        onclick="this.src='<?php echo @__MODULE__;?>
/Verify/verifyImg/'+Math.random()"
        alt="" /></div>
        </div>
        <input type="submit" class="login-submit-btn">
    </form>


</body>
</html>
<?php }} ?>