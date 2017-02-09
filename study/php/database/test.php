<?php
include 'classes/db.php';
$db = new \Database('localhost', 'root', 'root', 'dbtest');
$table = 'user';

/*
 * 获取指定表中所有信息
 * @access public
 * @param string $table 数据表名称
 * @return array 数据表的详细信息
 * */
$table_msg = $db->select_table($table);
$db->log($table_msg);


/* 略
 * 数据库用户更换 change_user($user,$password)
 * @access public
 * @param string $user 数据库用户名称
 * @param string $password 数据库用户密码
 * @return mixed 数据库连接信息
 * */


/*
* 查询数据库中所有的表名
* @access public
* @return array 数据表的数量和表名
* */
$tables_name = $db->tables();
$db->log($tables_name);



/*
 * 获取指定表的字段详细信息
 * @access public
 * @param string $table 数据表名称
 * @return array 数据表的字段详细信息
 * */
$tables_info = $db->select_table_fields($table);
$db->log($tables_info);//获取表的结构信息，比如Extra : "" Field : "name" Key : "" Null : "YES" Type : "varchar(45)


/*
 * 获取数据表中指定字段信息（允许多字段同时查询）
 * @access public
 * @param mixed $field 指定字段（字符串传入使用，间隔）
 * @return array 数据表中指定字段信息
 * */
$age = $db->getField('age');//单个字段
$db->log($age);
$name_age = $db->getField(['name','age']);//多个字段
$db->log($name_age);


/*
 * 根据查询表达式查询数据(符合条件的所有记录)
 * @access public
 * @return array 满足查询表达式的特定数据
 * */

$tom = $db->where("id=1")->find();
$db->log($tom);

$bob = $db->where("name='bob'")->find();
$db->log($bob);




/*
 * 原生sql命令执行示例
 * 1、创建实例   $dbObj
 * 2、写sql命令  $query
 * 3、执行sql命令 mysqli_query($dbObj,$query)
 * 4、获取结果的条数   相当与javascript中的length，$count
 * 5、遍历结果，把结果写到$arr空数组中
 * 6、释放内存 mysqli_free_result($tables);
 * 7、最后得到结果 $arr
 * */
$dbObj = new \mysqli('localhost','root','root','dbtest','3306');
$query = 'SELECT * FROM shop WHERE id=1';
$tables = mysqli_query($dbObj,$query);
$count = $tables->num_rows;
$arr = array();
for($i=0;$i<$count;$i++){
    $row = $tables->fetch_assoc();
    array_push($arr,$row);
}
mysqli_free_result($tables);
$db->log($arr);


/*
 * 由db.php进行了简单的封装的原生sql执行示例
 * 1、创建实例   $db已经创建
 * 2、写sql命令  $query
 * 3、执行sql命令 $db->query($query)
 * 4、获取结果的条数   相当与javascript中的length，$count
 * 5、遍历结果，把结果写到$arr空数组中  query_handle()
 * 6、释放内存 mysqli_free_result($tables);
 * 7、最后得到结果 $arr
 * */
$result = $db->query($query);
$count2 = $result->num_rows;
$arr2 = array();
for($i=0;$i<$count2;$i++){
    $row2 = $result->fetch_assoc();
    array_push($arr2,$row2);
}
mysqli_free_result($result);
$db->log($arr2);

/*
 * 由我对db.php进行了再封装sql（）方法
 * 1、创建实例   $db已经创建
 * 2、写sql命令  $query
 * 3、执行sql命令 $db->query($query)
 * 4、获取结果的条数   相当与javascript中的length，$count
 * 5、遍历结果，把结果写到$arr空数组中  query_handle()
 * 6、释放内存 mysqli_free_result($tables);
 * 7、最后得到结果 $arr
 * */
echo "<script>console.log('sql()')</script>";
$arr3 = $db->sql($query);
$db->log($arr3);


$query2="SELECT * FROM user WHERE name='linda'";
$arr4 = $db->sql($query2);
$db->log($arr4);



/*
 * 统计函数
 * */

//统计数组中项的总个数
$all = $db->getField('name');
$db->log(count($all));


//统计数组中不重复的个数
//$all1 = $db->getField('name');
//$uni = array_unique($all1);
//$db->log($all);
//$name = $all;
//var_dump(array_unique($name));
//$db->log(count($uni));



/*
 * $db->log()的使用示例
 * */
