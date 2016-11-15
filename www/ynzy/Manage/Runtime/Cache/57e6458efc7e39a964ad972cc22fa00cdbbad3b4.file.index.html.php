<?php /* Smarty version Smarty-3.1.6, created on 2016-07-01 01:49:38
         compiled from "E:/wamp/www/ynzy/Manage/Admin/View\Index\index.html" */ ?>
<?php /*%%SmartyHeaderCode:23250576be51ba24f74-80515755%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '57e6458efc7e39a964ad972cc22fa00cdbbad3b4' => 
    array (
      0 => 'E:/wamp/www/ynzy/Manage/Admin/View\\Index\\index.html',
      1 => 1466904026,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '23250576be51ba24f74-80515755',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_576be51babd51',
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_576be51babd51')) {function content_576be51babd51($_smarty_tpl) {?><!DOCTYPE html>
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
<frameset border=0 framespacing=0 rows="90, *" frameborder=0>
        <frame name=top src="top.html" frameborder=0 noresize scrolling=no>
        <frameset cols="279, *">
                <frame name=left src="left.html" frameborder=0 noresize scrolling=yes />
                <frame name=right src="right.html" frameborder=0 noresize scrolling=yes />
        </frameset>
</frameset>
<noframes>
</noframes>
</html>
<?php }} ?>