<?php
$str="this is test you know test test test test" ;
echo str_replace("test","success",$str,$count);//在$str中用success替换test，返回替换后的字符串，并计算替换的次数
echo $count;
