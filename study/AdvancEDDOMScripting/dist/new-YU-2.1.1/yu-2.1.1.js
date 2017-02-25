/**
 * 博客：www.yurencloud.com
 * 作者：Mack Wang 王乐城
 * 整理和改编自：ADS.js/Sambells,EventUtil&CookieUtil&etc/Nicholas,各大网站
 * 兼容低版本的浏览器 IE6+，Firefox1.5+,Safari2.0+,Opera9+
 */

/**
 * 更新日志:
 * 版本：version 1.0.0 20170203
 *
 * 将YU改为对象，原先的函数改为YU对象内的方法
 * 版本：version 2.0.0 20170205
 *
 * 修改：1、当$(),d(),c()没有获取到对象时返回null 2、添加性能测试run,runCompare方法 3、添加直接删除单个元素或多个元素remove方法
 * 版本：version 2.0.1 20170209
 *
 * 修改：1、objectToArray()将对象转成数组，2、getLength()获取对象的长度，即拥有的属性方法的数量。3、extendNamespace()扩展嵌套命名空间。4、extend扩展新对象到命名空间中
 * 版本：version 2.0.2 20170213
 *
 * 修改：改用'use strict' javascript严格模式，修改arguments.callee的调用，和部分未用var声明，就创建的全局变量。版本号不改。
 *
 * 修改：1、引入Sizzle选择器，移除d(),c()在全局的注册，仅内部使用。2、YU.$$()同jQuery中的$()，YU.$()返回YU.$$的第一个dom对象。Sizzle的方法，只能使用$$获取的元素
 *
 * 修改：大量简化方法的命名
 *
 * 总结：我发现精简到最后，和jQuery越来越像，所以索性就把一些独有的方法做成jQuery插件，把一些重复的方法都删除了。插件名为：jquery.yu-2.1.1.js
 *
 */

