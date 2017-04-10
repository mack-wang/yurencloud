## 1.laravel 5.4新特性
- 可以使用markdown模板来生成邮件和通知
- 可以Dusk来直接操作浏览器，进而调试javascript
- 使用webpack来进行项目的前端管理
- Blade可以创建更小的组件，灵活使用
- 集合高阶消息传递，可以在集合上使用链式调用的方式调用更多方法
- 默认增加清除请求字符串的前后空格，并将空字符串转成null的中间件
- 原本只有内置服务才能使用门面，现在可以将任意的类实时转化为一个门面
- 数据关联查询添加了一些方法
- 优化了Redis
- 默认使用utf8mb4字符编码，支持表情排序

## 2.更快速的创建laravel应用  
- 全局安装laravel安装器    
`composer global require "laravel/installer"`  
- 将laravel的安装命令添加到bash全局     
`export PATH="~/.composer/vendor/bin:$PATH" `    
`source .bash_profile`  
测试是否安装成功    
`laravel -help`    
 使用new命令就可以立即在当前目录下创建laravel应用（首次安装需要下载，之后安装都直接读取缓存，具说比composer create-project要快）实测确实快很多，而且命令更短     
`laravel new blog` 

## 3.直接使用php创建本地服务器
【临时最推荐】    
`nohup php artisan serve &`  
【长期最推荐】screen    

- 【推荐】在原来的窗口执行服务器运行，新建新窗口来执行其他命令
php artisan serve 就会直接创建localhost:8000服务器  
直接对应的就是当前项目的public入口  
因为服务器会一直运行，所以新建一个命令窗口就好

- 【推荐】使用screen  
`screen -S NAME `  
返回原来窗口     
`ctrl a d`    
NAME 回到之前新建的窗口   
`screen -r`   
关闭当前窗口    
`ctrl shift d`   

- 【不推荐，因为后台执行的】直接将服务器命令放到后台执行，在当前窗口执行其他命令
放到后台执行   
`php artisan serve &`   
显示后台工作序号  
`jobs -l`    
关闭后台工作序号或关闭进程号    
`kill %jobs`     
从后台将命令调回来    
`fg %jobs`    
将当前命令暂停，并放到后台   
ctrl z   
让后台暂停的命令继续执行   
`bg %jobs`    
让命令后台执行，会自动创建nohup.out，输出内容到该文件，也可以指定输出文件。    
`nohup php artisan serve & `   

如果切换了窗口，找不到该jobs了，可以查找进程号，再杀掉pid号    
`sudo lsof -i :8000`   
`sudo kill -9 你的pid号`   


## 4.记得在.env.example中写好注释，以便在不同的地方能随时提醒你如何配置环境

## 5.应用上线后，优化性能  
执行一次php artisan config:cache将配置缓存成文件  

## 6.应用上线后，如果需要进行维护
暂时关闭站点，并给出提示页面  
`php artisan down`  
 恢复站点，继续提供服务  
`php artisan up`    
我的理解是：下线时对站点的所有访问路由将全部引导到提示页面，上线时恢复正常路由。提示页面模板为：
  resources/views/errors/503.blade.php  

## 7.phpunit测试时可切换.env文件
  创建.env.testing,那么在执行phpunit测试时，.env.testing将会覆盖.env

## 8.查看artisan可以自动创建的app下目录和文件
`php artisan list make`

## 9.app目录下的子目录作用
默认子目录
- Console 自定义的artisan命令。php artisan make:command  
- Exceptions 异常处理，错误处理。  
- Http 控制器，中间件，表单处理 。 
- Providers 服务提供者，绑定容器，注册服务等。  

不存在，需要命令来创建的目录
- Events 事件目录。 event:generate 和 make:event 创建。
- jobs 任务队列。make:job 生成。
- Listeners 事件监听。event:generate 和 make:listener 创建。
- Mail 邮件处理。make:mail 创建。
- Notifications 发送消息提示。make:notification 创建。
- Policies 权限设置。make:policy 创建。 

