<!DOCTYPE html>
<html>
<meta charset="UTF-8">
<head>
	<title>我的数据库</title>
</head>
<script type="text/javascript">
	function confirmDel(id) {
		//询问是否要删除
		if(window.confirm("你确定要删除吗？"))
		{
			//跳转到del.php删除执行的php去删除
			location.href = "del.php?id="+id;
		}
	}
</script>
<body>
<?php
include("conn.php");
//执行SQL，向mysql服务器发送查询请求
$sql = "select * from 007_news order by id desc";
$result = mysql_query($sql,$link);

?>

<table width="100%" border="1px" bordercolor="#aaaaaa" cellpadding="5" align="center" cellspacing="0">
	<tr>
		<th>编号</th>
		<th>新闻标题</th>
		<th>作者</th>
		<th>来源</th>
		<th>排序</th>
		<th>点击率</th>
		<th>发布时间</th>
		<th>操作</th>
	</tr>
	<?php
	$str = "";
	$n = 1;
	while($arr = mysql_fetch_assoc($result))
	{
		//如果是偶数行，则添加行的背景色
		if($n%2==0)
		{
			$str .= "<tr align='center' bgColor='#f6f6f6'>\n";
		}else
		{
			$str .= "<tr align='center'>\n";
		}
		$str .=  "	<td>".$arr['id']."</td>\n";
		$str .=  "	<td align='left'>".$arr['title']."</td>\n";
		$str .=  "	<td>".$arr['author']."</td>\n";
		$str .=  "	<td>".$arr['source']."</td>\n";
		$str .=  "	<td>".$arr['orderby']."</td>\n";
		$str .=  "	<td>".$arr['hits']."</td>\n";
		$str .=  "	<td>".date("Y-m-d H:i",$arr['addate'])."</td>\n";
		$str .=  "	<td><a href='javascript:void(0)'>修改</a> <a href='javascript:void(0)' onClick='confirmDel(".$arr['id'].")'>删除</a></td>\n";
		$str .=  "</tr>\n";
		$n++; //循环次数
	}
	echo $str;
	?>
</table>

</body>
</html>