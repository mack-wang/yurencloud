<?php

//设置调试模式、生产模式
define("APP_DEBUG", true);//调试模式
//define("APP_DEBUG", false);//生产模式


//给静态文件css,img,js做访问路径配置
//前端配置声明
define('HOME_CSS_URL','/ynzy/Manage/Home/Public/css/');
define('HOME_IMG_URL','/ynzy/Manage/Home/Public/img/');
define('HOME_JS_URL','/ynzy/Manage/Home/Public/js/');
define('HOME_FONT_URL','/ynzy/Manage/Home/Public/font/');
//后端配置声明
define('ADMIN_CSS_URL','/ynzy/Manage/Admin/Public/css/');
define('ADMIN_IMG_URL','/ynzy/Manage/Admin/Public/img/');
define('ADMIN_JS_URL','/ynzy/Manage/Admin/Public/js/');
define('ADMIN_FONT_URL','/ynzy/Manage/Admin/Public/font/');


//引入tp框架接口文件
include ("../ThinkPHP/ThinkPHP.php");
