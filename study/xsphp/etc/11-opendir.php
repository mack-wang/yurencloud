<?php
$dirname='dirname';
$dir_handle = opendir($dirname);
/*mkdir("php");*///在当前目录下创建php文件夹，文件夹不能已经存在
rmdir("php");//在当前目录下删除php文件夹，文件夹得为空才能删除
