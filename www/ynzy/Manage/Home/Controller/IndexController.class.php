<?php
//命名空间
namespace Home\Controller;

use Think\Controller;

//使用其他命名空间

//继承父类
class IndexController extends Controller
{
    private $options;

    function __construct($options = array(
        'token' => 'boyuantang', //填写你设定的key
        'encodingaeskey' => 'qF2HEa87aNW966ZK840R0ByqtasKJRNyriwbWQsdtlF', //填写加密用的EncodingAESKey，如接口为明文模式可忽略
        'appid' => 'wx33252017a06027b1', //填写高级调用功能的app id, 请在微信开发模式后台查询!!!开启后才会有菜单
        'appsecret' => '0c1ac6f09fab1e715614d9fc8a148ccf', //填写高级调用功能的密钥
    )) {
        //注意，在thinkphp中子类在写构造函数时，一定要继承父类的构造函数！
        parent::__construct();
        $this->options = $options;
    }

    public function checkPhone()
    {
        $data["shop_tel"] = I("post.shop_tel");
        session("shop_tel", I("post.shop_tel"));
        $result = M('shop')->where($data)->find();
        while ($result['shop_openid']) {
            echo "registered";
            return;
        }
        $retVal = ($result) ? "true" : "false";
        echo $retVal;
    }

    public function sendShortnum()
    {
        $rand = rand(123456, 587654);
        session('shortnum', 123456); //测试用，用完要删除
        /*$ch = curl_init();
        $post_data = array(
        "account" => "sdk_zjbyt",
        "password" => "20151116",
        "destmobile" => I('post.shop_tel'),
        "msgText" => "【诚信有礼】您的验证码是：" . $rand . "。请及时输入，切勿泄露！",
        "sendDateTime" => "",
        );
        session('time_past', $_SERVER['REQUEST_TIME']);
        session('shop_tel', I('post.shop_tel'));
        session('shortnum', $rand);
        curl_setopt($ch, CURLOPT_HEADER, false);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_BINARYTRANSFER, true);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); //这里原来是0，我改成1后，才能接收回调
        $post_data = http_build_query($post_data);
        //echo $post_data;
        curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);
        curl_setopt($ch, CURLOPT_URL, 'http://www.jianzhou.sh.cn/JianzhouSMSWSServer/http/sendBatchMessage');
        //$info=
        curl_exec($ch);
        $result = curl_multi_getcontent($ch); //接收上面的回调信息，是字符串*/
        $retVal = ($rand > 0) ? "true" : "false";
        echo "true";
    }

    public function checkShortnum()
    {
        if (I("post.shortnum") == session('shortnum')) {
            echo "true";
        } else {
            echo "false";
        }
    }

    public function test()
    {
        echo "hello";
        $this->display('login');
    }

    public function login()
    {
        //实例化wechat【就是引入这个类】
        $weObj = new \Tools\Wechat($this->options);
        //调用getOauthAccessToken()这个方法，获取access_token和用户的openid
        $jon = $weObj->getOauthAccessToken();
        //用这个openid获取关注用户的信息【未关注的不能获取，得用网页主动授权的方法】
        //调用getUserInfo()这个方法，传用$openid这个参数，获取用户的信息，返回一个数组。
        $user = $weObj->getUserInfo($jon['openid']);
        session('shop_headimgurl', $user['headimgurl']);
        session('shop_openid', $user['openid']);
        session('shop_nickname', $user['nickname']);
        $this->display();
    }

    public function register()
    {
        $data = array(
            "shop_headimgurl" => session('shop_headimgurl'),
            "shop_openid" => session('shop_openid'),
            "shop_nickname" => session('shop_nickname'),
            "register_time" => date("Y-m-d H:i:s"),
        );
        $find['shop_tel'] = session('shop_tel');
        $result=M("shop")->where($find)->save($data);
        if ($result) {
            session(null);
            $this->assign('tips', "恭喜您注册成功！");
        } else {
            session(null);
            $this->assign('tips', "注册失败！");
        }
        $this->display('tips');
    }
}
