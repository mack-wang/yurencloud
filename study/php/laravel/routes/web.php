<?php

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\View;

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

//中间件添加额外参数
//checkrole:editor前者是中间件，冒号分割，editor是role参数
Route::put('post/{id}', function ($id) {
    //
})->middleware('checkrole:editor');

//取消csrf保护
Route::get('wechat',function (){
    return view('wechat');
});

Route::post('wechat/post',function (){
    return \Illuminate\Support\Facades\Input::all();
});

//通过csrf验证的多种方法
Route::get('csrf',function (){
    return view('csrf');
});

Route::post('csrf/post',function (){
    return \Illuminate\Support\Facades\Input::all();
});

//单动作路由有什么用？
//可以把一些使用频繁的动作独立出来，然后放到单动作路由组中，以便反复使用。不需要指定方法
Route::get('action/user/{id}','Action\UserController');

//控制器中间件
//常规使用方式
Route::get('book/find/{id}','BooksController@show')->middleware('web');
//推荐方式，在控制器中，通过构造函数来指定中间件，更方便
/*public function __construct()
{
    $this->middleware('auth');
    $this->middleware('log')->only('index');
    $this->middleware('subscribed')->except('store');
}*/


//资源路由，组合文件上传一起练习
Route::resource('photo','PhotoController');

//资源控制器，只保留指定的路由
//Route::resource('video', 'VideoController', ['only' =>
//    ['index', 'show','store']
//]);

//更改资源路由的默认动作名，比如store可以改为save
Route::resource('video', 'VideoController', ['only' =>
    ['index', 'show','store'],'names'=>['store'=>'video.save']
]);

//修改资源路由参数名字，默认是audio的，现在修改为id
Route::resource('audio', 'AudioController', ['parameters' => [
    'audio' => 'id'
]]);


/*   以下是路由请求对象的内容  */
/*
$request 是一个集合对象，包含以下成员
-----------
#json: null
#convertedFiles: null
#userResolver: Closure {#193 ▶}
#routeResolver: Closure {#194 ▶}
+attributes: ParameterBag {#40 ▶}
+request: ParameterBag {#46 ▶}
+query: ParameterBag {#46 ▶}
+server: ServerBag {#42 ▶}
+files: FileBag {#43 ▶}
+cookies: ParameterBag {#41 ▶}
+headers: HeaderBag {#44 ▶}
#content: null
#languages: null
#charsets: null
#encodings: null
#acceptableContentTypes: null
#pathInfo: "/request"
#requestUri: "/request"
#baseUrl: ""
#basePath: null
#method: "GET"
#format: null
#session: Store {#253 ▶}
#locale: null
#defaultLocale: "en"*/

//返回整个请求对象
Route::get('request',function (Request $request){
    return dd($request);
});

//返回请示路由路径
Route::get('request1',function (Request $request){
    return dd($request->path());
});

//判断是否是request路由
Route::get('request/test',function (Request $request){
    return dd($request->is('request/*'));
});

//获取完整路由
// $request->fullUrl()

//获取路由请求方法
//$request->method()

//判断路由请求访求
//$request->isMethod('post')


/*   以下是路由请求响应对象的内容  */
/*
Response {#283 ▼
  +headers: ResponseHeaderBag {#284 ▶}
  #content: ""
  #version: "1.0"
  #statusCode: 200
  #statusText: "OK"
  #charset: null
  +original: ""
  +exception: null
}
*/

//返回response整个响应对象
Route::get('response',function (Response $response){
    return dd($response);
});

//直接返回字符串
Route::get('response1', function () {
    return 'Hello World';
});

//直接返回json
Route::get('response2', function () {
    return ['name'=>'tom','age'=>'23'];
});

//设置返回的响应头,默认的响应是没有设置content-type的
Route::get('response3', function () {
    return dd(response('Hello World', 200)->header('Content-Type', 'text/plain'));
});

//设置响应cookie
Route::get('response4', function () {
    return dd(response('hello wlc')
        ->header('Content-Type', 'text/plain')
        ->cookie('name', 'value', 3));
});

Route::get('response5', function () {
    return dd(cookie('name'));
});

//强制用户下载
//第一个参数是文件的路径有app_path(),storage_path(),publick_path()等等
//第二个是下载后的文件名
//第三个可以设置响应头
Route::get('response6', function () {
    return response()->download(storage_path().'/app/storage/DJsZoroR5d0TMCCFgzkffTwyriZqkQKOiPqvxgTR.jpeg', 'girl.jpeg');
});

//向用户显示文件，不用下载
Route::get('response7', function () {
    return response()->file(storage_path().'/app/storage/DJsZoroR5d0TMCCFgzkffTwyriZqkQKOiPqvxgTR.jpeg');
});

//如果有较多重复使用的响应，可以设置成响应宏模板，
//比如我们想设置一个重复使用的响应，向用户打招呼，你好
/*
 1、在ResponeMacroServiceProvider中添加（若没有这个文件，就创建一个）
 public function boot()
    {
        Response::macro('say', function ($value) {
            return Response::make($value);
        });
    }
2、在config/app.php中的provider数组中注册上面这个服务
App\Providers\ResponeMacroServiceProvider::class,
*/
Route::get('response8', function () {
    return response()->say('你好');
});


/*   以下是视图view，blade的内容  */

//判断视图是否存在  /resource/view/photo.blade.php
Route::get('view', function () {
    dd(view()->exists('photo'));
});

