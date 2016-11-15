<?php /* Smarty version Smarty-3.1.6, created on 2016-08-04 09:59:53
         compiled from "D:/phpStudy/WWW/ynzy/Manage/Admin/View\Member\perpage.html" */ ?>
<?php /*%%SmartyHeaderCode:1454557a2a199d5d324-17097042%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '4bf054370d60dc0c54dc6e29be7530ee10a38b7b' => 
    array (
      0 => 'D:/phpStudy/WWW/ynzy/Manage/Admin/View\\Member\\perpage.html',
      1 => 1470098954,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '1454557a2a199d5d324-17097042',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'list' => 0,
    'info' => 0,
    'v' => 0,
    'pagelist' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_57a2a199e18b5',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_57a2a199e18b5')) {function content_57a2a199e18b5($_smarty_tpl) {?><?php if (!is_callable('smarty_modifier_date_format')) include 'D:\\phpStudy\\WWW\\ynzy\\ThinkPHP\\Library\\Vendor\\Smarty\\plugins\\modifier.date_format.php';
?><!DOCTYPE html>
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
    <?php echo $_smarty_tpl->tpl_vars['list']->value;?>

    <div class="container">
        <div class="all-pages">店铺系统 > 注册会员&nbsp&nbsp&nbsp&nbsp&nbsp
        </div>
        <div class="search-form-div">
            <form action="<?php echo @__SELF__;?>
" method="get" enctype="multipart/form-data">
                <ul class="select">
                    <li>
                        <input type="text" name="member_shop" class="search" placeholder="店铺名称">
                    </li>
                    <li>
                        <input type="text" name="member_nickname" class="search" placeholder="昵称">
                    </li>
                    <li>
                        <input type="text" name="member_tel" class="search" placeholder="手机号">
                        <input type="submit" name="search-submit" class="search-submit my-btn" value="查询">
                    </li>
                    <button class="excel-btn my-btn">导出表格</button>
                </ul>
            </form>
        </div>
        <div class="table-div">
            <form action="<?php echo @__SELF__;?>
" method="post" enctype="multipart/form-data">
                <table class="table" border=1>
                    <tr>
                        <th class="percent5">序号</th>
                        <th class="percent5">分组</th>
                        <th class="percent35 overflow-hidden">店铺名称</th>
                        <th class="percent10">昵称</th>
                        <th class="percent5">头像</th>
                        <th class="percent15">手机号</th>
                        <th class="percent5">积分</th>
                        <th class="percent5">余分</th>
                        <th class="percent10">注册日期</th>
                        <th class="percent5">操作</th>
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
                    <tr class="<?php if (!(1 & $_smarty_tpl->tpl_vars['v']->iteration)){?>change-color<?php }else{ ?><?php }?>" id="member_<?php echo $_smarty_tpl->tpl_vars['v']->value['member_id'];?>
">
                        <td class="text-center width50 "><?php echo $_smarty_tpl->tpl_vars['v']->value['member_id'];?>
</td>
                        <td class="text-center"><?php echo $_smarty_tpl->tpl_vars['v']->value['member_group'];?>
</td>
                        <td class="padding-left10"><?php echo $_smarty_tpl->tpl_vars['v']->value['member_shop'];?>
</td>
                        <td class="padding-left10"><?php echo $_smarty_tpl->tpl_vars['v']->value['member_nickname'];?>
</td>
                        <td class="text-center"><img src="<?php echo $_smarty_tpl->tpl_vars['v']->value['member_headimgurl'];?>
" alt="" class="headimgurl" /></td>
                        <td class="padding-left10"><?php echo $_smarty_tpl->tpl_vars['v']->value['member_tel'];?>
</td>
                        <td class="text-center"><?php echo $_smarty_tpl->tpl_vars['v']->value['member_total_scores'];?>
</td>
                        <td class="text-center"><?php echo $_smarty_tpl->tpl_vars['v']->value['member_left_scores'];?>
</td>
                        <td class="text-center"><?php echo smarty_modifier_date_format($_smarty_tpl->tpl_vars['v']->value['member_time'],"%Y-%m-%d");?>

                            <br><?php echo smarty_modifier_date_format($_smarty_tpl->tpl_vars['v']->value['member_time'],"%H:%M:%S");?>
</td>
                        <td class="text-center">
                            <a href="<?php echo @__CONTROLLER__;?>
/del?member_id=<?php echo $_smarty_tpl->tpl_vars['v']->value['member_id'];?>
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
                <form action="<?php echo @__CONTROLLER__;?>
/perpage" method="get" enctype="multipart/form-data" class="page-form">
                    <input type="text" name="per" class="pages" maxlength="2">&nbsp条/页
                    <input type="submit" name="" class="pages-submit" value="确定">
                </form>
            </div>
        </div>
    </div>
</body>

</html>
<?php }} ?>