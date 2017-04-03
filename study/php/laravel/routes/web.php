<?php

Route::get('/', function () {
    return view('welcome');
});

//单个url参数
Route::get('user/{id}', function ($id) {
    return 'User '.$id;
});

//多个url参数
Route::get('posts/{post}/comments/{comment}', function ($postId, $commentId) {
    return '接收到：'.$postId.$commentId;
});

//可选参数
Route::get('user/{name?}', function ($name = 'tom') {
    return $name;
});

//单个正则约束
Route::get('userid/{id}', function ($id) {
    //若不符合正则，则会报错404
})->where('id', '[0-9]+');

//全局路由正则约束
//修改app/Providers/RouteServiceProvider.php中的boot方法
Route::get('bookid/{id}', function ($id) {
    return $id;
});

//命名路由
Route::get('book/profile', function () {
    //
})->name('profile');
