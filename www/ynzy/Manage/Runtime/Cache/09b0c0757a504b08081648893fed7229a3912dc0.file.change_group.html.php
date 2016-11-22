<?php /* Smarty version Smarty-3.1.6, created on 2016-06-26 20:09:41
         compiled from "E:/wamp/www/ynzy/Manage/Admin/View\Auth\change_group.html" */ ?>
<?php /*%%SmartyHeaderCode:12481576f886fab1e51-10406820%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '09b0c0757a504b08081648893fed7229a3912dc0' => 
    array (
      0 => 'E:/wamp/www/ynzy/Manage/Admin/View\\Auth\\change_group.html',
      1 => 1466940366,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '12481576f886fab1e51-10406820',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_576f886fbfa0a',
  'variables' => 
  array (
    'info' => 0,
    'tips' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_576f886fbfa0a')) {function content_576f886fbfa0a($_smarty_tpl) {?><!DOCTYPE html>
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
    <div class="all-pages">权限设置 > 管理员表 > 添加分组&nbsp&nbsp&nbsp&nbsp&nbsp</div>
    <a href="<?php echo @__CONTROLLER__;?>
/group" class="back-shop-manage my-btn">返回</a>
  <div class="table-div">

  <form action="<?php echo @__SELF__;?>
" method="post" enctype="multipart/form-data">
    <input type="hidden" name="group_id" value="<?php echo $_smarty_tpl->tpl_vars['info']->value['group_id'];?>
"/>
    <table class="table update-table" border=1 >
      <tr>
        <th>分组名称</th>
        <td>
        <input type="text" name="group_name" placeholder="<?php echo $_smarty_tpl->tpl_vars['info']->value['group_name'];?>
" value="<?php echo $_smarty_tpl->tpl_vars['tips']->value['group_name'];?>
">
        </td>
      </tr>
    </table>
      <div class="update-submit">
        <input type="submit" name="update_submit" class="my-btn" value="提交">
        <a href="<?php echo @__CONTROLLER__;?>
/group" class="my-btn">取消</a>
      </div>
    </div>
  </form>
</div>
</body>
</html>
<?php }} ?>