(function () {
    'use strict';
    var yuObj = {},
        toString = yuObj.toString,
        version = '2.1.1';
    var yu = {
        /*
         * 属性：YU.js库的当前版本
         * */
        version: version,

        /*
         * 作用：浏览器能力检测
         * 参数：other 其他条件判断结果 可选
         * 返回：布尔值
         * */
        isCompatible: function (other) {
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
        },

        /*
         * 作用：解决YU库和其他库在$上的命名冲突
         * 参数：name 取代$的新名字
         * 返回：无，注意YU库的添加位置置在其他库之前，以便其他库的$覆盖YU库的$
         * */
        noConflict: function (name) {
            window[name] = yu;
        },


        /**************************************
         *                                    *
         *            事件方法                 *
         *          EVENT METHODS             *
         *                                    *
         **************************************/

        /*
         * 作用：添加事件
         * 参数：element 绑定事件的元素 | type 事件类型 不加on | fn 回调函数
         * 返回：无
         * */
        event: function (element, type, fn) {
            if (typeof element === "string") {
                element = this.$(element)
            }
            if (element.addEventListener) {
                element.addEventListener(type, fn, false);
            } else if (element.attachEvent) {
                element.attachEvent("on" + type, fn);
            } else {
                element["on" + type] = fn;
            }
            return element;
        },

        /*
         * 作用：获取事件对象
         * 参数：event 事件对象
         * 返回：事件对象
         * */
        getEvent: function (event) {
            return event ? event : window.event;
        },

        /*
         * 作用：获取当前发生事件的目标元素（兼容IE）
         * 参数：event 事件对象
         * 返回：当前发生事件的目标元素
         * */
        getTarget: function (event) {
            return event.target || event.srcElement;
        },

        /*
         * 作用：取消默认事件
         * 参数：event 事件对象
         * 返回：无
         * */
        prevent: function (event) {
            if (event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
        },

        /*
         * 作用：移除事件
         * 参数：element 要移除事件的元素 | type 要移除事件类型 不加on | fn 要移除的回调函数
         * 返回：无
         * */
        removeEvent: function (element, type, fn) {
            if (typeof element === "string") {
                element = this.$(element)
            }
            if (element.removeEventListener) {
                element.removeEventListener(type, fn, false);
            } else if (element.detachEvent) {
                element.detachEvent("on" + type, fn);
            } else {
                element["on" + type] = null;
            }
        },

        /*
         * 作用：停止事件冒泡
         * 参数：event 事件对象
         * 返回：无
         * */
        stopEvent: function (event) {
            if (event.stopPropagation) {
                event.stopPropagation();
            } else {
                event.cancelBubble = true;
            }
        },

        /*
         * 作用：获取上一级冒泡对象
         * 参数：event 事件对象
         * 返回：上一级冒泡对象
         * */
        getRelate: function (event) {
            if (event.relateTarget) {
                return event.relatedTarget;
            } else if (event.toElement) {
                return event.toElement;
            } else if (event.fromElement) {
                return event.fromElement;
            } else {
                return null;
            }
        },

        /*
         * 作用：主要兼容IE对DOM的button属性的反馈，button属性是指鼠标按钮，左，中，右三个键的点击情况
         * 参数：event 事件对象
         * 返回：button对象，包含0，1，2三个属性，0左键，1中键，2右键
         * */
        mouse: function (event) {
            if (document.implementation.hasFeature("MouseEvents", "2.0")) {
                return event.button;
            } else {
                switch (event.button) {
                    case 0:
                    case 1:
                    case 3:
                    case 5:
                    case 7:
                        return 0;
                    case 2:
                    case 6:
                        return 2;
                    case 4:
                        return 1;

                }
            }
        },

        /*
         * 作用：跨浏览器的鼠标滚轮事件
         * 参数：event 事件对象
         * 返回：wheelDelta对象，包含具体滚动数值
         * */
        wheel: function (event) {
            //主要判断是否支持wheelDelta,
            //不支持就是firefox，要乘以40，支持就判断opera的版本，小于9.5的要正负颠倒一下
            if (event.wheelDelta) {
                return (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta);
            } else {
                return -event.detail * 40;
            }
        },

        /*
         * 作用：当发生keypress事件时，返回charCode的兼容用法
         * 参数：event 事件对象
         * 返回：返回charCode或者keyCode属性及值
         * */
        code: function (event) {
            if (typeof event.charCode == "number") {
                return event.charCode;
            } else {
                return event.keyCode;
            }
        },

        /*
         * 作用：获取剪贴板文字
         * 参数：event 事件对象
         * 返回：剪贴板文字
         * */

        /*
         * 作用：设置剪贴板文字（由我们写入剪贴板）
         * 参数：event 事件对象
         * 返回：设置后的剪贴板文字
         * */
        clip: function (event, value) {
            if (arguments.length === 2) {
                if (event.clipboardData) {
                    return event.clipboardData.setData("text/plain", value);
                } else if (window.clipboardData) {
                    return window.clipboardData.setData("text", value);
                }
            }
            var clipboardData = (event.clipboardData || window.clipboardData);
            return clipboardData.getData("text");
        },

        /*
         * 作用：获取鼠标相对文档的坐标（而非浏览器窗口）
         * 参数：event 事件对象
         * 返回：坐标对象，包含x，y属性
         * */

        point: function (event) {
            event = event || getEvent(event);
            var x = event.pageX || (event.clientX + (document.documentElement.scrollLeft
                || document.body.scrollLeft));
            var y = event.pageY || (event.clientY + (document.documentElement.scrollTop
                || document.body.scrollTop));
            //返回x,y
            return {'x': x, 'y': y};
        },

        /*
         * 作用：在图片等资源加载完成前执行load（注意，事件不能涉及图片加载完成状态）
         * 参数：loadEvent 回调函数 要执行的载入事件 | waitForImages 等待标记 为true则使用常规事件
         * 返回：布尔值
         * */
        loadEvent: function (loadEvent, waitForImages) {
            if (!isCompatible()) {
                return false;
            }

            //如果等待标记是true则使用常规的添加事件的方法
            if (waitForImages) {
                return event(window, 'load', loadEvent);
            }

            //否则使用一些特别的方式来包装loadEvent()方法
            var init = function () {
                //如果这个函数已经被调用过了，则返回
                if (init.done) {
                    return;
                }
                //标记这个函数以便检验它是否运行过
                init.done = true;

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
        },

        /*
         * 作用：对目标元素实现拖放
         * 参数：只要给指定元素添加draggable类即可使其被拖动，并注意，对象的position一定得是absolute
         * 返回：拖放事件对象
         * */
        drag: function () {

            var dragdrop = new EventTarget();
            var dragging = null;
            var diffX = 0;
            var diffY = 0;

            function handleEvent(event) {
                //获取事件和目标
                event = yu.getEvent(event);
                var target = yu.target(event);

                //确定事件类型
                switch (event.type) {
                    case "mousedown":
                        if (target.className.indexOf("draggable") > -1) {
                            dragging = target;
                            //鼠标在element内的坐标
                            diffX = event.clientX - target.offsetLeft;
                            diffY = event.clientY - target.offsetTop;
                            dragdrop.fire({
                                type: "dragstart",
                                target: dragging,
                                x: event.clientX,
                                y: event.clientY
                            });
                        }
                        break;

                    case "mousemove":
                        if (dragging !== null) {
                            //获取事件
                            event = yu.getEvent(event);

                            //指定位置
                            dragging.style.left = (event.clientX - diffX) + "px";
                            dragging.style.top = (event.clientY - diffY) + "px";

                            //触发自定义事件
                            dragdrop.fire({
                                type: "drag",
                                target: dragging,
                                x: event.clientX,
                                y: event.clientY
                            });
                        }
                        break;

                    case "mouseup":
                        dragdrop.fire({
                            type: "dragend",
                            target: dragging,
                            x: event.clientX,
                            y: event.clientY
                        });
                        dragging = null;
                        break;
                }
            }

            //公共接口
            dragdrop.enable = function () {
                yu.event(document, "mousedown", handleEvent);
                yu.event(document, "mousemove", handleEvent);
                yu.event(document, "mouseup", handleEvent);
            };
            dragdrop.disable = function () {
                yu.removeEvent(document, "mousedown", handleEvent);
                yu.removeEvent(document, "mousemove", handleEvent);
                yu.removeEvent(document, "mouseup", handleEvent);
            };
            return dragdrop;
        },


        /**************************************
         *                                    *
         *            样式方法                 *
         *          STYLE METHODS             *
         *                                    *
         **************************************/


        /*
         * 作用：可以切换隐藏或者显示状态，也可以设置显示状态
         * 参数：node 要隐藏或者显示的元素 | value 显示时要设置的display值 可选
         * 返回：布尔值
         * */
        toggle: function (element, value) {
            if (typeof element === "string") {
                element = this.$(element)
            }
            if (element.style.display != 'none') {
                element.style.display = 'none';
            } else {
                element.style.display = value || '';
            }
            return element;
        },

        hide: function (element) {
            if (typeof element === "string") {
                element = this.$(element)
            }
            element.style.display = 'none';
            return element;
        },

        show: function (element, value) {
            if (typeof element === "string") {
                element = this.$(element)
            }
            element.style.display = value || '';
            return element;
        },


        /*
         * 作用：编辑一条样式规则
         * 参数：selector 选择器 | styles 样式对象 | url css文件的资源位置 | media
         * 返回：无
         * */

        css: function (element, styles) {
            if (typeof element === "string") {
                element = this.$(element)
            }
            for (var property in styles) {
                if (!styles.hasOwnProperty(property)) {
                    continue;
                }
                element.style[this.camelize(property)] = styles[property];
            }
            return element;
        },


        /*
         * 作用：得到元素的样式属性值
         * 参数：element 目标元素 | property 要获取的属性
         * 返回：无
         * */
        getStyle: function (element, property) {
            if (typeof element === "string") {
                element = this.$(element)
            }
            // Check for the value in the element's style property
            var value = element.style[this.camelize(property)];
            if (!value) {
                // Retrieve the computed style value
                if (document.defaultView && document.defaultView.getComputedStyle) {
                    // The DOM method
                    var css = document.defaultView.getComputedStyle(element, null);
                    value = css ? css.getPropertyValue(property) : null;
                } else if (element.currentStyle) {
                    // The MSIE method
                    value = element.currentStyle[this.camelize(property)];
                }
            }
            // Return an empty string rather than auto so that you don't
            // have to check for auto values
            return value == 'auto' ? '' : value;
        },


        /*
         * 作用：获取元素class值数组
         * 参数：element 元素
         * 返回：class数组
         * */
        getClass: function (element) {
            if (typeof element === "string") {
                element = this.$(element)
            }
            return element.className.replace(/\s+/, ' ').split(' ');
        },

        /*
         * 作用：检测元素是否包含某class
         * 参数：element 元素 | className 类名
         * 返回：布尔值
         * */
        hasClass: function (element, className) {
            if (typeof element === "string") {
                element = this.$(element)
            }
            var classes = this.getClass(element);
            for (var i = 0; i < classes.length; i++) {
                if (classes[i] === className) {
                    return true;
                }
            }
            return false;
        },

        /*
         * 作用：添加class
         * 参数：element 元素 | className 类名
         * 返回：布尔值
         * */
        addClass: function (element, className) {
            if (typeof element === "string") {
                element = this.$(element)
            }
            element.className += (element.className ? ' ' : '') + className;
            return element;
        },


        /*
         * 作用：移除class
         * 参数：element 元素 | className 类名
         * 返回：布尔值
         * */
        removeClass: function (element, className) {
            if (typeof element === "string") {
                element = this.$(element)
            }
            var classes = this.getClass(element);
            var length = classes.length;
            for (var i = length - 1; i >= 0; i--) {
                if (classes[i] === className) {
                    delete(classes[i]);
                }
            }
            element.className = classes.join(' ');
            return (length != classes.length);
        },

        toggleClass: function (element, className) {
            if (typeof element === "string") {
                element = this.$(element)
            }
            if (this.hasClass(element, className)) {
                this.removeClass(element, className)
            } else {
                this.addClass(element, className)
            }
        },


        /**************************************
         *                                    *
         *            元素方法                  *
         *          DOM METHODS               *
         *                                    *
         **************************************/

        /*
         * 作用：在指定元素后插入同辈元素
         * 参数：node 要插入的元素 | referenceNode 指定的元素 参考位置
         * 返回：无
         * */
        after: function (element, referenceNode) {
            if (typeof element === "string") {
                element = this.$(element)
            }
            if (typeof referenceNode === "string") {
                referenceNode = this.$(referenceNode)
            }
            return referenceNode.parentNode.insertBefore(
                element, referenceNode.nextSibling
            );
        },

        append: function (element, referenceNode) {
            if (typeof element === "string") {
                element = this.$(element)
            }
            if (typeof referenceNode === "string") {
                referenceNode = this.$(referenceNode)
            }
            return referenceNode.appendChild(element);
        },

        prepend: function (element, referenceNode) {
            if (typeof element === "string") {
                element = this.$(element)
            }
            if (typeof referenceNode === "string") {
                referenceNode = this.$(referenceNode)
            }
            return referenceNode.insertBefore(element, referenceNode.firstChild);
        },

        /*
         * 作用：移除所有子元素
         * 参数：parent 要移除所有子元素的父元素
         * 返回：返回移除子元素后的父元素
         * */
        empty: function (parentElement) {
            if (typeof parentElement === "string") {
                parentElement = this.$(parentElement)
            }

            //当存在子节点时册除该子节点
            while (parentElement.firstChild) {
                parentElement.firstChild.parentNode.removeChild(parentElement.firstChild);
            }

            //再返回父元素，以便实现方法连缀
            return parentElement;
        },

        /*
         * 作用：移除指定单个元素
         * 参数：element 要移除的元素
         * 返回：返回要移除的元素
         * 考虑：因为传入字符串，无法判断是id还是class，并且也不想因此而让大家多加个#或.号，所以只能传入DOM元素。
         * */
        remove: function (element) {
            if (typeof element === "string") {
                element = this.$(element)
            }
            return element.parentNode.removeChild(element);
        },


        /*
         * 作用：插入新元素到子元素的最前面
         * 参数：parent 父元素 | newChild 要插入的新元素
         * 返回：返回插入新子元素后的父元素
         * */
        before: function (element, newChild) {
            if (typeof element === "string") {
                element = this.$(element)
            }
            if (typeof newChild === "string") {
                newChild = this.$(newChild)
            }

            if (element.firstChild) {
                //如果存在一个子节点，则在这个子节点之前插入
                element.insertBefore(newChild, element.firstChild);
            } else {
                //如果没有子节点，则直接添加
                element.appendChild(newChild);
            }
            //再返回父元素，以便实现方法的连缀
            return element;
        },

        /*
         * 作用：获取当前浏览器窗口的宽高
         * 参数：无
         * 返回：宽高对象，包含width,height属性
         * */
        windowSize: function () {
            var win = document.documentElement;
            return {
                'width': (
                window.innerWidth
                || (win && win.clientWidth)
                || document.body.clientWidth),
                'height': (
                window.innerHeight
                || (win && win.clientHeight)
                || document.body.clientHeight)
            }
        },

        /*
         * 作用：遍历元素节点，不关心DOM树的深度，不包含父节点
         * 参数：fn 回调函数 this代表当前节点 作用于遍历后的每个节点 | node 遍历指定节点
         * 返回：无
         * */
        eachElem: function (fn, node) {
            var root = node || window.document;
            var nodes = root.getElementsByTagName("*");
            for (var i = 0; i < nodes.length; i++) {
                fn.call(nodes[i]);
            }
        },

        /*
         * 作用：遍历元素节点，文本节点，含父节点
         * 参数：fn 回调函数 this代表当前节点 作用于遍历后的每个节点 | node 遍历指定节点 | depth 遍历深度 | returnedFromParent
         * 返回：无
         * */
        eachNode: function (fn, node, depth, returnedFromParent) {
            var root = node || window.document;
            returnedFromParent = fn.call(root, depth++, returnedFromParent);
            node = root.firstChild;
            while (node) {
                this.eachNode(fn, node, depth, returnedFromParent);
                node = node.nextSibling;
            }
        },

        /*
         * 作用：遍历元素节点，文本节点，含父节点（同eachNode），实现方法不同而已
         * 参数：node 遍历指定节点 | fn 回调函数 作用于遍历后的每个节点 node代表当前节点
         * 返回：无
         * */
        eachDom: function (node, fn) {
            fn(node);
            node = node.firstChild;
            while (node) {
                this.eachDom(node, fn);
                node = node.nextSibling;
            }
        },

        /*
         * 作用：遍历元素节点，文本节点，属性节点，含父节点
         * 参数：node 遍历指定节点 | fn 回调函数 作用于遍历后的每个节点 | depth 遍历深度 | returnedFromParent 返回给func使用的对象 包含元素节点，文本节点，属性节点
         * 返回：无
         * */
        eachAttr: function (node, fn, depth, returnedFromParent) {
            var root = node || window.document;
            returnedFromParent = fn(root, depth++, returnedFromParent);
            if (root.attributes) {
                for (var i = 0; i < root.attributes.length; i++) {
                    this.eachAll(root.attributes[i], fn, depth - 1, returnedFromParent);
                }
            }
            if (root.nodeType != yu.node.ATTRIBUTE_NODE) {
                node = root.firstChild;
                while (node) {
                    this.eachAlls(node, fn, depth, returnedFromParent);
                    node = node.nextSibling;
                }
            }
        },


        /**************************************
         *                                    *
         *            AJAX方法                 *
         *          AJAX METHODS              *
         *                                    *
         **************************************/

        /*
         * 作用：创建ajax对象，兼容IE7+、Firefox、Opera、Chrome 和Safari
         * 参数：无
         * 返回：创建完成的ajax对象
         * */
        createXHR: function () {
            if (typeof XMLHttpRequest != "undefined") {
                return new XMLHttpRequest();
            } else if (typeof ActiveXObject != "undefined") {
                if (typeof createXHR.activeXString != "string") {
                    var version = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp"],
                        i, len;
                    for (i = 0, len = versions.length; i < len; i++) {
                        try {
                            new ActiveXObject(versions[i]);
                            createXHR.activeXString = versions[i];
                            break;
                        } catch (ex) {

                        }
                    }
                }
                return new ActiveXObject(createXHR.activeXString);
            } else {
                throw new Error("No XHR object available.");
            }
        },

        /*
         * 作用：封装ajax
         * 参数：obj 对象,需要传递method方式，url访问地址，data数据，success成功后回调函数，async是否异步
         * 返回：无
         * */
        ajax: function (obj) {
            var xhr = this.createXHR();	//创建XHR对象
            //通过使用JS随机字符串解决IE浏览器第二次默认获取缓存的问题
            obj.url = obj.url + '?rand=' + Math.random();
            obj.data = this.params(obj.data);  //通过params()将名值对转换成字符串
            //若是GET请求，则将数据加到url后面
            if (obj.method === 'get') {
                obj.url += obj.url.indexOf('?') == -1 ? '?' + obj.data : '&' + obj.data;
            }
            if (obj.async === true) {   //true表示异步，false表示同步
                //使用异步调用的时候，需要触发readystatechange 事件
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4) {   //判断对象的状态是否交互完成
                        callback();		 //回调
                    }
                };
            }
            //在使用XHR对象时，必须先调用open()方法，
            //它接受三个参数：请求类型(get、post)、请求的URL和表示是否异步。
            xhr.open(obj.method, obj.url, obj.async);
            if (obj.method === 'post') {
                //post方式需要自己设置http的请求头，来模仿表单提交。
                //放在open方法之后，send方法之前。
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                xhr.send(obj.data);		//post方式将数据放在send()方法里
            } else {
                xhr.send(null);		//get方式则填null
            }
            if (obj.async === false) {  //同步
                callback();
            }
            function callback() {
                if (xhr.status == 200) {  //判断http的交互是否成功，200表示成功
                    obj.success(xhr.responseText);			//回调传递参数
                } else {
                    alert('获取数据错误！错误代号：' + xhr.status + '，错误信息：' + xhr.statusText);
                }
            }
        },

        /*
         * 作用：序列化参数
         * 参数：data 要序列化的参数，键值对
         * 返回：用&符号连接的序列化参数
         * */
        params: function (data) {
            var arr = [];
            for (var i in data) {
                //特殊字符传参产生的问题可以使用encodeURIComponent()进行编码处理
                arr.push(encodeURIComponent(i) + '=' + encodeURIComponent(data[i]));
            }
            return arr.join('&');
        },

        /*
         * 作用：表单序列化 会自动获取当前表单元素内填写的值并进行序列化
         * 参数：form 表单元素
         * 返回：用&符号连接的序列化参数
         * */
        serialize: function (form) {
            if (typeof form === "string") {
                form = this.$(form)
            }
            if (form.nodeName !== "FORM") {
                return new Error('element must be FORM!');
            }
            var parts = [],
                field = null,
                i,
                len,
                j,
                optLen,
                option,
                optValue;

            for (i = 0, len = form.elements.length; i < len; i++) {
                field = form.elements[i];

                switch (field.type) {
                    case "select-one":
                    case "select-multiple":

                        if (field.name.length) {
                            for (j = 0, optLen = field.options.length; j < optLen; j++) {
                                option = field.options[j];
                                if (option.selected) {
                                    optValue = "";
                                    if (option.hasAttribute) {
                                        optValue = (option.hasAttribute("value") ? option.value : option.text);
                                    } else {
                                        optValue = (option.attributes["value"].specified ? option.value : option.text);
                                    }
                                    parts.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(optValue));
                                }
                            }
                        }
                        break;

                    case undefined:
                    //字段集
                    case "file":
                    //文件输入
                    case "submit":
                    //提交按钮
                    case "reset":
                    //重置按钮
                    case "button":
                        //自定义按钮
                        break;

                    case "radio":
                    //单选按钮
                    case "checkbox":
                        //复选框
                        if (!field.checked) {
                            break;
                        }
                    /* 执行默认曹旭哦 */

                    default:
                        //不包含没有名字的表单字段
                        if (field.name.length) {
                            parts.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
                        }
                }
            }
            return parts.join("&");
        },

        /*
         * 作用：辅助添加参数到URL末尾
         * 参数：url 要添加参数的url | name 要添加的键名 | value 要添加的键值
         * 返回：用&符号连接的序列化参数
         * */
        urlParam: function (url, name, value) {
            url += (url.indexOf("?") == -1 ? "?" : "&");//如果url中已经包含?则以&继续添加参数
            url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
            return url;
        },


        /**************************************
         *                                    *
         *            COOKIE方法               *
         *          COOKIE METHODS            *
         *                                    *
         **************************************/

        /*
         * 作用：获取cookie的值
         * 参数：name cookie的值的名字
         * 返回：cookie的值
         * */
        getCookie: function (name) {
            var cookieName = encodeURIComponent(name) + "=",
                cookieStart = document.cookie.indexOf(cookieName),
                cookieValue = null;
            if (cookieStart > -1) {
                var cookieEnd = document.cookie.indexOf(";", cookieStart);
                if (cookieEnd == -1) {
                    cookieEnd = document.cookie.length;
                }
                cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
            }
            return cookieValue;
        },

        /*
         * 作用：设置cookie的值
         * 参数：name cookie名字 | value cookie值 | expires 有效期 | path 保存路径 | domain 网址主体 | secure 安全设置
         * 返回：无
         * */
        setCookie: function (name, value, expires, path, domain, secure) {
            var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);

            if (expires instanceof Date) {
                cookieText += ";expires=" + expires.toGMTString();
            }

            if (path) {
                cookieText += "；path=" + path;
            }

            if (domain) {
                cookieText += ";domain=" + domain;
            }
            if (secure) {
                cookieText += ";secure";

            }

            document.cookie = cookieText;
        },

        /*
         * 作用: 移除cookie的值
         * 参数：name cookie名字 | path 保存路径 | domain 网址主体 | secure 安全设置
         * 返回：无
         * */
        removeCookie: function (name, path, domain, secure) {
            this.setCookie(name, "", new Date(0), path, domain, secure);
        },


        /**************************************
         *                                    *
         *            安全检测                  *
         *      SECURE TYPEOF METHODS         *
         *                                    *
         **************************************/

        //由于用原生的类型检测方法typeof会出现一些奇怪的现象，所以才提出了更安全的类型检测
        //原理：当使用Object原生的toString()方法时，返回的类中都有一个属性，是自己的类型
        //意思是：创建一个函数，传入要检测的对象，然后通过Object返回他的构造函数名，
        // 如果和要检测的类型相等，就返回true，就测出了类型。

        /*
         * 作用：检测是否是数组
         * 参数：obj 待检测的对象
         * 返回：布尔值 检测结果
         * */

        isArray: function (obj) {
            return Object.prototype.toString.call(obj) == "[object Array]";
        },

        /*
         * 作用：检测是否是函数
         * 参数：obj 待检测的对象
         * 返回：布尔值 检测结果
         * */
        isFunction: function (obj) {
            return Object.prototype.toString.call(obj) == "[object Function]";
        },

        /*
         * 作用：检测是否是正则式
         * 参数：obj 待检测的对象
         * 返回：布尔值 检测结果
         * */
        isRegExp: function (obj) {
            return Object.prototype.toString.call(obj) == "[object RegExp]";
        },

        /*
         * 作用：检测是否是window对象
         * 参数：obj 待检测的对象
         * 返回：布尔值 检测结果
         * */
        isWindow: function (obj) {
            return obj != null && obj === obj.window;
        },

        /*
         * 作用：检测对象类型，和typeof一样，但是兼容性更高，是安全检测
         * 参数：obj 待检测的对象
         * 返回：对象类型，英文小写
         * */
        type: function (obj) {
            if (obj == null) {
                return obj + "";
            }
            // Support: Android <=2.3 only (function RegExp)
            return typeof obj === "object" || typeof obj === "function" ?
            yuObj[toString.call(obj)] || "object" :
                typeof obj;
        },

        isString: function (obj) {
            return this.type(obj) === "string";
        },

        /*
         * 作用：检测对象是否为数值(字符串若为纯数字也视为数值)
         * 参数：obj 待检测的对象
         * 返回：布尔值 检测结果
         * */
        isNumeric: function (obj) {
            // As of jQuery 3.0, isNumeric is limited to
            // strings and numbers (primitives or objects)
            // that can be coerced to finite numbers (gh-2662)
            var type = this.type(obj);
            return ( type === "number" || type === "string" ) && !isNaN(obj - parseFloat(obj));
        },

        /*
         * 作用：判断是否为空对象
         * 参数：obj 待检测的对象
         * 返回：布尔值 检测结果
         * */
        isEmptyObject: function (obj) {
            for (var name in obj) {//如果obj中为空，则name in obj是true
                return false;
            }
            return true;
        },


        /*
         * 作用：判断是否为类数组对象（拥有length的非函数非window对像）
         * 参数：obj 待检测的对象
         * 返回：布尔值 检测结果
         * */
        isArrayLike: function (obj) {
            //双叹号，把一个对象转成布尔值
            //检测对象中是否有length属性
            var length = !!obj && "length" in obj && obj.length,
                type = this.type(obj);

            if (type === "function" || this.isWindow(obj)) {
                return false;
            }

            return type === "array" || length === 0 ||
                typeof length === "number" && length > 0 && ( length - 1 ) in obj;
        },

        /*
         * 作用：检测是否是JSON对象
         * 参数：obj 待检测的对象
         * 返回：布尔值 检测结果
         * */
        // isNativeJSON:function(obj) {
        //    return window.JSON && Object.prototype.toString.call(obj) == "[object JSON]";
        // }

        /**************************************
         *                                    *
         *            其他方法                  *
         *          OTHER METHODS             *
         *                                    *
         **************************************/

        /*
         * 作用：绑定函数环境
         * 参数：method 回调函数 | target 目标对象
         * 返回：返回改变环境后的函数
         * */
        bind: function (fn, context) {
            return function () {
                return fn.apply(context, arguments);
            }
        },

        /*
         * 作用：克隆JavaScript对象
         * 参数：myObj 需要克隆的对象
         * 返回：返回克隆后的新对象
         * */
        clone: function (myObj) {
            if (typeof(myObj) != 'object') {
                return myObj
            }
            if (myObj == null) {
                return myObj
            }
            var myNewObj = new Object();
            for (var i in myObj) {
                myNewObj[i] = this.clone(myObj[i]);
            }
            return myNewObj;
        },

        /*
         * 作用：把命名变成驼峰式的
         * 参数：str 要转变成驼峰式的字符串
         * 返回：驼峰式的字符串
         * */
        camelize: function (str) {
            return str.replace(/-(\w)/g, function (strMatch, p1) {
                return p1.toUpperCase();
            });
        },

        /*
         * 作用：把命名变成非驼峰式的
         * 参数：str 驼峰式的字符串 | sep 连接符 可选 默认"-"
         * 返回：非驼峰式的字符串
         * */
        uncamelize: function (str, sep) {
            sep = sep || '-';
            return str.replace(/([a-z])([A-Z])/g, function (strMatch, p1, p2) {
                return p1 + sep + p2.toLowerCase();
            });
        },


        /*
         * 作用：JSON值转成js对象，兼容低级浏览器
         * 参数：s JSON字符串 | filter 筛选
         * 返回：转换后的字符串
         * */
        parseJSON: function (str, filter) {
            var j;

            function walk(k, v) {
                var i;
                if (v && typeof v === 'object') {
                    for (i in v) {
                        if (v.hasOwnProperty(i)) {
                            v[i] = walk(i, v[i]);
                        }
                    }
                }
                return filter(k, v);
            }

            if (/^("(\\.|[^"\\\n\r])*?"|[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t])+?$/.test(str)) {
                try {
                    j = eval('(' + str + ')');
                } catch (e) {
                    throw new SyntaxError("parseJSON");
                }
            } else {
                throw new SyntaxError("parseJSON");
            }


            if (typeof filter === 'function') {
                j = walk('', j);
            }
            return j;
        },

        /*
         * 作用：数组分块函数
         * 参数：array 要分块的数组 | process 要使用到数组的函数 | context 要执行的环境（没有特殊要求，可不设置该项）
         * 返回：无
         * 备注：有种依次排队显示出来的感觉
         * */
        chunk: function (array, process, context) {
            setTimeout(function self() {
                //shift()删除数组中的第一项，并返回该项。
                var item = array.shift();
                //process指的是当前正在执行的函数,call是调用函数自己，这样可以传入一个函数环境
                process.call(context, item);
                //只要数组的长度大于0，这个函数就会每隔100毫秒调用一次父setTimeout(),创建一个新的计时器
                if (array.length > 0) {//如果array被shift()删光了，就执行完毕了。
                    setTimeout(self, 100)
                }
            }, 100);//为什么要设置100毫秒？当然你可以根据自己的需要设置，但推荐用100毫秒
        },

        /*
         * 作用：为函数设置默认的参数值，柯里化函数，（curry 携带的意思）
         * 参数：第一个参数，传入要进行柯里化的函数，第二个及以后n个参数，都是设置函数的默认值。默认参数不能大于fn原来的参数个数
         * 返回：携带默认值的函数
         * */
        curry: function (fn) {
            var args = Array.prototype.slice.call(arguments, 1);
            return function () {
                var innerArgs = Array.prototype.slice.call(arguments);
                var finalArgs = args.concat(innerArgs);
                return fn.apply(null, finalArgs);
            }
        },

        /*
         * 作用：打乱数组内的所有的项，随机排序
         * 参数：array 要打乱排序的数组
         * 返回：打乱排序后的数组
         * */
        shuffleArray: function (array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            return array;
        },

        /*
         * 作用：对类数组对象中的每个项依次执行回调函数
         * 参数：obj 类数组对象 | callback 回调函数
         * 返回：执行函数后的类数组对象
         * */
        each: function (obj, callback) {
            var length, i = 0;

            if (this.isArrayLike(obj)) {//检测obj是否为类数组对象
                length = obj.length;
                for (; i < length; i++) {
                    //应用类数组第一项的环境，并传入两个参数，第一个是i当前索引，第二个是obj[i]当前项
                    if (callback.call(obj[i], i, obj[i]) === false) {
                        break;
                    }
                }
            } else {
                for (i in obj) {
                    if (callback.call(obj[i], i, obj[i]) === false) {
                        break;
                    }
                }
            }

            return obj;
        },

        /*
         * 作用：自定义node核心对象的类型数值对应的字符串值
         * 参数：因为有些浏览器不会返回node核心对象的类型值，所以可以自定义，兼容所有浏览器
         * 返回：无
         * */
        node: {
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
        },

        /*
         * 作用：计算函数运行时间
         * 参数：fn 要计算运行时间的函数
         * 返回：四舍五入后的运行时间，微秒
         * */

        run: function (fn) {
            var test = fn;
            var start = performance.now();
            test();
            var end = performance.now();
            var time = Math.round((end - start) * 1000);
            var timeStr = Math.round((end - start) * 1000) + '微秒';
            log.write(timeStr);
            return time;
        },

        /*
         * 作用：比较两个函数的运行时间
         * 参数：orignalFunc 原函数，compareFunc 比较函数
         * 返回：二者的运行时间和比较的倍数
         * */
        compare: function (orignalFunc, compareFunc) {
            var a = this.run(orignalFunc);
            var b = this.run(compareFunc);
            var times = (a / b).toFixed(1);
            log.header('性能比较结果：');
            log.write('前者是后者的:' + times + '倍');
            return times;
        },

        /*
         * 作用：将对象转成数组
         * 参数：obj 对象
         * 返回：只保留对象的值的数组
         * */
        toArray: function (obj) {
            var arr = [];
            for (var item in obj) {
                arr.push(obj[item]);
            }
            return arr;
        },

        /*
         * 作用：获取对象长度
         * 参数：obj 对象
         * 返回：对象的length
         * */
        getLen: function (obj) {
            var length = 0;
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) length++;
            }
            return length;
        },

        /*
         * 作用：创建多层嵌套的命名空间
         * 参数：namespace 要扩展的命名空间对象，namespaceString 命名空间字符串，例如namespace.util.array.mypush;
         * 返回：扩展后的命名空间
         * */
        namespace: function (namespace, namespaceString) {
            var parts = namespaceString.split("."),
                parent = namespace,
                parentLen;
            parentLen = parts.length;
            for (var i = 0; i < parentLen; i++) {
                //属性如果不存在，则创建它
                if (typeof parent[parts[i]] === "undefined") {
                    parent[parts[i]] = {};
                }
                parent = parent[parts[i]]
            }
            return parent;
        },

        /*
         * 作用：将其他对象扩展到命名空间中
         * 参数：destination 要扩展的命名空间目标，source 对象来源
         * 返回：增加了新对象的命名空间
         * */
        extend: function (destination, source) {
            var toString = Object.prototype.toString, objTest = toString.call({});

            for (var property in source) {
                if (source[property] && objTest === toString.call(source[property])) {
                    destination[property] = destination[property] || {};
                    extend(destination[property], source[property]);
                } else {
                    destination[property] = source[property];
                }
            }
            return destination;
        }

    };

    function EventTarget() {
        this.handlers = {};
    }

    EventTarget.prototype = {
        constructor: EventTarget,
        //注册
        addHandler: function (type, handler) {
            if (typeof this.handlers[type] == "undefined") {
                this.handlers[type] = [];
            }
            this.handlers[type].push(handler);
        },
        //触发
        fire: function (event) {
            if (!event.target) {
                event.target = this;
            }
            if (this.handlers[event.type] instanceof Array) {
                var handlers = this.handlers[event.type];
                for (var i = 0, len = handlers.length; i < len; i++) {
                    handlers[i](event);
                }
            }
        },
        //注销
        removeHandler: function (type, handler) {
            if (this.handlers[type] instanceof Array) {
                var handlers = this.handlers[type];
                for (var i = 0, len = handlers.length; i < len; i++) {
                    if (handlers[i] === handler) {
                        break;
                    }
                }
                handlers.splice(i, 1);
            }
        }
    };

    //对上面type方法检测出来的object类型进行细分，补充
    yu.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
        function (i, name) {
            yuObj["[object " + name + "]"] = name.toLowerCase();
        });

    //YU的命名空间
    if (!window.yu) {
        window['yu'] = yu;
    }


})
();


