<?php
namespace Man;
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 7/26/2017
 * Time: 1:42 PM
 */
interface Shop//老板定义了接口，让程序员去继承这个接口
{
    /*
     * params: int $id
     * return: int $userName
     * */
    public function buy($id);//假设团队多人开发，队长定义了接口，组员分别去实现接口中的部分或者全部方法，队长最后审查，选出符合标准的实现，不好的删除
    public function sell($id);//然后用git合并
    public function view($id);
}

class BaseShop implements Shop//程序员接入了这个接口，无奈，必须要实现接口要求去实现的方法，而且参数声明都要一样，不然会报错
{                             //无论谁接入了，都要去实现相关方法
    public function buy($id)
    {
        echo 'buy'.$id;
    }

    public function sell($id)
    {
        echo 'sell'.$id;
    }

    public function view($id)
    {
        echo 'view'.$id;
    }

    public function back($id)//接口规定之外的方法也可以写
    {
        echo 'back'.$id;
    }
}

class ChildShop extends SuperMan//用户只要继承了包含带有Shop接口的BashShop类，就可以按接口中的声明来调用方法，因为BaseShop一定会有Shop接口的实现方法
{
    public function useBuy()
    {
        $base = new SuperMan();
    }
}