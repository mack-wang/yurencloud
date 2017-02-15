//有时候，我们只想把一个很小的对象封装到模块中，此时又不想单独为个对象创建一个.js文件，这有点小题大做。所以这时，就用到了exports方法

//创建一个小小的Hello函数对象
function Hello(){
    var name;
    this.setName = function (myName) {
        name = myName;
    };
    this.sayHello = function () {
        console.log('Hello '+name);
    };
}

//把Hello函数对象赋值给exports.Hello
exports.Hello = Hello;

//然后我们就可以在其他文件中，直接使用require('本文件名').Hello; 这样我们就不用为Hello单独创建一个.js文件了，可以在任何一个文件中声明这个Hello对象，然后借此文件引用Hello对象

//实现原理，exports是一个{}空对象，require('本文件名').Hello即访问了{ Hello:function(){...} }


