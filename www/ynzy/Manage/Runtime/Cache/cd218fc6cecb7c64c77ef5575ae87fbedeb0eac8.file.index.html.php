<?php /* Smarty version Smarty-3.1.6, created on 2016-06-29 17:16:45
         compiled from "/var/www/html/ynzy/Manage/Admin/View/Index/index.html" */ ?>
<?php /*%%SmartyHeaderCode:1422356195577391fda4ce96-99127039%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'cd218fc6cecb7c64c77ef5575ae87fbedeb0eac8' => 
    array (
      0 => '/var/www/html/ynzy/Manage/Admin/View/Index/index.html',
      1 => 1466904026,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '1422356195577391fda4ce96-99127039',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_577391fda96ba',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_577391fda96ba')) {function content_577391fda96ba($_smarty_tpl) {?><!DOCTYPE html>
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