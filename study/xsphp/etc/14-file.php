<?php
header("Content:text/html;charset=utf-8");
print_r(file('test.txt'));//会把文本以每行输出【以数组的形式】，行对应从0开始的下标