## 10.laravel响应访问的生命周期  
- 由apache或nginx发送请求到public/index.php  
- index.php载入composer的自动加载功能
- 自动加载从bootstrap/app.php 脚本获取 Laravel 应用实例
- 创建服务容器实例  
- 内核启动 app/Http/Kernel.php，被发送到http或console  
- 发送到http
- http中间处理（http会话的读写，应用是否是维护状态，验证csrf令牌，你自定义的中间件等）http很简单，获取一个Request，返回一个Response。
- 在内核启动的过程中，应用载入服务提供者，所有的服务提供者都在config/app.php的providers 数组中，服务提供者的register被调用，boot方法被调用。服务提供者功能：数据库、队列、验证器，以及路由组件等

## 11.对homestead的理解
homestead就是一台搭建在vmware的ubuntu服务器，并且配置好了所有开发中需要用到的软件如php mysql nginx redis memcache等。
通过vagrant可以轻松的创建homestead或删除homestead，如何创建或者删除文件夹一样轻松。因为我们可以完全不用在本地安装php,mysql等等软件。
- 下载安装vmware或virtual box
- 下载安装vagrant
- 克隆homestead配置文件，可以放到全局，也可以放到当前项目下,可以放任何地方
`cd ~  
git clone https://github.com/laravel/homestead.git Homestead  `
- 执行vagrant命令，添加laravel的homestead服务器 
要在Homested文件夹下进行vagrant命令的操作，切记！

`cd ~/Homestead
vagrant box add laravel/homestead`
(下载太慢的话可以用迅雷)
`https://vagrantcloud.com/laravel/homestead/version/8/provider/virtualbox.box
vagrant box add laravel/homestead 你刚刚下载的路径/virtualbox.box`
- 最关键的一步
`cd ~/.vagrant.d/boxes/laravel的box/2.0.0/virtualbox/
vi box.ovf`
在<Adapter .. >标签内，添加cable="true"属性  

- 同步本地和homestead的项目文件夹，这样我们就可以在本地phpstorm写代码，同步到homestead
修改Homestead.yaml文件中的,map是本地的Code，指向服务器的/home/vagrant/Code  
`folders:  
    map: ~/Code  
    to: /home/vagrant/Code `   
- 配置服务器的nginx
如何你已经启动了vagrant，则要vagrant reload --provision注销重启一下才生效  
`sites:
    map: homestead.app
    to: /home/vagrant/Code/Laravel/public`
- 配置一下本地hosts    
`192.168.10.10 homestead.app ` 
- 启动vagrant    
在homestead目录下执行命令vagrant up    
- 销毁homestead服务器  
`vagrant destroy ` 
- homestead全局安装后，所有的项目都将在该盒子中运行，也可以为指定项目单独创建homestead，这样就会在指定项目下生成homestead文件夹，该文件夹就是服务器整个系统  
composer require laravel/homestead --dev  
使用 make 命令生成 Vagrantfile 和 Homestead.yaml 文件，make 命令将会自动配置 Homestead.yaml 中的 sites 和 folders 属性。  
Mac/Linux：    
`php vendor/bin/homestead make ` 
Windows:    
`vendor\bin\homestead make`  
- 针对vagrant最新版在windows下的vagrant up出错解决办法，修改/Homestead/script/homestead.rb
40行改成这个 config.vm.box_version = settings["version"] ||= ">= 0"  
90行改成这个 config.vm.network "forwarded_port", guest: guest, host: host, host_ip: "127.0.0.1", auto_correct: true  
若想改其他参数，也都改这个文件  
- windows下添加homestead快捷操作命令的话，记得把win和linux的两种设置都设置一下，因为我经常使用bash而不是cmd

## 12.路由正则约束
- 针对指定路由的正则约束  
`Route::get('user/{name}', function ($name) {
    //
})->where('name', '[A-Za-z]+');`
- 全局路由参数的正则约束
RouteServiceProvider 类的 boot方法中定义约束模式  
`public function boot()
{
    Route::pattern('id', '[0-9]+');
    parent::boot();
}`

