/*
一、安装gulp(全局安装)
npm install gulp -g

二、创建项目的必要的基础文件
1、node_modules 文件夹，用来存放本地（即当前项目）的node_modules模块文件

2、package.json 让记录当前项目的一些配置，依赖等，方便自动更新升级
npm init 来快速方便的创建

3、.gitignore 避免上传大量无用的模块文件到github，污染项目
idea,node_modules等
参考当前的.gitignore

4、src用于存放项目的源文件,即项目文件存在的地方；dist用于存放项目的编译生产出的最终文件

*/



/*
【简单使用gulp】

正式使用gulp，只需要两步就能创建、并使用gulp来自动执行任务

一、创建gulpfile.js（gulpfile.js的核心文件，所有设置都在这里）

var gulp =require('gulp');//载入gulp模块
gulp.task('default',function(){//设置默认任务
    console.log('hello world');//默认任务为：输出hello world
});

二、直接命令行输入：gulp 或在webstorm或phpstorm中右键show gulp tasks,双击也能执行
就能执行当前目录下的gulpfile.js当中的任务

*/



// 取消注释来执行
var gulp =require('gulp');//载入gulp模块
gulp.task('default',function(){//设置默认任务
    console.log('hello world');//默认任务为：输出hello world
});

// 执行后输出执行结果信息，包含使用了执行的gulpfile文件，开始执行任务的名字，任务执行中的输出内容，结束任务时所用的时间
// [20:31:54] Using gulpfile ~/Web/www/mack-wang/yurencloud/study/nodejs/gulp/gulpfile.js
// [20:31:54] Starting 'default'...
// hello world
// [20:31:54] Finished 'default' after 265 μs

/*
我们在使用npm install 安装模块或插件的时候，有两种命令把他们写入到 package.json 文件里面去，比如：

--save-dev

--save

在 package.json 文件里面提现出来的区别就是，使用 --save-dev 安装的 插件，被写入到 devDependencies 对象里面去，而使用 --save 安装的插件，责被写入到 dependencies 对象里面去。

那 package.json 文件里面的 devDependencies  和 dependencies 对象有什么区别呢？

devDependencies  里面的插件只用于开发环境，不用于生产环境，而 dependencies  是需要发布到生产环境的。*/
