<?php


header("Content-Type: text/xml;encoding=utf-8");
echo utf8_decode(wddx_serialize_value("hello world"));
//TODO::http://php.net/manual/zh/function.array-diff-key.php