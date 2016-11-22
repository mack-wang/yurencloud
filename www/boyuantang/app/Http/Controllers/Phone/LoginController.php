<?php

namespace App\Http\Controllers\Phone;

use App\Http\Model\Shop;
use App\Http\Model\ShopCode;
use Illuminate\Http\Request;
use App\Tools\Models\Result;
use App\Http\Requests;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Input;

class LoginController extends Controller
{
    public function login()
    {
        return view('phone.login');
    }

    public function send()
    {
        $Result = new Result();
        $phone = Input::get('phone');
        $result = Shop::where('shop_phone', $phone)->get();
        if ($result->isEmpty()) {
            $Result->status = 1;
            $Result->message = "手机号不在白名单中";
            return $Result->toJson();
        }
        $rand = 123456;
/*        $ch = curl_init();
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
        */
        $shopcode = new ShopCode();
        $shopcode->shop_phone = $phone;
        $shopcode->shop_code = $rand;
        $shopcode->save();
        $Result->status = 0;
        return $Result->toJson();
/*        if ($result2) {
            echo "短信发送成功！";
        } else {
            echo "短信发送失败！";
        }*/
    }

    public function index()
    {
        return view('phone.index');
    }

    public function check()
    {
        //TODO:验证码已经储存在数据库,准备验证
        $Result = new Result();
        $phone = Input::get('phone');
        $code = Input::get('code');

        $result = ShopCode::where('shop_phone',$phone)->get();
        if ($result->isEmpty()){
            $Result->status = 1;
            $Result->message = "手机号不在白名单中";
            return $Result->toJson();
        }
        if(time()-3 > $result['updated_at']){
            $Result->status = 1;
            $Result->message = "验证码过期";
            return $Result->toJson();
        }
        if($code != $result['shop_code']){
            $Result->status = 1;
            $Result->message = "验证码不正确";
            return $Result->toJson();
        }
        $Result->status = 0;
        return $Result->toJson();

    }
}
