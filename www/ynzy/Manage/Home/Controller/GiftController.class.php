<?php
//命名空间
namespace Home\Controller;

//使用其他命名空间
use Think\Controller;

//继承父类
class ShopController extends Controller
{
//添加店铺
    public function update()
    {
        //实例化店铺表，连接店铺表
        $shop = D('Shop');
        //用if收集表单，同时展示表单
        if (!empty($_POST)) {
            //收集表单
            $z = $shop->add($_POST);
            if ($z) {
                //$this ->redirect (地址分组/控制器/操作方法，参数，间隔时间，提示信息)
                $this->redirect('shop', array(), 2, '添加店铺成功！');
            } else {
                $this->redirect('update', array(), 2, '添加店铺失败！');
            }
        } else {
            $this->display();
        }
    }

    public function change($shop_id)
    {
        if (!empty($_POST)) {
            $shop = D('Shop');
            $z = $shop->save($_POST);
            if ($z) {
                $this->redirect('shop', array(), 2, '修改店铺成功！');
            } else {
                $this->redirect('update', array(), 2, '修改店铺失败！');
            }
        } else {
            $info = D('Shop')->find($shop_id);
            $this->assign('info', $info);
            $this->display();
        }
    }

    //删除单个商店
    public function del($shop_id)
    {
        $result = D('shop')->where("shop_id = '$shop_id'")->delete();
        $this->display('');
    }

    public function shop()
    {
        $get_shop_id = I('get.shop_id');
        $get_shop_id2 = $_GET['shop_id'];
        $get_shop_name = $_GET['shop_name'];
        if (!empty($get_shop_id)) {
            $shop = D('Shop');
            if (!empty($get_shop_id2)) {
                $map['shop_id'] = I('get.shop_id');
            } else {
                if (!empty($get_shop_name)) {
                    $map['shop_name'] = I('get.shop_name');
                } else {
                    $map['shop_tel'] = I('get.shop_tel');
                }
            }
            //实现数据分页效果
            //① 获得总条数、每页显示条数设置
            $info = $shop->where($map)->select();
            $this->assign('info', $info);
            $this->display();
        } else {
            $shop = D('Shop');
            //实现数据分页效果
            //① 获得总条数、每页显示条数设置
            $cnt = $shop->count(); //获得总条数 sum() max() avg() min()
            //SELECT COUNT(*) AS tp_count FROM `sw_goods` LIMIT 1
            $per = 7;
            //② 实例化分页类对象
            $page_obj = new \Tools\Page($cnt, $per);
            //③ 制作一条sql语句，获得每页显示的数据
            //$page_obj->limit: 分页工具类会根据当前页码把"limit 偏移量，长度"" 给拼装好
            //并赋值给limit成员属性
            $sql = "select * from yn_shop order by shop_id asc " . $page_obj->limit;
            $info = $shop->query($sql);
            //④ 制作页码列表
            $pagelist = $page_obj->fpage(array(3, 4, 5, 6, 7, 8, 0, 2));
            $this->assign('pagelist', $pagelist);
            $this->assign('info', $info);
            $this->display();
        }
    }

    public function perpage()
    {
        $shop = D('Shop');
        //实现数据分页效果
        //① 获得总条数、每页显示条数设置
        $cnt = $shop->count(); //获得总条数 sum() max() avg() min()
        //SELECT COUNT(*) AS tp_count FROM `sw_goods` LIMIT 1
        if ($_GET) {
            $per = $_GET['per'];
        };
        //② 实例化分页类对象
        $page_obj = new \Tools\Page($cnt, $per);

        //③ 制作一条sql语句，获得每页显示的数据
        //$page_obj->limit: 分页工具类会根据当前页码把"limit 偏移量，长度"" 给拼装好
        //并赋值给limit成员属性
        $sql = "select * from yn_shop order by shop_id asc " . $page_obj->limit;
        $info = $shop->query($sql);
        $total_records = $total;

        //④ 制作页码列表
        $pagelist = $page_obj->fpage(array(3, 4, 5, 6, 7, 8, 0, 2));

        $this->assign('pagelist', $pagelist);
        $this->assign('info', $info);
        $this->display();
    }
}
