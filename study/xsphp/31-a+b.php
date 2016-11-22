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

print_r($a+$b);//$a和$b合并，但和merge不同，此处是前者覆盖后者
