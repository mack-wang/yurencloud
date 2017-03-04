/*
【使用gulp删除文件】

1、使用npm的del模块，安装del模块（好像gulp也有删除插件）
我觉得这个模块应该是比较常用的，还是全局安装比较好
npm install del -g
//本地（当前项目下）安装 npm install del --save-dev

2、创建gulpfile.js,并写入下列任务代码

 //导入工具包 require('node_modules里对应模块')
 var gulp=require('gulp'),//本地安装gulp所用到的地方
 del =require('del');//载入del模块
 //定义一个clean任务（自定义任务名称）
 gulp.task('clean',function(cb){
 del(['dist/js/gulpjs/*']);//消除dist/js/gulpjs/下之前部署的文件
 cb();
 });

3、在命令窗口中执行：gulp clean  (只执行指定名字的任务)
 上述配置文件中的cb函数为连续任务时使用，单独用clean可以忽略cb
*/


//导入工具包 require('node_modules里对应模块')
var gulp=require('gulp'),//本地安装gulp所用到的地方
    del =require('del');//载入del模块
//定义一个clean任务（自定义任务名称）
gulp.task('clean',function(cb){
    del(['dist/js/gulpjs/*']);//消除dist/js/gulpjs/下之前部署的文件
    cb();//上述配置文件中的cb函数为连续任务时使用，单独用clean可以忽略cb
});



