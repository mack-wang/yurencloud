<?php
//命名空间
namespace Admin\Controller;

use Think\Controller;
//使用其他命名空间
use Tools\AdminController;

//继承父类
class WedController extends \Tools\AdminController
{
    //显示婚庆推广分页信息
    public function wedshop()
    {
        $wed = new \Model\WedModel();
        $a = $wed->fetchdataWedshop();
        $ass = array('num' => $a['num'], 'info' => $a['pageinfo'], 'pagelist' => $a['pagelist']);
        $this->assign($ass);
        $this->display();
    }
}
