<?php
header("Content-type: text/html; charset=utf-8");
for ($i=0; $i < 10; $i++) {
  # code...
  echo "这是第<b>$i</b>次执行输出的结果<br>";
  if ($i==5) {
    break;//i=5这个数还会执行
  }
}
