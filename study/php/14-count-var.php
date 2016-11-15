<!DOCTYPE html>
<html>
<meta charset="UTF-8">
<body>

<?php
	$x=10; 
	echo $x; // 输出 10

	$y=20; 
	$y += 100;
	echo $y; // 输出 120

	$z=50;
	$z -= 25;
	echo $z; // 输出 25

	$i=5;
	$i *= 6;
	echo $i; // 输出 30

	$j=10;
	$j /= 5;
	echo $j; // 输出 2

	$k=15;
	$k %= 4;
	echo $k; // 输出 3
	/* PHP 赋值运算符
PHP 赋值运算符用于向变量写值。
PHP 中基础的赋值运算符是 "="。这意味着右侧赋值表达式会为左侧运算数设置值。
赋值	等同于	描述
x = y	x = y	右侧表达式为左侧运算数设置值。
x += y	x = x + y	加
x -= y	x = x - y	减
x *= y	x = x * y	乘
x /= y	x = x / y	除
x %= y	x = x % y	模数 */
?>

</body>
</html>