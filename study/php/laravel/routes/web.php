<?php

Route::get('test',function (){
    dd(route('profile',['id' => 1]));
});

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
Route::get('book/profile/{id}', function () {
    //
})->name('profile');

Route::get('books/show','BooksController@show')->name('show');
//route('profile',['id' => 1]),路由如果有设置url参数，则按url参数显示。若没有设置参数，则按？id=1来显示

//路由群组
//理解：路由嵌套，最外层定义群组规则，里面的路由都受该规则限制
//中间件群组
Route::group(['middleware' => 'auth'], function () {
    Route::get('/auth', function () {
        // 使用 Auth 中间件
    });

    Route::get('user/auth', function () {
        // 使用 Auth 中间件
    });
});

//命名空间
Route::group(['namespace' => 'Admin'], function(){
    // 控制器在 "App\Http\Controllers\Admin" 命名空间下
    //控制器就不用写Admin\了
    Route::get('admin', 'AdminController@show');
});

//子域名路由
Route::group(['domain' => '{account}.myapp.com'], function () {
    Route::get('user/{id}', function ($account, $id) {
        //
    });
});

//路由前缀
Route::group(['prefix' => 'admin'], function () {
    //路由地址的admin/就不用写了
    Route::get('users', function () {
        // 匹配 "/admin/users" URL
    });
});

//获取用户id自动注入
//理解：获取用户id，调用App\User被注册id，获取该用户的整个数据查询结果，并返回给$user;
//测试成功
Route::get('myapi/users/{user}', function (App\User $user) {
    return $user;
});

//特殊方法测试
//HTML 表单不支持 PUT、PATCH 或者 DELETE 请求方法,定义 PUT、PATCH 或 DELETE 路由时，需要添加一个隐藏的 _method 字段到表单
//全部测试成功
Route::get('mybook', function () {
    return view('book');
});

Route::put('mybook/buy1', function () {
    return 'hello1';
});

Route::patch('mybook/buy2', function () {
    return 'hello2';
});

Route::delete('mybook/buy3', function () {
    return 'hello3';
});

//获取当前路由
Route::get('now',function (){
    $route = Route::current();//是一个集合，含uri,methods,action,controller,wheres,parameters，router,等等，含下面的name和action
    $name = Route::currentRouteName();//获取路由的命名
    $action = Route::currentRouteAction();//获取路由的控制器，当前没有
    dd($route);
//    dd($name);
//    dd($action);
})->name('nowName');



/*    以下是中间件的内容     */
Route::group(['middleware' => 'checkage'], function () {
    Route::get('/pass', function () {
        return view('pass');
    });
});
Route::get('age',function (){
    return view('age');
});






















