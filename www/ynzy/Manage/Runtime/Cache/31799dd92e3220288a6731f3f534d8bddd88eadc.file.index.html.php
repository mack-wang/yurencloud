<?php /* Smarty version Smarty-3.1.6, created on 2016-08-02 08:49:57
         compiled from "D:/phpStudy/WWW/ynzy/Manage/Admin/View\Index\index.html" */ ?>
<?php /*%%SmartyHeaderCode:6273576baafa967e86-14031133%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '31799dd92e3220288a6731f3f534d8bddd88eadc' => 
    array (
      0 => 'D:/phpStudy/WWW/ynzy/Manage/Admin/View\\Index\\index.html',
      1 => 1470098954,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '6273576baafa967e86-14031133',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_576baafa9ae39',
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_576baafa9ae39')) {function content_576baafa9ae39($_smarty_tpl) {?><!DOCTYPE html>
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