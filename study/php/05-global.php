<!DOCTYPE html>
<html>
<meta charset="UTF-8">
<body>

<?php
	//函数内访问全局变量
	$x=5; // 全局作用域
	$y=7; // 全局作用域

	function myTest() {
		  global $x,$y;//这句话作用：使函数myTest能够使用全局函数的变量，在句子前页加global就可以了
		  $y=$x + $y;
		} 

		myTest();

		echo $y;
?>

</body>
</html>