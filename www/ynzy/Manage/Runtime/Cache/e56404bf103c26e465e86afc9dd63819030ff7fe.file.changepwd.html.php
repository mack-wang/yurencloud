<?php /* Smarty version Smarty-3.1.6, created on 2016-08-07 20:13:50
         compiled from "F:/WWW/ynzy/Manage/Admin/View\Manage\changepwd.html" */ ?>
<?php /*%%SmartyHeaderCode:693957a5df2c174288-99173442%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'e56404bf103c26e465e86afc9dd63819030ff7fe' => 
    array (
      0 => 'F:/WWW/ynzy/Manage/Admin/View\\Manage\\changepwd.html',
      1 => 1470498921,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '693957a5df2c174288-99173442',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_57a5df2c41dc5',
  'variables' => 
  array (
    'tip' => 0,
    'tips' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_57a5df2c41dc5')) {function content_57a5df2c41dc5($_smarty_tpl) {?><!DOCTYPE html>
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
        <div class="all-pages">修改密码</div>
        <div class="table-div">
            <form action="<?php echo @__SELF__;?>
" method="post" enctype="multipart/form-data">
                <div class="up-div">
                    <div class="div-header">
                        修改密码
                        <a href="<?php echo @__MODULE__;?>
/Index/right"><span class="small-line"><i class="icon-remove remove"></i></span></a>
                    </div>
                    <div class="up-div-1">
                        <label>管理员账号&nbsp&nbsp</label>
                        <input type="text" placeholder="<?php echo $_SESSION['admin_name'];?>
">
                        <input type="hidden" name="admin_id" value="<?php echo $_SESSION['admin_id'];?>
">
                    </div>
                    <div class="up-div-1">
                        <label>原密码&nbsp&nbsp<span class="warning"><?php echo $_smarty_tpl->tpl_vars['tip']->value;?>
</span></label>
                        <input type="password" name="password">
                    </div>
                    <div class="up-div-1">
                        <label>新密码&nbsp&nbsp<span class="warning"><?php echo $_smarty_tpl->tpl_vars['tips']->value['admin_password'];?>
</span></label>
                        <input type="password" name="admin_password">
                    </div>
                    <div class="up-div-1">
                        <label>重复新密码&nbsp&nbsp<span class="warning"><?php echo $_smarty_tpl->tpl_vars['tips']->value['admin_password2'];?>
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