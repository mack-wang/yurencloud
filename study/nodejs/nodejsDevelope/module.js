/**
 * Created by wanglecheng on 2/15/17.
 */
//module.js

var name;

exports.setName = function (thyName) {
    name = thyName;
};

exports.sayHello = function (){
    console.log('hello'+name);
};