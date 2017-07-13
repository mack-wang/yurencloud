<?php

/* 整型可以表示为二进制数字 以0b开头就可以 */

$a = 1234; // 十进制数
$b = -123; // 负数
$c = 0123; // 八进制数 (等于十进制 83)
$d = 0x1A; // 十六进制数 (等于十进制 26)
$e = 0b11111111; // 二进制数字 (等于十进制 255)
$f = 9223372036854775807;//整型在64位下的最大值
$f1 = 9223372036854775808;//整型超过最大值时会自动变成浮点数float

var_dump($a+1);
var_dump($b>>2);
var_dump($d>>4);
var_dump($e);

var_dump(PHP_INT_MAX);//整型最大的数字
var_dump(PHP_INT_MIN);//整型最小的数字

var_dump($f1);


//浮点数转成整型的三种方式，大多数情况下，如果在计算中需要整型，会自动转成整型
//当从浮点数转换成整数时，将向下取整。
$g = 123.4;
var_dump($g);
var_dump((int)$g);
var_dump(intval($g));//用intval函数来转
var_dump(intval(NAN));
var_dump(intval($g));//用intval函数来转


?>