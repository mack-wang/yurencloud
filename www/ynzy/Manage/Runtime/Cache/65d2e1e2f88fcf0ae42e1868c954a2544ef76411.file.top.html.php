<?php /* Smarty version Smarty-3.1.6, created on 2016-07-01 01:49:38
         compiled from "E:/wamp/www/ynzy/Manage/Admin/View\Index\top.html" */ ?>
<?php /*%%SmartyHeaderCode:26055576be51bc8e303-62370438%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '65d2e1e2f88fcf0ae42e1868c954a2544ef76411' => 
    array (
      0 => 'E:/wamp/www/ynzy/Manage/Admin/View\\Index\\top.html',
      1 => 1466864450,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '26055576be51bc8e303-62370438',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_576be51bd3a13',
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_576be51bd3a13')) {function content_576be51bd3a13($_smarty_tpl) {?><!DOCTYPE html>
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