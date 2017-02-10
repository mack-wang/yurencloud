<?php
$handle=fopen("test.txt","r");//注册fopen的第二个参数，有很多，记得看说明，现在这个是  只读
echo fread($handle,20);//读取从头开始的20个字节

