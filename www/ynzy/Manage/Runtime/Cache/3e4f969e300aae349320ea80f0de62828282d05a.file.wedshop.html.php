<?php /* Smarty version Smarty-3.1.6, created on 2016-08-04 15:49:15
         compiled from "D:/phpStudy/WWW/ynzy/Manage/Admin/View\Wed\wedshop.html" */ ?>
<?php /*%%SmartyHeaderCode:24433577caf583babb1-43309094%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '3e4f969e300aae349320ea80f0de62828282d05a' => 
    array (
      0 => 'D:/phpStudy/WWW/ynzy/Manage/Admin/View\\Wed\\wedshop.html',
      1 => 1470296947,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '24433577caf583babb1-43309094',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_577caf584669d',
  'variables' => 
  array (
    'info' => 0,
    'num' => 0,
    'v' => 0,
    'pagelist' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_577caf584669d')) {function content_577caf584669d($_smarty_tpl) {?><?php if (!is_callable('smarty_modifier_date_format')) include 'D:\\phpStudy\\WWW\\ynzy\\ThinkPHP\\Library\\Vendor\\Smarty\\plugins\\modifier.date_format.php';
?><!DOCTYPE html>
<html lang="zh">

<head>
    <meta charset="UTF-8">
    <title>大美云南管理后台</title>
    <link rel="stylesheet" href="<?php echo @ADMIN_CSS_URL;?>
font-awesome.min.css" />
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
        <div class="all-pages">婚宴推广 > 预定提交&nbsp&nbsp&nbsp&nbsp&nbsp
        </div>
        <div class="search-form-div">
            <form action="<?php echo @__SELF__;?>
" method="get" enctype="multipart/form-data" id="searchForm">
                <ul class="select">
                    <li>
                        <input type="text" name="shop_tel" class="search" placeholder="  店铺手机号">
                    </li>
                    <li>
                        <input type="text" name="shop_name" class="search" placeholder="  店铺名称">
                    </li>
                    <li>
                        <input type="text" name="wed_tel" class="search" placeholder="  预定手机号">
                    </li>
                    <li>
                        <input type="text" name="wed_name" class="search" placeholder="  预定姓名">
                        <button id="searchSubmit" class="search-submit my-btn"><i class="icon-search"></i>&nbsp查询</button>
                    </li>
                    <button class="excel-btn my-btn">导出表格</button>
                </ul>
            </form>
        </div>
        <div class="table-div">
            <form action="<?php echo @__SELF__;?>
" method="post" enctype="multipart/form-data">
                <table class="table">
                    <tr>
                        <th class="percent5">序号</th>
                        <th class="percent5">头像</th>
                        <th class="percent10">昵称</th>
                        <th class="percent5">分组</th>
                        <th class="percent20 overflow-hidden">店铺名称</th>
                        <th class="percent10">手机</th>
                        <th class="percent5">预定姓名</th>
                        <th class="percent15">预定手机</th>
                        <th class="percent5">预定数量</th>
                        <th class="percent15">上传日期</th>
                        <th class="percent10">操作</th>
                    </tr>
                    <?php  $_smarty_tpl->tpl_vars['v'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['v']->_loop = false;
 $_smarty_tpl->tpl_vars['k'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['info']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
 $_smarty_tpl->tpl_vars['v']->iteration=0;
foreach ($_from as $_smarty_tpl->tpl_vars['v']->key => $_smarty_tpl->tpl_vars['v']->value){
$_smarty_tpl->tpl_vars['v']->_loop = true;
 $_smarty_tpl->tpl_vars['k']->value = $_smarty_tpl->tpl_vars['v']->key;
 $_smarty_tpl->tpl_vars['v']->iteration++;
?>
                    <tr class="<?php if (!(1 & $_smarty_tpl->tpl_vars['v']->iteration)){?>change-color<?php }else{ ?><?php }?>">
                        <td class="text-center width50 "><?php ob_start();?><?php echo $_smarty_tpl->tpl_vars['v']->iteration;?>
<?php $_tmp1=ob_get_clean();?><?php ob_start();?><?php echo $_smarty_tpl->tpl_vars['num']->value;?>
<?php $_tmp2=ob_get_clean();?><?php echo $_tmp1+$_tmp2;?>
</td>
                        <td class="text-center"><img src="<?php echo $_smarty_tpl->tpl_vars['v']->value['shop']['shop_headimgurl'];?>
" alt="" class="headimgurl" /></td>
                        <td class="padding-left10"><?php echo $_smarty_tpl->tpl_vars['v']->value['shop']['shop_nickname'];?>
</td>
                        <td class="padding-left10"><?php echo $_smarty_tpl->tpl_vars['v']->value['shop']['shop_group'];?>
</td>
                        <td class="padding-left10"><?php echo $_smarty_tpl->tpl_vars['v']->value['shop']['shop_name'];?>
</td>
                        <td class="padding-left10"><?php echo $_smarty_tpl->tpl_vars['v']->value['shop']['shop_tel'];?>
</td>
                        <td class="padding-left10"><?php echo $_smarty_tpl->tpl_vars['v']->value['wed_name'];?>
</td>
                        <td class="padding-left10"><?php echo $_smarty_tpl->tpl_vars['v']->value['wed_tel'];?>
</td>
                        <td class="padding-left10"><?php echo $_smarty_tpl->tpl_vars['v']->value['wed_order'];?>
</td>
                        <td class="padding-left10"><?php echo smarty_modifier_date_format($_smarty_tpl->tpl_vars['v']->value['wed_time'],"%Y-%m-%d %H:%M:%S");?>
</td>
                        <td class="text-center">
                            <a href="<?php echo @__CONTROLLER__;?>
/del?wed_id=<?php echo $_smarty_tpl->tpl_vars['v']->value['wed_id'];?>
"><i class="icon-trash"></i></a>
                        </td>
                    </tr>
                    <?php } ?>
                </table>
            </form>
            <div class="bottom-page">
                <ul class="page-ul">
                    <?php echo $_smarty_tpl->tpl_vars['pagelist']->value;?>

                </ul>
                <form action="<?php echo @__SELF__;?>
" method="get" enctype="multipart/form-data" class="page-form">
                    <input type="text" name="per" class="pages" maxlength="2">&nbsp条/页
                    <input type="submit" name="" class="pages-submit" value="确定">
                </form>
            </div>
        </div>
    </div>
</body>

</html>
<?php }} ?>