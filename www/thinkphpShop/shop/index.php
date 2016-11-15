<?php
error_reporting(0);
header("content-type:text/html; charset=utf8");
//设置模式
define('APP_DEBUG', ture);   //开发模式
//define('APPDEBUG', false);   //生产模式

//给系统静态资源文件（html,css,js）请求路径设置常量
//Home前台
define('CSS_URL', '/tp/shop/Home/Public/css/');
define('IMG_URL', '/tp/shop/Home/Public/images/');
define('JS_URL', '/tp/shop/Home/Public/js/');
//Admin后台
define('ADMIN_CSS_URL', '/tp/shop/Admin/Public/css/');
define('ADMIN_IMG_URL', '/tp/shop/Admin/Public/img/');
define('ADMIN_JS_URL', '/tp/shop/Admin/Public/js/');



//引入thinkphp框架接口
include ("../ThinkPHP/ThinkPHP.php");