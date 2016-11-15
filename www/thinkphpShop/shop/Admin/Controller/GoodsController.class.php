<?php
//后台商品控制器
namespace Admin\Controller;
use Think\Controller;


class GoodsController extends Controller
{
	//列表展示
	function showlist()
	{
		$goods = new \Model\GoodsModel();
		$info = $goods -> select();
		$this ->assign('info',$info);
		//dump($goods);
		$this->display();
	}
	//添加商品
	function tianjia()
	{
		$this->display();
	}
	//修改商品
	function upd()
	{
		$this->display();
	}
}