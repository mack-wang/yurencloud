<?php
$a = array(
"mother"   =>"cindy",
"father"   =>"Tom",
"children" =>"Bob",
"sister"   =>"Linda",
"sister2"   =>"Linda"
);

$b = array(
"brother"   =>"wenson",
"didi"   =>"sam",
"sister"   =>"Lindai",
);

$c= array (
  3=>"php",
  5=>"web",);

print_r(array_merge($a,$b));//$a和$b合并，并剔除重复元素，保留重复的最后一个元素,merge是融入的意思，#合并数组最佳方式#
echo "<br>";
print_r(array_merge($c));//键名是数字的，将从0开始排序
