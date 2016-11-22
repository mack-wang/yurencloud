<?php
$str="    123456   ";//前面4个空格，后面3个空格
echo strlen($str);//输出13
echo strlen(ltrim($str));//去掉左侧空格，输出9
echo strlen(rtrim($str));//去掉左侧空格，输出10
echo strlen(trim($str));//去掉所有空格，输出6

$str="123 This is a test ...";
echo ltrim($str,"0..9");//去掉所有数字
echo ltrim($str,".");//去掉所有点
echo ltrim($str,"0..9 A..Z .");//去掉所有数字，大写字母，点
