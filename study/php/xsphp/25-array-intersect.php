<?php
$a = array(
"cindy",
"Tom",
"Bob",
"Linda",
"Linda"
);

$b = array(
"wenson",
"sam",
"Lindai",
"Bob",
"Linda",
);

print_r(array_intersect($a,$b));//$a和$b取交集，相交的值按数字排序，生成新的数组
