/*
 【使用gulp压缩css】

 1、安装gulp-minify-css拓展
 npm install gulp-minify-css -g

 2、创建gulpfile.js,并写入下列任务代码

 3、执行gulp minify

 */

// var gulp = require('gulp'),
//     minify = require('gulp-minify-css');
//
// gulp.task('minify',function () {
//     gulp.src(['src/css/mini.css'])
//         .pipe(minify())
//         .pipe(gulp.dest('dist/css'));
// });
//这个全局安装好像没法用，得本地安装才能用
//这个确实很智能，智能压缩css
//听说官网推荐使用gulp-cssnano

var gulp = require('gulp'),
    cssnano = require('gulp-cssnano');

gulp.task('minify',function () {
    gulp.src(['src/css/mini.css'])
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css'));
});
//css文件小，没看出什么区别，应该大的时候有优势吧
//同样，要本地安装才能用，全局安装好像是没用的
