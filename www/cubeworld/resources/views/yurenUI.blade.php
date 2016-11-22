<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>yurenUI</title>
</head>
<link rel="stylesheet" href="{{asset('/css/yurenUI.css')}}">
<link rel="stylesheet" href="{{asset('/css/fontawesome.min.css')}}">
<style>
    .div1{width: 100px;height: 100px;}
    .div2{width: 1000px;height: 40px; border: 1px solid gray; border-radius: 4px; margin: 10px 10px 10px 10px;}
</style>
<body>
<h1>yurenUI的标题 yurenUI的标题 yurenUI的标题</h1>
<h2>yurenUI的标题 yurenUI的标题 yurenUI的标题</h2>
<h3>yurenUI的标题 yurenUI的标题 yurenUI的标题</h3>
<h4>yurenUI的标题 yurenUI的标题 yurenUI的标题</h4>
<h5>yurenUI的标题 yurenUI的标题 yurenUI的标题</h5>
<h6>yurenUI的标题 yurenUI的标题 yurenUI的标题</h6>
<mark>yurenUI着重标记</mark>
<p class="text-left">文本左对齐</p>
<p class="text-center">文本居中</p>
<p class="text-right">文本右对齐</p>
<button type="button" class="btn btn-default">Default</button>
<button type="button" class="btn btn-link">Link</button>
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-danger">Danger</button>
<div class="div1 dbg-success center-block"></div>
<!--fontawesome图标使用方法：引入他的css和字体文件夹fonts。在<i></i>标签中添加class"fa""fa-具体图标名""fa-大小倍数（可不写）"-->
<i class="fa fa-telegram fa-2x"></i>
<div class="div2 bg-primary"></div>
<div class="div2 bg-success"></div>
<div class="div2 bg-info"></div>
<div class="div2 bg-warning"></div>
<div class="div2 bg-danger"></div>
<div class="div2 dbg-primary"></div>
<div class="div2 dbg-success"></div>
<div class="div2 dbg-info"></div>
<div class="div2 dbg-warning"></div>
<div class="div2 dbg-danger"></div>
<div class="div2 bg-gray-darker"></div>
<div class="div2 bg-gray-dark"></div>
<div class="div2 bg-gray"></div>
<div class="div2 bg-gray-light"></div>
<div class="div2 bg-gray-lighter"></div>
</body>
</html>