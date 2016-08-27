<?php
header("Content-type: text/html; charset=utf-8");
class person//定义一个类，即一个对象
{
    public $name;//声明一个对象的公共属性（可访问），即一个变量
    static $age;
    const URL='www.baidu.com';//声明常量，不能用$,通常用大写表示，访问的话，同静态变量的方法

    function __construct()
    {
        self::$age++;
    }

    function __call($functionName,$args)//外部调用的函数不存在里，会调用此函数，输出错误提示
    {
        echo "你所调用的函数".$functionName."不存在";
    }

    function say()
    {
        echo "我的网址是" . self::URL;
        echo "<br>";
    }

}

/*----------------------------------------------------------------------------------*/
$person1 = new person();//
$person_string=serialize($person1);//对象串行化，就是把对象里的一些定义的变量，数值，记录下来，并不是把对象全部都记下来。
file_put_contents("file.txt",$person_string);
