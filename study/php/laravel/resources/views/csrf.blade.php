<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="{{asset('js/jquery.js')}}"></script>
    <script src="{{asset('js/jquery.yu.js')}}"></script>
    <title>Laravel</title>
</head>
<body>
<form action="{{url('csrf/post')}}" method="POST">
    {{--<input type="hidden" name="_token" value="{{ csrf_token() }}">--}}
    <input type="text" name="username">
    <div class="submit">提交</div>
</form>
</body>
<script>
    //以下设置csrf是有效的
    //无论怎样设置，只要在头部，或者参数中，带有_token值就可以了
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $('.submit').click(function () {
        $.post('{{url('csrf/post')}}',{username:$('input[name=username]').val()},function (data) {
            console.log(data);
        });

        {{--$.ajax({--}}
            {{--type:'POST',--}}
            {{--url:'{{url('csrf/post')}}',--}}
            {{--data:{username:$('input[name=username]').val()},--}}
            {{--success:function (data) {--}}
                {{--console.log(data);--}}
            {{--}--}}
        {{--})--}}
    })

</script>
</html>
