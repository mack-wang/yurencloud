<?php /* Smarty version Smarty-3.1.6, created on 2016-06-22 23:14:06
         compiled from "E:/wamp/www/ynzy/Manage/Home/View\Member\member.html" */ ?>
<?php /*%%SmartyHeaderCode:7592576aab3e8c6f65-24164349%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '4bf60f24dc7f4f23006f355fb57eacc626530cd5' => 
    array (
      0 => 'E:/wamp/www/ynzy/Manage/Home/View\\Member\\member.html',
      1 => 1466608213,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '7592576aab3e8c6f65-24164349',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'list' => 0,
    'info' => 0,
    'v' => 0,
    'pagelist' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_576aab3eb302f',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_576aab3eb302f')) {function content_576aab3eb302f($_smarty_tpl) {?><!DOCTYPE html>
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
<?php echo $_smarty_tpl->tpl_vars['list']->value;?>

<div class="container">
		<div class="all-pages">店铺系统 > 会员管理&nbsp&nbsp&nbsp&nbsp&nbsp
		
		</div>
		<div class="search-form-div">
		<form action="<?php echo @__SELF__;?>
" method="get" enctype="multipart/form-data">
			<ul class="select">
				 <li>
					 <input type="text" name="member_id" class="search" placeholder="序号">
				 </li>
				 <li>
					 <input type="text" name="member_name" class="search" placeholder="昵称">
				 </li>
				 <li>
					 <input type="text" name="member_tel" class="search" placeholder="手机号">
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
			<th>昵称</th>
			<th>头像</th>
			<th>手机号</th>
			<th>累计积分</th>
			<th>剩余积分</th>
			<th>注册日期</th>
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
		<tr class="<?php if (!(1 & $_smarty_tpl->tpl_vars['v']->iteration)){?>change-color<?php }else{ ?><?php }?>" id="member_<?php echo $_smarty_tpl->tpl_vars['v']->value['member_id'];?>
" >
			<td class="text-center width50 "><?php echo $_smarty_tpl->tpl_vars['v']->value['member_id'];?>
</td>
			<td class="text-center"><?php echo $_smarty_tpl->tpl_vars['v']->value['member_group'];?>
</td>
			<td class="padding-left10"><?php echo $_smarty_tpl->tpl_vars['v']->value['member_name'];?>
</td>
			<td class="padding-left10"><?php echo $_smarty_tpl->tpl_vars['v']->value['member_nicname'];?>
</td>
			<td class="padding-left10"><?php echo $_smarty_tpl->tpl_vars['v']->value['member_pic'];?>
</td>
			<td class="padding-left10"><?php echo $_smarty_tpl->tpl_vars['v']->value['member_tel'];?>
</td>
			<td class="text-center"><?php echo $_smarty_tpl->tpl_vars['v']->value['member_total_scores'];?>
</td>
			<td class="text-center"><?php echo $_smarty_tpl->tpl_vars['v']->value['member_left_scores'];?>
</td>
			<td class="text-center"><?php echo $_smarty_tpl->tpl_vars['v']->value['member_time'];?>
</td>
			<td class="text-center">
			<a href="<?php echo @__CONTROLLER__;?>
/del?member_id=<?php echo $_smarty_tpl->tpl_vars['v']->value['member_id'];?>
">删除</a>
			</td>
		</tr>
		<?php } ?>
	</table>
	</form>
	<div class="bottom-page">
		<ul class="page-ul">
			<?php echo $_smarty_tpl->tpl_vars['pagelist']->value;?>

		</ul>
		<form action="<?php echo @__CONTROLLER__;?>
/perpage" method="get" enctype="multipart/form-data" class="page-form">
			<input type="text" name="per" class="pages" maxlength="2">&nbsp条/页
			<input type="submit" name="" class="pages-submit" value="确定">
		</form>
	</div>
	</div>
</div>
</body>
</html><?php }} ?>