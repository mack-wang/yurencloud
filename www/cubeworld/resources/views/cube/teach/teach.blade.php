@extends('layouts.master')
@section('content')
    <div class="search-wrap">
        <input type="text"><span><i class="fa fa-search"></i></span>
    </div>
    <div class="acticle">
        <div class="acticle-left">
            <img src="{{asset('/img/avatar.jpg')}}" alt="" class="acticle-avatar">
            <p>miaomiao</p>
            <p>2016-11-04</p>
        </div>
        <div class="acticle-center">
            <dl>
                <dt>我是这篇文章的标题 我是这篇文章的标题 我是这篇文章的标题</dt>
                <dd>内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容</dd>
            </dl>
        </div>
        <div class="acticle-right">
            <img src="{{asset('/img/articlepic.jpg')}}" alt="">
            <img src="{{asset('/img/jianbian.png')}}" alt="" class="add-player">
            <p class="fire"><i class="fa fa-fire"></i>1000</p>
            <p class="comment"><i class="fa fa-comment"></i>1000</p>
        </div>
    </div>
    <div class="acticle">
        <div class="acticle-left">
            <img src="{{asset('/img/avatar.jpg')}}" alt="" class="acticle-avatar">
            <p>miaomiao</p>
            <p>2016-11-04</p>
        </div>
        <div class="acticle-center">
            <dl>
                <dt>我是这篇文章的标题 我是这篇文章的标题 我是这篇文章的标题</dt>
                <dd>内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容</dd>
            </dl>
        </div>
        <div class="acticle-right">
            <img src="{{asset('/img/articlepic.jpg')}}" alt="">
            <img src="{{asset('/img/jianbian.png')}}" alt="" class="add-player">
            <p class="fire"><i class="fa fa-fire"></i>1000</p>
            <p class="comment"><i class="fa fa-comment"></i>1000</p>
        </div>
    </div>
    <div class="acticle">
        <div class="acticle-left">
            <img src="{{asset('/img/avatar.jpg')}}" alt="" class="acticle-avatar">
            <p>miaomiao</p>
            <p>2016-11-04</p>
        </div>
        <div class="acticle-center">
            <dl>
                <dt>我是这篇文章的标题 我是这篇文章的标题 我是这篇文章的标题</dt>
                <dd>内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容</dd>
            </dl>
        </div>
        <div class="acticle-right">
            <img src="{{asset('/img/articlepic.jpg')}}" alt="">
            <img src="{{asset('/img/jianbian.png')}}" alt="" class="add-player">
            <p class="fire"><i class="fa fa-fire"></i>1000</p>
            <p class="comment"><i class="fa fa-comment"></i>1000</p>
        </div>
    </div>
    <div class="acticle">
        <div class="acticle-left">
            <img src="{{asset('/img/avatar.jpg')}}" alt="" class="acticle-avatar">
            <p>miaomiao</p>
            <p>2016-11-04</p>
        </div>
        <div class="acticle-center">
            <dl>
                <dt>我是这篇文章的标题 我是这篇文章的标题 我是这篇文章的标题</dt>
                <dd>内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容</dd>
            </dl>
        </div>
        <div class="acticle-right">
            <img src="{{asset('/img/articlepic.jpg')}}" alt="">
            <img src="{{asset('/img/jianbian.png')}}" alt="" class="add-player">
            <p class="fire"><i class="fa fa-fire"></i>1000</p>
            <p class="comment"><i class="fa fa-comment"></i>1000</p>
        </div>
    </div>
    <div class="acticle">
        <div class="acticle-left">
            <img src="{{asset('/img/avatar.jpg')}}" alt="" class="acticle-avatar">
            <p>miaomiao</p>
            <p>2016-11-04</p>
        </div>
        <div class="acticle-center">
            <dl>
                <dt>我是这篇文章的标题 我是这篇文章的标题 我是这篇文章的标题</dt>
                <dd>内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容 内容</dd>
            </dl>
        </div>
        <div class="acticle-right">
            <img src="{{asset('/img/articlepic.jpg')}}" alt="">
            <img src="{{asset('/img/jianbian.png')}}" alt="" class="add-player">
            <p class="fire"><i class="fa fa-fire"></i>1000</p>
            <p class="comment"><i class="fa fa-comment"></i>1000</p>
        </div>
    </div>

    <div class="page_list">
        {{--{!! $data->render() !!}--}}
        <div class="page_list">
            <ul>
                <li>上一页</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>下一页</li>
            </ul>
        </div>
    </div>

@endsection