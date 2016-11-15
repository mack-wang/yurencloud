<?php /* Smarty version Smarty-3.1.6, created on 2016-08-03 10:30:32
         compiled from "D:/phpStudy/WWW/ynzy/Manage/Admin/View\Auth\updategroup.html" */ ?>
<?php /*%%SmartyHeaderCode:31609577a08716d77b0-85283469%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '698b9154ecf5b4aa4dc0af554d39bb0d22c0394f' => 
    array (
      0 => 'D:/phpStudy/WWW/ynzy/Manage/Admin/View\\Auth\\updategroup.html',
      1 => 1470191409,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '31609577a08716d77b0-85283469',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_577a087174cab',
  'variables' => 
  array (
    'tips' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_577a087174cab')) {function content_577a087174cab($_smarty_tpl) {?><!DOCTYPE html>
<html lang="zh">

<head>
    <meta charset="UTF-8">
    <title>大美云南管理后台</title>
    <link rel="stylesheet" href="<?php echo @ADMIN_CSS_URL;?>
font-awesome.min.css" />
    <link rel="stylesheet" type="text/css" href="<?php echo @ADMIN_CSS_URL;?>
basic.css">
    <script type="text/javascript" src="<?php echo @ADMIN_JS_URL;?>
jquery-2.2.3.min.js"></script>
    <script type="text/javascript" src="<?php echo @ADMIN_JS_URL;?>
main.js"></script>
</head>

<body>
    <div class="container">
        <div class="all-pages">权限设置 > 分组列表 > 添加分组&nbsp&nbsp&nbsp&nbsp&nbsp</div>
        <div class="table-div">
            <form action="<?php echo @__SELF__;?>
" method="post" enctype="multipart/form-data">
                <div class="up-div">
                    <div class="div-header">
                        添加分组
                        <a href="<?php echo @__CONTROLLER__;?>
/group"><span class="small-line"><i class="icon-remove remove"></i></span></a>
                    </div>
                    <div class="up-div-1">
                        <label>分组名称&nbsp&nbsp<span class="warning"><?php echo $_smarty_tpl->tpl_vars['tips']->value['group_name'];?>
</span></label>
                        <input type="text" name="group_name">
                    </div>
                    <center>
                        <input type="submit" name="update_submit" class="my-btn up-div-btn" value="提交">
                    </center>
                </div>
            </form>
        </div>
</body>

</html>
<?php }} ?>