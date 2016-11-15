<?php
//命名空间
namespace Home\Controller;

use Think\Controller;
use Tools\Wechat;

//使用其他命名空间

//继承父类
class MemberController extends Controller
{
    function __construct(){

    }
    public function checkopenid()
    {
        $weObj = new \Tools\Wechat();
        if (!session('?check_openid')) {
            //调用getOauthAccessToken()这个方法，获取access_token和用户的openid
            $jon = $weObj->getOauthAccessToken($appid = 'wx33252017a06027b1', $appsecret = '0c1ac6f09fab1e715614d9fc8a148ccf');
            //用这个openid获取关注用户的信息【未关注的不能获取，得用网页主动授权的方法】
            $data['shop_openid'] = $jon['openid'];
            //调用getUserInfo()这个方法，传用$openid这个参数，获取用户的信息，返回一个数组。
            $result = D('shop')->where($data)->find();
            if ($result) {
                session('check_openid', $result['shop_openid']);
                //通过redirect带参shop_id重定向到member页面。
                $callback = 'http://www.boyuantang.com/ynzy/Manage/index.php/Home/Member/member';
                redirect($weObj->getOauthRedirect($callback, $state = '25', $scope = 'snsapi_userinfo'), 0, '页面跳转中...');
            } else {
                $callback = 'http://www.boyuantang.com/ynzy/Manage/index.php/Home/Index/login';
                redirect($weObj->getOauthRedirect($callback, $state = '', $scope = 'snsapi_base'), 0, '页面跳转中...');
            }
        } else {
            //通过redirect带参shop_id重定向到member页面。
            $callback = 'http://www.boyuantang.com/ynzy/Manage/index.php/Home/Member/member';
            redirect($weObj->getOauthRedirect($callback, $state = '25', $scope = 'snsapi_userinfo'), 0, '页面跳转中...');
        }
    }
    public function member()
    {
        dump(__CONTROLLER__);
        $jssdk = new \Tools\Jssdk("wx33252017a06027b1", "0c1ac6f09fab1e715614d9fc8a148ccf");
        $signPackage = $jssdk->GetSignPackage();
        dump($signPackage);
        $options = array(
            'token' => 'boyuantang', //填写你设定的key
            'encodingaeskey' => 'qF2HEa87aNW966ZK840R0ByqtasKJRNyriwbWQsdtlF', //填写加密用的EncodingAESKey，如接口为明文模式可忽略
            'appid' => 'wx33252017a06027b1', //填写高级调用功能的app id, 请在微信开发模式后台查询!!!开启后才会有菜单
            'appsecret' => '0c1ac6f09fab1e715614d9fc8a148ccf', //填写高级调用功能的密钥
        );
        $weObj = new \Tools\Wechat($options);
        $jon = $weObj->getOauthAccessToken();
        $data['shop_openid'] = $jon['openid'];
        dump(I('get.state'));
        $this->assign('shop_id', I('get.state'));
        $this->assign('signPackage', $signPackage);
        $this->display();
    }

    public function addmember()
    {

    }

    public function logincheck()
    {
        $shotcode = session('shotcode');
        session('shop_register_time', $_SERVER['REQUEST_TIME']);
        if (!empty($shotcode) && $shotcode == I('post.shotcode') && session('shop_register_time') < session('time_past') + 60) {
            $data['shop_register_time'] = $_SERVER['REQUEST_TIME'];
            $data['shop_openid'] = session('shop_openid');
            $data['shop_headimgurl'] = session('shop_headimgurl');
            $data['shop_nickname'] = session('shop_nickname');
            $map['shop_tel'] = session('shop_tel');
            $shop = D('shop')->where($map)->data($data)->save();
            if (!empty($shop)) {
                session_destroy();
                $this->display('success');
            } else {
                session_destroy();
                echo '注册信息写入数据库失败';
            }
        } else {
            session_destroy();
            $this->display('failed');
        };
    }
}
