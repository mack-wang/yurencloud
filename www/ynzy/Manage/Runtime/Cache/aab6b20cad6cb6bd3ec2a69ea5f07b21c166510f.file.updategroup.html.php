<?php /* Smarty version Smarty-3.1.6, created on 2016-08-06 22:47:05
         compiled from "F:/WWW/ynzy/Manage/Admin/View\Auth\updategroup.html" */ ?>
<?php /*%%SmartyHeaderCode:735257a5f869dfc6a5-92035242%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'aab6b20cad6cb6bd3ec2a69ea5f07b21c166510f' => 
    array (
      0 => 'F:/WWW/ynzy/Manage/Admin/View\\Auth\\updategroup.html',
      1 => 1470233036,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '735257a5f869dfc6a5-92035242',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'tips' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_57a5f869e88ce',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_57a5f869e88ce')) {function content_57a5f869e88ce($_smarty_tpl) {?><!DOCTYPE html>
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
    <div class="container">
        <div class="all-pages">权限设置 > 分组列表 > 添加分组&nbsp&nbsp&nbsp&nbsp&nbsp</div>
        <div class="table-div">
            <form action="<?php echo @__SELF__;?>
" method="post" enctype="multipart/form-data">
                <div class="up-div">
                    <div class="div-header">
                        添加分组
                        <a href="<?php echo @__CONTROLLER__;?>
/group"><span class="small-line"><i class="icon-remove remove"></i></span></a>
                    </div>
                    <div class="up-div-1">
                        <label>分组名称&nbsp&nbsp<span class="warning"><?php echo $_smarty_tpl->tpl_vars['tips']->value['group_name'];?>
</span></label>
                        <input type="text" name="group_name">
                    </div>
                    <center>
                        <input type="submit" name="update_submit" class="my-btn up-div-btn" value="提交">
                    </center>
                </div>
            </form>
        </div>
</body>

</html>
<?php }} ?>