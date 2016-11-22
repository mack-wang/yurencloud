<?php
header("Content-type: text/html; charset=utf-8");
$option = array('openid' => 12345,'php' => 'haha');


function weixin()
{
    global $option;//增加了global才能引用$option
    var_dump($option);
    echo "hello";
}

weixin();