//$arr10 = ['wlc','wlc2','wlc3'];
//$arr11 = ['wlc'=>23,'wlc2'=>'man','wlc3'=>['tom1','tom2']];
//$db->log($arr10);
//$db->log($arr11);
//$db->log('hello');
//$db->log(12);









//protected function sql(){
    /*
     * 基本SQL语句
     * 插入数据：INSERT INTO tb_name(id,name,score)VALUES(NULL,'张三',140),(NULL,'张四',178),(NULL,'张五',134);
     * 更新语句：UPDATE tb_name SET score=189 WHERE id=2;
     * 删除数据：DELETE FROM tb_name WHERE id=3;
     * WHERE语句：SELECT * FROM tb_name WHERE id=3;
     * HAVING 语句：SELECT * FROM tb_name GROUP BY score HAVING count(*)>2
     * 相关条件控制符：=、>、<、<>、IN(1,2,3......)、BETWEEN a AND b、NOT AND 、OR Linke()用法中      %  为匹配任意、  _  匹配一个字符（可以是汉字）IS NULL 空值检测
     * MySQL的正则表达式：SELECT * FROM tb_name WHERE name REGEXP '^[A-D]'   //找出以A-D 为开头的name
     * */
//}





//$db = new \mysqli('localhost','root','901230','weixin');
//$db->select_db('visitor');
//dump($db->error());
//$db->change_user('helen','901230');
//$table = 'user';
////dump($db->select_table_fields($table));
////dump($db->error());
//$db->select_table($table);
//$param1 = '123';
//$param2 = 'id>1,record>100';
//$param3 = array(
//    /*array('count'=>1,'openid'=>'123','record'=>'100'),
//    array('count'=>2,'openid'=>'234','record'=>'200'),*/
//    array('count' => 4, 'openid' => '456', 'record' => '500')
//);
//$param4 = array('count' => 4, 'openid' => '456', 'record' => '500');
////dump($db->where('id=4')->save($param4));
//dump($db->where('count=4')->delete());
//
//die;
//dump($db->data($param3)->add());
//dump(array_keys($param3));
//dump(array_values($param3));
//dump(implode(',', array_values($param3)));
//dump(implode(',', array_keys($param3)));
//
//dump($db->where($param2)->order('id')->limit(2)->find());
//dump($db->options_handle($param1));
//dump($db->options_handle($param2));
//dump($db->options_handle($param3));
//$array = array('id', 'count');
//
//$num = '123';
//if (is_string($num)) {
//    echo 'true';
//}
//
//dump($db->getField($array));
//dump($db->select_table_fields($table));
/*$array = array('a','b');
$array1 = array();
dump($db->getField('a,b'));
dump($db->getField($array));
dump($db->getField($array1));
dump($db->getField(''));*/
/*$str = '';
if(empty($str)){
    echo 'true';
}*/
/*$model = M('zyd_fuweng_user');
$res = $model->getField('create_time,count');
dump($res);*/
//die;
////
//$table = 'zyd_fuweng_user';
////选择指定的数据库，并返回其中全部信息
//$table_msg = $db->select_table($table);
////选择指定数据库，返回数据库的字段信息
//$table_field_msg = $db->select_table_fields($table);
////条件搜索，传入条件均为数据
//$where = array(
//    'id' => 1
//);
//$data = array(
//    'headimgurl' => 'helen.jpg'
//);
//dump($db->where($where)->field('field'));
//dump($table);


//$dbObj = new \mysqli('localhost','helen','901230','weixin','3306');
////$query = 'select * from zyd_fuweng_user';
//$query = 'show fields from zyd_fuweng_user';
//$tables = mysqli_query($dbObj,$query);
////dump($tables);
//$count = $tables->num_rows;
//$arr = array();
//for($i=0;$i<$count;$i++){
//    $row = $tables->fetch_assoc();
//    //dump($row);
//    array_push($arr,$row);
//}
//mysqli_free_result($tables);
//dump($arr);
//die;
//$query1 = 'select * from zyd_fuweng_user';
//$table_msg = mysqli_query($dbObj,$query1);
////输出查询结果
//$num = $table_msg->num_rows;
//for($i=0;$i<$num;$i++){
//    $row = $table_msg->fetch_assoc();
//    dump($row);
//}
//dump($dbObj);
//dump($tables);
//dump($table_msg);
//$res = mysqli_close($dbObj);
//dump($res);*/