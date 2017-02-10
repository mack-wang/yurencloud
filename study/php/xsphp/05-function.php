<?php
header("Content-type: text/html; charset=utf-8");
/**
自定义函数table，声明三个参数，参数之间用逗号隔开；
@param string $tableName    需要一个字符串类型的表名
@param int $rows   需要一个整型数值设置表格的行数
@param int $cols   需要一个整型数值设置表格的列数
 */
function table($tableName, $rows, $cols)
{
    echo "<table align='center' border='1' width='600'";
    echo "<caption><h1>$tableName</h1></caption>";
    for ($i = 0; $i < $rows; $i++) {
        $bgcolor = $i % 2 == 0 ? "#FFFFFF" : "#DDDDDD";
        echo "<tr bgcolor=" . $bgcolor . ">";

        for ($in = 0; $in < $cols; $in++) {
            echo "<td>" . ($i * $cols + $in) . "</td>";
        }

        echo "</tr>";
    }
    echo "</table>";

}
$tableName = '你好';
$rows = '20';
$cols = '20';
table($tableName, $rows, $cols);
