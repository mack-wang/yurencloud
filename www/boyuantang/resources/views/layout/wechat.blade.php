<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">
  <title>@yield('title')</title>
  <link rel="stylesheet" href="{{asset('/css/weui.css')}}">
  <link rel="stylesheet" href="{{asset('/css/wechat.css')}}">
  <script type="text/javascript" src="{{asset('/js/jquery-3.1.1.min.js')}}"></script>
</head>
<body>

<div class="page">
  @yield('content')
</div>

@yield('my-js')
</html>
