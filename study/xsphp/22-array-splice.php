<?php
$a = array(
"mother"   =>"cindy",
"father"   =>"Tom",
"children" =>"Bob",
"sister"   =>"Linda",
"sister2"   =>"Linda"
);
print_r(array_splice($a,1));//删除数组序号1之前的元素
echo "<br>";
print_r(array_splice($a,-1));//只保留数组序号1之前的元素
echo "<br>";
print_r(array_splice($a,1,-1,array("web"=>"baidu","www"=>"xinlang")));//这个好像不行
