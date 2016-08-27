<?php
echo date("Y-m-d",mktime(0,0,0,12,36,2008))."<br>";//自动纠正日期，超出5天，放到下个月的5天
echo date("Y-m-d",mktime(0,0,0,14,28,2008))."<br>";
echo date("Y-m-d",mktime(0,0,0,12,28,88))."<br>";//年份自动加19
