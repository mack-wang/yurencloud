<!DOCTYPE html>
<html>
<meta charset="UTF-8">
<body>

<?php
	$x="Hello world!";
	$y="world";
	echo strpos($x,$y);//显示world在hello world!中所在的位置，显示6.strpos() 函数用于检索字符串内指定的字符或文本。例中字符串 "world" 的位置是 6。是 6（而不是 7）的理由是，字符串中首字符的位置是 0 而不是 1。
?>

</body>
</html>