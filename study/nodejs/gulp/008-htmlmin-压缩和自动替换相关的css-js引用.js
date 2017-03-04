//gulp实现的插件是：gulp-html-replace 、gulp-htmlmin


var gulp = require('gulp'),
    //对合并文件后的css,js等引用的自动替换
    replace = require('gulp-html-replace'),

    //合并和压缩html文件
    htmlmin = require('gulp-htmlmin');

gulp.task('htmlmin',function () {
    var option = {
        collapseWhitespace:true,//压缩html
        collapseBooleanAttributes:false,//省略布尔值属性
        removeEmptyAttributes:true,//删除空的属性
        removeScriptTypeAttributes:true,
        removeStyleLinkTypeAttributes:true,
        minifyJS:true,
        minifyCSS:true
    };

    gulp.src('hello.html')
        // .pipe(replace({
        //     'datajs':'data/data.js',
        //     'mainjs':'js/main.js'
        // }))
        .pipe(htmlmin(option))
        .pipe(gulp.dest('dist/'))
});
//确实把html文件压缩的很不错，可以减小html的体积