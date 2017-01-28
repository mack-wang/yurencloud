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

    //停止冒泡
    function stopPropagation(eventObject) {
        eventObject = eventObject || getEventObject(eventObject);
        if (eventObject.stopPropagation) {
            eventObject.stopPropagation();
        } else {
            eventObject.cancelBubble = true;
        }
    }

    window['YU']['stopPropagation'] = stopPropagation;

    //停止默认动作
    function preventDefault(eventObject) {
        eventObject = eventObject || getEventObject(eventObject);
        if (eventObject.preventDefault) {
            eventObject.preventDefault();
        } else {
            eventObject.returnValue = false;
        }
    }

    window['YU']['preventDefault'] = preventDefault;

    //在图片等资源加载完成前执行load（注意，事件不能涉及图片加载完成状态）
    function addLoadEvent(loadEvent, waitForImages) {
        if (!isCompatible()) {
            return false;
        }

        //如果等待标记是true则使用常规的添加事件的方法
        if (waitForImages) {
            return addEvent(window, 'load', loadEvent);
        }

        //否则使用一些特别的方式来包装loadEvent()方法
        var init = function () {
            //如果这个函数已经被调用过了，则返回
            if (arguments.callee.done) {
                return;
            }
            //标记这个函数以便检验它是否运行过
            arguments.callee.done = true;

            //在document的环境中运行载入事件
            loadEvent.apply(document.arguments);
        };

        //为DOMContentLoaded事件注册事件侦听器
        if (document.addEventListener) {
            document.addEventListener("DOMContentLoaded")
        }

        //针对safari使用setInterval()函数来检测
        //document是否载入完成
        if (/WebKit/i.test(navigator.userAgent)) {
            var _timer = setInterval(function () {
                if (/loaded|complete/.test(document.readyState)) {
                    clearInterval(_timer);
                    init();
                }
            }, 10)
        }

        //针对IE
        //添加一个载入过程中最后执行的脚本
        //并检测该脚本是否载入完成
        document.write("<script id=__ie_onload defer src=javascript:void(0)><\/script>");
        var script = document.getElementById("__ie_onload");
        script.onreadystatechange = function () {
            if (this.readyState == "complete") {
                init();
            }
        };

        return true;
    }

    window['YU']['addLoadEvent'] = addLoadEvent;

    //获取事件对象
    function getEventObject(W3CEvent) {
        return W3CEvent || window.event;
    }

    window['YU']['getEventObject']=getEventObject;

    //TODO：P117


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

    //这个比较难用，竟然要至少传入className和tag参数才能获取到元素
    function getElementsByClassName(className, tag, parent) {
        parent = parent || document;
        if (!(parent = $(parent))) {
            return false;
        }

        //查找所有匹配的标签
        var allTags = (tag == "*" && parent.all) ? parent.all : parent.getElementsByTagName(tag);
        var matchingElements = new Array();

        //创建一个正则表达式。来判断className是否正确
        className = className.replace(/\-/g, "\\-");
        var regex = new RegExp("(^|\\s)" + className + "(\\s|$)");

        var element;
        //检查每个元素
        for (var i = 0; i < allTags.length; i++) {
            element = allTags[i];
            if (regex.test(element.className)) {
                matchingElements.push(element);
            }
        }
        //返回任何匹配的元素
        return matchingElements;
    }

    window['YU']['getElementsByClassName'] = getElementsByClassName;

    //可以切换隐藏或者显示状态，也可以指定显示状态为，block,inline-block等类型
    function toggleDisplay(node, value) {
        if (!(node = $(node))) {
            return false;
        }

        if (node.style.display != 'none') {
            node.style.display = 'none';
        } else {
            node.style.display = value || '';
        }
        return true;
    }

    window['YU']['toggleDisplay'] = toggleDisplay;

    function insertAfter(node, referenceNode) {
        if (!(node = $(node))) {
            return false;
        }
        if (!(referenceNode = $(referenceNode))) {
            return false;
        }
        return referenceNode.parentNode.insertBefore(
            node, referenceNode.nextSibling
        );
    }

    window['YU']['insertAfter'] = insertAfter;

    //删除全部子节点
    function removeChildren(parent) {
        if (!(parent = $(parent))) {
            return false;
        }

        //当存在子节点时册除该子节点
        while (parent.firstChild) {
            parent.firstChild.parentNode.removeChild(parent.firstChild);
        }

        //再返回父元素，以便实现方法连缀
        return parent;
    }

    window['YU']['removeChildren'] = removeChildren;


    //添加新节点到子节点的最前面
    function prependChild(parent, newChild) {
        if (!(parent = $(parent))) {
            return false;
        }
        if (!(newChild = $(newChild))) {
            return false;
        }

        if (parent.firstChild) {
            //如果存在一个子节点，则在这个子节点之前插入
            parent.insertBefore(newChild, parent.firstChild);
        } else {
            //如果没有子节点，则直接添加
            parent.appendChild(newChild);
        }
        //再返回父元素，以便实现方法的连缀
        return parent;
    }

    window['YU']['prependChild'] = prependChild;

    //绑定函数的环境
    function bindFunction(obj, func) {
        return function () {
            func.apply(obj, arguments);
        };
    }

    window['YU']['bindFunction'] = bindFunction;

    //获取浏览器的宽度，高度
    function getBrowserWindowSize() {
        var de = document.documentElement;
        return {
            'width': (
            window.innerWidth
            || (de && de.clientWidth)
            || document.body.clientWidth),
            'height': (
            window.innerHeight
            || (de && de.clientHeight)
            || document.body.clientHeight)
        }
    }

    window['YU']['getBrowserWindowSize'] = getBrowserWindowSize;

    //因为有些浏览器不会返回node核心对象的类型值，所以可以自定义，兼容所有浏览器
    window['YU']['node'] = {
        ELEMENT_NODE: 1,
        ATTRIBUTE_NODE: 2,
        TEXT_NODE: 3,
        CDATA_SECTION_NODE: 4,
        ENTITY_REFERENCE_NODE: 5,
        ENTITY_NODE: 6,
        PROCESSING_INSTRUCTION_NODE: 7,
        COMMENT_NODE: 8,
        DOCUMENT_NODE: 9,
        DOCUMENT_TYPE_NODE: 10,
        DOCUMENT_FRAGMENT_NODE: 11,
        NOTATION_NODE: 12
    };

    //遍历所有节点，不关心DOM树的深度
    function walkElementsLinear(func, node) {
        var root = node || window.document;
        var nodes = root.getElementsByTagName("*");
        for (var i = 0; i < nodes.length; i++) {
            func.call(nodes[i]);
        }
    }

    window['YU']['walkElementsLinear'] = walkElementsLinear;

    //在上面的基础上，可以跟踪节点深度，或者构建路径，递归遍历DOM树
    function walkTheDOMRecursive(func, node, depth, returnedFormParent) {
        var root = node || window.document;
        var returnedFromParent = func.call(root, depth++, returnedFromParent);
        var node = root.firstChild;
        while (node) {
            walkTheDOMRecursive(func, node, depth, returnedFormParent);
            node = node.nextSibling;
        }
    }

    window['YU']['walkTheDOMRecursive'] = walkTheDOMRecursive;

    //查找每个节点的属性
    function walkTheDOMWithAttributes(node, func, depth, returnedFromParent) {
        var root = node || window.document;
        returnedFromParent = func(root, depth++, returnedFromParent);
        if (root.attributes) {
            for (var i = 0; i < root.attributes.length; i++) {
                walkTheDOMWithAttributes(root.attributes[i], func, depth - 1, returnedFromParent);
            }
        }

        if (root.nodeType != YU.node.ATTRIBUTE_NODE) {
            node = root.firstChild;
            while (node) {
                walkTheDOMWithAttributes(node, func, depth, returnedFromParent);
                node = node.nextSibling;
            }
        }
    }

    window['YU']['walkTheDOMWithAttributes'] = walkTheDOMWithAttributes;
})
();

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

 3、测试YU.$(),获取单个DOM对象
 console.log(YU.$('box1').innerHTML);

 4、测试YU.$(),获取并操作多个DOM对象
 var elements = YU.$('box1','box2','box3');
 for (e in elements){
 console.log(elements[e].innerHTML);
 }

 5、测试YU.addEvent事件绑定
 YU.addEvent(YU.$('box1'),'click',function () {
 console.log(this.className);
 });

 6、测试YU.getElementsByClassName
 console.log(YU.getElementsByClassName('hello','div'));

 7、测试隐藏/显示元素YU.toggleDisplay();
 YU.toggleDisplay(YU.$('box1'));
 YU.toggleDisplay(YU.$('box4'),'inline-block');
 YU.toggleDisplay(YU.$('box5'),'inline-block');

 8、原生js中没有insertAfter,只有insertBefore，所以在YU为库中去实现
 YU.insertAfter(YU.$('box5'),YU.$('box2'));//把元素box5插入到元素box2后面去

 9、删除全部子节点
 YU.removeChildren(YU.$('ul1'));

 10、在子节点之前插入一个新的子元素
 var newChild = document.createElement('li');
 newChild.innerHTML='大家好';
 YU.prependChild(YU.$('ul2'),newChild);

 11、

 * */