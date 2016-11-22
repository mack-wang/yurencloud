<?php /* Smarty version Smarty-3.1.6, created on 2016-06-25 18:48:32
         compiled from "E:/wamp/www/ynzy/Manage/Admin/View\Manage\update.html" */ ?>
<?php /*%%SmartyHeaderCode:4572576e53790e9d40-06379674%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '0f67e523a031f65136659e3c4dc090d0cd542c88' => 
    array (
      0 => 'E:/wamp/www/ynzy/Manage/Admin/View\\Manage\\update.html',
      1 => 1466851342,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '4572576e53790e9d40-06379674',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_576e537926c92',
  'variables' => 
  array (
    'info' => 0,
    'tips' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_576e537926c92')) {function content_576e537926c92($_smarty_tpl) {?><?php if (!is_callable('smarty_modifier_date_format')) include 'E:\\wamp\\www\\ynzy\\ThinkPHP\\Library\\Vendor\\Smarty\\plugins\\modifier.date_format.php';
?><!DOCTYPE html>
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
    <div class="all-pages">权限设置 > 管理员表 > 添加管理员&nbsp&nbsp&nbsp&nbsp&nbsp</div>
    <a href="<?php echo @__CONTROLLER__;?>
/admin" class="back-shop-manage my-btn">返回</a>
  <div class="table-div">

  <form action="<?php echo @__SELF__;?>
" method="post" enctype="multipart/form-data">
    <input type="hidden" name="admin_id" value="<?php echo $_smarty_tpl->tpl_vars['info']->value['admin_id'];?>
"/>
    <table class="table update-table" border=1 >
      <tr>
        <th>管理员账号</th>
        <td>
        <input type="text" name="admin_name" placeholder="<?php echo $_smarty_tpl->tpl_vars['tips']->value['admin_name'];?>
">
        </td>
      </tr>
      <tr>
        <th>管理员手机号</th>
        <td>
        <input type="text" name="admin_tel"" placeholder="<?php echo $_smarty_tpl->tpl_vars['tips']->value['admin_tel'];?>
">
        </td>
      </tr>
      <tr>
        <th>密码</th>
        <td>
        <input type="text" name="admin_password" placeholder="<?php echo $_smarty_tpl->tpl_vars['tips']->value['admin_password'];?>
">
        </td>
      </tr>
      <tr>
        <th>重复密码</th>
        <td>
        <input type="text" name="admin_password2" placeholder="<?php echo $_smarty_tpl->tpl_vars['tips']->value['admin_password2'];?>
">
        </td>
      </tr>
    </table>
    <input type="hidden" name="admin_time" value="<?php echo smarty_modifier_date_format(time(),'%Y-%m-%d');?>
 ">
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