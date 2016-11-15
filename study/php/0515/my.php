<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php 
		$name = $_POST["name"];
		$pwd = $_POST["pwd"];
		echo $name."先生/女士，您好！恭喜您成为我们的会员。您的账号是：".$name.",您的密码是：".$pwd;
	?>
</body>
</html>