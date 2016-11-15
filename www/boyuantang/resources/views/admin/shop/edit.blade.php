@extends('layout/admin')
@section('content')
    <!--面包屑导航 开始-->
    <div class="crumb_warp">
        <!--<i class="fa fa-bell"></i> 欢迎使用登陆网站后台，建站的首选工具。-->
        <i class="fa fa-home"></i> <a href="#">首页</a> &raquo; <a href="#">管理</a> &raquo; 添加商品
    </div>
    <!--面包屑导航 结束-->

	<!--结果集标题与导航组件 开始-->
	<div class="result_wrap">
        <div class="result_title">
            <h3>快捷操作</h3>
            @if(count($errors)>0)
                <div class="mark">
                    @foreach($errors->all() as $error)
                        <p>{{$error}}</p>
                    @endforeach
                </div>
            @endif
        </div>
        <div class="result_content">
            <div class="short_wrap">
                <a href="#"><i class="fa fa-plus"></i>新增文章</a>
                <a href="#"><i class="fa fa-recycle"></i>批量删除</a>
                <a href="#"><i class="fa fa-refresh"></i>更新排序</a>
            </div>

        </div>

    </div>
    <!--结果集标题与导航组件 结束-->
    
    <div class="result_wrap">
        <form action="{{ url('admin/shop/').'/' }}{{ $shop->shop_id }}" method="post">
            <input type="hidden" name="_method" value="PUT">
            {{ csrf_field() }}
            <table class="add_tab">
                <tbody>
                    <tr>
                        <th width="120"><i class="require">*</i>所属地区：</th>
                        <td>
                            <select name="group_id">
                                <option value="">==请选择==</option>
                                @foreach($group as $v)
                                <option value="{{ $v -> group_id }}" @if($v->group_name == $shop->group_name)
                                    selected="selected" @endif>{{ $v -> group_name }}</option>
                                @endforeach
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th><i class="require">*</i>店铺名称：</th>
                        <td>
                            <input type="text" class="lg" name="shop_name" value="{{ $shop->shop_name }}">
                            <p>填写烟草零售许可证上的店铺名称</p>
                        </td>
                    </tr>
                    <tr>
                        <th><i class="require">*</i>手机号：</th>
                        <td>
                            <input type="text" name="shop_phone" value="{{ $shop->shop_phone }}">
                            <span><i class="fa fa-exclamation-circle yellow"></i>填写11位手机号</span>
                        </td>
                    </tr>
                    <tr>
                        <th><i class="require">*</i>烟草证号：</th>
                        <td>
                            <input type="text" name="shop_number" value="{{ $shop->shop_number }}">
                            <span><i class="fa fa-exclamation-circle yellow"></i>填写xx位烟草证号</span>
                        </td>
                    </tr>
                    <tr>
                        <th><i class="require">*</i>店主姓名：</th>
                        <td>
                            <input type="text" name="shop_owner_name" value="{{ $shop->shop_owner_name }}">
                            <span><i class="fa fa-exclamation-circle yellow"></i>填写店主姓名</span>
                        </td>
                    </tr>
                    <tr>
                        <th>店铺备注：</th>
                        <td>
                            <textarea class="lg" name="shop_note" value="{{ $shop->shop_note }}"></textarea>
                            <p>可以写200个字以内</p>
                        </td>
                    </tr>
                    <tr>
                        <th></th>
                        <td>
                            <input type="submit" value="提交">
                            <input type="button" class="back" onclick="history.go(-1)" value="返回">
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    </div>
@endsection