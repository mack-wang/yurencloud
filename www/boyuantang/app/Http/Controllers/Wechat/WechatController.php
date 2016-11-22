<?php

namespace App\Http\Controllers\Wechat;

use Illuminate\Http\Request;
use App\Http\Requests;
use Illuminate\Routing\Controller;
use Log;

class WechatController extends Controller
{
    /**
     * 处理微信的请求消息
     *
     * @return string
     */
    public function serve()
    {
        Log::info('request arrived.'); # 注意：Log 为 Laravel 组件，所以它记的日志去 Laravel 日志看，而不是 EasyWeChat 日志

        $wechat = app('wechat');

        //添加自动回复
        $wechat->server->setMessageHandler(function($message){
            return "欢迎关注大美云南";
        });

        Log::info('return response.');

        //添加按钮
        $menu = $wechat->menu;
        $buttons = [
            [
                "name"       => "往期回顾",
                "sub_button" => [
                    [
                        "type" => "view",
                        "name" => "往期回顾1",
                        "url"  => "http://www.baidu.com/"
                    ],
                    [
                        "type" => "view",
                        "name" => "往期回顾2",
                        "url"  => "http://www.baidu.com/"
                    ],
                ],
            ],
            [
                "name"       => "联系我们",
                "sub_button" => [
                    [
                        "type" => "view",
                        "name" => "店铺注册",
                        "url"  => "http://www.yurencloud.com/boyuantang/public/wechat/login"
                    ],
                    [
                        "type" => "view",
                        "name" => "工作人员注册",
                        "url"  => "http://www.baidu.com/"
                    ],
                ],
            ],
            [
                "type" => "scancode_waitmsg",
                "name" => "扫码功能",
                "key"  => "rselfmenu_0_0"
            ],
        ];
        $menu->add($buttons);

        return $wechat->server->serve();
    }

    public function demo()
    {
        
    }
}