//在所有视图中共享同一数据
//修改AppServiceProvider.php的boot方法，添加view()->share('author', 'wlc');
//测试成功，view和view2视图中，都有author为wlc的数据
Route::get('view2', function () {
    return view('view2');
});

//composer视图模板的使用
//理解，视图 Composer 是当视图被渲染时的回调或类方法。如果你有一些数据要在视图每次渲染时都做绑定，可以使用视图 Composer 将逻辑组织到一个单独的地方。
//现在我们要将每次用户的统计输出到视图，所以先在composer中组织好数据，然后输出到视图
/*
1、创建一个App\Http\ViewComposers目录
用来存放composer的类
2、创建一个服务提供者ComposerServiceProvider
在boot中写
// 使用基于类的composers...
View::composer(
'profile', 'App\Http\ViewComposers\ProfileComposer'
);

// 使用基于闭包的composers...
View::composer('dashboard', function ($view) {});
3、在config/app.php中的provider数组中注册服务
App\Providers\ComposerServiceProvider::class,
4、创建composer控制器
//构造函数
 public function __construct()
    {
        //获取所有的用户
        $this->users = User::all();
    }
 public function compose(View $view)
    {
        //将用户数量，输出到所有绑定的视图上
        $view->with('count', $this->users->count());
    }
5、在路由中将composer组织好的数据绑定到视图上，如下面所示，绑定的数据，仅在view3这个路由中有效
*/
Route::get('view3',function (){

    View::composer(
        ['view', 'view2','view3','welcome'],
        'App\Http\ViewComposers\ProfileComposer'
    );

    return view('welcome');
});


/*   以下是视图session的内容 */
//设置session
Route::get('session',function (){

    session(['name'=>'ming2']);

    return view('session');
});
//清空session
Route::get('session2',function (){

    session(['name'=>null]);

    return view('session');
});

//获取所有的session
/*array:4 [▼
  "_token" => "rYtJjHKmgDLMNaHRTtHrpDVJkvaTQS1ObfP8oLpM"
  "_previous" => array:1 [▼
    "url" => "http://laravel.app/session2"
  ]
  "_flash" => array:2 [▼
    "old" => []
    "new" => []
  ]
  "name" => null
]*/
Route::get('session3',function (Request $request){

    return dd($request->session()->all());
});

//虽然我把name的session值设置为了null，但name依旧存在于session数组中
Route::get('session4',function (Request $request){

    return dd($request->session()->exists('name'));
});


//获取session值，并删除该session值
//测试失败
Route::get('session5',function (Request $request){
    return dd($request->session()->pull('name', 'default'));
});


//一次性session，只保留到下一次的请求
//理解，只保留到下一次请求的意思是，当访问session6时，设置好session好state，下次访问任意路由均可再访问到state，但下下次访问时，就失效了
Route::get('session6',function (Request $request){
    $state = $request->session()->flash('status', 'Task was successful!');
    return session('status');
});

Route::get('session7',function (Request $request){
    return session('status');
});

//让一次性session中的值保留更多次
/*$request->session()->reflash();
$request->session()->keep(['username', 'email']);*/

//真正的删除session
Route::get('session8',function (Request $request){
    $request->session()->forget('name');
    return dd($request->session()->all());
});

//重新生成session id即 /storage/framework/sessions/文件名变了
//但原来的文件还在,只不过之后的session操作将只会有新文件中，而老文件就不管了
Route::get('session9',function (Request $request){
    $request->session()->regenerate();
});



/*  验证   */


Route::post('validate','UserController@check');

Route::get('validate',function (){
    return view('validate');
});

Route::post('validate2','UserController@check2');

Route::get('validate2',function (){
    return view('validate2');
});


Auth::routes();

Route::get('/home', 'HomeController@index');
//访问当前用户
Route::get('/auth2', function (Request $request){
    return $request->user();//返回认证用户实例...
});

//判断当前用户是否通过认证
Route::get('/auth3', function (Request $request){
    return strlen(Auth::check());//返回认证用户实例...
});

Route::get('/auth4', function() {
    return '你有权访问auth4';
})->middleware('auth');

Route::get('/myauth/callback', function() {
    return view('callback');
});


//加秘和解秘
Route::get('/encrypt', function() {
    $en = encrypt('helloworld');//生成216位的加密码，每次加密都是不同的
    return decrypt($en);
});

//哈希加密
Route::get('/bcrypt', function() {
    $en = Hash::make('helloworld');//生成60位的哈希加密码，每次加密都是不同的，并且会根据硬件的变化，而提升加密难度
    echo Hash::check('helloworld',$en)? 'true' : 'false';//检查哈希码和原码是否相同
});

Route::get('/bcrypt/rehash', function() {
    $en = Hash::make('helloworld');
    if (Hash::needsRehash($en)) {//检查哈希计算所用的哈希因子是否变化，如果变化了，则重新哈希
        $hashed = Hash::make('helloworld');
    }
});

//文件储存
Route::get('/storage', function() {
    Storage::disk('local')->put('file.txt', 'hello wlc');//会在storage/app/下创建file.txt文件，内容为hello wlc
});

//异常输出
Route::get('/401', function() {
    abort(401, 'Unauthorized.');
});

//单元测试
Route::get('/unit',function (Request $request){
   if($request->input('name')=='wlc' && $request->input('age') == 23){
      return response()->json(['state'=>'success']);
   }

    return response()->json(['state'=>'error']);
});