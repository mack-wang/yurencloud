<?php
$a = array(
"mother"   =>"cindy",
"father"   =>"Tom",
"children" =>"Bob",
"sister"   =>"Linda",
"sister2"   =>"Linda"
);
print_r(array_count_values($a));//计算数组内不重复的值的个数,不是输出一个总数，而是这样[cindy] => 1 [Tom] => 1 [Bob] => 1 [Linda] => 2
