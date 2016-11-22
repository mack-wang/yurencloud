<?php
include "libs/Smarty.class.php";
$smarty = new smarty();
$smarty -> template_dir = "templates";
$smarty -> compile_dir = "templates_c";

//分配变量
$smarty -> assign('score',100);
$smarty -> assign('love',true);
//数组的分配
$user = array('张三','李四','王五');
$smarty -> assign('user',$user);
//关联数组的分配
$name = array('id'=>1, 'name'=>'黄药师','nicname'=>'英雄');
$smarty -> assign('name',$name);






//在指定html中显示
$smarty -> display('assign.tpl');