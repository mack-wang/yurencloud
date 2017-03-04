/*
 【使用gulp复制文件】

 1、使用npm的copy模块，安装copy模块（好像gulp也有复制插件）
 我觉得这个模块应该是比较常用的，还是全局安装比较好
 npm install copy -g
 //本地（当前项目下）安装 npm install copy --save-dev

 2、创建gulpfile.js,并写入下列任务代码

 3、执行gulp copy

 */

//导入工具包 require('node_modules里对应模块')
var gulp=require('gulp'),//本地安装gulp所用到的地方
    copy =require('copy');//载入del模块
//定义一个clean任务（自定义任务名称）
gulp.task('copy',function(cb){
    copy('hello.txt','dist/js/',cb);//复制当前目录下的hello.txt到dist/js/目录下
    //缺少cb会报错
});