## 13.单动作控制器
如果一个控制器只有一个动作，比如根据用户的id返回用户的个人信息界面
则可以在在ShowProfile下定义__invoke($id)方法，并在该方法内写处理逻辑
`Route::get('user/{id}', 'ShowProfile');`

## 14.资源控制器
假如我们是围绕着某一个资源进行增删改查等操作，可能要在路由和控制器中注册多个方法。以下是简化操作
- 生成书籍的控制器，并自动创建index,create,show,update,store,edit等方法
`php artisan make:controller BooksController --resource ` 
- 注册上面控制器里的所有路由，自动分配访问方式get,post,put,delete,patch等
`Route::resource('books', 'BooksController')`
- 若想直接再创建对应的资源模型model
`php artisan make:controller BookController --resource --model=Books`
(注意model文件直接在app目录下生成，所以我建议还是手动生成model比较好，可以整理到我们指定的model目录下)

## 15.请求对象$request Request
只要是http访问，就会为每个访问创建$request对象  
- 获取请求路径  
`$request -> path();  `
- 获取完整请求路径
`$request -> url();不包含查询字符`
`$request -> fullUrl();包含查询字符`
- 获取请求方法
`$request -> method();`
- 判断请求方法
`$request -> isMethod('post');`
- 获取所有的输入值
`$request -> all()`
- 获取指定的输入值
`$request -> input('name')`
- 获取指定的输入值，若没有，则设置默认输入值
`$request -> input('name','tom')`
- 获取输入值json内值
`$name = $request->input('user.name');`
- 获取输入值的子集
`$input = $request->only(['username', 'password']);
 $input = $request->only('username', 'password');
 $input = $request->except(['credit_card']);
 $input = $request->except('credit_card');`
- 判断请求的输入值中是否包含某值
- 将输入值存储到一次性的session中
- 获取上一次的输入值
- 从请求中获取cookie
- 在响应中添加cookie设置
- 文件上传
- 判断上传中某文件是否存在
- 验证上传是否成功
- 获取文件的拓展名
- 保存上传的文件

## 16.响应对象 return Response
- 可以直接返回字符串
php是不能直接返回字符串的，但在laravel可以直接返回字符串
`return 'hello world';`

- 可以直接返回数组（会自动转成json,所以没必要写成Response::json([])）
return [1,2,3,4];
- 设置响应头
- 添加 Cookie 到响应
- Cookie & 加密
- 重定向
`return redirect('home/dashboard');`
- 重定向到上一次的请求路由
`return back()->withInput();`
- 重定向到路由名
`return redirect()->route('login');`
- 重定向到控制器动作
`return redirect()->action('HomeController@index');`  
`return redirect()->action('UserController@profile', ['id'=>1]);`
- 强制用户下载
`return response()->file($pathToFile);
 return response()->file($pathToFile, $headers);`


## 17.视图 view
- 判断视图是否存在
`if (view()->exists('emails.customer')) {
     //
 }`
- 在所有视图中共享同一数据
在服务器提供者的boot方法中AppServiceProvider  
` public function boot()
    {
        view()->share('key', 'value');
    }`
- 

## 18.当创建数据表时出现updated_at默认时间的问题解决办法
- 因为最新版的mysql默认模式中，禁止默认时间为0或null，查看模式
`show variables like 'sql_mode';`
- 如果结果中含有NO_ZERO_IN_DATE, NO_ZERO_DATE则执行下面的命令：
`set session sql_mode='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION'`
- sql设置
`  created_at timestamp NOT NULL ,
  updated_at timestamp NOT NULL default CURRENT_TIMESTAMP()`
  
  
## 19.创建中间件
- 创建中间件
`php artisan make:middleware CheckAge`
- 编辑中间件要执行的动作
`if ($request->input('age') >= 30) {
            return redirect('age');
        }
return $next($request);`
- 注册中间件
修改APP/Http/Kernel.php中的$routeMiddleware，添加  
'checkage' => \App\Http\Middleware\CheckAge::class,  
- 在路由中使用中间件
`Route::group(['middleware' => 'checkage'], function () {
    Route::get('/pass', function () {
        return view('pass');
    });
});`
- 另一种使用方法
`Route::get('/pass', function () {
        return view('pass');
    })->middleware('auth','checkage');
    或者->middleware(CheckAge::class);`

