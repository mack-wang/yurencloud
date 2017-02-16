//用#node debug 来执行js文件就可以进入调试模式

/*
node debug 是调用v8来进行调试的

 run  执行脚本
 restart  重新执行脚本
 cont, c 继续执行，直到遇到下一个断点
 next, n 单步执行
 step, s 单步执行并进入函数
 out, o 从函数中步出
 setBreakpoint(), sb() 设置当前行为断点
 setBreakpoint(‘f()’), sb(...) 设置函数的第一行为断点
 setBreakpoint(‘script.js’, 20), sb(...) 设置脚本的第20行为断点
 clearBreakpoint, cb(...) 清除所有的断点
 backtrace, bt 显示当前的调用栈
 list(5) 显示当前执行的前后5行代码
 watch(expr) 把表达式expr加入监视列表
 unwatch(expr) 把表达式expr从监视列表移除
 watchers 显示监视列表中所有的表达式和值
 repl 在当前上下文打开即时求值环境
 kill 终止当前执行的脚本
 scripts 显示当前已加载的所有脚本
 version 显示v8的版本


*/

//二、可以用phpstorm中的debug对js文件进行断点调试

//三、可以使用npm的第三方调试包node-inspector来在浏览器中进行调试
//安装方法：npm install -g node-inspector

