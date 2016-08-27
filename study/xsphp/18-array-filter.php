<?php
function fun($var){//定义一个函数，设置一个形参$var
  if($var == "Bob") return true;//如果传入的数组的值等于Bob就返回true
};
$a = array(
"mother"   =>"cindy",
"father"   =>"Tom",
"children" =>"Bob",
"sister"   =>"Linda",
"sister2"   =>"Linda"
);
print_r(array_filter($a,"fun"));//输入实参$a，调用回调函数fun(),结果是输出"children" =>"Bob",
