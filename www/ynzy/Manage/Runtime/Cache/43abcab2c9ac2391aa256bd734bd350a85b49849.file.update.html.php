<?php /* Smarty version Smarty-3.1.6, created on 2016-08-03 15:08:29
         compiled from "D:/phpStudy/WWW/ynzy/Manage/Admin/View\Manage\update.html" */ ?>
<?php /*%%SmartyHeaderCode:28736577a0861ef96c1-82685660%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '43abcab2c9ac2391aa256bd734bd350a85b49849' => 
    array (
      0 => 'D:/phpStudy/WWW/ynzy/Manage/Admin/View\\Manage\\update.html',
      1 => 1470207755,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '28736577a0861ef96c1-82685660',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_577a086202c5c',
  'variables' => 
  array (
    'tips' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_577a086202c5c')) {function content_577a086202c5c($_smarty_tpl) {?><!DOCTYPE html>
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