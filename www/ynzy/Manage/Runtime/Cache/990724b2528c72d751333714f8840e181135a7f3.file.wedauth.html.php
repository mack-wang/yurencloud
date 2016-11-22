<?php /* Smarty version Smarty-3.1.6, created on 2016-08-06 23:57:35
         compiled from "F:/WWW/ynzy/Manage/Admin/View\Auth\wedauth.html" */ ?>
<?php /*%%SmartyHeaderCode:228505792c431ef9eb9-63737035%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '990724b2528c72d751333714f8840e181135a7f3' => 
    array (
      0 => 'F:/WWW/ynzy/Manage/Admin/View\\Auth\\wedauth.html',
      1 => 1470498946,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '228505792c431ef9eb9-63737035',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_5792c4320a565',
  'variables' => 
  array (
    'info' => 0,
    'v' => 0,
    'num' => 0,
    'data' => 0,
    'tips' => 0,
    'pagelist' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5792c4320a565')) {function content_5792c4320a565($_smarty_tpl) {?><!DOCTYPE html>
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
        <div class="all-pages">权限设置 > 婚庆推广
        </div>
        <div class="search-form-div">
        </div>
        <div class="table-div">
            <table class="table admin-table" border=1>
                <tr>
                    <th class="percent5">序号</th>
                    <th>参与婚庆推广的分组</th>
                    <th>添加时间</th>
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
                <tr class="<?php if (!(1 & $_smarty_tpl->tpl_vars['v']->iteration)){?>change-color<?php }else{ ?><?php }?>" id="auth_<?php echo $_smarty_tpl->tpl_vars['v']->value['auth_id'];?>
">
                    <td class="padding-left10 percent5"><?php ob_start();?><?php echo $_smarty_tpl->tpl_vars['v']->iteration;?>
<?php $_tmp1=ob_get_clean();?><?php ob_start();?><?php echo $_smarty_tpl->tpl_vars['num']->value;?>
<?php $_tmp2=ob_get_clean();?><?php echo $_tmp1+$_tmp2;?>
</td>
                    <td class="padding-left10"><?php echo $_smarty_tpl->tpl_vars['v']->value['auth_wed'];?>
</td>
                    <td class="padding-left10"><?php echo $_smarty_tpl->tpl_vars['v']->value['create_time'];?>
</td>
                    <td class="padding-left10">
                        <a href="<?php echo @__CONTROLLER__;?>
/delWed?auth_wed_id=<?php echo $_smarty_tpl->tpl_vars['v']->value['auth_wed_id'];?>
"><i class="icon-trash"></i></a>
                    </td>
                </tr>
                <?php } ?>
            </table>
            <form action="<?php echo @__CONTROLLER__;?>
/update2" method="post" enctype="multipart/form-data" class="page-form">
                <input type="submit" class="add-shop my-btn" value="添加" />
                <select name="auth_wed" class="add-group">
                    <?php  $_smarty_tpl->tpl_vars['v'] = new Smarty_Variable; $_smarty_tpl->tpl_vars['v']->_loop = false;
 $_smarty_tpl->tpl_vars['k'] = new Smarty_Variable;
 $_from = $_smarty_tpl->tpl_vars['data']->value; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array');}
 $_smarty_tpl->tpl_vars['v']->iteration=0;
foreach ($_from as $_smarty_tpl->tpl_vars['v']->key => $_smarty_tpl->tpl_vars['v']->value){
$_smarty_tpl->tpl_vars['v']->_loop = true;
 $_smarty_tpl->tpl_vars['k']->value = $_smarty_tpl->tpl_vars['v']->key;
 $_smarty_tpl->tpl_vars['v']->iteration++;
?>
                    <option value="<?php echo $_smarty_tpl->tpl_vars['v']->value['group_name'];?>
"><?php echo $_smarty_tpl->tpl_vars['v']->value['group_name'];?>
</option>
                    <?php } ?>
                </select>
                <span class="warning"><?php echo $_smarty_tpl->tpl_vars['tips']->value['auth_wed'];?>
</span>
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