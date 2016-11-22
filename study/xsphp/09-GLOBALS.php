<?php
$a = 1;
$b = 2;

function num()
{
  $GLOBALS['b']=$GLOBALS['a']+$GLOBALS['b'];//$GLOBALS[]获得全局变量，$GLOBALS['a']相当于$a
}
num();
echo $b;

