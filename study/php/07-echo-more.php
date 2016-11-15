<!DOCTYPE html>
<html>
<meta charset="UTF-8">
<body>

<?php
	//展示如何用 echo 命令来显示不同的字符串（同时请注意字符串中能包含 HTML 标记）：
	echo "<h2>学习php很有趣</h2>";
	echo "hello world<br>";
	echo "这是","用","字符","串","连接的";

	//下面是展示如何用 echo 命令来显示字符串和变量：
	$text1 = "我在学习PHP";
	$text2 = "www.baidu.com";
	$text3 = array("English","Chinese","Math");
	echo $text1;
	echo "<br>";
	echo "学习就上网站",$text2,"<br>";
	echo "我最喜欢的课程是","$text3[0]";
?>

</body>
</html>