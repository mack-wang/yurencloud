<?php /* Smarty version Smarty-3.1.6, created on 2016-08-03 10:32:46
         compiled from "D:/phpStudy/WWW/ynzy/Manage/Admin/View\Auth\group.html" */ ?>
<?php /*%%SmartyHeaderCode:314257707ab3308d74-30862837%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '2dccec9465f03bc4f7144db574a3951c70683e2d' => 
    array (
      0 => 'D:/phpStudy/WWW/ynzy/Manage/Admin/View\\Auth\\group.html',
      1 => 1470191561,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '314257707ab3308d74-30862837',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_57707ab337a21',
  'variables' => 
  array (
    'info' => 0,
    'v' => 0,
    'num' => 0,
    'pagelist' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_57707ab337a21')) {function content_57707ab337a21($_smarty_tpl) {?><!DOCTYPE html>
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
        <div class="all-pages">权限设置 > 分组列表&nbsp&nbsp&nbsp&nbsp&nbsp
        </div>
        <div class="search-form-div">
        </div>
        <div class="table-div">
            <form action="<?php echo @__SELF__;?>
" method="post" enctype="multipart/form-data">
                <table class="table admin-table" border=1>
                    <tr>
                        <th class="percent5">序号</th>
                        <th>分组名称</th>
                        <th>操作</th>
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
                    <tr class="<?php if (!(1 & $_smarty_tpl->tpl_vars['v']->iteration)){?>change-color<?php }else{ ?><?php }?>" id="group_<?php echo $_smarty_tpl->tpl_vars['v']->value['group_id'];?>
">
                        <td class="padding-left10 percent5"><?php ob_start();?><?php echo $_smarty_tpl->tpl_vars['v']->iteration;?>
<?php $_tmp1=ob_get_clean();?><?php ob_start();?><?php echo $_smarty_tpl->tpl_vars['num']->value;?>
<?php $_tmp2=ob_get_clean();?><?php echo $_tmp1+$_tmp2;?>
</td>
                        <td class="padding-left10"><?php echo $_smarty_tpl->tpl_vars['v']->value['group_name'];?>
</td>
                        <td class="padding-left10">
                            <a href="<?php echo @__CONTROLLER__;?>
/delGroup?group_id=<?php echo $_smarty_tpl->tpl_vars['v']->value['group_id'];?>
"><i class="icon-trash"></i></a>
                        </td>
                    </tr>
                    <?php } ?>
                </table>
                <a class="add-shop my-btn add-admin" href="<?php echo @__CONTROLLER__;?>
/updategroup">添加分组</a>
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