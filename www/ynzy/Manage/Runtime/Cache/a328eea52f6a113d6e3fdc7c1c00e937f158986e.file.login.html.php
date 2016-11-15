<?php /* Smarty version Smarty-3.1.6, created on 2016-08-07 20:16:57
         compiled from "F:/WWW/ynzy/Manage/Admin/View\Manage\login.html" */ ?>
<?php /*%%SmartyHeaderCode:217575792c2cd1f4c62-47298764%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'a328eea52f6a113d6e3fdc7c1c00e937f158986e' => 
    array (
      0 => 'F:/WWW/ynzy/Manage/Admin/View\\Manage\\login.html',
      1 => 1470572215,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '217575792c2cd1f4c62-47298764',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_5792c2cd2ac9a',
  'variables' => 
  array (
    'tips_pwd' => 0,
    'tips_ver' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5792c2cd2ac9a')) {function content_5792c2cd2ac9a($_smarty_tpl) {?><!DOCTYPE html>
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
                <span class="login_tips"><?php echo $_smarty_tpl->tpl_vars['tips_pwd']->value;?>
</span>
            </li>
            <li>
                <div><img src="<?php echo @ADMIN_IMG_URL;?>
scan-label.png"></div>
                <input type="text" name="admin_verify" placeholder="  验证码">
                <span class="login_tips"><?php echo $_smarty_tpl->tpl_vars['tips_ver']->value;?>
</span>
            </li>
        </ul>
        <div class="box1">
            <span class="text1">验证码：</span>
            <div class="verify"><img src="<?php echo @__MODULE__;?>
/Verify/verifyImg" onclick="this.src='<?php echo @__MODULE__;?>
/Verify/verifyImg/'+Math.random()" alt="" /></div>
        </div>
        <input type="submit" class="login-submit-btn">
    </form>
</body>

</html>
<?php }} ?>