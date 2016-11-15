<?php
//后台普通控制器的父类
namespace Tools;

use Think\Controller;

class AdminController extends Controller
{
    //构造方法
    public function __construct()
    {

        //为了避免覆盖父类的构造方法，先执行父类的构造方法
        parent::__construct();
        //获取控制器名字
        $admin_name = session('admin_name');
        $ttt['controller_name'] = CONTROLLER_NAME;
        $ttt['action_name'] = ACTION_NAME;
        //用户没有登录系统，就使其退出并进入到登录页面
        //有一些操作，允许在"退出的状态"也让访问
        //① 用户不在登录状态
        //② 用户的操作 还没有在$rang_ac出现
        if (empty($admin_name) && $ttt != array('controller_name' => 'Manage', 'action_name' => 'login')) {
            /*$this -> redirect('Manager/login');*/
            echo '<script>';
            echo 'window.top.location.href= "/ynzy/Manage/index.php/Admin/Manage/login"';
            echo '</script>';
            exit();
        }

    }
}
