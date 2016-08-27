<?php
$a = array(
"mother"   =>"cindy",
"father"   =>"Tom",
"children" =>"Bob",
"sister"   =>"Linda",
"sister2"   =>"Linda"
);

print_r(shuffle($a));//将数组随机排序，并返回布尔值
echo "<br>";
print_r($a);//数组重新排序后，只保留键值，以数字重新排序