## 20.创建路由文件
默认是有两个路由文件web.php,api.php，我们可以创建其他路由文件，以便在大型项目中，更好的维护路由
- 在RouteServiceProvider.php中注册新路由文件
`protected function mapAdminRoutes()
    {
        Route::middleware('admin')
             ->namespace($this->namespace)
             ->group(base_path('routes/admin.php'));
    }`  
    并在map中添加 $this->mapAdminRoutes();  
`public function map()
    {
        $this->mapAdminRoutes();
    }`
- 在Http/Kernel.php中添加admin路由组,添加一些默认的中间件，也可以添加自己的中间件
`'admin' => [
            \App\Http\Middleware\EncryptCookies::class,
        ],`
- 在routes文件夹下创建admin.php文件


## 21.对指定路由取消csrf保护
- 在VerifyCsrfToken中间件中添加
`protected $except = [
        'wechat/*',
    ];`

## 22.写自定义的辅助函数
- 创建自定义的辅助函数文件
在App/help.php写一些自己经常用的函数
- 修改根目录下的composer.json，在files中添加app/help.php
`"autoload": {
        "classmap": [
            "database"
        ],
        "psr-4": {
            "App\\": "app/"
        },
        "files": [
            "app/help.php"
        ]
    },`
- 运行composer dumpauto立即生效

## 23.上传文件
- 创建文件上传的表单，切记要添加enctype="multipart/form-data"，不然仍然是上传普通表单，而非文件表单
`<form action="{{url('photo')}}" method="POST" enctype="multipart/form-data">
    <input type="hidden" name="_token" value="{{ csrf_token() }}">
    <input type="file" accept="image/jpg,image/png" name="photo">
    <input type="submit">
</form>`

- 在控制器中判断文件上传过程是否出错,可省略
`$request->file('photo')->isValid()`

- 在控制器中判断上传文件中是否包含photo
`$request->hasFile('photo')`

- 将上传文件储存到指定位置，并返回相对路径
`$path = $request->photo->store('storage');`

- 将路径储存到数据库，略

- 其他
文件上传路径设置在 config/filesystems.php

## 24.路由参数和依赖参数的顺序
如果我们使用了Request依赖，并引入参数Request $request,则路由原来的参数放到最后
public function update(Request $request, $id)


## 25.表单验证
- 需要在控制器中验证，controller默认继承了验证类
- $this可以直接调用validate方法,参数一：验证的请求，参数二：验证的提交的参数名，和验证规则
`$this->validate($request, [
            'user' => 'required|max:6',
]);`
- 默认是验证所有规则，若希望验证出错立即停止验证剩下的规则的话，可以添加bail规则
`'title' => 'bail|required|unique:posts|max:255',`
- 验证错误信息保存在全局的$errors数组中，不能直接输出，需要遍历输出
`@if (count($errors) > 0)
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif`

- 可选字段注意事项，因为laravel默认将所有的请求空字符串都变为null，若希望null也接受的话，需要添加nullable规则
`'publish_at' => 'nullable|date',`


## 26.安装laravel语言包
- 网址https://github.com/overtrue/laravel-lang/blob/master/README_CN.md
- 1.composer require "overtrue/laravel-lang:~3.0"
- 2.完成上面的操作后，将项目文件 config/app.php 中的下一行
`Illuminate\Translation\TranslationServiceProvider::class,`  
替换为  
`Overtrue\LaravelLang\TranslationServiceProvider::class,`
- 3.修改项目语言 config/app.php：
`'locale' => 'zh-CN',`
- 4.在 .env 文件中修改语言：
`APP_LOCALE=zh-CN`
- 5.要想覆盖翻译文件，只要在resources/lang/zh-CN目录下，创建相同的文件就可以覆盖默认语言



