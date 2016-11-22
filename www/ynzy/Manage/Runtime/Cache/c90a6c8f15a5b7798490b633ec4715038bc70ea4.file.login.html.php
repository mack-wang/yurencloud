<?php /* Smarty version Smarty-3.1.6, created on 2016-08-28 09:20:16
         compiled from "D:/phpStudy/WWW/ynzy/Manage/Home/View\Index\login.html" */ ?>
<?php /*%%SmartyHeaderCode:6434577224229dfbb3-80864803%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'c90a6c8f15a5b7798490b633ec4715038bc70ea4' => 
    array (
      0 => 'D:/phpStudy/WWW/ynzy/Manage/Home/View\\Index\\login.html',
      1 => 1471481752,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '6434577224229dfbb3-80864803',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.6',
  'unifunc' => 'content_57722422a2224',
  'variables' => 
  array (
    'tips' => 0,
    'info' => 0,
    'session_id' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_57722422a2224')) {function content_57722422a2224($_smarty_tpl) {?><!DOCTYPE html>
<html lang="zh">

<head>
    <meta charset="UTF-8">
    <title>注册</title>
    <link rel="stylesheet" type="text/css" href="<?php echo @HOME_CSS_URL;?>
basic.css">
    <link rel="stylesheet" type="text/css" href="<?php echo @HOME_CSS_URL;?>
font-awesome.min.css">
    <script type="text/javascript" src="<?php echo @HOME_JS_URL;?>
jquery-2.2.3.min.js"></script>
    <script type="text/javascript" src="<?php echo @HOME_JS_URL;?>
main.js"></script>
</head>

<body>
    <div class="top-container">
        <header class="home-top">
            <img src="<?php echo @HOME_IMG_URL;?>
logo.png" alt="logo" class="home-logo">
        </header>
        <div class="tijiao loginBgcolor">
            <form action="<?php echo @__CONTROLLER__;?>
/register" method="post" enctype="multipart/form-data" class="update-from">
                <div class="up-div">
                    <div class="up-div-1">
                        <label>
                            <i class="icon-tablet"></i>&nbsp&nbsp手机号码&nbsp&nbsp<span class="warning fr" id="checkPhone"><?php echo $_smarty_tpl->tpl_vars['tips']->value['shop_tel'];?>
</span></label>
                        <input type="text" name="shop_tel" placeholder="  输入注册手机号" class="fl" maxlength="11" onkeyup="checkPhone()" id="input-tel">
                        <i class='icon-ok-sign fr icon-style success' style="display:none;"></i>
                        <i class='icon-remove-sign fr icon-style warning' style="display:none;" ></i>
                    </div>
                    <div class="up-div-1">
                        <label><i class="icon-edit"></i>&nbsp&nbsp验证码&nbsp&nbsp<span class="warning" id=""><?php echo $_smarty_tpl->tpl_vars['info']->value;?>
</span></label>
                        <input type="hidden" name="" id="url-controller" value="<?php echo @__CONTROLLER__;?>
">
                        <input type="text" name="shortnum" placeholder="  输入验证码" class="fl" onkeyup="checkShortnum()" id="shortnum"  maxlength="6">
                        <i class='icon-ok-sign fr icon-style success' style="display:none;"></i>
                        <i class='icon-remove-sign fr icon-style warning' style="display:none;" ></i>
                    </div>
                    <div class="up-div-1">
                        <input type="button" name="update_submit" class="my-btn up-div-btn" value="获取验证码" onclick="sendShortnum()" id="shortnum-btn">
                    </div>
                    <div class="up-div-1">
                        <input type="button" name="update_submit" onclick="shopRegister()" class="my-btn up-div-btn" value="提交">
                    </div>
                </div>
            </form>
            <!-- <form action="<?php echo @__SELF__;?>
" method="post" enctype="multipart/form-data" id="btnform">
            <input type="text" name="shop_tel" maxlength="20" placeholder="  注册手机号" class="text-input" value="<?php echo $_SESSION['shop_tel'];?>
">
            <input type="button" value="获取验证码" class="submit-input my-btn" id="tijiao-btn">
        </form>
        <form action="<?php echo @__CONTROLLER__;?>
/logincheck" method="post" enctype="multipart/form-data">
            <input type="hidden" name="session_id" value="<?php echo $_smarty_tpl->tpl_vars['session_id']->value;?>
">
            <input type="text" name="shotcode" placeholder="  填写验证码" class="text-input">
            <input type="submit" name="admin_password" value="提交" class="submit-input my-btn">
            <div class="info-input"><?php echo $_smarty_tpl->tpl_vars['info']->value;?>
</div>
        </form> -->
        </div>
        <span class="footer">© 博渊堂 · 版权所有 2013-2018</span>
    </div>
</body>

</html>
<?php }} ?>