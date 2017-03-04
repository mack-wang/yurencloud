//安装gulp-imagemin拓展
//npm install gulp-imagemin -g


var gulp = require('gulp'),
    imagemin = require('gulp-imagemin');

gulp.task('imagemin',function () {
    gulp.src(['src/img/girl.jpeg'])
        .pipe(imagemin({
            progressive:true
        }))
        .pipe(gulp.dest('dist/img'));
});
//本地安装才可以使用
//若图片本身已经压缩过，则几乎没有压缩效果
//若图片本身是大图，有一点效果