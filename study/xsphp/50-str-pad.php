<?php
$str="123456";
echo str_pad($str,10)."<br>";//默认在右侧用空格填补
echo str_pad($str,10,"-+",STR_PAD_LEFT)."<br>";
echo str_pad($str,10,"-+",STR_PAD_RIGHT)."<br>";
echo str_pad($str,10,"-+",STR_PAD_BOTH)."<br>";
echo str_pad($str,10,"-+")."<br>";
