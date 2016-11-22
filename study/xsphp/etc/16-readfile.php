<?php
$filename="dirname/3.jpg";//这里设置文件的地址
header('Content-Type: image/jpg');//声明文件类型
header('Content-Disposition: attachment; filename="'.$filename.'"');//下载文件的描述
header('Content-Length:'.filesize($filename));//下载文件的大小

readfile($filename);//将文件内容读取出来
