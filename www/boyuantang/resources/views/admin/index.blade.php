@extends('layout/admin')
@section('content')
	<!--头部 开始-->
	<div class="top_box">
		<div class="top_left">
			<div class="logo">博渊堂后台管理</div>
			<ul>
				<li><a href="{{ url('admin/index') }}" class="active">首页</a></li>
			</ul>
		</div>
		<div class="top_right">
			<ul>
				<li>管理员：admin</li>
				<li><a href="{{ url('admin/password') }}" target="main">修改密码</a></li>
				<li><a href="{{ url('admin/quit') }}">退出</a></li>
			</ul>
		</div>
	</div>
	<!--头部 结束-->

	<!--左侧导航 开始-->
	<div class="menu_box">
		<ul>
            <li>
            	<h3><i class="fa fa-fw fa-clipboard"></i>店铺管理</h3>
                <ul class="sub_menu">
                    <li><a href="{{ url('admin/shop') }}" target="main"><i class="fa fa-fw fa-plus-square"></i>店铺名单</a></li>
                    <li><a href="shop/list.html" target="main"><i class="fa fa-fw fa-list-ul"></i>注册店铺</a></li>
                    <li><a href="tab.html" target="main"><i class="fa fa-fw fa-list-alt"></i>注册会员</a></li>
                    <li><a href="img.html" target="main"><i class="fa fa-fw fa-image"></i>地区分组</a></li>
                </ul>
            </li>
            <li>
            	<h3><i class="fa fa-fw fa-cog"></i>进货有礼</h3>
                <ul class="sub_menu">
                    <li><a href="#" target="main"><i class="fa fa-fw fa-cubes"></i>活动权限</a></li>
                    <li><a href="#" target="main"><i class="fa fa-fw fa-database"></i>进货列表</a></li>
                </ul>
            </li>
            <li>
            	<h3><i class="fa fa-fw fa-thumb-tack"></i>婚庆推广</h3>
                <ul class="sub_menu">
                    <li><a href="http://www.yeahzan.com/fa/facss.html" target="main"><i class="fa fa-fw fa-font"></i>图标调用</a></li>
                    <li><a href="http://hemin.cn/jq/cheatsheet.html" target="main"><i class="fa fa-fw fa-chain"></i>Jquery手册</a></li>
                    <li><a href="http://tool.c7sky.com/webcolor/" target="main"><i class="fa fa-fw fa-tachometer"></i>配色板</a></li>
                    <li><a href="element.html" target="main"><i class="fa fa-fw fa-tags"></i>其他组件</a></li>
                </ul>
            </li>
        </ul>
	</div>
	<!--左侧导航 结束-->

	<!--主体部分 开始-->
	<div class="main_box">
		<iframe src="{{url('admin/info')}}" frameborder="0" width="100%" height="100%" name="main"></iframe>
	</div>
	<!--主体部分 结束-->

	<!--底部 开始-->
	<div class="bottom_box">
		CopyRight © 2016. Powered By <a href="http://www.boyuantang.com">http://www.www.boyuantang.com</a>.
	</div>
	<!--底部 结束-->
@endsection