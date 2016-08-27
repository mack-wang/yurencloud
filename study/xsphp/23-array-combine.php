<?php
$a=array("a","b","c","d");
$b=array("adobe","bob","cindy","dog");
print_r(array_combine($a,$b));//$a是键名，$b是键值，如果有一方不对，就会返回false
