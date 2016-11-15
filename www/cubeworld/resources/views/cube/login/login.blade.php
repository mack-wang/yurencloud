@extends('layouts.master')
@section('content')
    <div class="register-wrap center-block">
        <form action="">
            <ul>
                <div class="register-title" >登入</div>
                <li class="login-chose"><span class="login-active">游戏ID登入</span><span>邮箱登入</span></li>
                <li class="login-li"><span>游戏ID</span><input type="password"></li>
                <li><span>密码</span><input type="password"></li>
                <li><input type="submit" value="登入" class="input-submit input-login"></li>
            </ul>
        </form>
    </div>


@endsection