<?php
header("Access-Control-Allow-Origin:*");
$i = 0;
while (true){
    echo "Number is $i";
    flush();

    sleep(2);

    $i++;
}