//在命名空间外执行

/**
 * 作用：重复复制字符串
 * 参数：l 复制次数
 * 返回：重复后的字符串
 * 如果原生String对象没有trim方法，则添加该方法
 */
if (!String.repeat) {
    String.prototype.repeat = function (l) {
        return new Array(l + 1).join(this);
    }
}

/**
 * 作用：删除字符串前后的空格
 * 参数：无
 * 返回：删除前后空格后的字符串
 * 如果原生String对象没有trim方法，则添加该方法
 */
if (!String.trim) {
    String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, '');
    }
}

/**
 * 作用：多个数组取交集
 * 参数：多个数组 以逗号分隔开来
 * 返回：取交集后的数组
 * 在原生Array对象中添加intersect方法
 */
Array.intersect = function () {
    var result = new Array();
    var obj = {};
    for (var i = 0; i < arguments.length; i++) {
        for (var j = 0; j < arguments[i].length; j++) {
            var str = arguments[i][j];
            if (!obj[str]) {
                obj[str] = 1;
            }
            else {
                obj[str]++;
                if (obj[str] == arguments.length) {
                    result.push(str);
                }
            }//end else
        }//end for j
    }//end for i
    return result;
};

/**
 * 作用：单个数组去除重复项
 * 参数：无，点符号连接该方法
 * 返回：去除重复项的数组
 * 在原生Array.prototype原型中添加unique方法
 */
Array.prototype.unique = function () {
    var tmp = {},
        ret = [];
    for (var i = 0, j = this.length; i < j; i++) {
        if (!tmp[this[i]]) {
            tmp[this[i]] = 1;
            ret.push(this[i]);
        }
    }

    return ret;
};
/**
 * 作用：多个数组取并集
 * 参数：多个数组 以逗号分隔开来
 * 返回：合并多个数组后的单个数组
 * 在原生Array对象中添加union方法
 */
Array.union = function () {
    var arr = new Array();
    var obj = {};
    for (var i = 0; i < arguments.length; i++) {
        for (var j = 0; j < arguments[i].length; j++) {
            var str = arguments[i][j];
            if (!obj[str]) {
                obj[str] = 1;
                arr.push(str);
            }
        }//end for j
    }//end for i
    return arr;
};

/**
 * 作用：两个数组取差集
 * 参数：要减去的数组
 * 返回：相减后返回的差集数组
 * 在原生Array.prototype原型中添加minus方法
 */
