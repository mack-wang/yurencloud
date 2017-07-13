<?php
require "./dbhelp.php";
$db = new dbhelp();

$input = 'helle';

$a = $db->sql("select * from words where Word = '$input';");

if($a){
    echo "存在";
}else{
    $input = metaphone($input);
    $a = $db->sql("select * from words where meta = '$input';");
    var_dump($a);
}


//$len = ($db->sql("select count(ID) from words;"))["count(ID)"];
////var_dump($len);
//
//for($i=0;$i<$len;$i++){
//    $b = $db->sql("select Word from words where ID = '$i';");
//    $meta = metaphone($b["Word"]);
//    $db->sql("update words set meta = '$meta' where ID = '$i';");
//}
