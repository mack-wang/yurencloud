<?php
//声明php输入的字符集
header("content-type:text/html;charset=utf-8");
//数据库配置信息
$db_host = "localhost";
$db_user = "root";
$db_pwd = "123456";
$db_name = "wlc";
//连接数据库
$link = @mysql_connect($db_host,$db_user,$db_pwd);
//判断是否连接数据库
if (!$link)
{
	echo("<font color=red>php联接mysql失败</font><br>");
	exit("<font color=red>出错并退出</font>");
};
 //连接数据库
if (!mysql_select_db($db_name))
{
	echo("连接数据库失败".mysql_error());
	exit("出错并退出");
}
//设置返回的数据的字符集utf8
mysql_query("set names utf8");
//定义一个函数，用来显示数组包含的数据
function dump($arr)
{
	echo("<pre>");
	print_r($arr);
	echo("</pre>");
}
?>