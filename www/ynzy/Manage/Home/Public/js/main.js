var timeCount, time_show = 0;

function checkPhone() {
    //初始化手机验证提示，以免重复提示
    $("#checkPhone").html(" ");
    $("#input-tel~i").hide();
    //判断输入的手机号长度是否为11位
    if ($("#input-tel").val().length == 11) {
        $.post($("#url-controller").val() + "/checkPhone", { shop_tel: $("#input-tel").val() },
            function(data) {
                if (data == "true") {
                    $("#input-tel~.success").show();
                }
                if (data == "false") {
                    $("#input-tel~.warning").show();
                    $("#checkPhone").html("该手机号码不在白名单内");
                }
                if (data == "registered") {
                    $("#input-tel~.warning").show();
                    $("#checkPhone").html("该手机号码已经注册");
                }
            });
    }
}

function sendShortnum() {
    if ($("#input-tel").val().length != 11) {
        alert("手机号码格式不正确");
        return false;
    }
    if (time_show == 0) {
        $.post($("#url-controller").val() + "/sendShortnum", { shop_tel: $("#input-tel").val() },
            function(data) {
                if (data == "true") {
                    $("#shortnum-btn").attr("disabled", "disabled");
                    timeCount = self.setInterval(time_l, 1000);
                    time_show = 60;
                }
                if (data == "false") {
                    $("#shortnum-btn").val("验证码发送异常");
                }
            });
    }
}

function time_l() {
    time_show = time_show - 1;
    $("#shortnum-btn").val("验证码发送成功" + "  " + time_show + "s");
    if (time_show == 0) {
        clearInterval(timeCount);
        $("#shortnum-btn").removeAttr("disabled", "disabled");
        $("#shortnum-btn").val("点击重新发送");
    }
}

function checkShortnum() {
    //初始化短信验证码提示，以免重复提示
    $("#shortnum~i").hide();
    //判断验证码是否为6位
    if ($('#shortnum').val().length == 6) {
        $.post($("#url-controller").val() + "/checkShortnum", { shortnum: $("#shortnum").val() },
            function(data) {
                if (data == "true") {
                    $('#shortnum~.success').show();
                }
                if (data == "false") {
                    $('#shortnum~.warning').show();
                }
            });
    }
}

function shopRegister() {
    //判断上述手机号和短信验证码是否显示成功
    if ($("#input-tel+.success").is(":visible") && $("#shortnum+.success").is(":visible")) {
            $(".update-from").submit();
    }else{
        alert("手机号或验证码输入错误！请重试");
    }
}
