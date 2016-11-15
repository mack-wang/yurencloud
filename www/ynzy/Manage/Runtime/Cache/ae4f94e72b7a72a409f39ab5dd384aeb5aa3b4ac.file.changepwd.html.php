<?php /* Smarty version Smarty-3.1.6, created on 2016-07-02 09:34:25
         compiled from "E:/wamp/www/ynzy/Manage/Admin/View\Manage\changepwd.html" */ ?>
<?php /*%%SmartyHeaderCode:18606576e34868de0a8-43359050%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'ae4f94e72b7a72a409f39ab5dd384aeb5aa3b4ac' => 
    array (
      0 => 'E:/wamp/www/ynzy/Manage/Admin/View\\Manage\\changepwd.html',
      1 => 1466934132,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '18606576e34868de0a8-43359050',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_576e3486b4f13',
  'variables' => 
  array (
    'tips' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_576e3486b4f13')) {function content_576e3486b4f13($_smarty_tpl) {?><!DOCTYPE html>
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
<body>
<div class="container">
    <div class="all-pages">修改密码</div>
    <a href="<?php echo @__CONTROLLER__;?>
/admin" class="back-shop-manage my-btn">返回</a>
  <div class="table-div">
  <form action="<?php echo @__SELF__;?>
" method="post" enctype="multipart/form-data">
    <input type="hidden" name="admin_id" value="<?php echo $_SESSION['admin_id'];?>
"/>
    <table class="table update-table" border=1 >
      <tr>
        <th>管理员账号</th>
        <td>
        <?php echo $_SESSION['admin_name'];?>

        </td>
      </tr>
      <tr>
        <th>原密码</th>
        <td>
        <input type="text" name="password">
        </td>
      </tr>
      <tr>
        <th>新密码</th>
        <td>
        <input type="text" name="admin_password" placeholder="<?php echo $_smarty_tpl->tpl_vars['tips']->value['admin_password'];?>
">
        </td>
      </tr>
      <tr>
        <th>重复新密码</th>
        <td>
        <input type="text" name="admin_password2" placeholder="<?php echo $_smarty_tpl->tpl_vars['tips']->value['admin_password2'];?>
">
        </td>
      </tr>
    </table>
      <div class="update-submit">
        <input type="submit" name="update_submit" class="my-btn" value="提交">
        <a href="<?php echo @__CONTROLLER__;?>
/admin" class="my-btn">取消</a>
      </div>
    </div>
  </form>
</div>
</body>
</html>
<?php }} ?>