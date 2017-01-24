/**
 * Created by wanglecheng on 1/24/17.
 */

(function () {

    //YU的命名空间
    if (!window.YU) {
        window['YU'] = {}
    }

    function isCompatible(other) {
        //使用能力检测来检查必要条件,检测浏览器是否支持YU库
        if (other === false
            || !Array.prototype.push
            || !Object.hasOwnProperty
            || !document.createElement
            || !document.getElementsByTagName
        ) {
            return false;
        }
        return true;
    }

    window['YU']['isCompatible'] = isCompatible;

    function $() {
        var elements = new Array();

        //查找作为参数提供的所有元素
        for (var i = 0; i < arguments.length; i++) {
            var element = arguments[i];

            //如果该参数是一个字符串，那就假设它是一个id
            if (typeof element == 'string') {
                element = document.getElementById(element);
            }

            //如果只提供一个参数，则立即返回这个元素
            if (arguments.length == 1) {
                return element;
            }

            //否则，将它添加到数组中
            elements.push(element);
        }
        return elements;
    }

    window['YU']['$'] = $;


    /*
     让方法的参数既支持字符串（"id"）也支持对象（id）即已经通过id获取的DOM元素对象
     例：
     function example(obj){
     if(!(obj = $(obj))) return false;
     //对DOM对象的obj进行操作
     }
     window['YU']['example']=example;

     在指定参数时，既可以使用字符串
     var element = YU.example('id');
     也可以使用DOM元素对象
     var element = YU.example(YU.$('id'));
     */

    function addEvent(node, type, listener) {
        //检查兼容性以保证平稳退化
        if (!isCompatible()) {
            return false;
        }

        //若传递的是id字符串，则获取该元素对象并赋给node
        if (!(node = $(node))) {
            return false;
        }


        if (node.addEventListener) {
            //W3C的方法
            node.addEventListener(type, listener, false);
            return true;
        } else if (node.attachEvent) {
            //MSIE的方法
            node['e' + type + listener] = listener;
            node[type + listener] = function () {
                node['e' + type + listener](window.event);
            };
            node.attachEvent('on' + type, node[type + listener]);
            return true;
        }

        //若两种方法都不具备，返回false
        return false;
    }

    window['YU']['addEvent'] = addEvent;

    function removeEvent(node, type, listener) {
        //node只能是字符串
        if (!(node = $(node))) {
            return false;
        }

        if (node.removeEventListener) {
            //W3C的方法
            node.removeEventListener(type, listener, false);
            return true;
        } else if (node.detachEvent) {
            //MSIE的方法
            node.detachEvent('on' + type, node[type + listener]);
            node[type + listener] = null;
            return true;
        }

        //若两种方法都不具备，返回false;
        return false;

    }

    window['YU']['removerEvent'] = removeEvent;

    function getElementsByClassName(className, tag, parent) {
    }

    window['YU']['getElementsByClassName'] = getElementsByClassName;

    function toggleDisplay(node, value) {

    }

    window['YU']['toggleDisplay'] = toggleDisplay;

    function insertAfter(node, referenceNode) {

    }

    window['YU']['insertAfter'] = insertAfter;

    function removeChildren(parent) {

    }

    window['YU']['removeChildren'] = removeChildren;

    function prependChild(parent, newChild) {

    }

    window['YU']['prependChild'] = prependChild;

})();

/*
 1、确定浏览器是否能够使用库中所有的方法的能力检测

 if(YU.isCompatible()){
 //使用你的YU库代码
 }

 2、由于YU.$()支持传入多个id，获取DOM元素对象数组，所以可以遍历操作元素

 var elements = YU.$('box1','box2','box3');
 for (e in elements){
 //对每个元素elements[e]进行操作
 }



 * */