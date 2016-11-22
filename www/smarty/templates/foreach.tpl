<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>foreach的演示</title>
</head>
<body>

<h2>用foreach循环遍历一维数组</h2>
<ul>
	{foreach $user as $k => $v}
	<li>{$k}----{$v}</li>
	{/foreach}
</ul>
<ul>
	{foreach $myarr as $k => $v}
	<li>{$k}----{$v}</li>
	{/foreach}
</ul>


<h2>用foreach循环遍历二维数组一【较省，直观】</h2>
<table width="600px" border="1">
	<tr><th>id</th><th>name</th><th>nicname</th><th>money</th></tr>
	{foreach $table as $v}
	<tr>
		{foreach $v as $v1}
			<td>{$v1}</td>
		{/foreach}
	</tr>
	{/foreach}
</table>

<h2>用foreach循环遍历二维数组二【较实用，直观】</h2>
<table width="600px" border="1">
	<tr><th>id</th><th>name</th><th>nicname</th><th>money</th></tr>
	{foreach $table as $v}
	<tr>
		<td>{$v.id}</td>
		<td>{$v.name}</td>
		<td>{$v.nicname}</td>
		<td>{$v.money}</td>
	</tr>
	{/foreach}
</table>
<h2>用foreach中为第一行添加class</h2>
<table width="600px" border="1">
	<tr><th>id</th><th>name</th><th>nicname</th><th>money</th></tr>
	{foreach $table as $v}
	<tr class="{if $v@first}myclass{/if}">
		<td>{$v.id}</td>
		<td>{$v.name}</td>
		<td>{$v.nicname}</td>
		<td>{$v.money}</td>
	</tr>
	{/foreach}
</table>
<h2>用foreach中为偶数行添加class</h2>
<table width="600px" border="1">
	<tr><th>id</th><th>name</th><th>nicname</th><th>money</th></tr>
	{foreach $table as $v}
	<tr class="{if $v@iteration is even}myclass{/if}">
		<td>{$v.id}</td>
		<td>{$v.name}</td>
		<td>{$v.nicname}</td>
		<td>{$v.money}</td>
	</tr>
	{/foreach}
</table>

	
</body>
</html>