<?php
//命名空间
namespace Admin\Controller;

use Think\Controller;
//使用其他命名空间
use Tools\AdminController;

//继承父类
class ShopController extends \Tools\AdminController
{
    //分页显示所有店铺信息
    public function shop()
    {
        $shop = new \Model\ShopModel();
        $a = $shop->fetchdata();
        $ass = array('num' => $a['num'], 'info' => $a['pageinfo'], 'pagelist' => $a['pagelist']);
        $this->assign($ass);
        $this->display();
    }

    //显示所有注册店铺信息
    public function register()
    {
        $shop = new \Model\ShopModel();
        $a = $shop->fetchdataRegister();
        $ass = array('num' => $a['num'], 'info' => $a['pageinfo'], 'pagelist' => $a['pagelist']);
        $this->assign($ass);
        $this->display();
    }

    //添加店铺
    public function update()
    {
        $info = M('group')->order('group_id asc')->select();
        $this->assign('info', $info);
        $shop = new \Model\ShopModel();
        //用if判断是否有POST提交数据
        if (IS_POST) {
            //直接在if判断中执行$shop->create,用create验证数据的合法性，并创建数据
            if ($shop->create()) {
                $shop->add();
                $this->redirect('shop', array(), 2, '添加店铺成功！');
            } else {
                //调用getError()来获取验证时出错的提示
                $this->assign('tips', $shop->getError());
                $this->display();
            }
        } else {
            $this->display();
        }
    }

    //修改店铺
    public function change($shop_id)
    {
        $infos = M('group')->order('group_id asc')->select();
        $this->assign('group', $infos);
        //实例化店铺数据，引入ShopModel.class.php这个类，不能用D函数或M函数来实例化！
        $shop = new \Model\ShopModel();
        if (IS_POST) {
            if ($shop->create()) {
                $shop->save();
                $this->redirect('shop', array(), 2, '修改店铺成功！');
            } else {
                //调用getError()来获取验证时出错的提示
                $this->assign('info', $shop->find($shop_id));
                //把出错信息输出到input的placeholder值上，进行提示
                $this->assign('tips', $shop->getError());
                $this->display();
            }
        } else {
            $this->assign('info', $shop->find($shop_id));
            $this->display();
        }
    }

    //删除单个商店
    public function del($shop_id)
    {
        $shop_id = I('get.shop_id');
        D('shop')->where("shop_id='$shop_id'")->delete();
        echo json_encode(array('status' => 1));
    }

    //在添加店铺页面显示分组选择
    public function group()
    {
        $info = M('group')->order('shop_id asc')->select();
        $this->assign('info', $info);
        $this->display('update');
    }
}
