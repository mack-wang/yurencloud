<?php
$str="<h1>hello</h1><div>haha</div>" ;
echo htmlspecialchars($str);//会把html的标签字符串化
echo $str;//html标签会被解析
echo strip_tags($str,"<h1>");//用于删除所有标签，div的标签会被删除，h1有标签会被保留
