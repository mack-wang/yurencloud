<?php /* Smarty version Smarty-3.1.6, created on 2016-06-26 19:56:11
         compiled from "E:/wamp/www/ynzy/Manage/Admin/View\Auth\updategroup.html" */ ?>
<?php /*%%SmartyHeaderCode:20434576f818cdb9d57-18378223%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'c3feea7bc490aba02568329e1523d718aefe48aa' => 
    array (
      0 => 'E:/wamp/www/ynzy/Manage/Admin/View\\Auth\\updategroup.html',
      1 => 1466942165,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '20434576f818cdb9d57-18378223',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_576f818ceee71',
  'variables' => 
  array (
    'tips' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_576f818ceee71')) {function content_576f818ceee71($_smarty_tpl) {?><!DOCTYPE html>
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
    <div class="all-pages">权限设置 > 分组列表 > 添加分组&nbsp&nbsp&nbsp&nbsp&nbsp</div>
    <a href="<?php echo @__CONTROLLER__;?>
/group" class="back-shop-manage my-btn">返回</a>
  <div class="table-div">

  <form action="<?php echo @__SELF__;?>
" method="post" enctype="multipart/form-data">
    <table class="table update-table" border=1 >
      <tr>
        <th>分组名称</th>
        <td>
        <input type="text" name="group_name" placeholder="<?php echo $_smarty_tpl->tpl_vars['tips']->value['group_name'];?>
">
        </td>
      </tr>
    </table>
      <div class="update-submit">
        <input type="submit" name="update_submit" class="my-btn" value="提交">
        <a href="<?php echo @__CONTROLLER__;?>
/group" class="my-btn">取消</a>
      </div>
  </form>
</div>
</body>
</html>
<?php }} ?>