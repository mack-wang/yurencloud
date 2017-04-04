<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @stack('scripts')
    <title>Laravel</title>
</head>
<style>
    .red{
        color:red;
    }
    .blue{
        color:blue;
    }
</style>
<body>
<div>首页</div>{{ $count or 0 }}
@component('layout.component')
@slot('title2')
我是插曹的标题
@endslot
我是 slot插曹的正文
@endcomponent

{{--unless 除非--}}
@unless (session('name') != null)
    由于你的名字是null，所以显示
@endunless

<ul class="red">
{{--渲染集合视图--}}
@each('layout.jobs', ['老师','医生','javascript','php'], 'job')
</ul>
@php
echo __('i love you');
@endphp
</body>
</html>
