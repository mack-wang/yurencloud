<?php
header("Content-type: text/html; charset=utf-8");
final class person//定义一个类，即一个对象
{
    public $name;//声明一个对象的公共属性（可访问），即一个变量
    public $age;//声明一个对象的公共属性（可访问），即一个变量

    function __construct($name="王乐城",$age=2)
    {
        $this->name = $name;
        $this->age = $age;
    }

    final function say()
    {
        echo "我的名字是" . $this->name;//this是指本对象，即person
        echo "<br>";
    }

}
class student extends person
{
    public $student;

    public function study(){
        echo $this->student."正在学习";
    }
}

/*----------------------------------------------------------------------------------*/

$person2 = new student();//student继承了person的人的类，还拥有自己学生的类
echo $person2->name;
echo $person2->age;
$person2->student="李小花";//因为person类加了 final，将不能被继承，但我感觉final不能限制方法
$person2->study();
$person2->say();
