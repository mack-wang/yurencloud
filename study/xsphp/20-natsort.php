<?php
$a=array("fileadfasdf.txt","fileadf.txt","file3.txt","file2.txt","file.txt");
natsort($a);//自然排序，从1-9，从a-z，从小到大，从短到长，非常适合模糊排序，推荐排序
print_r($a);
