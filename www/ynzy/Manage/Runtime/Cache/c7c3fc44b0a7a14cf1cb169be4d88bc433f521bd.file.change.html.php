<?php /* Smarty version Smarty-3.1.6, created on 2016-06-22 22:35:40
         compiled from "E:/wamp/www/ynzy/Manage/Home/View\Shop\change.html" */ ?>
<?php /*%%SmartyHeaderCode:1352357692c8209cd75-12195055%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'c7c3fc44b0a7a14cf1cb169be4d88bc433f521bd' => 
    array (
      0 => 'E:/wamp/www/ynzy/Manage/Home/View\\Shop\\change.html',
      1 => 1466605360,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '1352357692c8209cd75-12195055',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_57692c8223ed5',
  'variables' => 
  array (
    'info' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_57692c8223ed5')) {function content_57692c8223ed5($_smarty_tpl) {?><?php if (!is_callable('smarty_modifier_date_format')) include 'E:\\wamp\\www\\ynzy\\ThinkPHP\\Library\\Vendor\\Smarty\\plugins\\modifier.date_format.php';
?><!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <title>大美云南管理后台</title>
    <link rel="stylesheet" type="text/css" href="<?php echo @CSS_URL;?>
basic.css">
    <script type="text/javascript" src="<?php echo @JS_URL;?>
jquery-2.2.3.min.js"></script>
    <script type="text/javascript" src="<?php echo @JS_URL;?>
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
		<input type="hidden" name="shop_id" value="<?php echo $_smarty_tpl->tpl_vars['info']->value['shop_id'];?>
"/>
		<table class="table update-table" border=1 >
			<tr>
				<th>分组</th>
				<td>
				<select name="shop_group" value="<?php echo $_smarty_tpl->tpl_vars['info']->value['shop_group'];?>
">
					<option value="杭州">杭州</option>
					<option value="温州">温州</option>
					<option value="金华">金华</option>
				</select>
				</td>
			</tr>
			<tr>
				<th>店铺名称</th>
				<td>
				<input type="text" name="shop_name" value="<?php echo $_smarty_tpl->tpl_vars['info']->value['shop_name'];?>
">
				</td>
			</tr>
			<tr>
				<th>手机号</th>
				<td>
				<input type="text" name="shop_tel" value="<?php echo $_smarty_tpl->tpl_vars['info']->value['shop_tel'];?>
">
				</td>
			</tr>
			<tr>
				<th>烟草证编号</th>
				<td>
				<input type="text" name="shop_number" value="<?php echo $_smarty_tpl->tpl_vars['info']->value['shop_number'];?>
">
				</td>
			</tr>
			<tr>
				<th>累计积分</th>
				<td>
				<input type="text" name="shop_total_scores" value="<?php echo $_smarty_tpl->tpl_vars['info']->value['shop_total_scores'];?>
">
				</td>
			</tr>
			<tr>
				<th>剩余积分</th>
				<td>
				<input type="text" name="shop_left_scores" value="<?php echo $_smarty_tpl->tpl_vars['info']->value['shop_left_scores'];?>
">
				</td>
			</tr>
			<tr>
				<th>店铺地址</th>
				<td>
				<input type="text" name="shop_address" value="<?php echo $_smarty_tpl->tpl_vars['info']->value['shop_address'];?>
">
				</td>
			</tr>
			<tr>
				<th>备注</th>
				<td>
				<input type="text" name="shop_tips" value="<?php echo $_smarty_tpl->tpl_vars['info']->value['shop_tips'];?>
">
				<input type="hidden" name="shop_time" value="<?php echo smarty_modifier_date_format(time(),'%Y-%m-%d');?>
 ">
				</td>
			</tr>
		</table>
			<div class="update-submit">
				<input type="submit" name="update_submit" class="my-btn" value="提交">
				<button class="my-btn">取消</button>
			</div>
		</div>
	</form>
</div>
</body>
</html><?php }} ?>