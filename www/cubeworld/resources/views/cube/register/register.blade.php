@extends('layouts.master')
<meta name="csrf_token" content="{{ csrf_token() }}" />
@section('content')
    <div class="register-wrap center-block">
        <form action="{{url('user/register')}}" method="post" id="form">
            {{ csrf_field() }}
            <ul>
                <div class="register-title">注册</div>
                <li><span>游戏ID</span><input type="text" name="user_name"></li>
                <li><span>密码</span><input type="password" name="password"></li>
                <li><span>重复密码</span><input type="password" name="password_comfirm"></li>
                <li><span>邮箱</span><input type="text" name="email"></li>
                <li><a href="" class="email-a"><i class="fa fa-envelope"></i> 发送邮箱验证</a></li>
                <li>
                    <a class="input-sub" href="javascript:" onclick="register()">确认注册</a>
                </li>
            </ul>
            <div class="tip danger bg-danger"></div>
            <div class="tip-success success bg-success"></div>
        </form>
    </div>
@endsection
@section('script')
    <script>//TODO:继续做注册的逻辑
        function register() {
            var userName = $('input[name=user_name]').val(),
                password = $('input[name=password]').val(),
                passwordComfirm = $('input[name=password_comfirm]').val(),
                email = $('input[name=email]').val();
            var nameRegex = /^[a-zA-Z][a-zA-Z0-9_]{3,20}$/,
                passwordRegex = /^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,20}$/,
                emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            //清空上一次的提示
            $('.fa-check').remove();
            $('.fa-close').remove();
            $('.tip').hide();
            $('.tip').html('');
            //正则验证
            if(userName.match(nameRegex)){
                $('input[name=user_name]').after($('<i class="fa fa-check success"></i>'));
            }else{
                $('input[name=user_name]').after($('<i class="fa fa-close danger"></i>'));
                $('.tip').show().append('游戏ID不正确；');
            }

            if(password.match(passwordRegex)){
                $('input[name=password]').after($('<i class="fa fa-check success"></i>'));
            }else{
                $('input[name=password]').after($('<i class="fa fa-close danger"></i>'));
                $('.tip').show().append('密码格式不正确；');
            }

            if(password == passwordComfirm && passwordComfirm !=""){
                $('input[name=password_comfirm]').after($('<i class="fa fa-check success"></i>'));
            }else{
                $('input[name=password_comfirm]').after($('<i class="fa fa-close danger"></i>'));
                $('.tip').show().append('重复密码错误；');
            }

            if(email.match(emailRegex)){
                $('input[name=email]').after($('<i class="fa fa-check success"></i>'));
            }else{
                $('input[name=email]').after($('<i class="fa fa-close danger"></i>'));
                $('.tip').show().append('邮箱格式不正确；');
            }

            if($('.fa-close').length>0){
                return;
            }

            $.ajax({
                type: "POST",
                url: "{{url('user/register')}}",
                dataType: 'json',
                cache: false,
                data: {'user_name': userName, 'password': password, 'email':email,'_token': "{{csrf_token()}}"},
                success: function (data) {
                    if (data == null) {
                        $('.tip').show().append('连接服务器失败；');
                        return;
                    }

                    if (data.status != 0) {
                        $('.tip').show().append(data.message);
                    } else {
                        function jump(count) {
                            window.setTimeout(function(){
                                count--;
                                if(count > 0) {
                                    $('.tip-success').show().html('注册成功！'+count+'s');
                                    jump(count);
                                } else {
                                    location.reload()
                                }
                            }, 1000);
                        }
                        jump(3);
                    }

                }
            });

        }

    </script>
@endsection