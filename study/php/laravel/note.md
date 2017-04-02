####1.laravel 5.4新特性
1.可以使用markdown模板来生成邮件和通知
2.可以Dusk来直接操作浏览器，进而调试javascript
3.使用webpack来进行项目的前端管理
4.Blade可以创建更小的组件，灵活使用
5.集合高阶消息传递，可以在集合上使用链式调用的方式调用更多方法
6.默认增加清除请求字符串的前后空格，并将空字符串转成null的中间件
7.原本只有内置服务才能使用门面，现在可以将任意的类实时转化为一个门面
8.数据关联查询添加了一些方法
9.优化了Redis
10.默认使用utf8mb4字符编码，支持表情排序

####2.更快速的创建laravel应用  
1.全局安装laravel安装器    
composer global require "laravel/installer"  
2.将laravel的安装命令添加到bash全局   
export PATH="~/.composer/vendor/bin:$PATH"   
source .bash_profile   
laravel -help  //测试是否安装成功  
laravel new blog  //使用new命令就可以立即在当前目录下创建laravel应用（首次安装需要下载，之后安装都直接读取缓存，具说比composer create-project要快）实测确实快很多，而且命令更短  

####3.直接使用php创建本地服务器
【临时最推荐】nohup php artisan serve &
【长期最推荐】screen

1.【推荐】在原来的窗口执行服务器运行，新建新窗口来执行其他命令
php artisan serve 就会直接创建localhost:8000服务器  
直接对应的就是当前项目的public入口  
因为服务器会一直运行，所以新建一个命令窗口就好

2.【推荐】使用screen  
screen -S NAME  
ctrl a d 返回原来窗口  
screen -r NAME 回到之前新建的窗口
ctrl shift d 关闭当前窗口

3.【不推荐，因为后台执行的】直接将服务器命令放到后台执行，在当前窗口执行其他命令
php artisan serve &
jobs -l
kill %jobs的序号 或者kill 进程的pid号  
fg %jobs的序号 从后台将命令调回来  
ctrl z 将当前命令暂停，并放到后台
bg %jobs的序号 让后台暂停的命令继续执行  
nohup php artisan serve & 让命令后台执行，会自动创建nohup.out，输出内容到该文件，也可以指定输出文件。

如果切换了窗口，找不到该jobs了，可以查找进程号，再杀掉pid号
sudo lsof -i :8000
sudo kill -9 你的pid号


####4.记得在.env.example中写好注释，以便在不同的地方能随时提醒你如何配置环境

####5.应用上线时，切记要执行一次php artisan config:cache将配置缓存成文件

####6.应用上线后，如果需要进行维护
php artisan down 暂时关闭站点，并给出提示页面  
php artisan up 恢复站点，继续提供服务  
我的理解是：下线时对站点的所有访问路由将全部引导到提示页面，上线时恢复正常路由。提示页面模板为：
  resources/views/errors/503.blade.php  

http://laravelacademy.org/post/6677.html 该页已经学习完毕，明天继续   




