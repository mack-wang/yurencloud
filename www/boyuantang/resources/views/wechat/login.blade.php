@extends('layout.wechat')

@section('title','登入')

@section('content')
    <div class="weui_cells_title"></div>
    <div class="weui_cells weui_cells_form">
        <div class="weui_cell">
            <div class="weui_cell_hd"><label class="weui_label">手机号</label></div>
            <div class="weui_cell_bd weui_cell_primary">
                <input class="weui_input" type="tel" name="phone" placeholder="手机号"/>
            </div>
        </div>

        <div class="weui_cell">
            <div class="weui_cell_hd"><label class="weui_label">验证码</label></div>
            <div class="weui_cell_bd weui_cell_primary">
                <input class="weui_input" type="number" placeholder="请输入手机验证码"/>
            </div>
            <div class="weui_cell_ft bk_code">
                获取验证码
                {{--<img src="/service/validate_code/create" class="bk_validate_code"/>--}}
            </div>
        </div>
    </div>
    <div class="weui_cells_tips"></div>
    <div class="weui_btn_area">
        <a class="weui_btn weui_btn_primary" href="javascript:" onclick="onLoginClick();">登录</a>
    </div>
@endsection

@section('my-js')
    <script type="text/javascript">
        var enable = true;
        $('.bk_code').click(function(event) {
            if(enable == false) {
                return;
            }

            var phone = $('input[name=phone]').val();
            // 手机号不为空
            if(phone == '') {
                $('.bk_toptips').show();
                $('.bk_toptips span').html('请输入手机号');
                setTimeout(function() {$('.bk_toptips').hide();}, 2000);
                return;
            }
            // 手机号格式
            if(phone.length != 11 || phone[0] != '1') {
                $('.bk_toptips').show();
                $('.bk_toptips span').html('手机格式不正确');
                setTimeout(function() {$('.bk_toptips').hide();}, 2000);
                return;
            }

            $(this).removeClass('bk_important');
            $(this).addClass('bk_summary');
            enable = false;
            var num = 60;
            var interval = window.setInterval(function() {
                $('.bk_code').html(--num + 's 重新发送');
                if(num == 0) {
                    $('.bk_code').removeClass('bk_summary');
                    $('.bk_code').addClass('bk_important');
                    enable = true;
                    window.clearInterval(interval);
                    $('.bk_code').html('重新发送');
                }
            }, 1000);

            $.ajax({
                url: '/wechat/login/send',
                dataType: 'json',
                cache: false,
                data: {phone: phone},
                success: function(data) {
                    if(data == null) {
                        $('.bk_toptips').show();
                        $('.bk_toptips span').html('服务端错误');
                        setTimeout(function() {$('.bk_toptips').hide();}, 2000);
                        return;
                    }
                    if(data.status != 0) {
                        $('.bk_toptips').show();
                        $('.bk_toptips span').html(data.message);
                        setTimeout(function() {$('.bk_toptips').hide();}, 2000);
                        return;
                    }

                    $('.bk_toptips').show();
                    $('.bk_toptips span').html('发送成功');
                    setTimeout(function() {$('.bk_toptips').hide();}, 2000);
                },
                error: function(xhr, status, error) {
                    console.log(xhr);
                    console.log(status);
                    console.log(error);
                }
            });
        });
    </script>
@endsection
