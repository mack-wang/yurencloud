<?php
//命名空间
namespace Admin\Controller;

//使用其他命名空间
use Think\Controller;

//继承父类
class VerifyController extends Controller
{
    public function verifyImg()
    {
        $cfg = array(
            'imageH' => 40, // 验证码图片高度
            'imageW' => 100, // 验证码图片宽度
            'fontSize' => 15, // 验证码字体大小(px)
            'length' => 4, // 验证码位数
            'fontttf' => '4.ttf', // 验证码字体，不设置随机获取
        );
        //实例化Verify类对象
        $very = new \Think\Verify($cfg);
        $very->entry();
    }
}
