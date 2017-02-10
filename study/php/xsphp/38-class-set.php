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

    function __set($privateName,$privateValue)//通过这个，可以集中去访问私有变量，并设置私有变量，只写，不能读
    {
        if ($privateName=="name"){
            if($privateValue!="王小帅"){
                return;
            }
        }

        if($privateName=="age"){
            if($privateValue!=18){
                return;
            }
        }
        $this->$privateName=$privateValue;//前面是判断去除非法值，这里才是设置set
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
$person1->name="王小帅";//因为__set的魔术方法，使得我们可以设置私有变量
$person1->age="18";//因为__set的魔术方法，使得我们可以设置私有变量
$person1->say2();
$person1->say();
