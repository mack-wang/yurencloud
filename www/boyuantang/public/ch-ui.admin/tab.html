<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="style/css/ch-ui.admin.css">
	<link rel="stylesheet" href="style/font/css/font-awesome.min.css">
    <script type="text/javascript" src="style/js/jquery.js"></script>
    <script type="text/javascript" src="style/js/ch-ui.admin.js"></script>
</head>
<body>
    <!--面包屑导航 开始-->
    <div class="crumb_warp">
        <!--<i class="fa fa-bell"></i> 欢迎使用登陆网站后台，建站的首选工具。-->
        <i class="fa fa-home"></i> <a href="#">首页</a> &raquo; <a href="#">商品管理</a> &raquo; 添加商品
    </div>
    <!--面包屑导航 结束-->
    
	<!--TAB切换面板和外置按钮组 开始-->
	<div class="result_wrap">
        <div class="result_title">
            <h3>快捷操作</h3>
            <div class="mark">
                <p>URL地址:http://bbs.houdunwang.com</p>
            </div>
        </div>
        <div class="result_content">
            <div class="short_wrap">
                <a href="#"><i class="fa fa-plus"></i>新增文章</a>
                <a href="#"><i class="fa fa-recycle"></i>批量删除</a>
                <a href="#"><i class="fa fa-refresh"></i>更新排序</a>
            </div>
        </div>
    </div>

    <div class="result_wrap">
        <ul class="tab_title">
            <li class="active">基本信息</li>
            <li>商品图集</li>
            <li>商品规格</li>
            <li>详细描述</li>
            <li>售后服务</li>
        </ul>
        <div class="tab_content">基本信息</div>
        <div class="tab_content">商品图集</div>
        <div class="tab_content">
            <table class="add_tab">
                <tr>
                    <th width="120">商品规格</th>
                    <td><button onclick="add_attr(this)">添加规格组</button></td>
                </tr>

                <!-- <tr>
                    <th width="120"></th>
                    <td>
                        <dl class="attr">
                            <dt>规格名：<input type="text" name="attr_name[]"> <span onclick="add_attr_value(this)"><i class="fa fa-plus-circle"></i></span></dt>
                            <dd>规格值：<input type="text" name="attr_value[]" onchange="attr_total()"></dd>
                        </dl>
                    </td>
                </tr> -->
                <tr class="attr_price" style="display:none;background:#FCF8E3;">
                    <th width="120">组合价格</th>
                    <td>
                        <table class="inner_list">
                            <tr>
                                <th>颜色</th>
                                <th>尺寸</th>
                                <th>货号</th>
                                <th>价格</th>
                            </tr>
                            <tr>
                                <td>红</td>
                                <td>X</td>
                                <td><input type="text" name="attr_sn[]"></td>
                                <td><input type="text" name="attr_price[]"></td>
                            </tr>
                        </table>
                    </td>
                </tr>

            </table>
        </div>
        <div class="tab_content">详细描述</div>
        <div class="tab_content">售后服务</div>

        <div class="btn_group">
            <input type="submit" value="提交">
            <input type="button" class="back" onclick="history.go(-1)" value="返回" >
        </div>

        <div class="tips">
            <h3>商品规格添加问题</h3>
            <p>1、规格分为通用规格和商品自定义规格，此处分析自定义规格</p>
            <p>2、添加尺寸：X XL XXL  颜色：红 黑（规格名称，规格属性）</p>
            <p>3、填充组合表，记录商品id</p>
            <p>4、点击提交 -> 添加商品表，返回goods_id -> 添加规格表，记录goods_id -> 添加属性值组合表，记录goods_id</p>
        </div>
    </div>
    <!--TAB切换面板和外置按钮组 结束-->
    <script>
        //点击添加属性框
        function add_attr(obj){
            var attr = '<tr>\
                    <th width="120"></th>\
                    <td>\
                        <dl class="attr">\
                            <dt>规格名：<input type="text" name="attr_name[]"> <span onclick="add_attr_value(this)"><i class="fa fa-plus-circle"></i></span></dt>\
                            <dd>规格值：<input type="text" name="attr_value[]" onchange="attr_total(this)"></dd>\
                        </dl>\
                    </td>\
                </tr>';
            $(obj).parents('tr').eq(0).after(attr);
        }

        //点击添加属性值输入框
        function add_attr_value(obj){
            var input = '<input type="text" name="attr_value[]" onchange="attr_total(this)">';
            $(obj).parents('dl').find('dd').append(input);
        }

        //读取全部属性，重组属性数据
        function attr_total(obj){
            //判断当前属性值有对应的属性名称
            if(!$(obj).parents('dl').find('[name*=attr_name]').val()){
                alert('请先输入属性名');
                return;
            }

            var attrData = {}; //定义空对象保存属性数据
            var attrName = []; //规格名称
            var attrValue = []; //规格值
            $('.attr').each(function(i) {
                attrName[i] = $(this).find('[name*=attr_name]').val();
                attrValue[i] = [];
                //遍历读取所有属性值
                $(this).find('[name*=attr_value]').each(function(j) {
                    attrValue[i][j] = $(this).val();
                });
            });
            attrData['name'] = attrName;
            attrData['value'] = attrValue;
            $.post('php/attr.php',{attrData:attrData}, function(data){
                $('.attr_price').show();
                $('.inner_list').html(data);
            });
        }

    </script>
</body>
</html>