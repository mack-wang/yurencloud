<?php

/*PHP 通常使用 IEEE 754 双精度格式*/
/*所以永远不要相信浮点数结果精确到了最后一位，也永远不要比较两个浮点数是否相等*/

$a = 1.23456789;
$b = 1.23456780;

if($a == $b){//尽量不要进行浮点数比较
    echo "true";
}

//学习到string
//TODO::http://php.net/manual/zh/language.types.string.php

?>