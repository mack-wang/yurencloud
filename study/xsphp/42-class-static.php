<?php
header("Content-type: text/html; charset=utf-8");
class person//定义一个类，即一个对象
{
    public $name;//声明一个对象的公共属性（可访问），即一个变量
    static $age;//声明一个对象的公共属性（可访问），即一个变量

    function __construct()
    {
        self::$age++;
    }

    function say()
    {
        echo "我的名年龄是" . self::$age;//this是指本对象，即person
        echo "<br>";
    }

}

/*----------------------------------------------------------------------------------*/
person::$age=1;
$person1 = new person();//调用了6次，age变成了1+6，无论从哪个实例化对象进行访问，age都是7
$person2 = new person();//访问静态成员一定要用 内部用  self::$name  外部用  类名：：$name  这样来访问和设置
$person3 = new person();//static是会进行累加，但仅限当次执行的累加
$person4 = new person();//
$person5 = new person();//
$person6 = new person();//

echo $person3->say();
