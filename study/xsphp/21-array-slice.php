<?php
$a = array(
"mother"   =>"cindy",
"father"   =>"Tom",
"children" =>"Bob",
"sister"   =>"Linda",
"sister2"   =>"Linda"
);
print_r(array_slice($a,1,2));//返回数组序号1开始的，2个元素，即tom,bob，肯保留键名
echo "<br>";
print_r(array_slice($a,-2,1));//返回数组倒数第2个开始的，1个元素
