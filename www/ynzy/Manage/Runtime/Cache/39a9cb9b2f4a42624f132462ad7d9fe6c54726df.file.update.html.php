<?php /* Smarty version Smarty-3.1.6, created on 2016-08-06 21:29:23
         compiled from "F:/WWW/ynzy/Manage/Admin/View\Manage\update.html" */ ?>
<?php /*%%SmartyHeaderCode:2906857a5e633dfb952-66292680%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '39a9cb9b2f4a42624f132462ad7d9fe6c54726df' => 
    array (
      0 => 'F:/WWW/ynzy/Manage/Admin/View\\Manage\\update.html',
      1 => 1470233036,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '2906857a5e633dfb952-66292680',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'tips' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_57a5e633ef557',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_57a5e633ef557')) {function content_57a5e633ef557($_smarty_tpl) {?><!DOCTYPE html>
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
        <div class="all-pages">权限设置 > 管理员表 > 添加管理员&nbsp&nbsp&nbsp&nbsp&nbsp</div>
        <div class="table-div">
            <form action="<?php echo @__SELF__;?>
" method="post" enctype="multipart/form-data">
                <div class="up-div">
                    <div class="div-header">
                        添加店管理员
                        <a href="<?php echo @__CONTROLLER__;?>
/admin"><span class="small-line"><i class="icon-remove remove"></i></span></a>
                    </div>
                    <div class="up-div-1">
                        <label>管理员账号&nbsp&nbsp<span class="warning"><?php echo $_smarty_tpl->tpl_vars['tips']->value['admin_name'];?>
</span></label>
                        <input type="text" name="admin_name">
                    </div>
                    <div class="up-div-1">
                        <label>管理员手机号&nbsp&nbsp<span class="warning"><?php echo $_smarty_tpl->tpl_vars['tips']->value['admin_tel'];?>
</span></label>
                        <input type="text" name="admin_tel">
                    </div>
                    <div class="up-div-1">
                        <label>密码&nbsp&nbsp<span class="warning"><?php echo $_smarty_tpl->tpl_vars['tips']->value['admin_password'];?>
</span></label>
                        <input type="password" name="admin_password">
                    </div>
                    <div class="up-div-1">
                        <label>重复密码&nbsp&nbsp<span class="warning"><?php echo $_smarty_tpl->tpl_vars['tips']->value['admin_password2'];?>
</span></label>
                        <input type="password" name="admin_password2">
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