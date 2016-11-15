<?php /* Smarty version Smarty-3.1.6, created on 2016-07-06 23:34:07
         compiled from "E:/wamp/www/ynzy/Manage/Admin/View\Manage\login.html" */ ?>
<?php /*%%SmartyHeaderCode:16293576bf4bd1c63a0-09707499%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '7396e1dfcc2a5abb92a456b5649692d77a663489' => 
    array (
      0 => 'E:/wamp/www/ynzy/Manage/Admin/View\\Manage\\login.html',
      1 => 1467727598,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '16293576bf4bd1c63a0-09707499',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_576bf4bd321e7',
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_576bf4bd321e7')) {function content_576bf4bd321e7($_smarty_tpl) {?><!DOCTYPE html>
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