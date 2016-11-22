<?php

//命名空间 php5.3以后版本支持
namespace Model;

use Think\Model;

class ShopModel extends Model
{
    //设置验证规则
    // 是否批处理验证
    protected $patchValidate = true;
    // 自动验证定义
    protected $_validate = array(
        array('shop_name', 'require', '*用户名不能为空'),
        array('shop_name', '/^[_\x{4e00}-\x{9fa5}\d]{3,40}$/iu', '*用户名3-40个字符，不允许使用特殊符号'),
        array('shop_tel', '/^[(86)|0]?(13\d{9})|(15\d{9})|(18\d{9})$/', '*手机号格式不对'),
        array('shop_name', '', '*店铺名重复', 0, 'unique'),
        array('shop_tel', '', '*手机号重复', 0, 'unique'),
    );

    // 静态定义
    protected $_auto = array(
        array('create_time', 'mydate', 1, 'callback'), // 对admin_time字段在更新的时候,用下面的一个回调函数，写入格式化时间
    );

    protected function mydate()
    {
        return date("Y-m-d H:i:s");
    }

    //显示所有店铺的分页的函法方法
    public function fetchData()
    {
        $per = ($_GET['per']) ? $_GET['per'] : 7;
        $num = ($_GET['page']) ? $_GET['page'] : 1;
        $num = ($num - 1) * $per;
        $a = $_GET['shop_name'];
        $b = $_GET['shop_tel'];
        //用||表示或（其中一个条件成立，就执行），用&&表示和（全部成立才执行）
        switch ($a || $b) {
            case $a:
                $map = D('shop')->where("shop_name='$a'")->field('shop_id')->find();
                break;
            case $b:
                $map = D('shop')->where("shop_tel='$b'")->field('shop_id')->find();
                break;
        }
        //统计符合查询条件的店铺信息数量,对$map进行判断，有就执行问号后面，无就执行冒号后面
        $total = ($map) ? $this->where($map)->count() : $this->count();
        //② 实例化分页类Page对象[实例化的意思思就是引入，并赋予某个$值]
        $page = new \Tools\Page($total, $per);
        //③ 获得分页信息，并限制每页显示条数，对$map进行判断，分别执行
        $pageinfo = ($map) ? $this->where($map)->order('shop_id asc')->limit($page->offset, $per)->select() : $this->order('shop_id asc')->limit($page->offset, $per)->select();
        //④ 获得页码列表信息，并返回一个数组信息【分页显示的内容，分页的操作列表】
        $pagelist = $page->fpage(array(3, 4, 5, 6, 7, 2, 8, 0));
        return array('num' => $num, 'pageinfo' => $pageinfo, 'pagelist' => $pagelist);
    }

    //显示所有注册店铺的分页的函法方法
    public function fetchdataRegister()
    {
        $per = ($_GET['per']) ? $_GET['per'] : 7;
        $num = ($_GET['page']) ? $_GET['page'] : 1;
        $num = ($num - 1) * $per;
        $a = $_GET['shop_name'];
        $b = $_GET['shop_nickname'];
        $c = $_GET['shop_tel'];
        $data['shop_openid'] = array('neq', '');
        switch ($a || $b || $c) {
            case $a:
                $map = D('shop')->where("shop_name='$a'")->where($data)->field('shop_id')->find();
                break;
            case $b:
                $map = D('shop')->where("shop_nickname='$b'")->where($data)->field('shop_id')->find();
                break;
            case $c:
                $map = D('shop')->where("shop_tel='$c'")->where($data)->field('shop_id')->find();
                break;
        }
        if (empty($map)) {
            $map['shop_openid'] = array('neq', '');
        }
        $total = $this->where($map)->count();
        $page = new \Tools\Page($total, $per);
        $pageinfo = $this->where($map)->order('shop_id asc')->limit($page->offset, $per)->select();
        $pagelist = $page->fpage(array(3, 4, 5, 6, 7, 2, 8, 0));
        return array('num' => $num, 'pageinfo' => $pageinfo, 'pagelist' => $pagelist);
    }

}
