<?php
header("Content-type: text/html; charset=utf-8");
$option = array('openid' => 12345, 'php' => 'haha', 'wlc' => '王乐城');
$num = 0;
foreach ($option as $value) {
    echo "在数组中\$option中第 $num 个元素是： $value<br>";
    $num++;
}


foreach ($option as $key => $value) {
  echo "另一个遍历的方式  $key : $value<br>";
}
