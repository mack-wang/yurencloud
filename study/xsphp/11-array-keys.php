<?php
$a = array(
"mother"   =>"cindy",
"father"   =>"Tom",
"children" =>"Bob",
"sister"   =>"Linda"
);
$b=array_keys($a);//返回数组的键变成值，下标为数字
print_r($a);
echo "<br>";
print_r($b);
