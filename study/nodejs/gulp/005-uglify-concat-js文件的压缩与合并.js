/*
 【使用gulp合并压缩js】

 1、安装gulp-uglify拓展，gulp-concat拓展
 npm install gulp-concat -g
 npm install gulp-uglify -g

 2、创建gulpfile.js,并写入下列任务代码

 3、执行gulp uglifyjs

 */

var gulp = require('gulp'),

    uglify = require('gulp-uglify'),

    concat = require('gulp-concat');

//压缩与合并
gulp.task('uglifyjs', function () {
    //1、指定要压缩的js文件
    gulp.src(['src/js/*.js'])
    //2、把指定的js文件压缩，并输出到steam流中，由下一步管道pipe(concat())接收这个输出
        .pipe(uglify())
        //3、把上一步的压缩后的js文件们都合并在一起，生成collection.js，再次输出到steam流中,由下一步pipe(gulp.dest('dist/js/'))接收这个输出
        .pipe(concat('collection.js'))
        //4、最终产品输出到指定目录
        .pipe(gulp.dest('dist/js/'));
});


//仅压缩
gulp.task('uglify',function () {
    //1、指定要压缩的js文件
    gulp.src(['src/js/*.js'])
    //2、把指定的js文件压缩，并输出到steam流中，由下一步pipe(gulp.dest('dist/js/'))接收这个输出
        .pipe(uglify())
        //3、最终产品输出到指定目录
        .pipe(gulp.dest('dist/js/'));
});


//仅合并
gulp.task('concat', function () {
    //1、指定要压缩的js文件
    gulp.src(['src/js/*.js'])
        //2、把上一步的js文件们都合并在一起，生成collection.js，再次输出到steam流中,由下一步pipe(gulp.dest('dist/js/'))接收这个输出
        .pipe(concat('collection2.js'))
        //3、最终产品输出到指定目录
        .pipe(gulp.dest('dist/js/'));
});