Array.prototype.minus = function (arr) {
    var result = new Array();
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        obj[arr[i]] = 1;
    }
    for (var j = 0; j < this.length; j++) {
        if (!obj[this[j]]) {
            obj[this[j]] = 1;
            result.push(this[j]);
        }
    }
    return result;
};
/**
 * 作用：构造函数，log执行结果输出，页面正中显示，无需打开控制台
 * 参数：id 可自定义log窗口的id 默认YULogWindow
 * 返回：构造后的函数
 * 备注：因为常用，所以注册在了window.log(测试过，windows下暂时没有log对象)
 */
function Logger(id) {
    id = id || 'YULogWindow';
    var logWindow = null;
    var createWindow = function () {
        //取得新窗口在浏览器中
        //居中放置时在左上角的位置
        var browserWindowSize = yu.windowSize();
        var top = ((browserWindowSize.height - 200) / 2 || 0);
        var left = ((browserWindowSize.width - 200) / 2 || 0);
        //创建作为日志窗口的DOM节点
        //使用受保护的logWindow属性维护引用
        logWindow = document.createElement('ul');

        //指定ID值，以便必要时在DOM树中能够识别它
        logWindow.setAttribute('id', id);

        //在屏幕居中定位日志窗口
        logWindow.style.position = 'absolute';
        logWindow.style.top = top + 'px';
        logWindow.style.left = left + 'px';

        //设置固定的大小并允许窗口内容滚动
        logWindow.style.width = '200px';
        logWindow.style.height = '200px';
        logWindow.style.overflow = 'auto';

        //添加一些样式以美化外观
        logWindow.style.padding = '5px';
        logWindow.style.margin = '5px';
        logWindow.style.border = '1px solid black';
        logWindow.style.backgroundColor = '#232323';
        logWindow.style.listStyle = 'none';
        logWindow.style.font = '10px/10px Verdana,Tahoma,Sans';

        //将其添加到文档主体中
        document.body.appendChild(logWindow);
    };

    this.writeRaw = function (message) {
        //如果初始窗口不存在，则创建它
        if (!logWindow) {
            createWindow();
        }

        //创建列表项并适当地添加样式
        var li = document.createElement('li');
        li.style.lineHeight = '20px';
        li.style.padding = '2px';
        li.style.border = '0';
        li.style.borderBottom = '1px solid #292929';
        li.style.margin = '0';
        li.style.color = '#9FA6AE';
        li.style.font = '12px Verdana,Tahoma,Sans,Microsoft YaHei,Hiragino Sans GB';
        //为日志节点添加信息
        if (typeof message == 'undefined') {
            li.appendChild(document.createTextNode('Message was undefined'));
        } else if (typeof li.innerHTML != undefined) {
            li.innerHTML = message;
        } else {
            li.appendChild(document.createTextNode(message));
        }

        //将这条日志添加到日志窗口
        logWindow.appendChild(li);

        return true;

    };
}

Logger.prototype = {
    //输出执行结果
    write: function () {

        if (arguments.length > 0) {
            for (var i = 0; i < arguments.length; i++) {
                oneWrite.call(this, arguments[i]);
            }
        } else {
            return this.writeRaw("► " + 'Error: undefined');
        }
        function oneWrite(message) {

            //如果message不是字符串，则尝试调用toString()方法，如果不存在，则访问该记录对象的类型
            if (typeof message != 'string') {
                if (message.toString) {
                    return this.writeRaw("► " + message.toString())
                } else {
                    return this.writeRaw("► " + typeof message);
                }
            }

            //转换<>，以便innerHTML不会将message作为HTML解析
            message = message.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            return this.writeRaw("► " + message);
        }

    },

    //输出自定义标题
    header: function (message) {
        if (!message) {
            message = 'Error: undefined';
        }
        message = '<span style = "color:#CB65D3;">' + message + '</span>';
        return this.writeRaw(message);
    },

    //输出带标题的执行结果集
    section: function () {
        //只有1个参数时，使用write，大于1个参数时，第一个参数为标题使用header，其余的使用write
        if (arguments.length == 1) {
            this.write(arguments[0]);
            return;
        }
        if (arguments.length > 1) {
            this.header(arguments[0]);
            for (var i = 1; i < arguments.length; i++) {
                this.write(arguments[i]);
            }

            return;
        }

        this.write('Error: undefined');
    }
};
/*
 还有一个好处：不用打开控制台来查看日志，因为直接在页面正中间就显示日志了
 为了能够使用构造函数创建多个不同的日志记录对象
 同时为了展示构造函数使用过程中，综合使用私有属性，公有属性，私有方法，公有方法的应用。
 */
var log = new Logger();
window['log'] = log;
//如果浏览器没有console对象，则会用log.write()来代替console.log（主要针对IE低版本浏览器器）
if (!console) {
    var console = log;
    console.log = console.write;
}


/*!
 * Sizzle CSS Selector Engine v2.3.4-pre
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2016-12-02
 */
