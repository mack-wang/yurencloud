<?php
$a = array(
"mother"   =>"cindy",
"father"   =>"Tom",
"children" =>"Bob",
"sister"   =>"Linda"
);
print_r(count($a));//计算数组内元素的个数，count($a，1)，第二个参数为1的话，递归计算多维数组的个数，默认0不计算
