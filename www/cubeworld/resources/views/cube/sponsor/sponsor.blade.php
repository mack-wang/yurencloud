@extends('layouts.master')
@section('content')
    <div class="search-wrap">
        <input type="text"><span><i class="fa fa-search"></i></span>
    </div>
    <div class="rank-sponsor-wrap center-block">
        <div class="rank-title">赞助名单 <p class="rank-note">前言：赞助不分先后，不分大小，按时间排序。服务器的成长，需要你的支持。感谢每位玩家的赞助，我将铭记于心。</p></div>
        <ul class="rank-title-sponsor center-block">
            <li>头像</li>
            <li>昵称</li>
            <li>时间</li>
            <li>金额</li>
        </ul>
        <div>
            <ul>
                <li><img src="{{asset('/img/avatar.jpg')}}" alt=""></li>
                <li>昵称</li>
                <li>2016-11-05</li>
                <li><span>30</span>￥</li>
            </ul>
            <ul>
                <li><img src="{{asset('/img/avatar.jpg')}}" alt=""></li>
                <li>昵称</li>
                <li>2016-11-05</li>
                <li><span>30</span>￥</li>
            </ul>
            <ul>
                <li><img src="{{asset('/img/avatar.jpg')}}" alt=""></li>
                <li>昵称</li>
                <li>2016-11-05</li>
                <li><span>30</span>￥</li>
            </ul>
            <ul>
                <li><img src="{{asset('/img/avatar.jpg')}}" alt=""></li>
                <li>昵称</li>
                <li>2016-11-05</li>
                <li><span>30</span>￥</li>
            </ul>
            <ul>
                <li><img src="{{asset('/img/avatar.jpg')}}" alt=""></li>
                <li>昵称</li>
                <li>2016-11-05</li>
                <li><span>30</span>￥</li>
            </ul>
            <ul>
                <li><img src="{{asset('/img/avatar.jpg')}}" alt=""></li>
                <li>昵称</li>
                <li>2016-11-05</li>
                <li><span>30</span>￥</li>
            </ul>
            <ul>
                <li><img src="{{asset('/img/avatar.jpg')}}" alt=""></li>
                <li>昵称</li>
                <li>2016-11-05</li>
                <li><span>30</span>￥</li>
            </ul>
            <ul>
                <li><img src="{{asset('/img/avatar.jpg')}}" alt=""></li>
                <li>昵称</li>
                <li>2016-11-05</li>
                <li><span>30</span>￥</li>
            </ul>

        </div>
        <div class="page_list page_list_position_sponsor">
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