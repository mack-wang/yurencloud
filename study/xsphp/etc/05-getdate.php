<?php
echo time();
$getdate=getdate(time());//把当前的时间戳变成一个格式化的时间数组
var_dump($getdate);
echo "<br>".$getdate['mday'];
