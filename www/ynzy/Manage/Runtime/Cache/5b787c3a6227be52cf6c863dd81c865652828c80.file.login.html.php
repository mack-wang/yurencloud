<?php /* Smarty version Smarty-3.1.6, created on 2016-06-30 14:51:03
         compiled from "/var/www/html/ynzy/Manage/Home/View/Index/login.html" */ ?>
<?php /*%%SmartyHeaderCode:16453608595773a94cdf7ea3-28623970%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '5b787c3a6227be52cf6c863dd81c865652828c80' => 
    array (
      0 => '/var/www/html/ynzy/Manage/Home/View/Index/login.html',
      1 => 1467269431,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '16453608595773a94cdf7ea3-28623970',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_5773a94ce6088',
  'variables' => 
  array (
    'session_id' => 0,
    'info' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5773a94ce6088')) {function content_5773a94ce6088($_smarty_tpl) {?><!DOCTYPE html>
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
        <form action="<?php echo @__SELF__;?>
" method="post" enctype="multipart/form-data">

                    <input type="text" name="shop_tel" maxlength="20" placeholder="  注册手机号" class="text-input" value="<?php echo $_SESSION['shop_tel'];?>
">
                    <input type="submit" value="获取验证码" class="submit-input">
        </form>
        <form action="<?php echo @__CONTROLLER__;?>
/logincheck" method="post" enctype="multipart/form-data">
                    <input type="hidden" name="session_id" value="<?php echo $_smarty_tpl->tpl_vars['session_id']->value;?>
">
                    <input type="text" name="shotcode" placeholder="  填写验证码" class="text-input">
                    <input type="submit" name="admin_password" value="提交" class="submit-input">
                    <div class="info-input"><?php echo $_smarty_tpl->tpl_vars['info']->value;?>
</div>
        </form>
        <span class="span-input">© 博渊堂 · 版权所有 2013-2018</span>
    </div>

</body>
</html>
<?php }} ?>