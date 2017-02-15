//一、获取一个包
// npm [install/i] [package_name]

//二、npm安装的包的路径问题
/*
1、npm默认安装到当前目录下的node_modules,如果当前目录没有该目录，就会试图在你的home目录下寻找package.json，找到你指定的默认安装目录，如果你也没指定，那么就会停止安装。

2、如果当前目录下有node_modules目录，则会安装到该目录下，然后读取你的当前目录下的package.json，我认为这个文件就是一个自我介绍的文件，然后会返回npm会收集这些信息。会读取你package.json下的description介绍信息，repository 代码仓库信息，readme 说明文件信息，license 版权信息，如果没有读取到，会提示错误，但没啥关系。

3、为什么不像yum,gem,pip这样直接使用全局安装，而选择本地安装（即当前目录安装）。本地安装，可以在同一台电脑中，创建多个版本，使用多个版本，不会产生冲突，包作者也不用担心版本冲突问题，但这样，一台电脑里可能就会重复下载多次这个包，或者这个不同版本的包。

4、本地安装不会注册PATH环境变量，而全局安装会注册PATH环境变量
所以我们在安装supervisor时就用了全局安装
npm全局安装的方式添加一个-g参数即可：npm install -g supervisor

5、npm本地安装和全局安装的区别总结：本地安装能直接使用require，但不会注册PATH，而全局安装不能直接使用require，但能注册PATH，且会安装到usr/local/bin/node_modules/目录下。

*/


//三、npm link 创建全局链接
//如果我们在全局安装了chart包，你会发现你不能直接使用require来引入，这时，我们就可以通过npm link chart这个命令来创建一个全局包的软链接，到当前目录下（相当于快捷方式）。这样我们就可以直接require了。（目前：npm link命令不支持window平台）



//四、npm 包的发布
/*
与gem,pip,pear相比，npm的包发布相当简单，而且还提供了命令帮你发布
1、在发布之前，我们要让包的package.json符合CommonJS规范
使用npm init来创建一个符合标准的package.json
命令窗口会出现一个一个问题，你如实输入回答就可以了，会自动生成标准的package.json文件(ps:这个真的好方便)
#npm init

2、获得一个账号用于售后维护自己的包，使用
#npm adduser

3、检测自己是否已经创建好了账号
#npm whoami

4、在你的package.json所在的目录下运行npm publish就可以发布你的包了。
打开浏览器，访问http://search.npmjs.org/就可以找到自己刚刚发布的包了，我们可以在世界上的任意一台计算机上使用npm install myPackage_name 命令来安装它（跟git clone一样，随时承地都可以克隆自己的项目）
#npm publish

5、更新你的npm包，只要修改package.jso中的version，然后#npm publish就可以更新了
 #npm publish

 6、取消发布
 #npm unpublish

*/

