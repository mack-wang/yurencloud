<?php
header("Content-type: text/html; charset=utf-8");
$conn = mysql_connect("localhost", "root", "2899779") or exit("连接数据库失败！");
if ($conn) {
    echo "连接成功！";
}
