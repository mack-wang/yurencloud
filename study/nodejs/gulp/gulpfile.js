//gulp API 文档
//gulp.src(globs[, options])
/*
参数一 globs(String 或 Array):
输出（Emits）符合所提供的匹配模式（glob）或者匹配模式的数组（array of globs）的文件。 将返回一个 Vinyl files 的 stream 它可以被 piped 到别的插件中。
理解：globs是目标文件的相对路径，可以用匹配符号；options是一个对象，包含几个固定的属性，可以设置。
*/
/*

options.buffer 类型： Boolean 默认值： true 如果该项被设置为 false，那么将会以 stream 方式返回 file.contents 而不是文件 buffer 的形式。这在处理一些大文件的时候将会很有用。**注意：**插件可能并不会实现对 stream 的支持。

options.read 类型： Boolean 默认值： true 如果该项被设置为 false， 那么 file.contents 会返回空值（null），也就是并不会去读取文件。

options.base 类型： String 默认值： 将会加在 glob 之前 (请看 glob2base)*/


//示例
var gulp = require('gulp'),
    less = require('gulp-less');

gulp.task('less',function () {
    gulp.src('src/less/*.less',{ buffer:true,read:true,base:'dist' })
        .pipe(less())
        .pipe(gulp.dest('dist/css'))
});


//gulp.dest(path[, options])
//能被 pipe 进来，并且将会写文件。并且重新输出（emits）所有数据，因此你可以将它 pipe 到多个文件夹。如果某文件夹不存在，将会自动创建它。