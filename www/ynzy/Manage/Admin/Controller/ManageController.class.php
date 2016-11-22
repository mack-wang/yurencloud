<?php
//命名空间
namespace Admin\Controller;

use Think\Controller;
//使用其他命名空间
use Tools\AdminController;

//继承父类
class ManageController extends AdminController
{
    //登入后台
    public function login()
    {
        if (!empty($_POST)) {
            ob_end_clean(); //清缓存，防止上传服务器后验证码图片不显示
            $vry = new \Think\Verify();
            //校验验证码
            if ($vry->check($_POST['admin_verify'])) {
                //校验用户名和密码
                $userpwd = array(
                    'admin_name' => $_POST['admin_name'],
                    'admin_password' => md5($_POST['admin_password']),
                );
                $data['admin_last_logintime'] = date("Y-m-d H:i:s");
                $result = M('admin')->where($userpwd)->save($data); //保存最后登入时间
                $info = M('admin')->where($userpwd)->find();
                if ($info) {
                    //session持久化用户信息，页面跳转
                    session('admin_name', $info['admin_name']);
                    session('admin_id', $info['admin_id']);
                    session('admin_last_logintime', $info['admin_last_logintime']);
                    $this->redirect('Index/index');
                } else {
                    $this->assign('tips_pwd', '用户名或密码错误!');
                }
            } else {
                $this->assign('tips_ver', '验证码错误!');
            }
        }
        $this->display();
    }

    //退出系统
    public function logout()
    {
        //清除session、跳转到Manager/login
        session(null);
        $this->redirect('login');
    }

    //显示所有管理员
    public function admin()
    {
        $admin = new \Model\AdminModel();
        $a = $admin->fetchdata();
        $ass = array('num' => $a['num'], 'info' => $a['pageinfo'], 'pagelist' => $a['pagelist']);
        $this->assign($ass);
        $this->display();
    }

    //修改密码
    public function changepwd()
    {
        $admin = new \Model\AdminModel();
        $data['admin_id'] = I('post.admin_id');
        //不用IS_POST来判断是因为，隐藏域POST了admin_id
        if (I('post.password') || I('post.admin_password') || I('post.admin_password2')) {
            $find = $admin->where($data)->find();
            if (md5(I('post.password')) == $find['admin_password']) {
                if (md5(I('post.password')) == md5(I('post.admin_password'))) {
                    $this->assign('tip', " *原密码和新密码相同");
                    $this->display();
                } else {
                    if ($admin->create()) {
                        $result = $admin->save();
                        $this->redirect('Index/right', array(), 2, '修改密码成功！');
                    } else {
                        //从model中，获取数据验证的错误信息
                        $tips = $admin->getError();
                        $this->assign('tips', $tips);
                        $this->display();
                    }
                }
            } else {
                $this->assign('tip', ' *原密码错误'); //不用tips是防止和上面tips冲突
                $this->display();
            }
        } else {
            $this->display();
        }
    }

    //添加管理员
    public function update()
    {
        if (session('admin_name') == 'admin') {
            $admin = new \Model\AdminModel();
            if (IS_POST) {
                //直接在if判断中执行$shop->create,用create验证数据的合法性，并创建数据
                if ($admin->create()) {
                    $admin->add();
                    $this->redirect('admin', array(), 2, '添加管理员成功！');
                } else {
                    //调用getError()来获取验证时出错的提示
                    $tips = $admin->getError();
                    $this->assign('tips', $tips);
                    $this->display();
                }
            } else {
                $this->display();
            }
        } else {
            $this->redirect('admin', array(), 2, '你没有权限添加管理员！');
        }
    }

    //删除管理员
    public function delAdmin()
    {
        if (session('admin_name') == 'admin') {
            $data['admin_id'] = I('get.admin_id');
            $info = M('admin')->where($data)->find();
            if ($info['admin_name'] == 'admin') {
                $this->redirect('admin', array(), 2, '超级管理员不能被删除！');
            } else {
                $result = M('admin')->where($data)->delete();
                if ($result) {
                    $this->redirect('admin', array(), 2, '删除管理员成功！');
                } else {
                    $this->redirect('admin', array(), 2, '删除管理员失败！');
                }
            }
        } else {
            $this->redirect('admin', array(), 2, '你没有权限删除管理员！');
        }
    }

}
