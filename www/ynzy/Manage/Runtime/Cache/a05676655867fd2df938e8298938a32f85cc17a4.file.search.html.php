<?php /* Smarty version Smarty-3.1.6, created on 2016-06-22 21:04:23
         compiled from "E:/wamp/www/ynzy/Manage/Home/View\Shop\search.html" */ ?>
<?php /*%%SmartyHeaderCode:27520576a8847d5e968-76152740%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'a05676655867fd2df938e8298938a32f85cc17a4' => 
    array (
      0 => 'E:/wamp/www/ynzy/Manage/Home/View\\Shop\\search.html',
      1 => 1466600652,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '27520576a8847d5e968-76152740',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_576a88480b088',
  'variables' => 
  array (
    'info' => 0,
    'v' => 0,
    'pagelist' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_576a88480b088')) {function content_576a88480b088($_smarty_tpl) {?><!DOCTYPE html>
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
		<div class="all-pages">店铺系统 > 店铺管理&nbsp&nbsp&nbsp&nbsp&nbsp
		
		</div>
		<div class="search-form-div">
		<form action="<?php echo @__CONTROLLER__;?>
/search" method="get" enctype="multipart/form-data">
			<ul class="select">
				 <li>
					 <input type="text" name="shop_id" class="search" placeholder="序号">
				 </li>
				 <li>
					 <input type="text" name="shop_name" class="search" placeholder="店铺名称">
				 </li>
				 <li>
					 <input type="text" name="shop_tel" class="search" placeholder="手机号">
					 <input type="submit" name="search-submit" class="search-submit my-btn" value="查询">
				 </li>
				 <button class="excel-btn my-btn">导出表格</button>
			</ul>
		</form>
		</div>
	<div class="table-div">
	<form action="<?php echo @__SELF__;?>
" method="post" enctype="multipart/form-data">
	<table class="table" border=1 >
		<tr>
			<th>序号</th>
			<th>分组</th>
			<th>店铺名称</th>
			<th>手机</th>
			<th>烟草证编号</th>
			<th>累计积分</th>
			<th>剩余积分</th>
			<th>创建日期</th>
			<th colspan=2>操作</th>
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
		<tr class="<?php if (!(1 & $_smarty_tpl->tpl_vars['v']->iteration)){?>change-color<?php }else{ ?><?php }?>" id="shop_<?php echo $_smarty_tpl->tpl_vars['v']->value['shop_id'];?>
" >
			<td class="text-center width50 "><?php echo $_smarty_tpl->tpl_vars['v']->value['shop_id'];?>
</td>
			<td class="text-center"><?php echo $_smarty_tpl->tpl_vars['v']->value['shop_group'];?>
</td>
			<td class="padding-left10"><?php echo $_smarty_tpl->tpl_vars['v']->value['shop_name'];?>
</td>
			<td class="padding-left10"><?php echo $_smarty_tpl->tpl_vars['v']->value['shop_tel'];?>
</td>
			<td class="padding-left10"><?php echo $_smarty_tpl->tpl_vars['v']->value['shop_number'];?>
</td>
			<td class="text-center"><?php echo $_smarty_tpl->tpl_vars['v']->value['shop_total_scores'];?>
</td>
			<td class="text-center"><?php echo $_smarty_tpl->tpl_vars['v']->value['shop_left_scores'];?>
</td>
			<td class="text-center"><?php echo $_smarty_tpl->tpl_vars['v']->value['shop_time'];?>
</td>
			<td class="text-center">
			<a href="<?php echo @__CONTROLLER__;?>
/del?shop_id=<?php echo $_smarty_tpl->tpl_vars['v']->value['shop_id'];?>
">删除</a>
			</td>
			<td class="text-center"><a href="<?php echo @__CONTROLLER__;?>
/change?shop_id=<?php echo $_smarty_tpl->tpl_vars['v']->value['shop_id'];?>
">修改</a></td>
		</tr>
		<?php } ?>
	</table>
	<a class="add-shop my-btn" href="update.html">添加店铺</a>
	</form>
	<div class="bottom-page">
		<ul class="page-ul">
			<?php echo $_smarty_tpl->tpl_vars['pagelist']->value;?>

		</ul>
	</div>
	</div>

	<div class="delete">
		<p>确认删除金华潮王烟酒店所有信息吗？</p>
		<button class="my-btn delete-confirm">确认</button>
		<button class="my-btn delete-cancel">取消</button>
	</div>
</div>
</body>
</html><?php }} ?>