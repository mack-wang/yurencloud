<?php
namespace Model;

use Think\Model;
use Think\Model\RelationModel;

class WedModel extends RelationModel
{

    //设置验证规则
    // 是否批处理验证
    protected $patchValidate = true;
    // 自动验证定义
    protected $_validate = array(
        array('wed_name', 'require', '姓名不能为空'),
        array('wed_tel', 'require', '手机号不能为空'),
        array('wed_order', 'require', '未填写'),
        array('wed_name', '/^[_\x{4e00}-\x{9fa5}\d]{2,4}$/iu', '用户名2-4个字符'),
        array('wed_tel', '/^(^0\d{2}-?\d{8}$)|(^0\d{3}-?\d{7}$)|(^\(0\d{2}\)-?\d{8}$)|(^\(0\d{3}\)-?\d{7}$)$|^[(86)|0]?(13\d{9})|(15\d{9})|(18\d{9})$/', '电话号码格式不对'),
        array('wed_tel', '', '电话号码重复', 0, 'unique'),
    );
    //联表查询
    protected $_link = array(
        'shop' => array(
            'mapping_type' => self::BELONGS_TO,
            'class_name' => 'shop',
            'mapping_name' => 'shop',
            'mapping_fields' => array('shop_id', 'shop_headimgurl', 'shop_nickname', 'shop_tel', 'shop_group', 'shop_name'),
            'foreign_key' => 'shop_id',
        ),
    );
    // 静态定义
    protected $_auto = array(
        array('create_time', 'mydate', 1, 'callback'), // 对admin_time字段在更新的时候,用下面的一个回调函数，写入格式化时间
    );

    protected function mydate()
    {
        return date("Y-m-d H:i:s");
    }

    //显示所有参加婚庆推广的店铺的分页的函法方法
    public function fetchdataWedshop()
    {
        $a = I('get.shop_tel');
        $b = I('get.shop_name');
        $c = I('get.wed_tel');
        $d = I('get.wed_name');
        $per = ($_GET['per']) ? $_GET['per'] : 7;
        $num = ($_GET['page']) ? $_GET['page'] : 1;
        $num = ($num - 1) * $per;
        //用||表示或（其中一个条件成立，就执行），用&&表示和（全部成立才执行）
        switch ($a || $b || $c || $d) {
            case $a:
                $map = D('shop')->where("shop_tel='$a'")->field('shop_id')->find();
                break;
            case $b:
                $map = D('shop')->where("shop_name='$b'")->field('shop_id')->find();
                break;
            case $c:
                $map['wed_tel'] = I('get.wed_tel');
                break;
            case $d:
                $map['wed_name'] = I('get.wed_name');
                break;
        }
        $total = ($map) ? $this->where($map)->count() : $this->count();
        $page = new \Tools\Page($total, $per);
        $pageinfo = ($map) ? $this->relation('shop')->where($map)->order('wed_id asc')->limit($page->offset, $per)->select() : $this->relation('shop')->order('wed_id asc')->limit($page->offset, $per)->select();
        $pagelist = $page->fpage(array(3, 4, 5, 6, 7, 2, 8, 0));
        return array('num' => $num, 'pageinfo' => $pageinfo, 'pagelist' => $pagelist);
    }

}
