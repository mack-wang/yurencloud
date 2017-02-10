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

    function __get($privateName)//通过这个，可以集中去访问私有变量，只读，不写
    {
        if ($privateName=="name") {
            return "保密";
        }

        if ($privateName=="age") {
            return $this->age;
        }
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
        echo "hello".$this->age;
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
echo $person1->name;//因为__set的魔术方法，使得我们可以设置私有变量
echo $person1->age;//因为__set的魔术方法，使得我们可以设置私有变量
