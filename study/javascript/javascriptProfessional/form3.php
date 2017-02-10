<?php
header("Access-Control-Allow-Origin:*");
$username = $_POST['username'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$password = $_POST['password'];

if ($username){
    $array = [
        "username"=>$username,
        "status" => 1,
        "message" => "表单上传成功，我现在正跨站请求呢，哈哈",
    ];
    echo json_encode($array, JSON_UNESCAPED_UNICODE);
}else{
    $array = [
        "status" => 0,
        "message" => "表单上传失败",
    ];
    echo json_encode($array, JSON_UNESCAPED_UNICODE);
}
