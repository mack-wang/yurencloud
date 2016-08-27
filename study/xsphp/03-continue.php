<?php
header("Content-type: text/html; charset=utf-8");
for ($i=0; $i < 10; $i++) {
  # code...

  if ($i==5) {
    continue;//i=5这个数直接跳过
  }
  echo "这是第<b>$i</b>次执行输出的结果<br>";
}
