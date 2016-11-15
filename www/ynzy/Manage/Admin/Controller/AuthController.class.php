<?php
//命名空间
namespace Admin\Controller;

use Think\Controller;
use Tools\AdminController;

class AuthController extends AdminController
{
    //进货有礼分组权限列表
    public function giftauth()
    {
        $auth = new \Model\AuthModel('auth_gift', 'yn_');
        $a = $auth->fetchdataGift();
        $ass = array('data' => $a['data'], 'num' => $a['num'], 'info' => $a['pageinfo'], 'pagelist' => $a['pagelist']);
        $this->assign($ass);
        $this->display();
    }

    //婚庆推广分组权限列表
    public function wedauth()
    {
        $auth = new \Model\AuthModel('auth_wed', 'yn_');
        $a = $auth->fetchdataWed();
        $ass = array('data' => $a['data'], 'num' => $a['num'], 'info' => $a['pageinfo'], 'pagelist' => $a['pagelist']);
        $this->assign($ass);
        $this->display();
    }

    //添加进货有礼分组
    public function update()
    {
        if (session('admin_name') == 'admin') {
            $auth = new \Model\AuthModel('auth_gift', 'yn_');
            if (IS_POST) {
                if ($auth->create()) {
                    $auth->add();
                    $this->redirect('giftauth', array(), 2, '进货有礼添加分组成功！');
                } else {
                    //数据分页
                    $tips = $auth->getError(); //获得错误信息
                    $a = $auth->fetchdataGift();
                    $ass = array('tips' => $tips, 'data' => $a['data'], 'num' => $a['num'], 'info' => $a['pageinfo'], 'pagelist' => $a['pagelist']);
                    $this->assign($ass);
                    $this->display('giftauth');}
            } else {
                $this->display();
            }
        } else {
            $this->redirect('giftauth', array(), 2, '你没有权限给进货有礼添加分组！');
        }
    }

    //添加婚庆推广分组
    public function update2()
    {
        if (session('admin_name') == 'admin') {
            $auth = new \Model\AuthModel('auth_wed', 'yn_');
            if (IS_POST) {
                if ($auth->create()) {
                    $auth->add();
                    $this->redirect('wedauth', array(), 2, '婚庆推广添加分组成功！');
                } else {
                    //数据分页
                    $tips = $auth->getError(); //获得错误信息
                    $a = $auth->fetchdataWed();
                    $ass = array('tips' => $tips, 'data' => $a['data'], 'num' => $a['num'], 'info' => $a['pageinfo'], 'pagelist' => $a['pagelist']);
                    $this->assign($ass);
                    $this->display('wedauth');}
            } else {
                $this->display();
            }
        } else {
            $this->redirect('wedauth', array(), 2, '你没有权限给婚庆推广添加分组！');
        }
    }

    //删除进货有礼分组
    public function delGift($auth_gift_id)
    {
        if (session('admin_name') == 'admin') {
            M('auth_gift')->where("auth_gift_id = '$auth_gift_id'")->delete();
            $this->redirect('giftauth', array(), 2, '删除进货有礼的分组成功！');
        } else {
            $this->redirect('giftauth', array(), 2, '你没有权限删除该分组！');
        }

    }

    //删除婚庆推广分组
    public function delWed($auth_wed_id)
    {
        if (session('admin_name') == 'admin') {
            M('auth_wed')->where("auth_wed_id = '$auth_wed_id'")->delete();
            $this->redirect('wedauth', array(), 2, '删除婚庆推广的分组成功！');
        } else {
            $this->redirect('wedauth', array(), 2, '你没有权限删除该分组！');
        }

    }

    //分组列表
    public function group()
    {

        $auth = new \Model\AuthModel('group', 'yn_');
        $a = $auth->fetchdataGroup();
        $ass = array('num' => $a['num'], 'info' => $a['pageinfo'], 'pagelist' => $a['pagelist']);
        $this->assign($ass);
        $this->display();
    }

    //添加分组
    public function updategroup()
    {
        $group = new \Model\AuthModel('group', 'yn_');
        if (session('admin_name') == 'admin') {
            if (IS_POST) {
                //直接在if判断中执行$shop->create,用create验证数据的合法性，并创建数据
                if ($group->create()) {
                    $result = $group->add();
                    $this->redirect('group', array(), 2, '添加分组成功！');
                } else {
                    $this->assign('tips', $group->getError());
                    $this->display();
                }
            } else {
                $this->display();

            }
        } else {
            $this->redirect('group', array(), 2, '你没有权限添加分组！');
        }
    }

    //删除分组
    public function delGroup($group_id)
    {
        if (session('admin_name') == 'admin') {
            $result = M('group')->where("group_id = '$group_id'")->delete();
            if ($result) {
                $this->redirect('group', array(), 2, '删除分组成功！');
            } else {
                $this->redirect('group', array(), 2, '删除分组失败！');
            }
        } else {
            $this->redirect('group', array(), 2, '你没有权限删除该分组！');
        }
    }
}
