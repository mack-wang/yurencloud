<?php
var_dump(file_exists('01-error.php'));//判断文件是否存在，大小，是否可读，可写，可操作，创建时间，修改时间，访问时间，stat返回一个以上信息的数组
echo filesize('01-error.php');
var_dump(is_readable('01-error.php'));
var_dump(is_writeable('01-error.php'));
var_dump(is_executable('01-error.php'));
echo filectime('01-error.php');
echo filemtime('01-error.php');
echo fileatime('01-error.php');
var_dump(stat('01-error.php'));
