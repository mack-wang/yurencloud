<?php
$a = array(5, 1, 4, 7, 3, 8);
sort($a);//对$a的值进行从小到大排序，并返回给$a，sort($a)整个这个是一个布尔值
print_r($a);
echo "</br>";
rsort($a);
print_r($a);
echo "</br>";
$b = array(5 => "bob", 1 => "tot", 4 => "coc", 7 => "dod", 3 => "pop", 8 => "boe");
ksort($b);//对$b的键名进行从小到大排序，并返回给$a，ksort($b)整个这个是一个布尔值
print_r($b);
echo "</br>";
krsort($b);
print_r($b);
