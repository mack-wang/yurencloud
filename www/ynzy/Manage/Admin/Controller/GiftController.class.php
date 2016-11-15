<?php
//命名空间
namespace Admin\Controller;

use Think\Controller;
use Tools\AdminController;

class GiftController extends \Tools\AdminController
{
    public function giftshop()
    {
        $gift = new \Model\GiftModel();
        $a = $gift->fetchdata();
        $ass = array('num' => $a['num'], 'info' => $a['pageinfo'], 'pagelist' => $a['pagelist']);
        $this->assign($ass);
        $this->display();
    }
}
