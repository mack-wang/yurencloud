<?php
//命名空间
namespace Admin\Controller;

use Think\Controller;
//使用其他命名空间
use Tools\AdminController;

//继承父类
class MemberController extends \Tools\AdminController
{

    //注册会员分页信息
    public function member()
    {
        $member = new \Model\MemberModel();
        $a = $member->fetchdataMember();
        $ass = array('data' => $a['data'], 'num' => $a['num'], 'info' => $a['pageinfo'], 'pagelist' => $a['pagelist']);
        $this->assign($ass);
        $this->display();
    }

    //删除注册会员
    public function delMember($member_id)
    {
        D('member')->where("member_id='$member_id'")->delete();
        echo json_encode(array('status' => 1));
    }

}
