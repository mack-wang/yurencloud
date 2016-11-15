<?php

namespace App\Http\Controllers\Wechat;

use App\Http\Model\Shop;
use Illuminate\Http\Request;
use App\Http\Requests;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Input;


class LoginController extends Controller
{
    public function login()
    {
        return view('wechat.login');
    }

    public function send()
    {
        $phone = Input::get('phone');
        $result = Shop::where('shop_phone',$phone)->get();
        if($result){
            $data->status=1;
            $data->message="手机号不在白名单中";
            return $data->toJson();
        }
        $rand = 123456;
        session('code', $rand); //测试用，用完要删除
        $ch = curl_init();
        $post_data = array(
            "account" => "sdk_zjbyt",
            "password" => "20151116",
            "destmobile" => $phone,
            "msgText" => "【诚信有礼】您的验证码是：" . $rand . "。请及时输入，切勿泄露！",
            "sendDateTime" => "",
        );
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
        $result = curl_multi_getcontent($ch); //接收上面的回调信息，是字符串
        //调用tempPhone的数据模型存储手机事情和验证码
        //TODO: 要获取用户的微信信息,并存到shop中,以下方法并不行,要改
        $shop = new Shop();
        $shop->shop_code = $rand;
        $shop->deadline = date('Y-m-d H-i-s',time()+60*60);
        $shop->save();

        if ($result > 0) {
            echo "短信发送成功！";
        } else {
            echo "短信发送失败！";
        }
    }

}
