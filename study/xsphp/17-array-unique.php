<?php
$a = array(
"mother"   =>"cindy",
"father"   =>"Tom",
"children" =>"Bob",
"sister"   =>"Linda",
"sister2"   =>"Linda"
);
print_r(array_unique($a));//删除重复的元素，并返回一个新的没有重复的数组，有重复是，只保留第一个
