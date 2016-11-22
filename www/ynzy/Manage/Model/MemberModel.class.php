<?php
namespace Model;

use Think\Model;
use Think\Model\RelationModel;

class MemberModel extends RelationModel
{
    protected $_link = array(
        'shop' => array(
            'mapping_type' => self::BELONGS_TO, //父表member要用非主键id----member_shop_id关联子表shop，用belongs_to;如果父表shop用自己的主键id去关联子表member的member_shop_id，用has_one
            'class_name' => 'shop', //要关联的模型，连接yn_shop数据表
            'mapping_name' => 'shop', //获取数据时要提交的名字，D('shop')
            'mapping_fields' => array('shop_id', 'shop_group', 'shop_name'), //在shop中要获取的字段数据
            'foreign_key' => 'shop_id', //父表member要用他的member_shop_id，去关联子表shop[为什么我前面从来没有提到shop_id，他也能自动把member_shop_id和shop_id绑定上，因为在选择了BELONGS_TO时，就已经决定了foreign_key会和子表的主键id进行配对，子表shop的主键id是shop_id]
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

    //显示所有注册会员的分页方法
    public function fetchdataMember()
    {
        $a = $_GET['shop_name'];
        $b = $_GET['member_nickname'];
        $c = $_GET['member_tel'];
        $per = ($_GET['per']) ? $_GET['per'] : 7;
        $num = ($_GET['page']) ? $_GET['page'] : 1;
        $num = ($num - 1) * $per;
        switch ($a || $b || $c) {
            case $a:
                $map = D('shop')->where("shop_name='$a'")->field('shop_id')->find();
                break;
            case $b:
                $map['member_nickname'] = $b;
                break;
            case $c:
                $map['member_tel'] = $c;
                break;
        }
        $total = ($map) ? $this->where($map)->count() : $this->count();
        $page = new \Tools\Page($total, $per);
        $pageinfo = ($map) ? $this->relation('shop')->where($map)->order('member_id asc')->limit($page->offset, $per)->select() : $this->relation('shop')->order('member_id asc')->limit($page->offset, $per)->select();
        $pagelist = $page->fpage(array(3, 4, 5, 6, 7, 2, 8, 0));
        return array('num' => $num, 'pageinfo' => $pageinfo, 'pagelist' => $pagelist);
    }
}
