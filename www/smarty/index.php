<?php
//引入smarty的类
include 'libs/Smarty.class.php';
//实例化smarty对象
$smarty = new smarty();
//设置相关属性
$smarty ->template_dir ="templates"; //模板目录
$smarty ->compile_dir ="templates_c"; //编译目录
//分配数据
$smarty ->assign('title','smarty模板引擎');
$smarty ->assign('content','这个模板引擎很棒！');
//载入视图
$smarty ->display('index.tpl');
