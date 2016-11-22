<?php /* Smarty version Smarty-3.1.6, created on 2016-08-04 16:58:00
         compiled from "D:/phpStudy/WWW/ynzy/Manage/Home/View\Index\tips.html" */ ?>
<?php /*%%SmartyHeaderCode:1052557a303983fe150-91491415%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '0d5e8348a72b1fd183d5ebab444f895e9a0c38dd' => 
    array (
      0 => 'D:/phpStudy/WWW/ynzy/Manage/Home/View\\Index\\tips.html',
      1 => 1470098954,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '1052557a303983fe150-91491415',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'tips' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_57a303984501e',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_57a303984501e')) {function content_57a303984501e($_smarty_tpl) {?><!DOCTYPE html>
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
        <span class="login-success"><?php echo $_smarty_tpl->tpl_vars['tips']->value;?>
<br><span id="showtimes"></span><span>秒后跳转</span></span>
        <span class="span-input">© 博渊堂 · 版权所有 2013-2018</span>
    </div>
</body>
<script type="text/javascript">
//设定倒数秒数
var t = 5;
//显示倒数秒数
function showTime() {
    t -= 1;
    document.getElementById('showtimes').innerHTML = t;
    if (t == 0) {
        location.href = 'login.html';
    }
    //每秒执行一次,showTime()
    setTimeout("showTime()", 1000);
}
//执行showTime()
showTime();
</script>

</html>
<?php }} ?>