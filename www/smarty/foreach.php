<?php
include "libs/Smarty.class.php";
$smarty = new Smarty();
$smarty->template_dir = "templates";
$smarty->compile_dir = "templates_c";

//建立数组
$user = array('i am 1','i am ','i am 3');
$smarty ->assign('user',$user);

$myarr = array('id'=>1,'name'=>'wlc','nicname'=>'wanglecheng');
$smarty ->assign('myarr',$myarr);


$table = array(
	array('id'=>1,'name'=>'张三','nicname'=>'小张','money'=>3000),
	array('id'=>2,'name'=>'李四','nicname'=>'小李','money'=>33000),
	array('id'=>3,'name'=>'王五','nicname'=>'小王','money'=>4000),
	array('id'=>4,'name'=>'老六','nicname'=>'小老','money'=>6000),
);
$smarty ->assign('table',$table);
$smarty->display("foreach.tpl");