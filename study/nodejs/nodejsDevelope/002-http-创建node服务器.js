/**
 * Created by wanglecheng on 2/15/17.
 */

//引入http模块就可以了，相当于创建了一个apache
var http = require('http');

//创建服务器实例
http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h1>Node.js</h1>');
    res.end('<p>hello world22</p>');
}).listen(3000);
console.log('http server is listening at port 3000.');

//开发提示：由于node服务器会将当前页面缓存，如果直接修改服务端代码，刷新网页是无法看到修改的内容的，需要重启node的http服务器才会生效。安装supervisor可以自动监测代码改动并重启http，以方便node的开发调试
//安装方式：npm install -g supervisor