## 27.创建可重复使用的表单验证
- 创建request类  
会在app/http/下生成request文件夹，并在該文件夹下生成StoreArticle.php文件  
`php artisan make:request StoreArticle`
- 定义规则
authorize规则，是确认用户是否有权限提交表单，若返回false则不允许提交，适合从数据库中获取用户信息，然后根据情况返回布尔值
  `public function authorize() `
rules定义表单验证规则
   `public function rules()`
messages定义表单验证的提示信息，针对上一步的rules  
   `public function messages()`
   
   
## 28.【我认为优先使用这个】针对用户的验证提示
- 修改resources/lang/zh-CN
`'custom' => [
        'user' => [
            'max' => '我是语言文件中的custom设置的错误提示，亲爱的用户，你字数超了 :max 个',
        ],
    ],`
- 可以针对表单提交的参数名，进行提示，但这就要求你的参数名要有区别，比如id可能在很多表单中都有重复

## 29.Blade中的组件和插槽slot的使用
- 新建任意blade文件
其中{{ $slot }}这个变量名不能变，代表要插入的地方，{{ $title2 }}是slot中的变量，可以换成任意变量名
`<div class="red">
<div class="blue">{{ $title2 }}</div>
{{ $slot }}
</div>`

- 在其他blade中引用
`@component('layout.component')
@slot('title')
我是插曹的标题
@endslot
我是 slot插曹的正文
@endcomponent`

- 给组件传递变量
所有数据都会在组件模板中以变量方式生效  
`@component('layout.component', ['foo' => 'bar'])
    ...
@endcomponent`


## 30.在Blade中使用循环时，使用$loop变量，获取循环中可以使用的其他变量
`$loop->index	当前循环迭代索引 (从0开始)
$loop->iteration	当前循环迭代 (从1开始)
$loop->remaining	当前循环剩余的迭代
$loop->count	迭代数组元素的总数量
$loop->first	是否是当前循环的第一个迭代
$loop->last	是否是当前循环的最后一个迭代
$loop->depth	当前循环的嵌套层级
$loop->parent	嵌套循环中的父级循环变量`

## 31.可以写blade注释，不会输出到html中
`{{-- This comment will not be present in the rendered HTML --}}`

## 32.在Blade中写大段php代码
`@php
    //
@endphp`

## 33.渲染集合视图
- 可以创建原本只有foreach才能创建的视图,而且更方便，更简单
`<ul class="red">
{{--渲染集合视图--}}
@each('layout.jobs', ['老师','医生','javascript','php'], 'job')
</ul>`  

- 可以指定若没有数组参数传入时的视图
`@each('view.name', $jobs, 'job', 'view.empty')`

## 35.翻译语言，比如英译中，或者中译英
- 原本我们是在/resources/lang/zh-CN/对应的php文件中使用键值对的方式来翻译的，但为每个键取名，太麻烦了
- 在/resources/lang/目录下直接创建zh-CN.json文件
`{
  "i love you": "我爱你"
}`
- 在任意地方使用翻译辅助函数__()就可以直接翻译
例如我在welcome.blade.php中使用了翻译  
`@php
echo __('i love you');
@endphp`


## 36.php的psySH相当于javascript中的node
使用php artisan tinker进入PsySH
可以执行php命令，并直接返回结果
可以查看php文档，有中文文档
没有.local/share/psysh的话，就创建该文件夹
（windows系统存放在C:Users{用户名}AppDataRoamingPsySH）
$ cd ~/.local/share 
$ mkdir psysh
$ cd psydh
$ wget http://psysh.org/manual/zh/php_manual.sqlite

## 37.添加自定义的artisan命令
- 简单的方式
在路由的console.php中定义artisan命令，直接就可以使用

- 复杂的方式
php artisan make:command SendEmails
会在app/console/commands目录下创建SendEmails文件
$signature填写命令形式
$description填写命令的介绍
handle填写命令具体要执行的动作
并且在app/console/kernel.php中注册该命令  
` protected $commands = [
        //
        Commands\SendEmails::class
    ];`
    