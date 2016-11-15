<?php /* Smarty version Smarty-3.1.6, created on 2016-07-02 08:32:40
         compiled from "E:/wamp/www/ynzy/Manage/Home/View\Index\index.html" */ ?>
<?php /*%%SmartyHeaderCode:12201575be681534992-18748064%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'a56559c05439d3a71a092f23f845273e7b47de2c' => 
    array (
      0 => 'E:/wamp/www/ynzy/Manage/Home/View\\Index\\index.html',
      1 => 1466673838,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '12201575be681534992-18748064',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_575be6816942e',
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_575be6816942e')) {function content_575be6816942e($_smarty_tpl) {?><!DOCTYPE html>
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
<frameset border=0 framespacing=0 rows="90, *" frameborder=0>
        <frame name=top src="top.html" frameborder=0 noresize scrolling=no>
        <frameset cols="226, *">
                <frame name=left src="left.html" frameborder=0 noresize />
                <frame name=right src="right.html" frameborder=0 noresize scrolling=yes />
        </frameset>
</frameset>
<noframes>
</noframes>
</html><?php }} ?>