<?php
$handle=fopen("test.txt","a");//注册fopen的第二个参数，有很多，记得看说明，现在这个是在文件的最后插入新内容
fwrite($handle,"hello wlc ");
