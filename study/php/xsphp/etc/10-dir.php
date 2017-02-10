<?php
$path="01-error.php";
echo basename($path)."<br>";//返回目录下的文件名，返回去掉后缀的文件名，返回目录名，返回一个关于目录信息的数组
echo basename($path,".php")."<br>";
echo dirname($path)."<br>";
var_dump(pathinfo($path));
