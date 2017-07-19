<?php

/*如果字符串是包围在双引号（"）中， PHP 将对一些特殊的字符进行解析,制表符这些测试时输出html没有直接效果，但在命令行下有效果*/

echo "你\$好，我\n们都\r是\t中国\v人<br>";

/*
\n	换行（ASCII 字符集中的 LF 或 0x0A (10)）
\r	回车（ASCII 字符集中的 CR 或 0x0D (13)）
\t	水平制表符（ASCII 字符集中的 HT 或 0x09 (9)）
\v	垂直制表符（ASCII 字符集中的 VT 或 0x0B (11)）（自 PHP 5.2.5 起）
\e	Escape（ASCII 字符集中的 ESC 或 0x1B (27)）（自 PHP 5.4.0 起）
\f	换页（ASCII 字符集中的 FF 或 0x0C (12)）（自 PHP 5.2.5 起）
\\	反斜线
\$	美元标记
\"	双引号
\[0-7]{1,3}	符合该正则表达式序列的是一个以八进制方式来表达的字符
\x[0-9A-Fa-f]{1,2}	符合该正则表达式序列的是一个以十六进制方式来表达的字符
*/

//heredoc来引用字符串，效果和双引号差不多，主要用来引用大段字符串，可以解析变量
//<<<自定义超始名
//大段字符串
//自定义结束名

echo <<<EOD
你好我们都是中国人<br>
哈哈<br>
是的<br>
EOD;
$name = "mack";
echo <<<MACK
你好我们都是中国人$name<br>
哈哈<br>
是的
MACK;

//在 PHP 5.3.0 以后，也可以用 Heredoc 结构来初始化静态变量和类的属性和常量：(效果同双引号)

$baz = <<<FOOBAR
Property example
Property example
Property example
Property example
FOOBAR;

//要起始名加双引号声明标识符，测试时提示错误
echo <<<"FOO"
Hello World!2
FOO;

//nowdoc,在起始名加单引号，就是nowdoc，不对其中的内容进行任何解析，同单引号
echo <<<'BAR'
Hello World!2$NAME
BAR;

class obj{
    public $age = 23;
}

$obj = new obj();

echo "我的年龄是 {$obj->age}";//虽然不加花括号也没事，但是在解析复杂的变量是，尽量添加花括号，以保证正确解析

//可以直接通过下标来读取字符
$str = "abckefbhij";
echo "$str[3]";//k

printf("%s",$str);

var_dump(chunk_split("hello",2));

var_dump(count_chars("a"));
var_dump(hex2bin("ff"));
var_dump(bin2hex("1000101"));

printf("%x",bin2hex("10"));

//把默认的nl（在命令行中才有效果）换行换成html的换行
echo nl2br($baz);

?>