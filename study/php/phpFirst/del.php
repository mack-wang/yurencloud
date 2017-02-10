<?php
//登入数据库
include("conn.php");
//获取地址栏传过来的id
$id = (int)$_GET["id"];
//构建删除数据库相关数据的SQL指令
$sql = "delete from 007_news where id=$id";
//执行SQL指令
mysql_query($sql);
//跳回到列表页
echo "<script>location.href = '17-php-mysql.php'</script>"
?>