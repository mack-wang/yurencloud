<?php /* Smarty version Smarty-3.1.6, created on 2016-07-02 23:23:05
         compiled from "E:/wamp/www/ynzy/Manage/Admin/View\Shop\update.html" */ ?>
<?php /*%%SmartyHeaderCode:2149576d3347412a28-04690903%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'ae0c40bb3c43a518b4a73f2de1d4360c310457cb' => 
    array (
      0 => 'E:/wamp/www/ynzy/Manage/Admin/View\\Shop\\update.html',
      1 => 1467472978,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '2149576d3347412a28-04690903',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_576d33475c058',
  'variables' => 
  array (
    'info' => 0,
    'v' => 0,
    'tips' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_576d33475c058')) {function content_576d33475c058($_smarty_tpl) {?><?php if (!is_callable('smarty_modifier_date_format')) include 'E:\\wamp\\www\\ynzy\\ThinkPHP\\Library\\Vendor\\Smarty\\plugins\\modifier.date_format.php';
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
		<div class="all-pages">店铺系统 > 店铺管理 > 添加店铺&nbsp&nbsp&nbsp&nbsp&nbsp
		</div>
		<a href="<?php echo @__CONTROLLER__;?>
/shop" class="back-shop-manage my-btn">返回</a>
	<div class="table-div">
	<form action="<?php echo @__SELF__;?>
" method="post" enctype="multipart/form-data">
		<table class="table update-table" border=1 >
			<tr>
				<th>分组</th>
				<td>
				<select name="shop_group">
					<?php  $_smarty_tpl->tpl_vars['v'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['v']->_loop = false;
 $_smarty_tpl->tpl_vars['k'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['info']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
foreach ($_from as $_smarty_tpl->tpl_vars['v']->key => $_smarty_tpl->tpl_vars['v']->value){
$_smarty_tpl->tpl_vars['v']->_loop = true;
 $_smarty_tpl->tpl_vars['k']->value = $_smarty_tpl->tpl_vars['v']->key;
?>
					<option value="<?php echo $_smarty_tpl->tpl_vars['v']->value['group_name'];?>
" ><?php echo $_smarty_tpl->tpl_vars['v']->value['group_name'];?>
</option>
					<?php } ?>
				</select>
				</td>
			</tr>
			<tr>
				<th class="percent20">店铺名称</th>
				<td>
				<input type="text" name="shop_name" placeholder="<?php echo $_smarty_tpl->tpl_vars['tips']->value['shop_name'];?>
">
				</td>
			</tr>
			<tr>
				<th>手机号</th>
				<td>
				<input type="text" name="shop_tel" placeholder="<?php echo $_smarty_tpl->tpl_vars['tips']->value['shop_tel'];?>
">
				</td>
			</tr>
			<tr>
				<th>烟草证编号</th>
				<td>
				<input type="text" name="shop_number">
				</td>
			</tr>
			<tr>
				<th>累计积分</th>
				<td>
				<input type="text" name="shop_total_scores">
				</td>
			</tr>
			<tr>
				<th>剩余积分</th>
				<td>
				<input type="text" name="shop_left_scores">
				</td>
			</tr>
			<tr>
				<th>店铺地址</th>
				<td>
				<input type="text" name="shop_address">
				</td>
			</tr>
			<tr>
				<th>备注</th>
				<td>
				<input type="text" name="shop_tips">
				<input type="hidden" name="shop_time" value="<?php echo smarty_modifier_date_format(time(),'%Y-%m-%d');?>
 ">
				</td>
			</tr>
		</table>
			<div class="update-submit">
				<input type="submit" name="update_submit" class="my-btn" value="提交">
				<a href="<?php echo @__CONTROLLER__;?>
/shop" class="my-btn">取消</a>
			</div>
		</div>
	</form>
</div>
</body>
</html>
<?php }} ?>