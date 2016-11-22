<?php
header("Content-type: text/html; charset=utf-8");
class person//定义一个类，即一个对象
{
    public $name;//声明一个对象的公共属性（可访问），即一个变量
    public $age;//声明一个对象的公共属性（可访问），即一个变量

    public function say()
    {
        echo "我的名字是" . $this->name;//this是指本对象，即person
        echo "<br>";
    }

    function __destruct()//析构函数，全部对象引用执行完之后，最后的时候调用1次，常用来清理！
    {
        echo "执行结束后，统一加上这一句".$this->name;
    }
}

$person1 = new person();
$person1->name="王乐城";
$person1->say();
$person2 = new person();
$person2->say();
$person3 = new person();
$person3->say();
