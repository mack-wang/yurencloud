@extends('layouts.master')
@section('content')
    <div class="search-wrap">
        <input type="text"><span><i class="fa fa-search"></i></span>
    </div>
    <div class="rank-users-wrap">
        <div class="rank-title">玩家排行榜</div>
        <ul class="rank-title-project center-block">
            <li>头像</li>
            <li>昵称</li>
            <li>积分</li>
            <li>排名</li>
        </ul>
        <div>
            <ul>
                <li><img src="{{asset('/img/avatar.jpg')}}" alt=""></li>
                <li>昵称</li>
                <li><i class="fa fa-cube"></i>1700</li>
                <li>1</li>
            </ul>
            <ul>
                <li><img src="{{asset('/img/avatar.jpg')}}" alt=""></li>
                <li>昵称</li>
                <li><i class="fa fa-cube"></i>1600</li>
                <li>2</li>
            </ul>
            <ul>
                <li><img src="{{asset('/img/avatar.jpg')}}" alt=""></li>
                <li>昵称</li>
                <li><i class="fa fa-cube"></i>1600</li>
                <li>2</li>
            </ul>
            <ul>
                <li><img src="{{asset('/img/avatar.jpg')}}" alt=""></li>
                <li>昵称</li>
                <li><i class="fa fa-cube"></i>1600</li>
                <li>2</li>
            </ul>
            <ul>
                <li><img src="{{asset('/img/avatar.jpg')}}" alt=""></li>
                <li>昵称</li>
                <li><i class="fa fa-cube"></i>1600</li>
                <li>2</li>
            </ul>
            <ul>
                <li><img src="{{asset('/img/avatar.jpg')}}" alt=""></li>
                <li>昵称</li>
                <li><i class="fa fa-cube"></i>1600</li>
                <li>2</li>
            </ul>
            <ul>
                <li><img src="{{asset('/img/avatar.jpg')}}" alt=""></li>
                <li>昵称</li>
                <li><i class="fa fa-cube"></i>1600</li>
                <li>2</li>
            </ul>
            <ul>
                <li><img src="{{asset('/img/avatar.jpg')}}" alt=""></li>
                <li>昵称</li>
                <li><i class="fa fa-cube"></i>1600</li>
                <li>2</li>
            </ul>

        </div>
        <div class="page_list page_list_position">
            {{--{!! $data->render() !!}--}}
            <div class="page_list">
                <ul>
                    <li>上一页</li>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>下一页</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="rank-group-wrap">
        <div class="rank-title">小组排行榜</div>
        <ul class="rank-title-project center-block">
            <li>小组图标</li>
            <li>组名</li>
            <li>贡献</li>
            <li>排名</li>
        </ul>
        <div>
            <ul>
                <li><img src="{{asset('/img/avatar.jpg')}}" alt=""></li>
                <li>昵称</li>
                <li><i class="fa fa-cubes"></i>1700</li>
                <li>1</li>
            </ul>
            <ul>
                <li><img src="{{asset('/img/avatar.jpg')}}" alt=""></li>
                <li>昵称</li>
                <li><i class="fa fa-cubes"></i>1600</li>
                <li>2</li>
            </ul>
            <ul>
                <li><img src="{{asset('/img/avatar.jpg')}}" alt=""></li>
                <li>昵称</li>
                <li><i class="fa fa-cubes"></i>1600</li>
                <li>2</li>
            </ul>
            <ul>
                <li><img src="{{asset('/img/avatar.jpg')}}" alt=""></li>
                <li>昵称</li>
                <li><i class="fa fa-cubes"></i>1600</li>
                <li>2</li>
            </ul>
            <ul>
                <li><img src="{{asset('/img/avatar.jpg')}}" alt=""></li>
                <li>昵称</li>
                <li><i class="fa fa-cubes"></i>1600</li>
                <li>2</li>
            </ul>
            <ul>
                <li><img src="{{asset('/img/avatar.jpg')}}" alt=""></li>
                <li>昵称</li>
                <li><i class="fa fa-cubes"></i>1600</li>
                <li>2</li>
            </ul>
            <ul>
                <li><img src="{{asset('/img/avatar.jpg')}}" alt=""></li>
                <li>昵称</li>
                <li><i class="fa fa-cubes"></i>1600</li>
                <li>2</li>
            </ul>
            <ul>
                <li><img src="{{asset('/img/avatar.jpg')}}" alt=""></li>
                <li>昵称</li>
                <li><i class="fa fa-cubes"></i>1600</li>
                <li>2</li>
            </ul>

        </div>
        <div class="page_list page_list_position">
            {{--{!! $data->render() !!}--}}
            <div class="page_list">
                <ul>
                    <li>上一页</li>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>下一页</li>
                </ul>
            </div>
        </div>
    </div>

@endsection