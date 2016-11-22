<?php /* Smarty version Smarty-3.1.6, created on 2016-08-07 20:19:36
         compiled from "F:/WWW/ynzy/Manage/Admin/View\Gift\giftshop.html" */ ?>
<?php /*%%SmartyHeaderCode:152415792c438cde411-29557927%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '280eb91c807a5492368251e3dff9a835d20e4758' => 
    array (
      0 => 'F:/WWW/ynzy/Manage/Admin/View\\Gift\\giftshop.html',
      1 => 1470498942,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '152415792c438cde411-29557927',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_5792c438e1754',
  'variables' => 
  array (
    'info' => 0,
    'num' => 0,
    'v' => 0,
    'pagelist' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5792c438e1754')) {function content_5792c438e1754($_smarty_tpl) {?><!DOCTYPE html>
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
    <!--图标使用说明在任意标签中加icon-图标名的class就能使用，要引入<?php echo @ADMIN_CSS_URL;?>
font-awesome.min.css <i class="icon-adjust"></i> -->
</head>

<body>
    <div class="container">
        <div class="all-pages">进货有礼 > 参与店铺&nbsp&nbsp&nbsp&nbsp&nbsp
        </div>
        <div class="search-form-div">
            <form action="<?php echo @__SELF__;?>
" method="get" enctype="multipart/form-data" id="searchForm">
                <ul class="select">
                    <li>
                        <input type="text" name="shop_name" class="search" placeholder="  店铺名称">
                    </li>
                    <li>
                        <input type="text" name="shop_nickname" class="search" placeholder="  昵称">
                    </li>
                    <li>
                        <input type="text" name="shop_tel" class="search" placeholder="  手机号">
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
                        <th class="percent25 overflow-hidden">店铺名称</th>
                        <th class="percent15">手机</th>
                        <th class="percent5">进货单</th>
                        <th class="percent15">上传日期</th>
                        <th class="percent5">状态</th>
                        <th class="percent15" colspan=4>操作</th>
                        <th class="percent5">备注</th>
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
                        <td class="text-center"><?php echo $_smarty_tpl->tpl_vars['v']->value['gift_small_img'];?>
</td>
                        <td class="text-center"><?php echo $_smarty_tpl->tpl_vars['v']->value['create_time'];?>
</td>
                        <td class="text-center"><?php echo $_smarty_tpl->tpl_vars['v']->value['gift_status'];?>
</td>
                        <td class="text-center">
                            <a href="<?php echo @__CONTROLLER__;?>
/del?gift_id=<?php echo $_smarty_tpl->tpl_vars['v']->value['gift_id'];?>
"><i class="icon-trash"></i></a>
                        </td>
                        <td class="text-center">
                            <a href="<?php echo @__CONTROLLER__;?>
/del?gift_id=<?php echo $_smarty_tpl->tpl_vars['v']->value['gift_id'];?>
"><i class="icon-ok-circle font-size22"></i></a>
                        </td>
                        <td class="text-center">
                            <a href="<?php echo @__CONTROLLER__;?>
/del?gift_id=<?php echo $_smarty_tpl->tpl_vars['v']->value['gift_id'];?>
"><i class="icon-remove-circle font-size22"></i></a>
                        </td>
                        <td class="text-center">
                            <a href="<?php echo @__CONTROLLER__;?>
/del?gift_id=<?php echo $_smarty_tpl->tpl_vars['v']->value['gift_id'];?>
"><i class="icon-pencil font-size22"></i></a>
                        </td>
                        <td class="text-center"><?php echo $_smarty_tpl->tpl_vars['v']->value['gift_tips'];?>
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
        <div class="delete">
            <p>确认删除金华潮王烟酒店所有信息吗？</p>
            <button class="my-btn delete-confirm">确认</button>
            <button class="my-btn delete-cancel">取消</button>
        </div>
    </div>
</body>

</html>
<?php }} ?>