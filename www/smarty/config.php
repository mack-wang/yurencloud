<?php
include "libs/Smarty.class.php";
$smarty = new Smarty();
$smarty->template_dir = "templates";
$smarty->compile_dir = "templates_c";

$smarty->display("config.tpl");