/**
 * Created by wanglecheng on 2/15/17.
 */

//引入004-exports Hello模块,切记要加"./"表示当前目录下
/*
var Hello = require('./004-exports-创建简单模块').Hello;
hello = new Hello();
hello.setName('wlc3');
hello.sayHello();*/

//引入myPackage包中的Hello模块
var myPackage = require('./myPackage');
myPackage.hello();
