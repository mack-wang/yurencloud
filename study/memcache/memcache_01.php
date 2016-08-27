<?php
header("content-type:text/html;charset=utf-8");
//php操作memcache
//①实例化memcache
$mem =new  Memcache();
//②连接memcache，11211是默认监听的端口
$mem -> connect('localhost',11211);
//③查看是否连接成功
$mem -> set('wlc','是王乐城',0);
echo "执行完成！";
