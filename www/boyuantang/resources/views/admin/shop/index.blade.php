@extends('layout/admin')
@section('content')
    <!--面包屑导航 开始-->
    <div class="crumb_warp">
        <!--<i class="fa fa-bell"></i> 欢迎使用登陆网站后台，建站的首选工具。-->
        <i class="fa fa-home"></i> <a href="{{ url('admin/info') }}">首页</a> &raquo; 店铺名单
    </div>
    <!--面包屑导航 结束-->

    <!--结果页快捷搜索框 开始-->
    <div class="search_wrap">
        <form action="{{ url('admin/shop/search') }}" method="get">
            {{ csrf_field() }}
            <table class="search_tab">
                <tr>
                    <th width="70">搜索店铺:</th>
                    <td><input type="text" name="keyword" id="search" placeholder="关键字"></td>
                    <td><input type="submit" name="sub" value="查询"></td>
                </tr>
            </table>
        </form>
    </div>
    <!--结果页快捷搜索框 结束-->

    <!--搜索结果页面 列表 开始-->
    <form action="#" method="post">
        <div class="result_wrap">
            <div class="result_title">
                @if(count($errors)>0)
                    <div class="mark">
                        <p>{{$errors}}</p>
                    </div>
                @endif
            </div>
            <!--快捷导航 开始-->
            <div class="result_content">
                <div class="short_wrap">
                    <a href="{{ url('admin/shop/create') }}" target="main"><i class="fa fa-plus"></i>添加店铺</a>
                    <a href="javascript:;" onclick="delShops()"><i class="fa fa-recycle"></i>批量删除</a>
                </div>
            </div>
            <!--快捷导航 结束-->
        </div>

        <div class="result_wrap">
            <div class="result_content">
                <table class="list_tab">
                    <tr>
                        <th class="tc" width="5%"><input type="checkbox" name="" id="checkbox"></th>
                        <th class="tc">序号</th>
                        <th>所在地区</th>
                        <th>店铺名称</th>
                        <th>手机号</th>
                        <th>烟草店号</th>
                        <th>店铺备注</th>
                        <th>更新时间</th>
                        <th>操作</th>
                    </tr>
                    @foreach($data as $v)
                        <tr>
                            <td class="tc"><input type="checkbox" name="shop_id" value="{{ $v -> shop_id }}"></td>
                            <td class="tc"></td>
                            <td>
                                {{ $v -> group_name }}
                            </td>
                            <td>{{ $v -> shop_name }}</td>
                            <td>{{ $v -> shop_phone }}</td>
                            <td>{{ $v -> shop_number }}</td>
                            <td>{{ $v -> shop_note }}</td>
                            <td>{{ $v -> updated_at }}</td>
                            <td>
                                <a href="#">修改</a>
                                <a href="javascript:;" onclick="delShop({{$v->shop_id}})">删除</a>
                            </td>
                        </tr>
                    @endforeach
                </table>

                <div class="page_list">
                    {!! $data->render() !!}
                </div>
            </div>
        </div>
    </form>
    <!--搜索结果页面 列表 结束-->
    <script>
        //js生成列表每行序号
        $(function () {
            var len = $('table tr').length;
            for (var i = 1; i < len; i++) {
                $('table tr:eq(' + (i + 1) + ') td:eq(1)').text(i +{{ ($data->currentPage()-1)*$data->perPage() }});
            }
        });

        function delShop(shop_id) {
            layer.confirm('您确定要删除这个店铺吗？', {
                btn: ['确定', '取消'] //按钮
            }, function () {
                $.post("{{url('admin/shop/')}}/" + shop_id, {
                    '_method': 'delete',
                    '_token': "{{csrf_token()}}"
                }, function (data) {
                    if (data.status == 0) {
                        layer.msg(data.msg, {icon: 1, time: 1000}, function () {
                            location.href = location.href;
                        });
                    } else {
                        layer.msg(data.msg, {icon: 2, time: 1000});
                    }
                });
            }, function () {

            });
        }

        function delShops() {
            var len = $("input:checked").length;
            if (len > 0) {
                layer.confirm('您确定要删除选中的这些店铺吗？', {
                    btn: ['确定', '取消'] //按钮
                }, function () {
                    var shop_id = new Array();
                    $("input[name='shop_id']:checked").each(function () {
                        shop_id.push($(this).val());
                    });
                    $.ajax({
                        type: "POST",
                        url: "{{url('admin/shop/delShops/')}}",
                        data: {'shop_id':shop_id,'_token': "{{csrf_token()}}"},
                        success: function(data) {
                            if (data.status == 0) {
                                layer.msg(data.msg, {icon: 1, time: 1000}, function () {
                                    location.href = location.href;
                                });
                            } else {
                                layer.msg(data.msg, {icon: 2, time: 1000});
                            }
                        }
                    });
                }, function () {

                });
            } else {
                alert('hello')
            }
        }
    </script>
@endsection