function addLoadEvent(func) { //加载执行代码函数，无论打算页面加载完成时执行多少个函数，只要多写一条就可以了
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}
addLoadEvent(hello);

function hello() {
    alert('hello');
}
