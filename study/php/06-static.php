<!DOCTYPE html>
<html>
<meta charset="UTF-8">
<body>

<?php
	function myTest() {
	  $x=0;//不加static的$x每次执行完myTest()就会被删除，再次执行myText的时候，还是原来的函数。
	  echo $x;
	  $x++;
	}

	myTest();
	myTest();
	myTest();

	function youTest() {
	  static $x=0; //加static的$x每次执行完youTest()数值会被保存，再次执行youText的时候，会建立在上一次的结果之上，适用于累加。
	  echo $x;
	  $x++;
	}

	youTest();
	youTest();
	youTest();
?>

</body>
</html>