<?php
$username = $_GET['username'];
$age = $_GET['age'];
if($username){
    echo $username.$age;
}