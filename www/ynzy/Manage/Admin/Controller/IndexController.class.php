<?php
//命名空间
namespace Admin\Controller;

use Think\Controller;
//使用其他命名空间
use Tools\AdminController;

//继承父类
class IndexController extends \Tools\AdminController
{
    public function index()
    {
        $this->display();
    }

    public function right()
    {
        $shopCount = M('Shop')->count("shop_id");
        $memberCount = M('Member')->count("member_id");
        $this->assign('shopCount', $shopCount);
        $this->assign('memberCount', $memberCount);
        $this->display();
    }
}
