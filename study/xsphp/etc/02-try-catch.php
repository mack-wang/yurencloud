<?php
try{
  $error = 'i am error';//创建一个异常对象
  throw new Exception($error);//用该语句抛出
} catch (Exception $e){
  echo 'caught exception:', $e->getMessage(),"<br>";//捕获异常，并输出
}
echo "hello";//程序没有崩溃，则向下执行
