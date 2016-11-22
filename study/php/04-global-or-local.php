<!DOCTYPE html>
<html>
<meta charset="UTF-8">
<body>

<?php
	//函数之外声明的变量拥有 Global 作用域，只能在函数以外进行访问。
	//函数内部声明的变量拥有 LOCAL 作用域，只能在函数内部进行访问。
	
	<?php
$x=5; // 全局作用域

function myTest() {
		  $y=10; // 局部作用域
		  echo "<p>测试函数内部的变量：</p>";
		  echo "变量 x 是：$x";
		  echo "<br>";
		  echo "变量 y 是：$x";
		} 

		myTest();

		echo "<p>测试函数之外的变量：</p>";
		echo "变量 x 是：$x";
		echo "<br>";
		echo "变量 y 是：$x";
?>
?>

</body>
</html>