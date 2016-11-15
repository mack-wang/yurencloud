<?php
include __DIR__ . '/vendor/autoload.php'; // 引入 composer 入口文件
use EasyWeChat\Foundation\Application;
$options = [
    'debug'  => false,
    'app_id' => 'wx33252017a06027b1',
    'secret' => '0c1ac6f09fab1e715614d9fc8a148ccf',
    'token'  => 'boyuantang',
    // 'aes_key' => null, // 可选
    'log' => [
        'level' => 'debug',
        'file'  => '/tmp/easywechat.log', // XXX: 绝对路径！！！！
    ],
    //...
];
$app = new Application($options);

$server = $app->server;

//$server->setMessageHandler(function ($message) {
//    return "您好！欢迎关注我!";
//});

$server->setMessageHandler(function ($message) {
    switch ($message->MsgType) {
        case 'event':
            # 事件消息...
            break;
        case 'text':
            # 文字消息...
            return "我收到你的消息啦";
            break;
        case 'image':
            # 图片消息...
            return "我收到你的图片啦";
            break;
        case 'voice':
            # 语音消息...
            break;
        case 'video':
            # 视频消息...
            break;
        case 'location':
            # 坐标消息...
            return "我收到你的坐标啦";
            break;
        case 'link':
            # 链接消息...
            break;
        // ... 其它消息
        default:
            # code...
            break;
    }
    // ...
});
$response = $app->server->serve();
// 将响应输出
$response->send(); // Laravel 里请使用：return $response;test3
