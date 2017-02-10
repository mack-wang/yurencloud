<?php
header("Content-type: text/html; charset=utf-8");
class person//定义一个类，即一个对象
{
    public $name;//声明一个对象的公共属性（可访问），即一个变量

    public function say()
    {
        echo "我的名字是" . $this->name;//this是指本对象，即person
    }
}

$person1 = new person();//要在类之外调用，用new来实例化对象，并将对象的引用附给$person1
$person1->name = "王乐城";//引用对象中的name属性，并设置该属性为王乐城
$person1->say();//引用对象中的say方法，直接输出
echo "<br>";
