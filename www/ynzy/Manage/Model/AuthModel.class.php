<?php

//命名空间 php5.3以后版本支持
namespace Model;

use Think\Model;

class AuthModel extends Model
{
    //设置验证规则
    // 是否批处理验证
    protected $patchValidate = true;

    // 自动验证定义
    protected $_validate = array(
        array('auth_gift', '', '*不能重复添加', 0, 'unique'),
        array('auth_wed', '', '*不能重复添加', 0, 'unique'),
        array('group_name', '/^[_\x{4e00}-\x{9fa5}\d]{2,40}$/iu', '*用户名为2-40个字符'),
    );

    // 静态定义
    protected $_auto = array(
        array('create_time', 'mydate', 1, 'callback'), // 对admin_time字段在更新的时候,用下面的一个回调函数，写入格式化时间
    );

    protected function mydate()
    {
        return date("Y-m-d H:i:s");
    }

    //显示所有进货有礼分组权限的分页的函法方法
    public function fetchdataGift()
    {
        $data = M('group')->order('group_id asc')->select();
        $per = ($_GET['per']) ? $_GET['per'] : 7;
        $num = ($_GET['page']) ? $_GET['page'] : 1;
        $num = ($num - 1) * $per;
        $total = $this->count();
        $page = new \Tools\Page($total, $per);
        $pageinfo = $this->order('auth_gift_id asc')->limit($page->offset, $per)->select();
        $pagelist = $page->fpage(array(3, 4, 5, 6, 7, 2, 8, 0));
        return array('data' => $data, 'num' => $num, 'pageinfo' => $pageinfo, 'pagelist' => $pagelist);
    }

    //显示所有婚庆推广分组权限的分页的函法方法
    public function fetchdataWed()
    {
        $data = M('group')->order('group_id asc')->select();
        $per = ($_GET['per']) ? $_GET['per'] : 7;
        $num = ($_GET['page']) ? $_GET['page'] : 1;
        $num = ($num - 1) * $per;
        $total = $this->count();
        $page = new \Tools\Page($total, $per);
        $pageinfo = $this->order('auth_wed_id asc')->limit($page->offset, $per)->select();
        $pagelist = $page->fpage(array(3, 4, 5, 6, 7, 2, 8, 0));
        return array('data' => $data, 'num' => $num, 'pageinfo' => $pageinfo, 'pagelist' => $pagelist);
    }

    //显示所有分组的分页的函法方法
    public function fetchdataGroup()
    {
        $per = ($_GET['per']) ? $_GET['per'] : 10;
        $num = ($_GET['page']) ? $_GET['page'] : 1;
        $num = ($num - 1) * $per;
        $total = $this->count();
        $page = new \Tools\Page($total, $per);
        $pageinfo = $this->order('group_id asc')->limit($page->offset, $per)->select();
        $pagelist = $page->fpage(array(3, 4, 5, 6, 7, 2, 8, 0));
        return array('num' => $num, 'pageinfo' => $pageinfo, 'pagelist' => $pagelist);
    }
}
