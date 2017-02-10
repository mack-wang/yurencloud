<?php
header("Access-Control-Allow-Origin:*");
$name = $_GET['name'];
$num = $_GET['num'];

$array = [
    "name"=>$name,
    "num" => $num,
    "message" => "表单上传成功，我现在正跨站请求呢，哈哈",
];
$content = json_encode($array, JSON_UNESCAPED_UNICODE);

$handle = fopen("./test.txt","w");
fwrite($handle,$content);
