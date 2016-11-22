<?php

$username = $_GET['username'];
$phone = $_GET['phone'];
$email = $_GET['email'];
$password = $_GET['password'];

if ($username){
    $array = [
        "username"=>$username,
        "status" => 1,
        "message" => "表单上传成功",
    ];
    echo json_encode($array, JSON_UNESCAPED_UNICODE);
}else{
    $array = [
        "status" => 0,
        "message" => "表单上传失败",
    ];
    echo json_encode($array, JSON_UNESCAPED_UNICODE);
}
