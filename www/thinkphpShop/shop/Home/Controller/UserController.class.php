<?php
//用户控制器
//命名空间
namespace Home\Controller;
use Think\Controller;
class UserController extends Controller {
    //登入系统
    function login(){
        $this->show();
    }
    function register(){
        $this->show();
    }
}