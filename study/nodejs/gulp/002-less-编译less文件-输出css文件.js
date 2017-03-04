/*
【正式使用gulp】

Demo使用gul自动编译less文件成为css文件

一、在本地安装gulp
npm install gulp --save-dev

二、在本地安装gulp-less
npm install gulp --save-dev

三、创建gulpfile.js
 // //导入工具包 require('node_modules里对应模块')
 // var gulp=require('gulp'),//本地安装gulp所用到的地方
 //     less=require('gulp-less');
 // //定义一个testLess任务（自定义任务名称）
 // gulp.task('test',function(){
 //     gulp.src('src/less/test.less')//该任务针对的文件
 //         .pipe(less())//该任务调用的模块
 //         .pipe(gulp.dest('src/css'));//将会在src/css下生成test.css
 // });
 // gulp.task('default',['test']);//定义默认任务 elseTask为其他任务，该示例没有定义elseTask任务
 // //gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
 // //gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组)
 // //gulp.dest(path[, options]) 处理完后文件生成路径

四、在src目录下创建less，css目录，并在less目录中创建test.less

五、命令行中执行gulp，就会自动编译test.less并输出test.css

*/


// 取消注释来执行任务
//导入工具包 require('node_modules里对应模块')
var gulp=require('gulp'),//本地安装gulp所用到的地方
    less=require('gulp-less');
//定义一个testLess任务（自定义任务名称）
gulp.task('test',function(){
    gulp.src('src/less/test.less')//该任务针对的文件
        .pipe(less())//该任务调用的模块
        .pipe(gulp.dest('src/css'));//将会在src/css下生成test.css
});
gulp.task('default',['test']);//定义默认任务 elseTask为其他任务，该示例没有定义elseTask任务
//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组)
//gulp.dest(path[, options]) 处理完后文件生成路径



