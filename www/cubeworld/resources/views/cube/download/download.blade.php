@extends('layouts.master')
@section('content')
    <div class="search-wrap">
        <input type="text"><span><i class="fa fa-search"></i></span>
    </div>
    <div class="download-wrap center-block">
        <ul class="download-list center-block">
            <li><a href="">客户端下载</a></li>
            <li><a href="">MOD下载</a></li>
            <li><a href="">WIKI下载</a></li>
            <li><a href="">材质包下载</a></li>
            <li><a href="">皮肤下载</a></li>
            <li><a href="">教程下载</a></li>
        </ul>
        <ul class="rank-title-sponsor center-block">
            <li>图片</li>
            <li>中文名</li>
            <li>英文名</li>
            <li>周目</li>
            <li>时间</li>
            <li>下载</li>
        </ul>
        <div>
            <ul>
                <li><img src="{{asset('/img/group-img.jpg')}}" alt=""></li>
                <li>方块世界夏日风情</li>
                <li>cubeworldSummerLife</li>
                <li>20</li>
                <li>2016-11-04</li>
                <li><button><i class="fa fa-download"></i>下载</button></li>
            </ul>
            <ul>
                <li><img src="" alt=""></li>
                <li>方块世界夏日风情</li>
                <li>cubeworldSummerLife</li>
                <li>20</li>
                <li>2016-11-04</li>
                <li><button><i class="fa fa-download"></i>下载</button></li>
            </ul>
            <ul>
                <li><img src="" alt=""></li>
                <li>方块世界夏日风情</li>
                <li>cubeworldSummerLife</li>
                <li>20</li>
                <li>2016-11-04</li>
                <li><button><i class="fa fa-download"></i>下载</button></li>
            </ul>
            <ul>
                <li><img src="" alt=""></li>
                <li>方块世界夏日风情</li>
                <li>cubeworldSummerLife</li>
                <li>20</li>
                <li>2016-11-04</li>
                <li><button><i class="fa fa-download"></i>下载</button></li>
            </ul>
            <ul>
                <li><img src="" alt=""></li>
                <li>方块世界夏日风情</li>
                <li>cubeworldSummerLife</li>
                <li>20</li>
                <li>2016-11-04</li>
                <li><button><i class="fa fa-download"></i>下载</button></li>
            </ul>
            <ul>
                <li><img src="" alt=""></li>
                <li>方块世界夏日风情</li>
                <li>cubeworldSummerLife</li>
                <li>20</li>
                <li>2016-11-04</li>
                <li><button><i class="fa fa-download"></i>下载</button></li>
            </ul>

        </div>
        <div class="page_list page_list_position_sponsor">
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
    </div>


@endsection