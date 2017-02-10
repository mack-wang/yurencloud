<?php
$a = array(
    1 => "cindy",
    2 => "Tom",
    3 => "Bob",
    4 => "Linda",
    5 => "Linda",
);
unset($a[2]);//删除下标为2的元素，并且排序不变
print_r(array_values($a)); //重新排序
