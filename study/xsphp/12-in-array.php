<?php
$a = array(
"mother"   =>"cindy",
"father"   =>"Tom",
"children" =>"Bob",
"sister"   =>"Linda"
);
if (in_array("Tom",$a)) {//凑数某个值是否在数组中，返回布尔值
  echo "i am father";
}
