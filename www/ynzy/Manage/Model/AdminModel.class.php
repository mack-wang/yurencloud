<?php

//命名空间 php5.3以后版本支持
namespace Model;

use Think\Model;

class AdminModel extends Model
{
    //设置验证规则
    // 是否批处理验证
    protected $patchValidate = true;
    // 自动验证定义
    protected $_validate = array(

        array('admin_password', '/^[\\~!@#$%^&*()-_=+|{}\[\],.?\/:;\'\"\d\w]{6,20}$/', '*密码只能是6-20位的字母数字符号'),
        array('admin_password2', '/^[\\~!@#$%^&*()-_=+|{}\[\],.?\/:;\'\"\d\w]{6,20}$/', '*密码只能是6-20位的字母数字符号'),
        array('admin_password', 'admin_password2', '*密码和重复密码不一致', 0, 'confirm'),
        //正则式一定要/^开头，$/结尾，{1，5}相邻的[]表示1-5个字符
        array('admin_name', '/^[a-zA-Z][a-zA-Z0-9_]{2,15}$/', '*字母开头3到15位的英文或数字'),
        //手机号只能是13，15，18开头的
        array('admin_tel', '/^[(86)|0]?(13\d{9})|(15\d{9})|(18\d{9})$/', '*手机号格式不对'),
        array('admin_name', '', '管理员账号重复', 0, 'unique'),
        array('admin_tel', '', '管理员手机号重复', 0, 'unique'),
        array('create_time', 'time', 2, 'function'),
    );
    // 静态定义
    protected $_auto = array(
        array('admin_password', 'md5', 3, 'function'), // 对admin_password字段在新增和编辑的时候使md5函数处理
        array('admin_password2', 'md5', 3, 'function'), // 对admin_password2字段在新增和编辑的时候使md5函数处理
        array('create_time', 'mydate', 1, 'callback'), // 对admin_time字段在更新的时候,用下面的一个回调函数，写入格式化时间
    );

    protected function mydate()
    {
        return date("Y-m-d H:i:s");
    }
//显示所有管理员的分页的函法方法
    public function fetchData()
    {
        $per = ($_GET['per']) ? $_GET['per'] : 7;
        $num = ($_GET['page']) ? $_GET['page'] : 1;
        $num = ($num - 1) * $per;
        $total = $this->count();
        $page = new \Tools\Page($total, $per);
        $pageinfo = $this->order('admin_id asc')->limit($page->offset, $per)->select();
        $pagelist = $page->fpage(array(3, 4, 5, 6, 7, 2, 8, 0));
        return array('num' => $num, 'pageinfo' => $pageinfo, 'pagelist' => $pagelist);
    }
}
