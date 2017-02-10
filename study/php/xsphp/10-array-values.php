<?php
$a = array(
"mother"   =>"cindy",
"father"   =>"Tom",
"children" =>"Bob",
"sister"   =>"Linda"
);
$b=array_values($a);//返回数组的值，键变成数字下标
print_r($a);
echo "<br>";
print_r($b);
