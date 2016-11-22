<?php
/* Smarty version 3.1.28, created on 2016-06-05 11:22:13
  from "E:\wamp\www\smarty\templates\foreach.tpl" */

if ($_smarty_tpl->smarty->ext->_validateCompiled->decodeProperties($_smarty_tpl, array (
  'has_nocache_code' => false,
  'version' => '3.1.28',
  'unifunc' => 'content_5753ef45cf4d43_00756778',
  'file_dependency' => 
  array (
    '97fe23deeed3ec4bdfb88a0b833d83bdf95a9359' => 
    array (
      0 => 'E:\\wamp\\www\\smarty\\templates\\foreach.tpl',
      1 => 1465118531,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5753ef45cf4d43_00756778 ($_smarty_tpl) {
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>foreach的演示</title>
</head>
<body>

<h2>用foreach循环遍历一维数组</h2>
<ul>
	<?php
$_from = $_smarty_tpl->tpl_vars['user']->value;
if (!is_array($_from) && !is_object($_from)) {
settype($_from, 'array');
}
$__foreach_v_0_saved_item = isset($_smarty_tpl->tpl_vars['v']) ? $_smarty_tpl->tpl_vars['v'] : false;
$__foreach_v_0_saved_key = isset($_smarty_tpl->tpl_vars['k']) ? $_smarty_tpl->tpl_vars['k'] : false;
$_smarty_tpl->tpl_vars['v'] = new Smarty_Variable();
$__foreach_v_0_total = $_smarty_tpl->smarty->ext->_foreach->count($_from);
if ($__foreach_v_0_total) {
$_smarty_tpl->tpl_vars['k'] = new Smarty_Variable();
$__foreach_v_0_first = true;
$_smarty_tpl->tpl_vars['v']->iteration=0;
foreach ($_from as $_smarty_tpl->tpl_vars['k']->value => $_smarty_tpl->tpl_vars['v']->value) {
$_smarty_tpl->tpl_vars['v']->iteration++;
$_smarty_tpl->tpl_vars['v']->first = $__foreach_v_0_first;
$__foreach_v_0_first = false;
$__foreach_v_0_saved_local_item = $_smarty_tpl->tpl_vars['v'];
?>
	<li><?php echo $_smarty_tpl->tpl_vars['k']->value;?>
----<?php echo $_smarty_tpl->tpl_vars['v']->value;?>
</li>
	<?php
$_smarty_tpl->tpl_vars['v'] = $__foreach_v_0_saved_local_item;
}
}
if ($__foreach_v_0_saved_item) {
$_smarty_tpl->tpl_vars['v'] = $__foreach_v_0_saved_item;
}
if ($__foreach_v_0_saved_key) {
$_smarty_tpl->tpl_vars['k'] = $__foreach_v_0_saved_key;
}
?>
</ul>
<ul>
	<?php
$_from = $_smarty_tpl->tpl_vars['myarr']->value;
if (!is_array($_from) && !is_object($_from)) {
settype($_from, 'array');
}
$__foreach_v_1_saved_item = isset($_smarty_tpl->tpl_vars['v']) ? $_smarty_tpl->tpl_vars['v'] : false;
$__foreach_v_1_saved_key = isset($_smarty_tpl->tpl_vars['k']) ? $_smarty_tpl->tpl_vars['k'] : false;
$_smarty_tpl->tpl_vars['v'] = new Smarty_Variable();
$__foreach_v_1_total = $_smarty_tpl->smarty->ext->_foreach->count($_from);
if ($__foreach_v_1_total) {
$_smarty_tpl->tpl_vars['k'] = new Smarty_Variable();
$__foreach_v_1_first = true;
$_smarty_tpl->tpl_vars['v']->iteration=0;
foreach ($_from as $_smarty_tpl->tpl_vars['k']->value => $_smarty_tpl->tpl_vars['v']->value) {
$_smarty_tpl->tpl_vars['v']->iteration++;
$_smarty_tpl->tpl_vars['v']->first = $__foreach_v_1_first;
$__foreach_v_1_first = false;
$__foreach_v_1_saved_local_item = $_smarty_tpl->tpl_vars['v'];
?>
	<li><?php echo $_smarty_tpl->tpl_vars['k']->value;?>
----<?php echo $_smarty_tpl->tpl_vars['v']->value;?>
</li>
	<?php
$_smarty_tpl->tpl_vars['v'] = $__foreach_v_1_saved_local_item;
}
}
if ($__foreach_v_1_saved_item) {
$_smarty_tpl->tpl_vars['v'] = $__foreach_v_1_saved_item;
}
if ($__foreach_v_1_saved_key) {
$_smarty_tpl->tpl_vars['k'] = $__foreach_v_1_saved_key;
}
?>
</ul>


<h2>用foreach循环遍历二维数组一【较麻烦，不直观】</h2>
<table width="600px" border="1">
	<tr><th>id</th><th>name</th><th>nicname</th><th>money</th></tr>
	<?php
$_from = $_smarty_tpl->tpl_vars['table']->value;
if (!is_array($_from) && !is_object($_from)) {
settype($_from, 'array');
}
$__foreach_v_2_saved_item = isset($_smarty_tpl->tpl_vars['v']) ? $_smarty_tpl->tpl_vars['v'] : false;
$_smarty_tpl->tpl_vars['v'] = new Smarty_Variable();
$__foreach_v_2_total = $_smarty_tpl->smarty->ext->_foreach->count($_from);
if ($__foreach_v_2_total) {
$__foreach_v_2_first = true;
$_smarty_tpl->tpl_vars['v']->iteration=0;
foreach ($_from as $_smarty_tpl->tpl_vars['v']->value) {
$_smarty_tpl->tpl_vars['v']->iteration++;
$_smarty_tpl->tpl_vars['v']->first = $__foreach_v_2_first;
$__foreach_v_2_first = false;
$__foreach_v_2_saved_local_item = $_smarty_tpl->tpl_vars['v'];
?>
	<tr>
		<?php
$_from = $_smarty_tpl->tpl_vars['v']->value;
if (!is_array($_from) && !is_object($_from)) {
settype($_from, 'array');
}
$__foreach_v1_3_saved_item = isset($_smarty_tpl->tpl_vars['v1']) ? $_smarty_tpl->tpl_vars['v1'] : false;
$_smarty_tpl->tpl_vars['v1'] = new Smarty_Variable();
$__foreach_v1_3_total = $_smarty_tpl->smarty->ext->_foreach->count($_from);
if ($__foreach_v1_3_total) {
foreach ($_from as $_smarty_tpl->tpl_vars['v1']->value) {
$__foreach_v1_3_saved_local_item = $_smarty_tpl->tpl_vars['v1'];
?>
			<td><?php echo $_smarty_tpl->tpl_vars['v1']->value;?>
</td>
		<?php
$_smarty_tpl->tpl_vars['v1'] = $__foreach_v1_3_saved_local_item;
}
}
if ($__foreach_v1_3_saved_item) {
$_smarty_tpl->tpl_vars['v1'] = $__foreach_v1_3_saved_item;
}
?>
	</tr>
	<?php
$_smarty_tpl->tpl_vars['v'] = $__foreach_v_2_saved_local_item;
}
}
if ($__foreach_v_2_saved_item) {
$_smarty_tpl->tpl_vars['v'] = $__foreach_v_2_saved_item;
}
?>
</table>

<h2>用foreach循环遍历二维数组二【较实用，直观】</h2>
<table width="600px" border="1">
	<tr><th>id</th><th>name</th><th>nicname</th><th>money</th></tr>
	<?php
$_from = $_smarty_tpl->tpl_vars['table']->value;
if (!is_array($_from) && !is_object($_from)) {
settype($_from, 'array');
}
$__foreach_v_4_saved_item = isset($_smarty_tpl->tpl_vars['v']) ? $_smarty_tpl->tpl_vars['v'] : false;
$_smarty_tpl->tpl_vars['v'] = new Smarty_Variable();
$__foreach_v_4_total = $_smarty_tpl->smarty->ext->_foreach->count($_from);
if ($__foreach_v_4_total) {
$__foreach_v_4_first = true;
$_smarty_tpl->tpl_vars['v']->iteration=0;
foreach ($_from as $_smarty_tpl->tpl_vars['v']->value) {
$_smarty_tpl->tpl_vars['v']->iteration++;
$_smarty_tpl->tpl_vars['v']->first = $__foreach_v_4_first;
$__foreach_v_4_first = false;
$__foreach_v_4_saved_local_item = $_smarty_tpl->tpl_vars['v'];
?>
	<tr>
		<td><?php echo $_smarty_tpl->tpl_vars['v']->value['id'];?>
</td>
		<td><?php echo $_smarty_tpl->tpl_vars['v']->value['name'];?>
</td>
		<td><?php echo $_smarty_tpl->tpl_vars['v']->value['nicname'];?>
</td>
		<td><?php echo $_smarty_tpl->tpl_vars['v']->value['money'];?>
</td>
	</tr>
	<?php
$_smarty_tpl->tpl_vars['v'] = $__foreach_v_4_saved_local_item;
}
}
if ($__foreach_v_4_saved_item) {
$_smarty_tpl->tpl_vars['v'] = $__foreach_v_4_saved_item;
}
?>
</table>
<h2>用foreach中为第一行添加class</h2>
<table width="600px" border="1">
	<tr><th>id</th><th>name</th><th>nicname</th><th>money</th></tr>
	<?php
$_from = $_smarty_tpl->tpl_vars['table']->value;
if (!is_array($_from) && !is_object($_from)) {
settype($_from, 'array');
}
$__foreach_v_5_saved_item = isset($_smarty_tpl->tpl_vars['v']) ? $_smarty_tpl->tpl_vars['v'] : false;
$_smarty_tpl->tpl_vars['v'] = new Smarty_Variable();
$__foreach_v_5_total = $_smarty_tpl->smarty->ext->_foreach->count($_from);
if ($__foreach_v_5_total) {
$__foreach_v_5_first = true;
$_smarty_tpl->tpl_vars['v']->iteration=0;
foreach ($_from as $_smarty_tpl->tpl_vars['v']->value) {
$_smarty_tpl->tpl_vars['v']->iteration++;
$_smarty_tpl->tpl_vars['v']->first = $__foreach_v_5_first;
$__foreach_v_5_first = false;
$__foreach_v_5_saved_local_item = $_smarty_tpl->tpl_vars['v'];
?>
	<tr class="<?php if ($_smarty_tpl->tpl_vars['v']->first) {?>myclass<?php }?>">
		<td><?php echo $_smarty_tpl->tpl_vars['v']->value['id'];?>
</td>
		<td><?php echo $_smarty_tpl->tpl_vars['v']->value['name'];?>
</td>
		<td><?php echo $_smarty_tpl->tpl_vars['v']->value['nicname'];?>
</td>
		<td><?php echo $_smarty_tpl->tpl_vars['v']->value['money'];?>
</td>
	</tr>
	<?php
$_smarty_tpl->tpl_vars['v'] = $__foreach_v_5_saved_local_item;
}
}
if ($__foreach_v_5_saved_item) {
$_smarty_tpl->tpl_vars['v'] = $__foreach_v_5_saved_item;
}
?>
</table>
<h2>用foreach中为偶数行添加class</h2>
<table width="600px" border="1">
	<tr><th>id</th><th>name</th><th>nicname</th><th>money</th></tr>
	<?php
$_from = $_smarty_tpl->tpl_vars['table']->value;
if (!is_array($_from) && !is_object($_from)) {
settype($_from, 'array');
}
$__foreach_v_6_saved_item = isset($_smarty_tpl->tpl_vars['v']) ? $_smarty_tpl->tpl_vars['v'] : false;
$_smarty_tpl->tpl_vars['v'] = new Smarty_Variable();
$__foreach_v_6_total = $_smarty_tpl->smarty->ext->_foreach->count($_from);
if ($__foreach_v_6_total) {
$__foreach_v_6_first = true;
$_smarty_tpl->tpl_vars['v']->iteration=0;
foreach ($_from as $_smarty_tpl->tpl_vars['v']->value) {
$_smarty_tpl->tpl_vars['v']->iteration++;
$_smarty_tpl->tpl_vars['v']->first = $__foreach_v_6_first;
$__foreach_v_6_first = false;
$__foreach_v_6_saved_local_item = $_smarty_tpl->tpl_vars['v'];
?>
	<tr class="<?php if (!(1 & $_smarty_tpl->tpl_vars['v']->iteration)) {?>myclass<?php }?>">
		<td><?php echo $_smarty_tpl->tpl_vars['v']->value['id'];?>
</td>
		<td><?php echo $_smarty_tpl->tpl_vars['v']->value['name'];?>
</td>
		<td><?php echo $_smarty_tpl->tpl_vars['v']->value['nicname'];?>
</td>
		<td><?php echo $_smarty_tpl->tpl_vars['v']->value['money'];?>
</td>
	</tr>
	<?php
$_smarty_tpl->tpl_vars['v'] = $__foreach_v_6_saved_local_item;
}
}
if ($__foreach_v_6_saved_item) {
$_smarty_tpl->tpl_vars['v'] = $__foreach_v_6_saved_item;
}
?>
</table>

	
</body>
</html><?php }
}
