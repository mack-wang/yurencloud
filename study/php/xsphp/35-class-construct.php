<?php
header("Content-type: text/html; charset=utf-8");
class person//定义一个类，即一个对象
{
    public $name;//声明一个对象的公共属性（可访问），即一个变量
    public $age;//声明一个对象的公共属性（可访问），即一个变量

    function __construct($name="王乐城",$age="1")//构造函数，用来初始化对象
    {
      $this->name=$name;//如果使用的函数未传入该参数，则使用默认参数 王乐城
      $this->age=$age;//如果使用的函数未传入该参数，则使用默认参数 1
    }
    public function say()
    {
        echo "我的名字是" . $this->name;//this是指本对象，即person
        echo "<br>";
        echo "我的年龄是" . $this->age;//this是指本对象，即person
    }
}

$person1 = new person();//要在类之外调用，用new来实例化对象，并将对象的引用附给$person1
$person1->name = "王乐城传入";//引用对象中的name属性，并设置该属性为王乐城传入
$person1->say();//引用对象中的say方法，直接输出，由于age未传入，所以使用默认数1
