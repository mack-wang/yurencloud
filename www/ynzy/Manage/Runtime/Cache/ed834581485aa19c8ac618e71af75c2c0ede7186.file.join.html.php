<?php /* Smarty version Smarty-3.1.6, created on 2016-06-21 08:49:16
         compiled from "D:/phpStudy/WWW/ynzy/Manage/Home/View\Gift\join.html" */ ?>
<?php /*%%SmartyHeaderCode:2774757688f0c3d7574-95355183%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'ed834581485aa19c8ac618e71af75c2c0ede7186' => 
    array (
      0 => 'D:/phpStudy/WWW/ynzy/Manage/Home/View\\Gift\\join.html',
      1 => 1466334112,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '2774757688f0c3d7574-95355183',
  'function' => 
  array (
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_57688f0c467e1',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_57688f0c467e1')) {function content_57688f0c467e1($_smarty_tpl) {?><!DOCTYPE html>
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
		<div class="all-pages">进货有礼 > 参与店铺&nbsp&nbsp&nbsp&nbsp&nbsp
		<input type="text" name="pages" class="pages" maxlength="2">&nbsp条/页
		<input type="submit" name="pages-submit" class="pages-submit my-btn" value="确定">
		&nbsp&nbsp&nbsp共59页&nbsp&nbsp&nbsp合计608条记录
		</div>
		<div class="search-form-div">
		<form class="search-form">
			<select class="select">
				  <option value="店铺名称">店铺名称</option>
			</select>
			<input type="text" name="search" class="search">
			<input type="submit" name="search-submit" class="search-submit my-btn" value="查询">
		</form>
		<button class="excel-btn my-btn">导出表格</button>
		</div>
	<div class="table-div">
	<table class="table" border=1 >
		<tr>
			<th>选择</th>
			<th>序号</th>
			<th>分组</th>
			<th>店铺名称</th>
			<th>手机号</th>
			<th>操作</th>
		</tr>
		<tr>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		
	</table>
	<div class="bottom-page">
		<ul>
			<li><a href="">1</a></li>
			<li><a href="">2</a></li>
			<li><a href="">3</a></li>
			<li><a href="">4</a></li>
			<li><a href="">5</a></li>
			<li><a href="">下一页></a></li>
			<li><a href="">尾页</a></li>
		</ul>
		<div class="box2">
			<input type="text" name="go-page" class="go-pages">
			<input type="submit" name="pages-submit" class="go-pages-submit my-btn" value="页/跳转">
		</div>
	</div>
	</div>
</div>
</body>
</html><?php }} ?>