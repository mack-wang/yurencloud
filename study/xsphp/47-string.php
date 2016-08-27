<?php//把字符串当作数组来看
echo substr("1234567",2,4)."<br>";//输出从序号2开始的，后4位字符串
echo substr(1234567,2,4)."<br>";//输出从序号2开始的，后4位字符串
echo hello."<br>";//hello没加引号会报错，但仍会当作字符串输出
$str = "lamp";
echo $str[0]."<br>";//PHP4以前用这样子访问
echo $str[1]."<br>";
echo $str[2]."<br>";
echo $str[3]."<br>";
echo $str[0].$str[1].$str[2]."<br>";

$str = "lnmp";
echo $str{0}."<br>";//PHP4以后，建议用这样子访问
echo $str{1}."<br>";
echo $str{2}."<br>";
echo $str{3}."<br>";
echo $str{strlen($str)-1}."<br>";//strlen计算字符串长度
$str{strlen($str)-1}="e";
echo $str;
