<?php
header("content-type:text/html;charset=utf-8");
//php操作memcache
//①实例化memcache
$mem =new  Memcache();
//②连接memcache，11211是默认监听的端口
$result = $mem -> connect('localhost',11211);
//③查看是否连接成功
if($result)
echo '连接memcache成功！';
else
echo '连接memecache失败！';
