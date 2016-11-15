<?php /* Smarty version Smarty-3.1.6, created on 2016-06-22 22:19:26
         compiled from "E:/wamp/www/ynzy/Manage/Home/View\Shop\update.html" */ ?>
<?php /*%%SmartyHeaderCode:26757668fe00ec838-42348556%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '2eeedbc73dd064ef1ee18ae3156923bbf4ead7cc' => 
    array (
      0 => 'E:/wamp/www/ynzy/Manage/Home/View\\Shop\\update.html',
      1 => 1466605161,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '26757668fe00ec838-42348556',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_57668fe0230c0',
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_57668fe0230c0')) {function content_57668fe0230c0($_smarty_tpl) {?><?php if (!is_callable('smarty_modifier_date_format')) include 'E:\\wamp\\www\\ynzy\\ThinkPHP\\Library\\Vendor\\Smarty\\plugins\\modifier.date_format.php';
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
		<table class="table update-table" border=1 >
			<tr>
				<th>分组</th>
				<td>
				<select name="shop_group">
					<option value="杭州" >杭州</option>
					<option value="温州" selected="selected">温州</option>
					<option value="金华">金华</option>
				</select>
				</td>
			</tr>
			<tr>
				<th>店铺名称</th>
				<td>
				<input type="text" name="shop_name">
				</td>
			</tr>
			<tr>
				<th>手机号</th>
				<td>
				<input type="text" name="shop_tel">
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
				<button class="my-btn">取消</button>
			</div>
		</div>
	</form>
</div>
</body>
</html><?php }} ?>