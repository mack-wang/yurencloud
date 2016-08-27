<?php
echo date("Y-m-d",strtotime("now"))."<br>";//strtotime能自动识别一些固定格式的日期
echo date("Y-m-d",strtotime("yesterday"))."<br>";
echo date("Y-m-d",strtotime("last monday"))."<br>";
