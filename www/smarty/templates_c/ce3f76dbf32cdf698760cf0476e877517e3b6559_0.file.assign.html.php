<?php
/* Smarty version 3.1.28, created on 2016-06-05 05:09:58
  from "E:\wamp\www\smarty\templates\assign.html" */

if ($_smarty_tpl->smarty->ext->_validateCompiled->decodeProperties($_smarty_tpl, array (
  'has_nocache_code' => false,
  'version' => '3.1.28',
  'unifunc' => 'content_575398061ece67_60046574',
  'file_dependency' => 
  array (
    'ce3f76dbf32cdf698760cf0476e877517e3b6559' => 
    array (
      0 => 'E:\\wamp\\www\\smarty\\templates\\assign.html',
      1 => 1465096195,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_575398061ece67_60046574 ($_smarty_tpl) {
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>assign</title>
</head>
<body>
	<h2>标量显示</h2>
	<p><?php echo $_smarty_tpl->tpl_vars['score']->value;?>
</p>
	<p><?php echo $_smarty_tpl->tpl_vars['love']->value;?>
</p>
	
	<h2>数组显示</h2>
	<ul>
		<li><?php echo $_smarty_tpl->tpl_vars['user']->value[0];?>
</li>
		<li><?php echo $_smarty_tpl->tpl_vars['user']->value[1];?>
</li>
		<li><?php echo $_smarty_tpl->tpl_vars['user']->value[2];?>
</li>
	</ul>
	<h2>关联数组显示</h2>
	<ul>
		<li><?php echo $_smarty_tpl->tpl_vars['name']->value['id'];?>
</li>
		<li><?php echo $_smarty_tpl->tpl_vars['name']->value['name'];?>
</li>
		<li><?php echo $_smarty_tpl->tpl_vars['name']->value['nicname'];?>
</li>
	</ul>
	<h2>数组显示---其他写法</h2>
	<ul>
		<li><?php echo $_smarty_tpl->tpl_vars['user']->value[0];?>
</li>
		<li><?php echo $_smarty_tpl->tpl_vars['user']->value['1'];?>
</li>
		<li><?php echo $_smarty_tpl->tpl_vars['user']->value[2];?>
</li>
	</ul>
	<h2>关联数组显示----其他写法[这个写法更加好用] $name.id</h2>
	<ul>
		<li><?php echo $_smarty_tpl->tpl_vars['name']->value['id'];?>
</li>
		<li><?php echo $_smarty_tpl->tpl_vars['name']->value['name'];?>
</li>
		<li><?php echo $_smarty_tpl->tpl_vars['name']->value['nicname'];?>
</li>
	</ul>

</body>
</html><?php }
}
