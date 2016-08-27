<?php
header("Content-type: text/html; charset=utf-8");
class person//定义一个类，即一个对象
{
    public $name;//声明一个对象的公共属性（可访问），即一个变量
    private $age;//声明一个对象的公共属性（可访问），即一个变量

    function __construct($name="王乐城",$age=2)
    {
        $this->name = $name;
        $this->age = $age;
    }

    public function say()
    {
        echo "我的名字是" . $this->name;//this是指本对象，即person
        echo "<br>";
    }

    public function setage($age)
    {
        $this->age=$age;
    }

    public function say2()
    {
        return "hello".$this->age;
    }

    private function say3()
    {
        echo $this->age;
        echo "<br>";
    }
    public function say4()
    {
        echo $this->age;
        echo "<br>";
    }
}

$person1 = new person();
$person1->name="王乐城2";
$person1->say();
/*$person1->age=2; //age已经被封装成私有属性，外部不能访问，调用，设置*/
$person1->say4();//外部能调用公用方法
$person1->setage($age=4);//外部不能直接设置私有属性，但能通过公有方法，间接设置私有属性
echo $person1->say2();//外部不能直接访问私有属性，但能通过仅有方法，间接访问私有属性
$person1->say3();//say3方法已经被封装，私有方法外部不能访问，调用，设置，会报错
