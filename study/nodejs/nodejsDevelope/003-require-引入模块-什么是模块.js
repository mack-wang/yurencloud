//模块是node应用程序的基本组成部分，文件和模块是一一对应的，可以说，一个node文件就是一个模块，这个文件可能是js代码，json，或者编译过的c/c++扩展

//我们已经创建了一个十分简单的模块module.js
//现在我们使用require来引入

var myModule = require('./module');

myModule.setName('wlc');
myModule.sayHello();
//然后使用node 003-require-引入。。.js来执行,会看到hellowlc

//注意：如果我们再次创建实例，由于require不会重复加载模块，后者覆盖前者，执行本文件时，只会输出最后一次的实例。即hellowlc2
var myModule2 = require('./module');
myModule2.setName('wlc2');
myModule2.sayHello();



