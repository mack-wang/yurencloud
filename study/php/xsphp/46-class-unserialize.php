<?php
require "45-class-serialize.php";
$person_string = file_get_contents("file.txt");//解析串行化后的字符串
$person1 = unserialize($person_string);
$person1 ->say();
