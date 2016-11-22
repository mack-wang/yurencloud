<?php /* Smarty version Smarty-3.1.6, created on 2016-07-03 19:47:48
         compiled from "E:/wamp/www/ynzy/Manage/Admin/View\Gift\giftshop.html" */ ?>
<?php /*%%SmartyHeaderCode:229365778e60eccc419-11002748%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'f59f7d1d62ed43dff1ca2fdc58aac6a96e810cd6' => 
    array (
      0 => 'E:/wamp/www/ynzy/Manage/Admin/View\\Gift\\giftshop.html',
      1 => 1467541604,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '229365778e60eccc419-11002748',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_5778e60f09f1d',
  'variables' => 
  array (
    'info' => 0,
    'v' => 0,
    'pagelist' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5778e60f09f1d')) {function content_5778e60f09f1d($_smarty_tpl) {?><!DOCTYPE html>
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
    <!--图标使用说明在任意标签中加icon-图标名的class就能使用，要引入<?php echo @ADMIN_CSS_URL;?>
font-awesome.min.css <i class="icon-adjust"></i> -->
</head>
<body>

<div class="container">
    <div class="all-pages">店铺系统 > 店铺管理&nbsp&nbsp&nbsp&nbsp&nbsp

    </div>
    <div class="search-form-div">
    <form action="<?php echo @__SELF__;?>
" method="get" enctype="multipart/form-data" id="searchForm">
      <ul class="select">
         <li>
           <input type="text" name="shop_id" class="search" placeholder="序号">
         </li>
         <li>
           <input type="text" name="shop_name" class="search" placeholder="店铺名称">
         </li>
         <li>
           <input type="text" name="shop_tel" class="search" placeholder="手机号">
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
      <th class="percent30 overflow-hidden">店铺名称</th>
      <th class="percent15">手机</th>
      <th class="percent5">进货单</th>
      <th class="percent10">上传日期</th>
      <th class="percent5">状态</th>
      <th class="percent15" colspan=3>操作</th>
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
      <td class="text-center width50 "><?php echo $_smarty_tpl->tpl_vars['v']->value['gift_id'];?>
</td>
      <td class="text-center"><img src="<?php echo $_smarty_tpl->tpl_vars['v']->value['gift_headimgurl'];?>
" alt="" class="headimgurl" /></td>
      <td class="padding-left10"><?php echo $_smarty_tpl->tpl_vars['v']->value['gift_nickname'];?>
</td>
      <td class="padding-left10"><?php echo $_smarty_tpl->tpl_vars['v']->value['gift_group'];?>
</td>
      <td class="padding-left10"><?php echo $_smarty_tpl->tpl_vars['v']->value['gift_name'];?>
</td>
      <td class="padding-left10"><?php echo $_smarty_tpl->tpl_vars['v']->value['gift_tel'];?>
</td>
      <td class="text-center"><?php echo $_smarty_tpl->tpl_vars['v']->value['gift_small_img'];?>
</td>
      <td class="text-center"><?php echo $_smarty_tpl->tpl_vars['v']->value['gift_submit_time'];?>
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
"><i class="icon-trash"></i></a>
      </td>
      <td class="text-center">
      <a href="<?php echo @__CONTROLLER__;?>
/del?gift_id=<?php echo $_smarty_tpl->tpl_vars['v']->value['gift_id'];?>
"><i class="icon-trash"></i></a>
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