<?php
namespace Model;

use Think\Model;
use Think\Model\RelationModel;

class GiftModel extends RelationModel
{
    //联表查询设置
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

    //参与进货有礼店铺分页方法
    public function fetchdata()
    {
        $per = ($_GET['per']) ? $_GET['per'] : 7;
        $num = ($_GET['page']) ? $_GET['page'] : 1;
        $num = ($num - 1) * $per;
        $a = $_GET['shop_name'];
        $b = $_GET['shop_nickname'];
        $c = $_GET['shop_tel'];
        switch ($a || $b || $c) {
            case $a:
                $map = D('shop')->where("shop_name='$a'")->field('shop_id')->find();
                break;
            case $b:
                $map = D('shop')->where("shop_nickname='$b'")->field('shop_id')->find();
                break;
            case $c:
                $map = D('shop')->where("shop_tel='$c'")->field('shop_id')->find();
                break;
        }
        $total = ($map) ? $this->where($map)->count() : $this->count();
        $page = new \Tools\Page($total, $per);
        $pageinfo = ($map) ? $this->relation('shop')->where($map)->order('gift_id asc')->limit($page->offset, $per)->select() : $this->relation('shop')->order('gift_id asc')->limit($page->offset, $per)->select();
        $pagelist = $page->fpage(array(3, 4, 5, 6, 7, 2, 8, 0));
        return array('num' => $num, 'pageinfo' => $pageinfo, 'pagelist' => $pagelist);
    }

}
