<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>assign</title>
</head>
<body>
	<h2>标量显示</h2>
	<p>{$score}</p>
	<p>{$love}</p>
	
	<h2>数组显示</h2>
	<ul>
		<li>{$user[0]}</li>
		<li>{$user[1]}</li>
		<li>{$user[2]}</li>
	</ul>
	<h2>关联数组显示</h2>
	<ul>
		<li>{$name['id']}</li>
		<li>{$name['name']}</li>
		<li>{$name['nicname']}</li>
	</ul>
	<h2>数组显示---其他写法$user.1</h2>
	<ul>
		<li>{$user[0]}</li>
		<li>{$user['1']}</li>
		<li>{$user.2}</li>
	</ul>
	<h2>关联数组显示----其他写法[这个写法更加好用] $name.id</h2>
	<ul>
		<li>{$name.id}</li>
		<li>{$name.name}</li>
		<li>{$name.nicname}</li>
	</ul>

</body>
</html>