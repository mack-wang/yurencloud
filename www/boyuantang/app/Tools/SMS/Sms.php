<?php

namespace App\Tools\SMS;


class Sms
{
    public function message($phone)
    {
        $phone="";
        if($phone==""){
            $M3result->status=1;
            $M3result->message="手机号不能为空";
            return $M3result->toJson();
        }
        $rand = 123456;
        session('shortnum', $rand); //测试用，用完要删除
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
        $tempPhone = new TempPhone;
        $tempPhone->phone = $phone;
        $tempPhone->code = $rand;
        $tempPhone->deadline = date('Y-m-d H-i-s',time()+60*60);
        $tempPhone->save();


        if ($result > 0) {
            echo "短信发送成功！";
        } else {
            echo "短信发送失败！";
        }
    }
}
