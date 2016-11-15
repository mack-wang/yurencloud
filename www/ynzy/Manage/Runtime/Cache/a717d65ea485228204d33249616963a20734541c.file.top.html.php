<?php /* Smarty version Smarty-3.1.6, created on 2016-07-23 09:10:59
         compiled from "F:/WWW/ynzy/Manage/Admin/View\Index\top.html" */ ?>
<?php /*%%SmartyHeaderCode:297335792c4233386e1-53914707%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'a717d65ea485228204d33249616963a20734541c' => 
    array (
      0 => 'F:/WWW/ynzy/Manage/Admin/View\\Index\\top.html',
      1 => 1469235878,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '297335792c4233386e1-53914707',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_5792c4233c19b',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5792c4233c19b')) {function content_5792c4233c19b($_smarty_tpl) {?><!DOCTYPE html>
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