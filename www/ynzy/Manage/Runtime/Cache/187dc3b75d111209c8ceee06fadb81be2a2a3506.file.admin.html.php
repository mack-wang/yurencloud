<?php /* Smarty version Smarty-3.1.6, created on 2016-07-01 23:29:53
         compiled from "E:/wamp/www/ynzy/Manage/Admin/View\Manage\admin.html" */ ?>
<?php /*%%SmartyHeaderCode:32004576e399f84d545-59479052%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '187dc3b75d111209c8ceee06fadb81be2a2a3506' => 
    array (
      0 => 'E:/wamp/www/ynzy/Manage/Admin/View\\Manage\\admin.html',
      1 => 1467107266,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '32004576e399f84d545-59479052',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_576e399fb2fa7',
  'variables' => 
  array (
    'suiji' => 0,
    'info' => 0,
    'v' => 0,
    'pagelist' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_576e399fb2fa7')) {function content_576e399fb2fa7($_smarty_tpl) {?><!DOCTYPE html>
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
<?php echo $_smarty_tpl->tpl_vars['suiji']->value;?>

<div class="container">
    <div class="all-pages">权限设置 > 管理员表&nbsp&nbsp&nbsp&nbsp&nbsp
    </div>
    <div class="search-form-div">
    </div>
  <div class="table-div">
  <form action="<?php echo @__SELF__;?>
" method="post" enctype="multipart/form-data">
  <table class="table admin-table" border=1 >
    <tr>
      <th>序号</th>
      <th>管理员账号</th>
      <th>手机</th>
      <th>创建日期</th>
      <th>操作</th>
    </tr>
    <?php  $_smarty_tpl->tpl_vars['v'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['v']->_loop = false;
 $_smarty_tpl->tpl_vars['k'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['info']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
 $_smarty_tpl->tpl_vars['v']->iteration=0;
foreach ($_from as $_smarty_tpl->tpl_vars['v']->key => $_smarty_tpl->tpl_vars['v']->value){
$_smarty_tpl->tpl_vars['v']->_loop = true;
 $_smarty_tpl->tpl_vars['k']->value = $_smarty_tpl->tpl_vars['v']->key;
 $_smarty_tpl->tpl_vars['v']->iteration++;
?>
    <tr class="<?php if (!(1 & $_smarty_tpl->tpl_vars['v']->iteration)){?>change-color<?php }else{ ?><?php }?>" id="admin_<?php echo $_smarty_tpl->tpl_vars['v']->value['admin_id'];?>
" >
      <td class="text-center width50 "><?php echo $_smarty_tpl->tpl_vars['v']->value['admin_id'];?>
</td>
      <td class="padding-left10"><?php echo $_smarty_tpl->tpl_vars['v']->value['admin_name'];?>
</td>
      <td class="padding-left10"><?php echo $_smarty_tpl->tpl_vars['v']->value['admin_tel'];?>
</td>
      <td class="text-center"><?php echo $_smarty_tpl->tpl_vars['v']->value['admin_time'];?>
</td>
      <td class="text-center">
      <a href="<?php echo @__CONTROLLER__;?>
/del?admin_id=<?php echo $_smarty_tpl->tpl_vars['v']->value['admin_id'];?>
">删除</a>
      </td>
    </tr>
    <?php } ?>
  </table>
  <a class="add-shop my-btn add-admin" href="<?php echo @__CONTROLLER__;?>
/update">添加管理员</a>
  </form>
  <div class="bottom-page">
    <ul class="page-ul">
      <?php echo $_smarty_tpl->tpl_vars['pagelist']->value;?>

    </ul>
    <form action="<?php echo @__SELF__;?>
" method="get" enctype="multipart/form-data" class="page-form">
      <input type="text" name="per" class="pages" maxlength="2">&nbsp条/页
      <input type="submit" name="" class="pages-submit" value="确定">
    </form>
  </div>
  </div>
</div>
</body>
</html>
<?php }} ?>