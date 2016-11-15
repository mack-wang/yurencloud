<?php
/* Smarty version 3.1.28, created on 2016-06-05 06:13:04
  from "E:\wamp\www\smarty\templates\config.tpl" */

if ($_smarty_tpl->smarty->ext->_validateCompiled->decodeProperties($_smarty_tpl, array (
  'has_nocache_code' => false,
  'version' => '3.1.28',
  'unifunc' => 'content_5753a6d015a544_38524790',
  'file_dependency' => 
  array (
    '4b17bec8bb52291cd62f50f3c91fd664291420ae' => 
    array (
      0 => 'E:\\wamp\\www\\smarty\\templates\\config.tpl',
      1 => 1465099981,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5753a6d015a544_38524790 ($_smarty_tpl) {
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<title>Document</title>
</head>
<body>
	<h2>配置变量</h2>
	<?php
$_smarty_tpl->smarty->ext->configLoad->_loadConfigFile($_smarty_tpl, 'site.conf', 'nationality', 0);
?>


	<p><?php echo $_smarty_tpl->smarty->ext->configLoad->_getConfigVariable($_smarty_tpl, 'copyright');?>
</p>
	<p><?php echo $_smarty_tpl->smarty->ext->_config->_getConfigVariable($_smarty_tpl, 'police');?>
</p>

	<p><?php echo $_smarty_tpl->smarty->ext->configLoad->_getConfigVariable($_smarty_tpl, 'color');?>
</p>
</body>
</html><?php }
}
