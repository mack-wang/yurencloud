<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>方块世界</title>
</head>
<link rel="stylesheet" href="{{asset('/css/yurenUI.css')}}">
<link rel="stylesheet" href="{{asset('/css/font-awesome.min.css')}}">
<link rel="stylesheet" href="{{asset('/css/main.css')}}">
<script type="text/javascript" src="{{asset('/js/jquery-3.1.1.min.js')}}"></script>
<script type="text/javascript" src="{{asset('/js/main.js')}}"></script>
<body>
<div class="navbar ">
    <div class="navbar-content center-block">
        <dl>
            <dt class="nav-logo"><a href="http://www.baidu.com" title="方块世界"></a></dt>
            <dd class="nav-note">minecraft论坛</dd>
            <dd class="nav-login">
                <a href="{{url('register')}}">注册</a>
                <a href="{{url('login')}}">登入</a>
            </dd>
            <dd class="nav-links">
                <a href="{{url('post')}}" class="navlink-active">帖子</a>
                <a href="{{url('teach')}}">教程</a>
                <a href="{{url('group')}}">小组</a>
                <a href="{{url('rank')}}">排行</a>
                <a href="{{url('sponsor')}}">赞助</a>
                <a href="{{url('download')}}">下载</a>
            </dd>
        </dl>
    </div>
</div>
<div class="navpic-wrap">
    <div class="navpic center-block" style="background-image: url('{{asset('/img/navpic/20161106.png')}}')">
        <div class="navpic-active">
            <button class="navpic-btn"><i class="fa fa-download"></i>下载客户端 V21.1</button>
            <p class="navpic-note center-block">第21周目：正式版V21.1<br>发布日期：2016年11月4日</p>
        </div>
    </div>
</div>
<div class="main-wrap center-block">
    <div class="left-wrap">
        @yield('content')
    </div>
    <div class="right-wrap">
        <div class="user-info">
            @if(session("user_id"))
                <ul>
                    <li>
                        @if($avatar_url)
                            <img src="{{asset($avatar_url)}}" alt="avatar" class="user-avatar">
                        @else
                            <div class="default-avatar center-block"><i class="fa fa-user fa-2x"></i></div>
                        @endif
                    </li>
                    <li class="user-id">
                        {{$user_name}}
                    </li>
                    <li>{{$grade_name}}</li>
                    <li class="user-items">
                        {{--<span class="vip"><i class="fa fa-vimeo"></i>3</span>--}}
                        <span><i class="fa fa-star"></i> {{$grade_level}}</span>
                        <span><i class="fa fa-cube"></i> {{$scores}}</span>
                    </li>
                    <li>小组：{{$group_name}}</li>
                </ul>
            @else
                <ul>
                    <li>
                        <div class="default-avatar center-block"><i class="fa fa-user fa-2x"></i></div>
                    </li>
                    <li class="user-id">
                        游客
                    </li>
                    <li>新手玩家</li>
                    <li class="user-items">
                        {{--<span class="vip"><i class="fa fa-vimeo"></i>3</span>--}}
                        <span><i class="fa fa-star"></i> 1级</span>
                        <span><i class="fa fa-cube"></i> 0块</span>
                    </li>
                    <li>小组：无</li>
                </ul>
            @endif
        </div>
        <ul class="user-function">
            <li><a href="">发贴子</a></li>
            <li><a href="">发教程</a></li>
            <li><a href="">加小组</a></li>
            <li><a href="">建小组</a></li>
        </ul>
    </div>

</div>
<div class="foot">
    <div class="foot-content center-block">
        <button>加入我们</button>
        <button>官方微博</button>
        <button>联系作者</button>
        <p></p>
        <p>Copyright © 2015-2016 方块世界 </p>
    </div>
</div>
</body>
@yield('script')
</html>
