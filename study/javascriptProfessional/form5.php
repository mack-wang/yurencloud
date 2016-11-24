<?php
header("Access-Control-Allow-Origin:*");
session_start();

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

//无限循环操作
//for (;;) {
//    $read = fopen("test.txt","r");
//    if($_SESSION['test'] != $read){
//        $_SESSION['test']=fopen("test.txt","r");
//        $array=[
//            "status" => 1,
//            "content" => $_SESSION['test'],
//        ];
//        echo json_encode($array, JSON_UNESCAPED_UNICODE);
//    }
//    $array=[
//            "status" => 1,
//            "content" => "wlcwlc",
//        ];
//        echo json_encode($array, JSON_UNESCAPED_UNICODE);
//    sleep(3);
//}