(function (window) {

    var i,
        support,
        Expr,
        getText,
        isXML,
        tokenize,
        compile,
        select,
        outermostContext,
        sortInput,
        hasDuplicate,

        // Local document vars
        setDocument,
        document,
        docElem,
        documentIsHTML,
        rbuggyQSA,
        rbuggyMatches,
        matches,
        contains,

        // Instance-specific data
        expando = "sizzle" + 1 * new Date(),
        preferredDoc = window.document,
        dirruns = 0,
        done = 0,
        classCache = createCache(),
        tokenCache = createCache(),
        compilerCache = createCache(),
        nonnativeSelectorCache = createCache(),
        sortOrder = function (a, b) {
            if (a === b) {
                hasDuplicate = true;
            }
            return 0;
        },

        // Instance methods
        hasOwn = ({}).hasOwnProperty,
        arr = [],
        pop = arr.pop,
        push_native = arr.push,
        push = arr.push,
        slice = arr.slice,
        // Use a stripped-down indexOf as it's faster than native
        // https://jsperf.com/thor-indexof-vs-for/5
        indexOf = function (list, elem) {
            var i = 0,
                len = list.length;
            for (; i < len; i++) {
                if (list[i] === elem) {
                    return i;
                }
            }
            return -1;
        },

        booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

        // Regular expressions

        // http://www.w3.org/TR/css3-selectors/#whitespace
        whitespace = "[\\x20\\t\\r\\n\\f]",

        // http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
        identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

        // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
        attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
            // Operator (capture 2)
            "*([*^$|!~]?=)" + whitespace +
            // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
            "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
            "*\\]",

        pseudos = ":(" + identifier + ")(?:\\((" +
            // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
            // 1. quoted (capture 3; capture 4 or capture 5)
            "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
            // 2. simple (capture 6)
            "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
            // 3. anything else (capture 2)
            ".*" +
            ")\\)|)",

        // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
        rwhitespace = new RegExp(whitespace + "+", "g"),
        rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),

        rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
        rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),

        rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),

        rpseudo = new RegExp(pseudos),
        ridentifier = new RegExp("^" + identifier + "$"),

        matchExpr = {
            "ID": new RegExp("^#(" + identifier + ")"),
            "CLASS": new RegExp("^\\.(" + identifier + ")"),
            "TAG": new RegExp("^(" + identifier + "|[*])"),
            "ATTR": new RegExp("^" + attributes),
            "PSEUDO": new RegExp("^" + pseudos),
            "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
                "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
                "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
            "bool": new RegExp("^(?:" + booleans + ")$", "i"),
            // For use in libraries implementing .is()
            // We use this for POS matching in `select`
            "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        },

        rinputs = /^(?:input|select|textarea|button)$/i,
        rheader = /^h\d$/i,

        rnative = /^[^{]+\{\s*\[native \w/,

        // Easily-parseable/retrievable ID or TAG or CLASS selectors
        rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

        rsibling = /[+~]/,

        // CSS escapes
        // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
        runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
        funescape = function (_, escaped, escapedWhitespace) {
            var high = "0x" + escaped - 0x10000;
            // NaN means non-codepoint
            // Support: Firefox<24
            // Workaround erroneous numeric interpretation of +"0x"
            return high !== high || escapedWhitespace ?
                escaped :
                high < 0 ?
                    // BMP codepoint
                    String.fromCharCode(high + 0x10000) :
                    // Supplemental Plane codepoint (surrogate pair)
                    String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
        },

        // CSS string/identifier serialization
        // https://drafts.csswg.org/cssom/#common-serializing-idioms
        rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        fcssescape = function (ch, asCodePoint) {
            if (asCodePoint) {

                // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
                if (ch === "\0") {
                    return "\uFFFD";
                }

                // Control characters and (dependent upon position) numbers get escaped as code points
                return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
            }

            // Other potentially-special ASCII characters get backslash-escaped
            return "\\" + ch;
        },

        // Used for iframes
        // See setDocument()
        // Removing the function wrapper causes a "Permission Denied"
        // error in IE
        unloadHandler = function () {
            setDocument();
        },

        inDisabledFieldset = addCombinator(
            function (elem) {
                return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
            },
            {dir: "parentNode", next: "legend"}
        );

// Optimize for push.apply( _, NodeList )
    try {
        push.apply(
            (arr = slice.call(preferredDoc.childNodes)),
            preferredDoc.childNodes
        );
        // Support: Android<4.0
        // Detect silently failing push.apply
        arr[preferredDoc.childNodes.length].nodeType;
    } catch (e) {
        push = {
            apply: arr.length ?

                // Leverage slice if possible
                function (target, els) {
                    push_native.apply(target, slice.call(els));
                } :

                // Support: IE<9
                // Otherwise append directly
                function (target, els) {
                    var j = target.length,
                        i = 0;
                    // Can't trust NodeList.length
                    while ((target[j++] = els[i++])) {
                    }
                    target.length = j - 1;
                }
        };
    }

    function Sizzle(selector, context, results, seed) {
        var m, i, elem, nid, match, groups, newSelector,
            newContext = context && context.ownerDocument,

            // nodeType defaults to 9, since context defaults to document
            nodeType = context ? context.nodeType : 9;

        results = results || [];

        // Return early from calls with invalid selector or context
        if (typeof selector !== "string" || !selector ||
            nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {

            return results;
        }

        // Try to shortcut find operations (as opposed to filters) in HTML documents
        if (!seed) {

            if (( context ? context.ownerDocument || context : preferredDoc ) !== document) {
                setDocument(context);
            }
            context = context || document;

            if (documentIsHTML) {

                // If the selector is sufficiently simple, try using a "get*By*" DOM method
                // (excepting DocumentFragment context, where the methods don't exist)
                if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {

                    // ID selector
                    if ((m = match[1])) {

                        // Document context
                        if (nodeType === 9) {
                            if ((elem = context.getElementById(m))) {

                                // Support: IE, Opera, Webkit
                                // TODO: identify versions
                                // getElementById can match elements by name instead of ID
                                if (elem.id === m) {
                                    results.push(elem);
                                    return results;
                                }
                            } else {
                                return results;
                            }

                            // Element context
                        } else {

                            // Support: IE, Opera, Webkit
                            // TODO: identify versions
                            // getElementById can match elements by name instead of ID
                            if (newContext && (elem = newContext.getElementById(m)) &&
                                contains(context, elem) &&
                                elem.id === m) {

                                results.push(elem);
                                return results;
                            }
                        }

                        // Type selector
                    } else if (match[2]) {
                        push.apply(results, context.getElementsByTagName(selector));
                        return results;

                        // Class selector
                    } else if ((m = match[3]) && support.getElementsByClassName &&
                        context.getElementsByClassName) {

                        push.apply(results, context.getElementsByClassName(m));
                        return results;
                    }
                }

                // Take advantage of querySelectorAll
                if (support.qsa && !nonnativeSelectorCache[selector + " "] &&
                    (!rbuggyQSA || !rbuggyQSA.test(selector))) {

                    if (nodeType !== 1) {
                        newContext = context;
                        newSelector = selector;

                        // qSA looks outside Element context, which is not what we want
                        // Thanks to Andrew Dupont for this workaround technique
                        // Support: IE <=8
                        // Exclude object elements
                    } else if (context.nodeName.toLowerCase() !== "object") {

                        // Capture the context ID, setting it first if necessary
                        if ((nid = context.getAttribute("id"))) {
                            nid = nid.replace(rcssescape, fcssescape);
                        } else {
                            context.setAttribute("id", (nid = expando));
                        }

                        // Prefix every selector in the list
                        groups = tokenize(selector);
                        i = groups.length;
                        while (i--) {
                            groups[i] = "#" + nid + " " + toSelector(groups[i]);
                        }
                        newSelector = groups.join(",");

                        // Expand context for sibling selectors
                        newContext = rsibling.test(selector) && testContext(context.parentNode) ||
                            context;
                    }

                    if (newSelector) {
                        try {
                            push.apply(results,
                                newContext.querySelectorAll(newSelector)
                            );
                            return results;
                        } catch (qsaError) {
                            nonnativeSelectorCache(selector);
                        } finally {
                            if (nid === expando) {
                                context.removeAttribute("id");
                            }
                        }
                    }
                }
            }
        }

        // All others
        return select(selector.replace(rtrim, "$1"), context, results, seed);
    }

    /**
     * Create key-value caches of limited size
     * @returns {function(string, object)} Returns the Object data after storing it on itself with
     *    property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
     *    deleting the oldest entry
     */
    function createCache() {
        var keys = [];

        function cache(key, value) {
            // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
            if (keys.push(key + " ") > Expr.cacheLength) {
                // Only keep the most recent entries
                delete cache[keys.shift()];
            }
            return (cache[key + " "] = value);
        }

        return cache;
    }

    /**
     * Mark a function for special use by Sizzle
     * @param {Function} fn The function to mark
     */
    function markFunction(fn) {
        fn[expando] = true;
        return fn;
    }

    /**
     * Support testing using an element
     * @param {Function} fn Passed the created element and returns a boolean result
     */
    function assert(fn) {
        var el = document.createElement("fieldset");

        try {
            return !!fn(el);
        } catch (e) {
            return false;
        } finally {
            // Remove from its parent by default
            if (el.parentNode) {
                el.parentNode.removeChild(el);
            }
            // release memory in IE
            el = null;
        }
    }

    /**
     * Adds the same handler for all of the specified attrs
     * @param {String} attrs Pipe-separated list of attributes
     * @param {Function} handler The method that will be applied
     */
    function addHandle(attrs, handler) {
        var arr = attrs.split("|"),
            i = arr.length;

        while (i--) {
            Expr.attrHandle[arr[i]] = handler;
        }
    }

    /**
     * Checks document order of two siblings
     * @param {Element} a
     * @param {Element} b
     * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
     */
    function siblingCheck(a, b) {
        var cur = b && a,
            diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
                a.sourceIndex - b.sourceIndex;

        // Use IE sourceIndex if available on both nodes
        if (diff) {
            return diff;
        }

        // Check if b follows a
        if (cur) {
            while ((cur = cur.nextSibling)) {
                if (cur === b) {
                    return -1;
                }
            }
        }

        return a ? 1 : -1;
    }

    /**
     * Returns a function to use in pseudos for input types
     * @param {String} type
     */
    function createInputPseudo(type) {
        return function (elem) {
            var name = elem.nodeName.toLowerCase();
            return name === "input" && elem.type === type;
        };
    }

    /**
     * Returns a function to use in pseudos for buttons
     * @param {String} type
     */
    function createButtonPseudo(type) {
        return function (elem) {
            var name = elem.nodeName.toLowerCase();
            return (name === "input" || name === "button") && elem.type === type;
        };
    }

    /**
     * Returns a function to use in pseudos for :enabled/:disabled
     * @param {Boolean} disabled true for :disabled; false for :enabled
     */
    function createDisabledPseudo(disabled) {

        // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
        return function (elem) {

            // Only certain elements can match :enabled or :disabled
            // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
            // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
            if ("form" in elem) {

                // Check for inherited disabledness on relevant non-disabled elements:
                // * listed form-associated elements in a disabled fieldset
                //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
                //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
                // * option elements in a disabled optgroup
                //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
                // All such elements have a "form" property.
                if (elem.parentNode && elem.disabled === false) {

                    // Option elements defer to a parent optgroup if present
                    if ("label" in elem) {
                        if ("label" in elem.parentNode) {
                            return elem.parentNode.disabled === disabled;
                        } else {
                            return elem.disabled === disabled;
                        }
                    }

                    // Support: IE 6 - 11
                    // Use the isDisabled shortcut property to check for disabled fieldset ancestors
                    return elem.isDisabled === disabled ||

                        // Where there is no isDisabled, check manually
                        /* jshint -W018 */
                        elem.isDisabled !== !disabled &&
                        inDisabledFieldset(elem) === disabled;
                }

                return elem.disabled === disabled;

                // Try to winnow out elements that can't be disabled before trusting the disabled property.
                // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
                // even exist on them, let alone have a boolean value.
            } else if ("label" in elem) {
                return elem.disabled === disabled;
            }

            // Remaining elements are neither :enabled nor :disabled
            return false;
        };
    }

    /**
     * Returns a function to use in pseudos for positionals
     * @param {Function} fn
     */
    function createPositionalPseudo(fn) {
        return markFunction(function (argument) {
            argument = +argument;
            return markFunction(function (seed, matches) {
                var j,
                    matchIndexes = fn([], seed.length, argument),
                    i = matchIndexes.length;

                // Match elements found at the specified indexes
                while (i--) {
                    if (seed[(j = matchIndexes[i])]) {
                        seed[j] = !(matches[j] = seed[j]);
                    }
                }
            });
        });
    }

    /**
     * Checks a node for validity as a Sizzle context
     * @param {Element|Object=} context
     * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
     */
    function testContext(context) {
        return context && typeof context.getElementsByTagName !== "undefined" && context;
    }

// Expose support vars for convenience
    support = Sizzle.support = {};

    /**
     * Detects XML nodes
     * @param {Element|Object} elem An element or a document
     * @returns {Boolean} True iff elem is a non-HTML XML node
     */
    isXML = Sizzle.isXML = function (elem) {
        // documentElement is verified for cases where it doesn't yet exist
        // (such as loading iframes in IE - #4833)
        var documentElement = elem && (elem.ownerDocument || elem).documentElement;
        return documentElement ? documentElement.nodeName !== "HTML" : false;
    };

    /**
     * Sets document-related variables once based on the current document
     * @param {Element|Object} [doc] An element or document object to use to set the document
     * @returns {Object} Returns the current document
     */
    setDocument = Sizzle.setDocument = function (node) {
        var hasCompare, subWindow,
            doc = node ? node.ownerDocument || node : preferredDoc;

        // Return early if doc is invalid or already selected
        if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
            return document;
        }

        // Update global variables
        document = doc;
        docElem = document.documentElement;
        documentIsHTML = !isXML(document);

        // Support: IE 9-11, Edge
        // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
        if (preferredDoc !== document &&
            (subWindow = document.defaultView) && subWindow.top !== subWindow) {

            // Support: IE 11, Edge
            if (subWindow.addEventListener) {
                subWindow.addEventListener("unload", unloadHandler, false);

                // Support: IE 9 - 10 only
            } else if (subWindow.attachEvent) {
                subWindow.attachEvent("onunload", unloadHandler);
            }
        }

        /* Attributes
         ---------------------------------------------------------------------- */

        // Support: IE<8
        // Verify that getAttribute really returns attributes and not properties
        // (excepting IE8 booleans)
        support.attributes = assert(function (el) {
            el.className = "i";
            return !el.getAttribute("className");
        });

        /* getElement(s)By*
         ---------------------------------------------------------------------- */

        // Check if getElementsByTagName("*") returns only elements
        support.getElementsByTagName = assert(function (el) {
            el.appendChild(document.createComment(""));
            return !el.getElementsByTagName("*").length;
        });

        // Support: IE<9
        support.getElementsByClassName = rnative.test(document.getElementsByClassName);

        // Support: IE<10
        // Check if getElementById returns elements by name
        // The broken getElementById methods don't pick up programmatically-set names,
        // so use a roundabout getElementsByName test
        support.getById = assert(function (el) {
            docElem.appendChild(el).id = expando;
            return !document.getElementsByName || !document.getElementsByName(expando).length;
        });

        // ID filter and find
        if (support.getById) {
            Expr.filter["ID"] = function (id) {
                var attrId = id.replace(runescape, funescape);
                return function (elem) {
                    return elem.getAttribute("id") === attrId;
                };
            };
            Expr.find["ID"] = function (id, context) {
                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                    var elem = context.getElementById(id);
                    return elem ? [elem] : [];
                }
            };
        } else {
            Expr.filter["ID"] = function (id) {
                var attrId = id.replace(runescape, funescape);
                return function (elem) {
                    var node = typeof elem.getAttributeNode !== "undefined" &&
                        elem.getAttributeNode("id");
                    return node && node.value === attrId;
                };
            };

            // Support: IE 6 - 7 only
            // getElementById is not reliable as a find shortcut
            Expr.find["ID"] = function (id, context) {
                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                    var node, i, elems,
                        elem = context.getElementById(id);

                    if (elem) {

                        // Verify the id attribute
                        node = elem.getAttributeNode("id");
                        if (node && node.value === id) {
                            return [elem];
                        }

                        // Fall back on getElementsByName
                        elems = context.getElementsByName(id);
                        i = 0;
                        while ((elem = elems[i++])) {
                            node = elem.getAttributeNode("id");
                            if (node && node.value === id) {
                                return [elem];
                            }
                        }
                    }

                    return [];
                }
            };
        }

        // Tag
        Expr.find["TAG"] = support.getElementsByTagName ?
            function (tag, context) {
                if (typeof context.getElementsByTagName !== "undefined") {
                    return context.getElementsByTagName(tag);

                    // DocumentFragment nodes don't have gEBTN
                } else if (support.qsa) {
                    return context.querySelectorAll(tag);
                }
            } :

            function (tag, context) {
                var elem,
                    tmp = [],
                    i = 0,
                    // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
                    results = context.getElementsByTagName(tag);

                // Filter out possible comments
                if (tag === "*") {
                    while ((elem = results[i++])) {
                        if (elem.nodeType === 1) {
                            tmp.push(elem);
                        }
                    }

                    return tmp;
                }
                return results;
            };

        // Class
        Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
                if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
                    return context.getElementsByClassName(className);
                }
            };

        /* QSA/matchesSelector
         ---------------------------------------------------------------------- */

        // QSA and matchesSelector support

        // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
        rbuggyMatches = [];

        // qSa(:focus) reports false when true (Chrome 21)
        // We allow this because of a bug in IE8/9 that throws an error
        // whenever `document.activeElement` is accessed on an iframe
        // So, we allow :focus to pass through QSA all the time to avoid the IE error
        // See https://bugs.jquery.com/ticket/13378
        rbuggyQSA = [];

        if ((support.qsa = rnative.test(document.querySelectorAll))) {
            // Build QSA regex
            // Regex strategy adopted from Diego Perini
            assert(function (el) {
                // Select is set to empty string on purpose
                // This is to test IE's treatment of not explicitly
                // setting a boolean content attribute,
                // since its presence should be enough
                // https://bugs.jquery.com/ticket/12359
                docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" +
                    "<select id='" + expando + "-\r\\' msallowcapture=''>" +
                    "<option selected=''></option></select>";

                // Support: IE8, Opera 11-12.16
                // Nothing should be selected when empty strings follow ^= or $= or *=
                // The test attribute must be unknown in Opera but "safe" for WinRT
                // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
                if (el.querySelectorAll("[msallowcapture^='']").length) {
                    rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
                }

                // Support: IE8
                // Boolean attributes and "value" are not treated correctly
                if (!el.querySelectorAll("[selected]").length) {
                    rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                }

                // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
                if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
                    rbuggyQSA.push("~=");
                }

                // Webkit/Opera - :checked should return selected option elements
                // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                // IE8 throws error here and will not see later tests
                if (!el.querySelectorAll(":checked").length) {
                    rbuggyQSA.push(":checked");
                }

                // Support: Safari 8+, iOS 8+
                // https://bugs.webkit.org/show_bug.cgi?id=136851
                // In-page `selector#id sibling-combinator selector` fails
                if (!el.querySelectorAll("a#" + expando + "+*").length) {
                    rbuggyQSA.push(".#.+[+~]");
                }
            });

            assert(function (el) {
                el.innerHTML = "<a href='' disabled='disabled'></a>" +
                    "<select disabled='disabled'><option/></select>";

                // Support: Windows 8 Native Apps
                // The type and name attributes are restricted during .innerHTML assignment
                var input = document.createElement("input");
                input.setAttribute("type", "hidden");
                el.appendChild(input).setAttribute("name", "D");

                // Support: IE8
                // Enforce case-sensitivity of name attribute
                if (el.querySelectorAll("[name=d]").length) {
                    rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
                }

                // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
                // IE8 throws error here and will not see later tests
                if (el.querySelectorAll(":enabled").length !== 2) {
                    rbuggyQSA.push(":enabled", ":disabled");
                }

                // Support: IE9-11+
                // IE's :disabled selector does not pick up the children of disabled fieldsets
                docElem.appendChild(el).disabled = true;
                if (el.querySelectorAll(":disabled").length !== 2) {
                    rbuggyQSA.push(":enabled", ":disabled");
                }

                // Opera 10-11 does not throw on post-comma invalid pseudos
                el.querySelectorAll("*,:x");
                rbuggyQSA.push(",.*:");
            });
        }

        if ((support.matchesSelector = rnative.test((matches = docElem.matches ||
                docElem.webkitMatchesSelector ||
                docElem.mozMatchesSelector ||
                docElem.oMatchesSelector ||
                docElem.msMatchesSelector)))) {

            assert(function (el) {
                // Check to see if it's possible to do matchesSelector
                // on a disconnected node (IE 9)
                support.disconnectedMatch = matches.call(el, "*");

                // This should fail with an exception
                // Gecko does not error, returns false instead
                matches.call(el, "[s!='']:x");
                rbuggyMatches.push("!=", pseudos);
            });
        }

        rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
        rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));

        /* Contains
         ---------------------------------------------------------------------- */
        hasCompare = rnative.test(docElem.compareDocumentPosition);

        // Element contains another
        // Purposefully self-exclusive
        // As in, an element does not contain itself
        contains = hasCompare || rnative.test(docElem.contains) ?
            function (a, b) {
                var adown = a.nodeType === 9 ? a.documentElement : a,
                    bup = b && b.parentNode;
                return a === bup || !!( bup && bup.nodeType === 1 && (
                        adown.contains ?
                            adown.contains(bup) :
                        a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16
                    ));
            } :
            function (a, b) {
                if (b) {
                    while ((b = b.parentNode)) {
                        if (b === a) {
                            return true;
                        }
                    }
                }
                return false;
            };

        /* Sorting
         ---------------------------------------------------------------------- */

        // Document order sorting
        sortOrder = hasCompare ?
            function (a, b) {

                // Flag for duplicate removal
                if (a === b) {
                    hasDuplicate = true;
                    return 0;
                }

                // Sort on method existence if only one input has compareDocumentPosition
                var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                if (compare) {
                    return compare;
                }

                // Calculate position if both inputs belong to the same document
                compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
                    a.compareDocumentPosition(b) :

                    // Otherwise we know they are disconnected
                    1;

                // Disconnected nodes
                if (compare & 1 ||
                    (!support.sortDetached && b.compareDocumentPosition(a) === compare)) {

                    // Choose the first element that is related to our preferred document
                    if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
                        return -1;
                    }
                    if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
                        return 1;
                    }

                    // Maintain original order
                    return sortInput ?
                        ( indexOf(sortInput, a) - indexOf(sortInput, b) ) :
                        0;
                }

                return compare & 4 ? -1 : 1;
            } :
            function (a, b) {
                // Exit early if the nodes are identical
                if (a === b) {
                    hasDuplicate = true;
                    return 0;
                }

                var cur,
                    i = 0,
                    aup = a.parentNode,
                    bup = b.parentNode,
                    ap = [a],
                    bp = [b];

                // Parentless nodes are either documents or disconnected
                if (!aup || !bup) {
                    return a === document ? -1 :
                        b === document ? 1 :
                            aup ? -1 :
                                bup ? 1 :
                                    sortInput ?
                                        ( indexOf(sortInput, a) - indexOf(sortInput, b) ) :
                                        0;

                    // If the nodes are siblings, we can do a quick check
                } else if (aup === bup) {
                    return siblingCheck(a, b);
                }

                // Otherwise we need full lists of their ancestors for comparison
                cur = a;
                while ((cur = cur.parentNode)) {
                    ap.unshift(cur);
                }
                cur = b;
                while ((cur = cur.parentNode)) {
                    bp.unshift(cur);
                }

                // Walk down the tree looking for a discrepancy
                while (ap[i] === bp[i]) {
                    i++;
                }

                return i ?
                    // Do a sibling check if the nodes have a common ancestor
                    siblingCheck(ap[i], bp[i]) :

                    // Otherwise nodes in our document sort first
                    ap[i] === preferredDoc ? -1 :
                        bp[i] === preferredDoc ? 1 :
                            0;
            };

        return document;
    };

    Sizzle.matches = function (expr, elements) {
        return Sizzle(expr, null, null, elements);
    };

    Sizzle.matchesSelector = function (elem, expr) {
        // Set document vars if needed
        if (( elem.ownerDocument || elem ) !== document) {
            setDocument(elem);
        }

        // Make sure that attribute selectors are quoted
        expr = expr.replace(rattributeQuotes, "='$1']");

        if (support.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] &&
            ( !rbuggyMatches || !rbuggyMatches.test(expr) ) &&
            ( !rbuggyQSA || !rbuggyQSA.test(expr) )) {

            try {
                var ret = matches.call(elem, expr);

                // IE 9's matchesSelector returns false on disconnected nodes
                if (ret || support.disconnectedMatch ||
                    // As well, disconnected nodes are said to be in a document
                    // fragment in IE 9
                    elem.document && elem.document.nodeType !== 11) {
                    return ret;
                }
            } catch (e) {
                nonnativeSelectorCache(expr);
            }
        }

        return Sizzle(expr, document, null, [elem]).length > 0;
    };

    Sizzle.contains = function (context, elem) {
        // Set document vars if needed
        if (( context.ownerDocument || context ) !== document) {
            setDocument(context);
        }
        return contains(context, elem);
    };

    Sizzle.attr = function (elem, name) {
        // Set document vars if needed
        if (( elem.ownerDocument || elem ) !== document) {
            setDocument(elem);
        }

        var fn = Expr.attrHandle[name.toLowerCase()],
            // Don't get fooled by Object.prototype properties (jQuery #13807)
            val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ?
                fn(elem, name, !documentIsHTML) :
                undefined;

        return val !== undefined ?
            val :
            support.attributes || !documentIsHTML ?
                elem.getAttribute(name) :
                (val = elem.getAttributeNode(name)) && val.specified ?
                    val.value :
                    null;
    };

    Sizzle.escape = function (sel) {
        return (sel + "").replace(rcssescape, fcssescape);
    };

    Sizzle.error = function (msg) {
        throw new Error("Syntax error, unrecognized expression: " + msg);
    };

    /**
     * Document sorting and removing duplicates
     * @param {ArrayLike} results
     */
    Sizzle.uniqueSort = function (results) {
        var elem,
            duplicates = [],
            j = 0,
            i = 0;

        // Unless we *know* we can detect duplicates, assume their presence
        hasDuplicate = !support.detectDuplicates;
        sortInput = !support.sortStable && results.slice(0);
        results.sort(sortOrder);

        if (hasDuplicate) {
            while ((elem = results[i++])) {
                if (elem === results[i]) {
                    j = duplicates.push(i);
                }
            }
            while (j--) {
                results.splice(duplicates[j], 1);
            }
        }

        // Clear input after sorting to release objects
        // See https://github.com/jquery/sizzle/pull/225
        sortInput = null;

        return results;
    };

    /**
     * Utility function for retrieving the text value of an array of DOM nodes
     * @param {Array|Element} elem
     */
    getText = Sizzle.getText = function (elem) {
        var node,
            ret = "",
            i = 0,
            nodeType = elem.nodeType;

        if (!nodeType) {
            // If no nodeType, this is expected to be an array
            while ((node = elem[i++])) {
                // Do not traverse comment nodes
                ret += getText(node);
            }
        } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
            // Use textContent for elements
            // innerText usage removed for consistency of new lines (jQuery #11153)
            if (typeof elem.textContent === "string") {
                return elem.textContent;
            } else {
                // Traverse its children
                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                    ret += getText(elem);
                }
            }
        } else if (nodeType === 3 || nodeType === 4) {
            return elem.nodeValue;
        }
        // Do not include comment or processing instruction nodes

        return ret;
    };

    Expr = Sizzle.selectors = {

        // Can be adjusted by the user
        cacheLength: 50,

        createPseudo: markFunction,

        match: matchExpr,

        attrHandle: {},

        find: {},

        relative: {
            ">": {dir: "parentNode", first: true},
            " ": {dir: "parentNode"},
            "+": {dir: "previousSibling", first: true},
            "~": {dir: "previousSibling"}
        },

        preFilter: {
            "ATTR": function (match) {
                match[1] = match[1].replace(runescape, funescape);

                // Move the given value to match[3] whether quoted or unquoted
                match[3] = ( match[3] || match[4] || match[5] || "" ).replace(runescape, funescape);

                if (match[2] === "~=") {
                    match[3] = " " + match[3] + " ";
                }

                return match.slice(0, 4);
            },

            "CHILD": function (match) {
                /* matches from matchExpr["CHILD"]
                 1 type (only|nth|...)
                 2 what (child|of-type)
                 3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
                 4 xn-component of xn+y argument ([+-]?\d*n|)
                 5 sign of xn-component
                 6 x of xn-component
                 7 sign of y-component
                 8 y of y-component
                 */
                match[1] = match[1].toLowerCase();

                if (match[1].slice(0, 3) === "nth") {
                    // nth-* requires argument
                    if (!match[3]) {
                        Sizzle.error(match[0]);
                    }

                    // numeric x and y parameters for Expr.filter.CHILD
                    // remember that false/true cast respectively to 0/1
                    match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
                    match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

                    // other types prohibit arguments
                } else if (match[3]) {
                    Sizzle.error(match[0]);
                }

                return match;
            },

            "PSEUDO": function (match) {
                var excess,
                    unquoted = !match[6] && match[2];

                if (matchExpr["CHILD"].test(match[0])) {
                    return null;
                }

                // Accept quoted arguments as-is
                if (match[3]) {
                    match[2] = match[4] || match[5] || "";

                    // Strip excess characters from unquoted arguments
                } else if (unquoted && rpseudo.test(unquoted) &&
                    // Get excess from tokenize (recursively)
                    (excess = tokenize(unquoted, true)) &&
                    // advance to the next closing parenthesis
                    (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {

                    // excess is a negative index
                    match[0] = match[0].slice(0, excess);
                    match[2] = unquoted.slice(0, excess);
                }

                // Return only captures needed by the pseudo filter method (type and argument)
                return match.slice(0, 3);
            }
        },

        filter: {

            "TAG": function (nodeNameSelector) {
                var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                return nodeNameSelector === "*" ?
                    function () {
                        return true;
                    } :
                    function (elem) {
                        return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                    };
            },

            "CLASS": function (className) {
                var pattern = classCache[className + " "];

                return pattern ||
                    (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) &&
                    classCache(className, function (elem) {
                        return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
                    });
            },

            "ATTR": function (name, operator, check) {
                return function (elem) {
                    var result = Sizzle.attr(elem, name);

                    if (result == null) {
                        return operator === "!=";
                    }
                    if (!operator) {
                        return true;
                    }

                    result += "";

                    return operator === "=" ? result === check :
                        operator === "!=" ? result !== check :
                            operator === "^=" ? check && result.indexOf(check) === 0 :
                                operator === "*=" ? check && result.indexOf(check) > -1 :
                                    operator === "$=" ? check && result.slice(-check.length) === check :
                                        operator === "~=" ? ( " " + result.replace(rwhitespace, " ") + " " ).indexOf(check) > -1 :
                                            operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" :
                                                false;
                };
            },

            "CHILD": function (type, what, argument, first, last) {
                var simple = type.slice(0, 3) !== "nth",
                    forward = type.slice(-4) !== "last",
                    ofType = what === "of-type";

                return first === 1 && last === 0 ?

                    // Shortcut for :nth-*(n)
                    function (elem) {
                        return !!elem.parentNode;
                    } :

                    function (elem, context, xml) {
                        var cache, uniqueCache, outerCache, node, nodeIndex, start,
                            dir = simple !== forward ? "nextSibling" : "previousSibling",
                            parent = elem.parentNode,
                            name = ofType && elem.nodeName.toLowerCase(),
                            useCache = !xml && !ofType,
                            diff = false;

                        if (parent) {

                            // :(first|last|only)-(child|of-type)
                            if (simple) {
                                while (dir) {
                                    node = elem;
                                    while ((node = node[dir])) {
                                        if (ofType ?
                                            node.nodeName.toLowerCase() === name :
                                            node.nodeType === 1) {

                                            return false;
                                        }
                                    }
                                    // Reverse direction for :only-* (if we haven't yet done so)
                                    start = dir = type === "only" && !start && "nextSibling";
                                }
                                return true;
                            }

                            start = [forward ? parent.firstChild : parent.lastChild];

                            // non-xml :nth-child(...) stores cache data on `parent`
                            if (forward && useCache) {

                                // Seek `elem` from a previously-cached index

                                // ...in a gzip-friendly way
                                node = parent;
                                outerCache = node[expando] || (node[expando] = {});

                                // Support: IE <9 only
                                // Defend against cloned attroperties (jQuery gh-1709)
                                uniqueCache = outerCache[node.uniqueID] ||
                                    (outerCache[node.uniqueID] = {});

                                cache = uniqueCache[type] || [];
                                nodeIndex = cache[0] === dirruns && cache[1];
                                diff = nodeIndex && cache[2];
                                node = nodeIndex && parent.childNodes[nodeIndex];

                                while ((node = ++nodeIndex && node && node[dir] ||

                                    // Fallback to seeking `elem` from the start
                                    (diff = nodeIndex = 0) || start.pop())) {

                                    // When found, cache indexes on `parent` and break
                                    if (node.nodeType === 1 && ++diff && node === elem) {
                                        uniqueCache[type] = [dirruns, nodeIndex, diff];
                                        break;
                                    }
                                }

                            } else {
                                // Use previously-cached element index if available
                                if (useCache) {
                                    // ...in a gzip-friendly way
                                    node = elem;
                                    outerCache = node[expando] || (node[expando] = {});

                                    // Support: IE <9 only
                                    // Defend against cloned attroperties (jQuery gh-1709)
                                    uniqueCache = outerCache[node.uniqueID] ||
                                        (outerCache[node.uniqueID] = {});

                                    cache = uniqueCache[type] || [];
                                    nodeIndex = cache[0] === dirruns && cache[1];
                                    diff = nodeIndex;
                                }

                                // xml :nth-child(...)
                                // or :nth-last-child(...) or :nth(-last)?-of-type(...)
                                if (diff === false) {
                                    // Use the same loop as above to seek `elem` from the start
                                    while ((node = ++nodeIndex && node && node[dir] ||
                                        (diff = nodeIndex = 0) || start.pop())) {

                                        if (( ofType ?
                                            node.nodeName.toLowerCase() === name :
                                            node.nodeType === 1 ) && ++diff) {

                                            // Cache the index of each encountered element
                                            if (useCache) {
                                                outerCache = node[expando] || (node[expando] = {});

                                                // Support: IE <9 only
                                                // Defend against cloned attroperties (jQuery gh-1709)
                                                uniqueCache = outerCache[node.uniqueID] ||
                                                    (outerCache[node.uniqueID] = {});

                                                uniqueCache[type] = [dirruns, diff];
                                            }

                                            if (node === elem) {
                                                break;
                                            }
                                        }
                                    }
                                }
                            }

                            // Incorporate the offset, then check against cycle size
                            diff -= last;
                            return diff === first || ( diff % first === 0 && diff / first >= 0 );
                        }
                    };
            },

            "PSEUDO": function (pseudo, argument) {
                // pseudo-class names are case-insensitive
                // http://www.w3.org/TR/selectors/#pseudo-classes
                // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
                // Remember that setFilters inherits from pseudos
                var args,
                    fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] ||
                        Sizzle.error("unsupported pseudo: " + pseudo);

                // The user may use createPseudo to indicate that
                // arguments are needed to create the filter function
                // just as Sizzle does
                if (fn[expando]) {
                    return fn(argument);
                }

                // But maintain support for old signatures
                if (fn.length > 1) {
                    args = [pseudo, pseudo, "", argument];
                    return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ?
                        markFunction(function (seed, matches) {
                            var idx,
                                matched = fn(seed, argument),
                                i = matched.length;
                            while (i--) {
                                idx = indexOf(seed, matched[i]);
                                seed[idx] = !( matches[idx] = matched[i] );
                            }
                        }) :
                        function (elem) {
                            return fn(elem, 0, args);
                        };
                }

                return fn;
            }
        },

        pseudos: {
            // Potentially complex pseudos
            "not": markFunction(function (selector) {
                // Trim the selector passed to compile
                // to avoid treating leading and trailing
                // spaces as combinators
                var input = [],
                    results = [],
                    matcher = compile(selector.replace(rtrim, "$1"));

                return matcher[expando] ?
                    markFunction(function (seed, matches, context, xml) {
                        var elem,
                            unmatched = matcher(seed, null, xml, []),
                            i = seed.length;

                        // Match elements unmatched by `matcher`
                        while (i--) {
                            if ((elem = unmatched[i])) {
                                seed[i] = !(matches[i] = elem);
                            }
                        }
                    }) :
                    function (elem, context, xml) {
                        input[0] = elem;
                        matcher(input, null, xml, results);
                        // Don't keep the element (issue #299)
                        input[0] = null;
                        return !results.pop();
                    };
            }),

            "has": markFunction(function (selector) {
                return function (elem) {
                    return Sizzle(selector, elem).length > 0;
                };
            }),

            "contains": markFunction(function (text) {
                text = text.replace(runescape, funescape);
                return function (elem) {
                    return ( elem.textContent || elem.innerText || getText(elem) ).indexOf(text) > -1;
                };
            }),

            // "Whether an element is represented by a :lang() selector
            // is based solely on the element's language value
            // being equal to the identifier C,
            // or beginning with the identifier C immediately followed by "-".
            // The matching of C against the element's language value is performed case-insensitively.
            // The identifier C does not have to be a valid language name."
            // http://www.w3.org/TR/selectors/#lang-pseudo
            "lang": markFunction(function (lang) {
                // lang value must be a valid identifier
                if (!ridentifier.test(lang || "")) {
                    Sizzle.error("unsupported lang: " + lang);
                }
                lang = lang.replace(runescape, funescape).toLowerCase();
                return function (elem) {
                    var elemLang;
                    do {
                        if ((elemLang = documentIsHTML ?
                                elem.lang :
                            elem.getAttribute("xml:lang") || elem.getAttribute("lang"))) {

                            elemLang = elemLang.toLowerCase();
                            return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                        }
                    } while ((elem = elem.parentNode) && elem.nodeType === 1);
                    return false;
                };
            }),

            // Miscellaneous
            "target": function (elem) {
                var hash = window.location && window.location.hash;
                return hash && hash.slice(1) === elem.id;
            },

            "root": function (elem) {
                return elem === docElem;
            },

            "focus": function (elem) {
                return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
            },

            // Boolean properties
            "enabled": createDisabledPseudo(false),
            "disabled": createDisabledPseudo(true),

            "checked": function (elem) {
                // In CSS3, :checked should return both checked and selected elements
                // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                var nodeName = elem.nodeName.toLowerCase();
                return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
            },

            "selected": function (elem) {
                // Accessing this property makes selected-by-default
                // options in Safari work properly
                if (elem.parentNode) {
                    elem.parentNode.selectedIndex;
                }

                return elem.selected === true;
            },

            // Contents
            "empty": function (elem) {
                // http://www.w3.org/TR/selectors/#empty-pseudo
                // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
                //   but not by others (comment: 8; processing instruction: 7; etc.)
                // nodeType < 6 works because attributes (2) do not appear as children
                for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                    if (elem.nodeType < 6) {
                        return false;
                    }
                }
                return true;
            },

            "parent": function (elem) {
                return !Expr.pseudos["empty"](elem);
            },

            // Element/input types
            "header": function (elem) {
                return rheader.test(elem.nodeName);
            },

            "input": function (elem) {
                return rinputs.test(elem.nodeName);
            },

            "button": function (elem) {
                var name = elem.nodeName.toLowerCase();
                return name === "input" && elem.type === "button" || name === "button";
            },

            "text": function (elem) {
                var attr;
                return elem.nodeName.toLowerCase() === "input" &&
                    elem.type === "text" &&

                    // Support: IE<8
                    // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
                    ( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
            },

            // Position-in-collection
            "first": createPositionalPseudo(function () {
                return [0];
            }),

            "last": createPositionalPseudo(function (matchIndexes, length) {
                return [length - 1];
            }),

            "eq": createPositionalPseudo(function (matchIndexes, length, argument) {
                return [argument < 0 ? argument + length : argument];
            }),

            "even": createPositionalPseudo(function (matchIndexes, length) {
                var i = 0;
                for (; i < length; i += 2) {
                    matchIndexes.push(i);
                }
                return matchIndexes;
            }),

            "odd": createPositionalPseudo(function (matchIndexes, length) {
                var i = 1;
                for (; i < length; i += 2) {
                    matchIndexes.push(i);
                }
                return matchIndexes;
            }),

            "lt": createPositionalPseudo(function (matchIndexes, length, argument) {
                var i = argument < 0 ? argument + length : argument;
                for (; --i >= 0;) {
                    matchIndexes.push(i);
                }
                return matchIndexes;
            }),

            "gt": createPositionalPseudo(function (matchIndexes, length, argument) {
                var i = argument < 0 ? argument + length : argument;
                for (; ++i < length;) {
                    matchIndexes.push(i);
                }
                return matchIndexes;
            })
        }
    };

    Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
    for (i in {radio: true, checkbox: true, file: true, password: true, image: true}) {
        Expr.pseudos[i] = createInputPseudo(i);
    }
    for (i in {submit: true, reset: true}) {
        Expr.pseudos[i] = createButtonPseudo(i);
    }

// Easy API for creating new setFilters
    function setFilters() {
    }

    setFilters.prototype = Expr.filters = Expr.pseudos;
    Expr.setFilters = new setFilters();

    tokenize = Sizzle.tokenize = function (selector, parseOnly) {
        var matched, match, tokens, type,
            soFar, groups, preFilters,
            cached = tokenCache[selector + " "];

        if (cached) {
            return parseOnly ? 0 : cached.slice(0);
        }

        soFar = selector;
        groups = [];
        preFilters = Expr.preFilter;

        while (soFar) {

            // Comma and first run
            if (!matched || (match = rcomma.exec(soFar))) {
                if (match) {
                    // Don't consume trailing commas as valid
                    soFar = soFar.slice(match[0].length) || soFar;
                }
                groups.push((tokens = []));
            }

            matched = false;

            // Combinators
            if ((match = rcombinators.exec(soFar))) {
                matched = match.shift();
                tokens.push({
                    value: matched,
                    // Cast descendant combinators to space
                    type: match[0].replace(rtrim, " ")
                });
                soFar = soFar.slice(matched.length);
            }

            // Filters
            for (type in Expr.filter) {
                if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] ||
                    (match = preFilters[type](match)))) {
                    matched = match.shift();
                    tokens.push({
                        value: matched,
                        type: type,
                        matches: match
                    });
                    soFar = soFar.slice(matched.length);
                }
            }

            if (!matched) {
                break;
            }
        }

        // Return the length of the invalid excess
        // if we're just parsing
        // Otherwise, throw an error or return tokens
        return parseOnly ?
            soFar.length :
            soFar ?
                Sizzle.error(selector) :
                // Cache the tokens
                tokenCache(selector, groups).slice(0);
    };

    function toSelector(tokens) {
        var i = 0,
            len = tokens.length,
            selector = "";
        for (; i < len; i++) {
            selector += tokens[i].value;
        }
        return selector;
    }

    function addCombinator(matcher, combinator, base) {
        var dir = combinator.dir,
            skip = combinator.next,
            key = skip || dir,
            checkNonElements = base && key === "parentNode",
            doneName = done++;

        return combinator.first ?
            // Check against closest ancestor/preceding element
            function (elem, context, xml) {
                while ((elem = elem[dir])) {
                    if (elem.nodeType === 1 || checkNonElements) {
                        return matcher(elem, context, xml);
                    }
                }
                return false;
            } :

            // Check against all ancestor/preceding elements
            function (elem, context, xml) {
                var oldCache, uniqueCache, outerCache,
                    newCache = [dirruns, doneName];

                // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
                if (xml) {
                    while ((elem = elem[dir])) {
                        if (elem.nodeType === 1 || checkNonElements) {
                            if (matcher(elem, context, xml)) {
                                return true;
                            }
                        }
                    }
                } else {
                    while ((elem = elem[dir])) {
                        if (elem.nodeType === 1 || checkNonElements) {
                            outerCache = elem[expando] || (elem[expando] = {});

                            // Support: IE <9 only
                            // Defend against cloned attroperties (jQuery gh-1709)
                            uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

                            if (skip && skip === elem.nodeName.toLowerCase()) {
                                elem = elem[dir] || elem;
                            } else if ((oldCache = uniqueCache[key]) &&
                                oldCache[0] === dirruns && oldCache[1] === doneName) {

                                // Assign to newCache so results back-propagate to previous elements
                                return (newCache[2] = oldCache[2]);
                            } else {
                                // Reuse newcache so results back-propagate to previous elements
                                uniqueCache[key] = newCache;

                                // A match means we're done; a fail means we have to keep checking
                                if ((newCache[2] = matcher(elem, context, xml))) {
                                    return true;
                                }
                            }
                        }
                    }
                }
                return false;
            };
    }

    function elementMatcher(matchers) {
        return matchers.length > 1 ?
            function (elem, context, xml) {
                var i = matchers.length;
                while (i--) {
                    if (!matchers[i](elem, context, xml)) {
                        return false;
                    }
                }
                return true;
            } :
            matchers[0];
    }

    function multipleContexts(selector, contexts, results) {
        var i = 0,
            len = contexts.length;
        for (; i < len; i++) {
            Sizzle(selector, contexts[i], results);
        }
        return results;
    }

    function condense(unmatched, map, filter, context, xml) {
        var elem,
            newUnmatched = [],
            i = 0,
            len = unmatched.length,
            mapped = map != null;

        for (; i < len; i++) {
            if ((elem = unmatched[i])) {
                if (!filter || filter(elem, context, xml)) {
                    newUnmatched.push(elem);
                    if (mapped) {
                        map.push(i);
                    }
                }
            }
        }

        return newUnmatched;
    }

    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
        if (postFilter && !postFilter[expando]) {
            postFilter = setMatcher(postFilter);
        }
        if (postFinder && !postFinder[expando]) {
            postFinder = setMatcher(postFinder, postSelector);
        }
        return markFunction(function (seed, results, context, xml) {
            var temp, i, elem,
                preMap = [],
                postMap = [],
                preexisting = results.length,

                // Get initial elements from seed or context
                elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),

                // Prefilter to get matcher input, preserving a map for seed-results synchronization
                matcherIn = preFilter && ( seed || !selector ) ?
                    condense(elems, preMap, preFilter, context, xml) :
                    elems,

                matcherOut = matcher ?
                    // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
                    postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

                        // ...intermediate processing is necessary
                        [] :

                        // ...otherwise use results directly
                        results :
                    matcherIn;

            // Find primary matches
            if (matcher) {
                matcher(matcherIn, matcherOut, context, xml);
            }

            // Apply postFilter
            if (postFilter) {
                temp = condense(matcherOut, postMap);
                postFilter(temp, [], context, xml);

                // Un-match failing elements by moving them back to matcherIn
                i = temp.length;
                while (i--) {
                    if ((elem = temp[i])) {
                        matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                    }
                }
            }

            if (seed) {
                if (postFinder || preFilter) {
                    if (postFinder) {
                        // Get the final matcherOut by condensing this intermediate into postFinder contexts
                        temp = [];
                        i = matcherOut.length;
                        while (i--) {
                            if ((elem = matcherOut[i])) {
                                // Restore matcherIn since elem is not yet a final match
                                temp.push((matcherIn[i] = elem));
                            }
                        }
                        postFinder(null, (matcherOut = []), temp, xml);
                    }

                    // Move matched elements from seed to results to keep them synchronized
                    i = matcherOut.length;
                    while (i--) {
                        if ((elem = matcherOut[i]) &&
                            (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {

                            seed[temp] = !(results[temp] = elem);
                        }
                    }
                }

                // Add elements to results, through postFinder if defined
            } else {
                matcherOut = condense(
                    matcherOut === results ?
                        matcherOut.splice(preexisting, matcherOut.length) :
                        matcherOut
                );
                if (postFinder) {
                    postFinder(null, results, matcherOut, xml);
                } else {
                    push.apply(results, matcherOut);
                }
            }
        });
    }

    function matcherFromTokens(tokens) {
        var checkContext, matcher, j,
            len = tokens.length,
            leadingRelative = Expr.relative[tokens[0].type],
            implicitRelative = leadingRelative || Expr.relative[" "],
            i = leadingRelative ? 1 : 0,

            // The foundational matcher ensures that elements are reachable from top-level context(s)
            matchContext = addCombinator(function (elem) {
                return elem === checkContext;
            }, implicitRelative, true),
            matchAnyContext = addCombinator(function (elem) {
                return indexOf(checkContext, elem) > -1;
            }, implicitRelative, true),
            matchers = [function (elem, context, xml) {
                var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
                        (checkContext = context).nodeType ?
                            matchContext(elem, context, xml) :
                            matchAnyContext(elem, context, xml) );
                // Avoid hanging onto element (issue #299)
                checkContext = null;
                return ret;
            }];

        for (; i < len; i++) {
            if ((matcher = Expr.relative[tokens[i].type])) {
                matchers = [addCombinator(elementMatcher(matchers), matcher)];
            } else {
                matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);

                // Return special upon seeing a positional matcher
                if (matcher[expando]) {
                    // Find the next relative operator (if any) for proper handling
                    j = ++i;
                    for (; j < len; j++) {
                        if (Expr.relative[tokens[j].type]) {
                            break;
                        }
                    }
                    return setMatcher(
                        i > 1 && elementMatcher(matchers),
                        i > 1 && toSelector(
                            // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                            tokens.slice(0, i - 1).concat({value: tokens[i - 2].type === " " ? "*" : ""})
                        ).replace(rtrim, "$1"),
                        matcher,
                        i < j && matcherFromTokens(tokens.slice(i, j)),
                        j < len && matcherFromTokens((tokens = tokens.slice(j))),
                        j < len && toSelector(tokens)
                    );
                }
                matchers.push(matcher);
            }
        }

        return elementMatcher(matchers);
    }

    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
        var bySet = setMatchers.length > 0,
            byElement = elementMatchers.length > 0,
            superMatcher = function (seed, context, xml, results, outermost) {
                var elem, j, matcher,
                    matchedCount = 0,
                    i = "0",
                    unmatched = seed && [],
                    setMatched = [],
                    contextBackup = outermostContext,
                    // We must always have either seed elements or outermost context
                    elems = seed || byElement && Expr.find["TAG"]("*", outermost),
                    // Use integer dirruns iff this is the outermost matcher
                    dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
                    len = elems.length;

                if (outermost) {
                    outermostContext = context === document || context || outermost;
                }

                // Add elements passing elementMatchers directly to results
                // Support: IE<9, Safari
                // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
                for (; i !== len && (elem = elems[i]) != null; i++) {
                    if (byElement && elem) {
                        j = 0;
                        if (!context && elem.ownerDocument !== document) {
                            setDocument(elem);
                            xml = !documentIsHTML;
                        }
                        while ((matcher = elementMatchers[j++])) {
                            if (matcher(elem, context || document, xml)) {
                                results.push(elem);
                                break;
                            }
                        }
                        if (outermost) {
                            dirruns = dirrunsUnique;
                        }
                    }

                    // Track unmatched elements for set filters
                    if (bySet) {
                        // They will have gone through all possible matchers
                        if ((elem = !matcher && elem)) {
                            matchedCount--;
                        }

                        // Lengthen the array for every element, matched or not
                        if (seed) {
                            unmatched.push(elem);
                        }
                    }
                }

                // `i` is now the count of elements visited above, and adding it to `matchedCount`
                // makes the latter nonnegative.
                matchedCount += i;

                // Apply set filters to unmatched elements
                // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
                // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
                // no element matchers and no seed.
                // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
                // case, which will result in a "00" `matchedCount` that differs from `i` but is also
                // numerically zero.
                if (bySet && i !== matchedCount) {
                    j = 0;
                    while ((matcher = setMatchers[j++])) {
                        matcher(unmatched, setMatched, context, xml);
                    }

                    if (seed) {
                        // Reintegrate element matches to eliminate the need for sorting
                        if (matchedCount > 0) {
                            while (i--) {
                                if (!(unmatched[i] || setMatched[i])) {
                                    setMatched[i] = pop.call(results);
                                }
                            }
                        }

                        // Discard index placeholder values to get only actual matches
                        setMatched = condense(setMatched);
                    }

                    // Add matches to results
                    push.apply(results, setMatched);

                    // Seedless set matches succeeding multiple successful matchers stipulate sorting
                    if (outermost && !seed && setMatched.length > 0 &&
                        ( matchedCount + setMatchers.length ) > 1) {

                        Sizzle.uniqueSort(results);
                    }
                }

                // Override manipulation of globals by nested matchers
                if (outermost) {
                    dirruns = dirrunsUnique;
                    outermostContext = contextBackup;
                }

                return unmatched;
            };

        return bySet ?
            markFunction(superMatcher) :
            superMatcher;
    }

    compile = Sizzle.compile = function (selector, match /* Internal Use Only */) {
        var i,
            setMatchers = [],
            elementMatchers = [],
            cached = compilerCache[selector + " "];

        if (!cached) {
            // Generate a function of recursive functions that can be used to check each element
            if (!match) {
                match = tokenize(selector);
            }
            i = match.length;
            while (i--) {
                cached = matcherFromTokens(match[i]);
                if (cached[expando]) {
                    setMatchers.push(cached);
                } else {
                    elementMatchers.push(cached);
                }
            }

            // Cache the compiled function
            cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));

            // Save selector and tokenization
            cached.selector = selector;
        }
        return cached;
    };

    /**
     * A low-level selection function that works with Sizzle's compiled
     *  selector functions
     * @param {String|Function} selector A selector or a pre-compiled
     *  selector function built with Sizzle.compile
     * @param {Element} context
     * @param {Array} [results]
     * @param {Array} [seed] A set of elements to match against
     */
    select = Sizzle.select = function (selector, context, results, seed) {
        var i, tokens, token, type, find,
            compiled = typeof selector === "function" && selector,
            match = !seed && tokenize((selector = compiled.selector || selector));

        results = results || [];

        // Try to minimize operations if there is only one selector in the list and no seed
        // (the latter of which guarantees us context)
        if (match.length === 1) {

            // Reduce context if the leading compound selector is an ID
            tokens = match[0] = match[0].slice(0);
            if (tokens.length > 2 && (token = tokens[0]).type === "ID" &&
                context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {

                context = ( Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [] )[0];
                if (!context) {
                    return results;

                    // Precompiled matchers will still verify ancestry, so step up a level
                } else if (compiled) {
                    context = context.parentNode;
                }

                selector = selector.slice(tokens.shift().value.length);
            }

            // Fetch a seed set for right-to-left matching
            i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
            while (i--) {
                token = tokens[i];

                // Abort if we hit a combinator
                if (Expr.relative[(type = token.type)]) {
                    break;
                }
                if ((find = Expr.find[type])) {
                    // Search, expanding context for leading sibling combinators
                    if ((seed = find(
                            token.matches[0].replace(runescape, funescape),
                            rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
                        ))) {

                        // If seed is empty or no tokens remain, we can return early
                        tokens.splice(i, 1);
                        selector = seed.length && toSelector(tokens);
                        if (!selector) {
                            push.apply(results, seed);
                            return results;
                        }

                        break;
                    }
                }
            }
        }

        // Compile and execute a filtering function if one is not provided
        // Provide `match` to avoid retokenization if we modified the selector above
        ( compiled || compile(selector, match) )(
            seed,
            context,
            !documentIsHTML,
            results,
            !context || rsibling.test(selector) && testContext(context.parentNode) || context
        );
        return results;
    };

// One-time assignments

// Sort stability
    support.sortStable = expando.split("").sort(sortOrder).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
    support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
    setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
    support.sortDetached = assert(function (el) {
        // Should return 1, but returns 4 (following)
        return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
    });

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
    if (!assert(function (el) {
            el.innerHTML = "<a href='#'></a>";
            return el.firstChild.getAttribute("href") === "#";
        })) {
        addHandle("type|href|height|width", function (elem, name, isXML) {
            if (!isXML) {
                return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
            }
        });
    }

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
    if (!support.attributes || !assert(function (el) {
            el.innerHTML = "<input/>";
            el.firstChild.setAttribute("value", "");
            return el.firstChild.getAttribute("value") === "";
        })) {
        addHandle("value", function (elem, name, isXML) {
            if (!isXML && elem.nodeName.toLowerCase() === "input") {
                return elem.defaultValue;
            }
        });
    }

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
    if (!assert(function (el) {
            return el.getAttribute("disabled") == null;
        })) {
        addHandle(booleans, function (elem, name, isXML) {
            var val;
            if (!isXML) {
                return elem[name] === true ? name.toLowerCase() :
                    (val = elem.getAttributeNode(name)) && val.specified ?
                        val.value :
                        null;
            }
        });
    }

// EXPOSE
    var _sizzle = window.Sizzle;

    Sizzle.noConflict = function () {
        if (window.Sizzle === Sizzle) {
            window.Sizzle = _sizzle;
        }

        return Sizzle;
    };

    if (typeof define === "function" && define.amd) {
        define(function () {
            return Sizzle;
        });
// Sizzle requires that there be a global window in Common-JS like environments
    } else if (typeof module !== "undefined" && module.exports) {
        module.exports = Sizzle;
    } else {
        window.Sizzle = Sizzle;
    }
// EXPOSE

})(window);


