<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>
</head>
<body>
<form action="{{url('wechat/post')}}" method="POST">
    {{--<input type="hidden" name="_token" value="{{ csrf_token() }}">--}}
    <input type="text" name="username">
    <input type="submit">
</form>
</body>
</html>
