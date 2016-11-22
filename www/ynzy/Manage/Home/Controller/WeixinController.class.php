<?php
//命名空间
namespace Home\Controller;

use Think\Controller;
//使用其他命名空间
use Tools\Wechat;

//继承父类
class WeixinController extends Controller
{
    public function weixin()
    {
        $options = array(
            'token' => 'boyuantang', //填写你设定的key
            'encodingaeskey' => 'qF2HEa87aNW966ZK840R0ByqtasKJRNyriwbWQsdtlF', //填写加密用的EncodingAESKey，如接口为明文模式可忽略
            'appid' => 'wx33252017a06027b1', //填写高级调用功能的app id, 请在微信开发模式后台查询!!!开启后才会有菜单
            'appsecret' => '0c1ac6f09fab1e715614d9fc8a148ccf', //填写高级调用功能的密钥
        );
        $weObj = new \Tools\Wechat($options);
        $weObj->valid(); //明文或兼容模式可以在接口验证通过后注释此句，但加密模式一定不能注释，否则会验证失败
        $type = $weObj->getRev()->getRevType();
        switch ($type) {
            case Wechat::MSGTYPE_EVENT:
                break;
            case Wechat::MSGTYPE_IMAGE:
                $weObj->text("您好！您的图片已收到，请耐心等待后台审核，谢谢！")->reply();
                break;
        };

        //设置菜单
        $url = urlencode('://www.boyuantang.com/ynzy/Manage/index.php/Home/Index/login');
        $url2 = urlencode('://www.boyuantang.com/ynzy/Manage/index.php/Home/Wed/wed');
        $url3 = urlencode('://www.boyuantang.com/ynzy/Manage/index.php/Home/Member/checkopenid');
        $menu = $weObj->getMenu();
        $newmenu = array(
            "button" => array(
                //一级菜单
                0 => array(
                    'name' => '最新活动',
                    'sub_button' => array(
                        //二级菜单1
                        0 => array(
                            'type' => 'view',
                            'name' => '进货有礼',
                            'url' => 'http://mp.weixin.qq.com/s?__biz=MzA3MTY1MjQ0MA==&mid=100000014&idx=1&sn=caec4c2435aeca8af2a48cd3800874a2#rd',
                        ),
                        //二级菜单2
                        1 => array(
                            'type' => 'view',
                            'name' => '婚庆推广',
                            'url' => 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx33252017a06027b1&redirect_uri=http' . $url2 . '&response_type=code&scope=snsapi_base&state=1#wechat_redirect',
                        ),
                    ),
                ),

                //一级菜单
                1 => array(
                    'name' => '我的账户',
                    'sub_button' => array(
                        //二级菜单1
                        0 => array(
                            'type' => 'view',
                            'name' => '店铺注册',
                            'url' => 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx33252017a06027b1&redirect_uri=http' . $url . '&response_type=code&scope=snsapi_base&state=1#wechat_redirect',
                        ),
                        //二级菜单2
                        1 => array(
                            'type' => 'view',
                            'name' => '会员注册',
                            'url' => 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx33252017a06027b1&redirect_uri=http' . $url3 . '&response_type=code&scope=snsapi_base&state=1#wechat_redirect',
                        ),
                    ),
                ),
                2 => array('type' => 'scancode_waitmsg',
                    'name' => '兑奖',
                    'key' => 'rselfmenu_0_0'),
            ),
        );
        $result = $weObj->createMenu($newmenu);

    }

}
