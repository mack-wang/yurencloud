<?php
//命名空间
namespace Home\Controller;

//使用其他命名空间
use Think\Controller;

//继承父类
class WedController extends Controller
{
    public function wed()
    {
        if (!session('?check_openid')) {
            $options = array(
                'token' => 'boyuantang', //填写你设定的key
                'encodingaeskey' => 'qF2HEa87aNW966ZK840R0ByqtasKJRNyriwbWQsdtlF', //填写加密用的EncodingAESKey，如接口为明文模式可忽略
                'appid' => 'wx33252017a06027b1', //填写高级调用功能的app id, 请在微信开发模式后台查询!!!开启后才会有菜单
                'appsecret' => '0c1ac6f09fab1e715614d9fc8a148ccf', //填写高级调用功能的密钥
            );
            //实例化wechat【就是引入这个类】
            $weObj = new \Tools\Wechat($options);
            //调用getOauthAccessToken()这个方法，获取access_token和用户的openid
            $jon = $weObj->getOauthAccessToken($appid = 'wx33252017a06027b1', $appsecret = '0c1ac6f09fab1e715614d9fc8a148ccf');
            //用这个openid获取关注用户的信息【未关注的不能获取，得用网页主动授权的方法】
            $data['shop_openid'] = $jon['openid'];
            //调用getUserInfo()这个方法，传用$openid这个参数，获取用户的信息，返回一个数组。
            $result = D('shop')->where($data)->find();
            if ($result) {
                session('check_openid', $result['shop_openid']);
                $this->display();
            } else {
                $url = urlencode('://www.boyuantang.com/ynzy/Manage/index.php/Home/Index/login');
                echo '<script>';
                echo 'window.top.location.href= "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx33252017a06027b1&redirect_uri=http' . $url . '&response_type=code&scope=snsapi_base&state=1#wechat_redirect"';
                echo '</script>';
                exit();
            }
        } else {
            $this->display();
        }

    }

    public function addwed()
    {
        $wed = new \Model\WedModel();
        //用if判断是否有POST提交数据
        if (IS_POST) {
            //直接在if判断中执行$shop->create,用create验证数据的合法性，并创建数据
            if ($wed->create()) {
                $map['shop_tel'] = I('wed_shop_tel');
                $shop = D('shop')->where($map)->find();
                $data = array(
                    'wed_shop_openid' => $shop['shop_openid'],
                    'wed_shop_group' => $shop['shop_group'],
                    'wed_shop_headimgurl' => $shop['shop_headimgurl'],
                    'wed_shop_nickname' => $shop['shop_nickname'],
                    'wed_shop_name' => $shop['shop_name'],
                    'wed_shop_tel' => I('post.wed_shop_tel'),
                    'wed_name' => I('post.wed_name'),
                    'wed_tel' => I('post.wed_tel'),
                    'wed_order' => I('post.wed_order'),
                    'wed_time' => $_SERVER['REQUEST_TIME'],
                );
                $result = $wed->data($data)->add();
                if ($result) {
                    $tips = '恭喜您提交成功！';
                    $this->assign('$tips', $tips);
                    $this->display('tips');
                } else {
                    $tips = '提交失败，退出重试！';
                    $this->assign('$tips', $tips);
                    $this->display('tips');
                }
            } else {
                //调用getError()来获取验证时出错的提示
                $tips = $wed->getError();
                //把出错信息输出到input的placeholder值上，进行提示
                $this->assign('tips', $tips);
                $this->display('wederror');
            }
        } else {
            $this->redirect('wed', array(), 2, '提交失败！');
        }
    }

}
