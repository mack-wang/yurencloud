<?php
header("Content-type: text/html; charset=utf-8");
class person//定义一个类，即一个对象
{
    private $name;//声明一个对象的公共属性（可访问），即一个变量
    private $age;//声明一个对象的公共属性（可访问），即一个变量

    function __construct($name="王乐城",$age=2)
    {
        $this->name = $name;
        $this->age = $age;
    }

    function __isset($privateName)//通过这个，可以集中去访问私有变量，只读，不写
    {

        if ($privateName=="name") {//禁止判断name是否存在
            return;
        }
        return isset($privateName);//允许判断其他私有属性是否存在
    }

    public function say()
    {
        echo "我的名字是" . $this->name;//this是指本对象，即person
        echo "<br>";
    }

}

$person1 = new person();
var_dump(isset($person1->name));
var_dump(isset($person1->age));//因为__isset的魔术方法，使得我们可以判断私有变量是否存在
