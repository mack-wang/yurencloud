<?php
//后台普通控制器的父类
namespace Tools;
use Think\Controller;

class ShopController extends Controller{
    //构造方法
    function __construct(){

        /*//为了避免覆盖父类的构造方法，先执行父类的构造方法
        parent::__construct();
        //获取控制器名字

        $options = array(
                'token'          =>'boyuantang', //填写你设定的key
                'encodingaeskey' =>'qF2HEa87aNW966ZK840R0ByqtasKJRNyriwbWQsdtlF', //填写加密用的EncodingAESKey，如接口为明文模式可忽略
                'appid'          =>'wx33252017a06027b1', //填写高级调用功能的app id, 请在微信开发模式后台查询!!!开启后才会有菜单
                'appsecret'      =>'0c1ac6f09fab1e715614d9fc8a148ccf', //填写高级调用功能的密钥
                );
            //实例化wechat【就是引入这个类】
            $weObj  = new \Tools\Wechat($options);
            //调用getOauthAccessToken()这个方法，获取access_token和用户的openid
            $jon    = $weObj->getOauthAccessToken($appid='wx33252017a06027b1',$appsecret='0c1ac6f09fab1e715614d9fc8a148ccf');
            //用这个openid获取关注用户的信息【未关注的不能获取，得用网页主动授权的方法】
            $openid =$jon['openid'];
            //调用getUserInfo()这个方法，传用$openid这个参数，获取用户的信息，返回一个数组。
            $user   =$weObj->getUserInfo($openid);
            $data['shop_openid']=$user['openid'];
            $result=D('shop')->where($data)->find();

        if($result){
            echo '<script>';
            echo 'window.top.location.href= "/ynzy/Manage/index.php/Home/Index/login"';
            echo '</script>';
            exit();
        }else{
            echo '<script>';
            echo 'window.top.location.href= "/ynzy/Manage/index.php/Home/Index/login"';
            echo '</script>';
            exit();
        }*/

}



}

