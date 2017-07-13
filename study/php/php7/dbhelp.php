<?php

class dbhelp{
    static public function sql($sql)
    {
        $mysql_conf = array(
            'host'    => '127.0.0.1:3306',
            'db'      => 'dbtest',
            'db_user' => 'root',
            'db_pwd'  => 'root',
        );

        $mysqli = @new mysqli($mysql_conf['host'], $mysql_conf['db_user'], $mysql_conf['db_pwd']);
        if ($mysqli->connect_errno) {
            die("could not connect to the database:\n" . $mysqli->connect_error);//诊断连接错误
        }
        $mysqli->query("set names 'utf8';");//编码转化
        $select_db = $mysqli->select_db($mysql_conf['db']);
        if (!$select_db) {
            die("could not connect to the db:\n" .  $mysqli->error);
        }

        $res = $mysqli->query($sql);
        if (!$res) {
            die("sql error:\n" . $mysqli->error);
        }


        if(!is_bool($res)){
            $rows = [];
            while ($row = $res->fetch_assoc()) {

                array_push($rows,$row);
            }
            $res->free();
            $mysqli->close();

        }

        return $rows;

    }
}
