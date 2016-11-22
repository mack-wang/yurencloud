<?php
$a = array(
"mother"   =>"cindy",
"father"   =>"Tom",
"children" =>"Bob",
"sister"   =>"Linda",
"sister2"   =>"Linda"
);

print_r(array_rand($a));//随机返回一个键值
echo "<br>";
print_r(array_rand($a,2));//随机返回两个键值，并数字排序