yu.$ = function (selector) {
    var element = (typeof selector === "string" ? Sizzle(selector)[0] : selector);
    element.text = function () {
        return this.innerText ? this.innerText : this.innerHTML.replace(/<.+?>/gim, "");
    };
    element.html = function () {
        return this.innerHTML ? this.innerHTML : null;
    };
    element.first = function () {
        if (this.firstChild.nodeName == "#text") {
            return yu.$(this.firstChild.nextSibling);
        } else if (this.firstChild) {
            return yu.$(this.firstChild);
        } else {
            return null;
        }
    };
    element.last = function () {
        if (this.lastChild.nodeName == "#text") {
            return yu.$(this.lastChild.previousSibling);
        } else if (this.lastChild) {
            return yu.$(this.lastChild);
        } else {
            return null;
        }
    };
    element.pre = function () {
        if (this.previousSibling.nodeName == "#text") {
            return yu.$(this.previousSibling.previousSibling);
        } else if (this.previousSibling) {
            return yu.$(this.previousSibling);
        } else {
            return null;
        }
    };
    element.next = function () {
        if (this.nextSibling.nodeName == "#text") {
            return yu.$(this.nextSibling.nextSibling);
        } else if (this.nextSibling) {
            return yu.$(this.nextSibling);
        } else {
            return null;
        }
    };
    element.parent = function () {
        return this.parentNode ? yu.$(this.parentNode) : null;
    };
    element.css = function (styles) {
        return yu.css(this, styles);
    };
    element.getStyle = function (property) {
        return yu.getStyle(this, property)
    };
    element.addClass = function (className) {
        yu.addClass(element, className);
        return element;
    };
    element.getClass = function () {
        return yu.getClass(element);
    };

    element.hasClass = function (className) {
        return yu.hasClass(className);
    };
    element.removeClass = function (className) {
        return yu.removeClass(this, className)
    };
    element.attr = function (attribute, value) {
        if (arguments.length === 2) {
            this.setAttribute(attribute, value);
            return element;
        }
        return this.getAttribute(attribute);
    };
    element.paste = function (node) {
        var span = document.createElement("span");
        if (typeof(node) == "string") {
            span.innerHTML = node;
        } else {
            span.appendChild(node);
        }
        var child = this.childNodes;
        for (var i = 0; i < child.length; i++) {
            this.removeChild(child[i]);
        }
        this.appendChild(span);
        return element;
    };

    element.on = function (type, fn) {
        yu.event(this, type, fn);
        return element;
    };

    element.event = element.on;

    element.toggle = function (value) {
        return yu.toggle(this, value);
    };

    element.hide = function () {
        return yu.hide(this);
    };

    element.show = function (value) {
        return yu.show(this, value);
    };

    element.after = function (referenceNode) {
        return yu.after(this, referenceNode);
    };
    element.before = function () {
        return yu.before(this);
    };
    element.append = function (element) {
        return yu.append(element, this);
    };
    element.prepend = function (element) {
        return yu.prepend(element, this);
    };
    element.empty = function () {
        return yu.empty(this);
    };
    element.remove = function () {
        return yu.remove(this);
    };

    element.windowSize = function () {
        return yu.windowSize();
    };
    element.eachElem = function (fn) {
        yu.eachElem(fn, this);
        return element;
    };
    element.eachDom = function (fn) {
        yu.eachDom(this, fn);
        return element;
    };
    element.eachNode = function (fn, depth, returnFormParent) {
        yu.eachNode(fn, this, depth, returnFormParent);
        return element;
    };
    element.eachAttr = function (fn, depth, returnFormParent) {
        yu.eachAttr(fn, this, depth, returnFormParent);
        return element;
    };
    element.serialize = function () {
        return yu.serialize(this);
    };
    element.click = function (fn) {
        yu.event(this, 'click', fn);
    };
    element.click = function (fn) {
        yu.event(this, 'click', fn);
    };
    element.val = function () {
        return element.value;
    };
    return element;
};


yu.on = yu.event;
yu.setStyle = yu.css;
yu.$$ = Sizzle;
yu.attr = Sizzle.attr;
yu.contains = Sizzle.contains;
yu.escape = Sizzle.escape;
yu.text = Sizzle.getText;
yu.isXML = Sizzle.isXML;
yu.matches = Sizzle.matches;
yu.unique = Sizzle.uniqueSort;
//如果window对象中$命名空间未被占用，则用YU对象占用$命名空间
//如果window对象中$命名空间已经被占用，则放弃对$命名空间的占用
//例如引入其他库，如jQuery，如果jQuery先引用，则因$已经被先被jQuery占用，则YU放弃对$的占用
//如果jQuery后引用，则因为jQuery对$命名空间进行了覆盖性赋值，则YU被迫让出了对$的占用。
if (!window.$) {
    window['$'] = yu.$;
}

if (!window.$$) {
    window['$$'] = yu.$$;
}