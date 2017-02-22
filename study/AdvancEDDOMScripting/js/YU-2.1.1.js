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
 */

(function () {
    'use strict';
    var yuObj = {},
        toString = yuObj.toString,
        version = '2.1.1';

    /*
     * 选择器
     * 作用：通过id值获取单个元素或多个元素
     * 参数：单个或多个id值
     * 返回：元素数组，注意返回的是DOM元素数组，和jQuery不同
     * */
    function d() {
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

    var YU = {
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
         * 仅YU库内部使用
         * 作用：通过id值获取单个元素或多个元素
         * 参数：单个或多个id值
         * 返回：元素数组，注意返回的是DOM元素数组，和jQuery不同
         * */
        d: d,

        /*
         * 作用：解决YU库和其他库在$上的命名冲突
         * 参数：name 取代$的新名字
         * 返回：无，注意YU库的添加位置置在其他库之前，以便其他库的$覆盖YU库的$
         * */
        noConflict: function (name) {
            window[name] = YU;
        },


        /**************************************
         *                                    *
         *            事件方法                  *
         *          EVENT METHODS             *
         *                                    *
         **************************************/

        /*
         * 作用：添加事件
         * 参数：element 绑定事件的元素 | type 事件类型 不加on | fn 回调函数
         * 返回：无
         * */
        event: function (element, type, fn) {
            if (element.addEventListener) {
                element.addEventListener(type, fn, false);
            } else if (element.attachEvent) {
                element.attachEvent("on" + type, fn);
            } else {
                element["on" + type] = fn;
            }
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
        target: function (event) {
            return event.target || event.srcElement;
        },

        /*
         * 作用：取消默认事件
         * 参数：event 事件对象
         * 返回：无
         * */
        preventDefault: function (event) {
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
        stopPropagation: function (event) {
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
        relatedTarget: function (event) {
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
        charCode: function (event) {
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
        clipboard: function (event) {
            var clipboardData = (event.clipboardData || window.clipboardData);
            return clipboardData.getData("text");
        },

        /*
         * 作用：设置剪贴板文字（由我们写入剪贴板）
         * 参数：event 事件对象
         * 返回：设置后的剪贴板文字
         * */
        setClipboard: function (event, value) {
            if (event.clipboardData) {
                return event.clipboardData.setData("text/plain", value);
            } else if (window.clipboardData) {
                return window.clipboardData.setData("text", value);
            }
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
            var init = function() {
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
                event = YU.getEvent(event);
                var target = YU.target(event);

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
                            event = YU.getEvent(event);

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
                YU.event(document, "mousedown", handleEvent);
                YU.event(document, "mousemove", handleEvent);
                YU.event(document, "mouseup", handleEvent);
            };
            dragdrop.disable = function () {
                YU.removeEvent(document, "mousedown", handleEvent);
                YU.removeEvent(document, "mousemove", handleEvent);
                YU.removeEvent(document, "mouseup", handleEvent);
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
        toggle: function (node, value) {
            if (!(node = YU.$(node))) {
                return false;
            }

            if (node.style.display != 'none') {
                node.style.display = 'none';
            } else {
                node.style.display = value || '';
            }
            return true;
        },

        /*
         * 作用：添加样式表，添加link css标签
         * 参数：url css文件的资源位置 | media
         * 返回：无
         * */
        sheet: function (url, media) {
            media = media || 'screen';
            var link = document.createElement('link');
            link.setAttribute('rel', 'stylesheet');
            link.setAttribute('type', 'text/css');
            link.setAttribute('href', url);
            link.setAttribute('media', media);
            document.getElementsByTagName('head')[0].appendChild(link);
        },

        /*
         * 作用：移除样式表，移除link css标签
         * 参数：url css文件的资源位置 | media
         * 返回：无
         * */
        removeSheet: function (url, media) {
            var styles = this.getSheets(url, media);
            for (var i = 0; i < styles.length; i++) {
                var node = styles[i].ownerNode || styles[i].owningElement;
                //禁用样式表
                styles[i].disabled = true;
                //移除节点
                node.parentNode.removeChild(node);
            }
        },

        /*
         * 作用：通过URL取得包含所有样式表的数组
         * 参数：url css文件的资源位置 | media
         * 返回：样式表数组
         * */
        getSheets: function (url, media) {
            var sheets = [];
            for (var i = 0; i < document.styleSheets.length; i++) {
                //我把这里修改过了，加了String()函数，不然会因为对象不含indexOf方法报错
                if (url && (String(document.styleSheets[i].href).indexOf(url) == -1)) {
                    continue;
                }
                // console.log(String(document.styleSheets[i].href));
                if (media) {
                    // Normaizle the media strings
                    media = media.replace(/,\s*/, ',');
                    var sheetMedia;

                    if (document.styleSheets[i].media.mediaText) {
                        // DOM mehtod
                        sheetMedia = document.styleSheets[i].media.mediaText.replace(/,\s*/, ',');
                        // Safari adds an extra comma and space
                        sheetMedia = sheetMedia.replace(/,\s*$/, '');
                    } else {
                        // MSIE
                        sheetMedia = document.styleSheets[i].media.replace(/,\s*/, ',');
                    }
                    // Skip it if the media don't match
                    if (media != sheetMedia) {
                        continue;
                    }
                }
                sheets.push(document.styleSheets[i]);
            }
            return sheets;
        },

        /*
         * 作用：编辑一条样式规则
         * 参数：selector 选择器 | styles 样式对象 | url css文件的资源位置 | media
         * 返回：无
         * */
        editCSS: function (selector, styles, url, media) {
            var styleSheets = (typeof url == 'array' ? url : this.getSheets(url, media));

            for (var i = 0; i < styleSheets.length; i++) {

                // Retrieve the list of rules
                // The DOM2 Style method is styleSheets[i].cssRules
                // The MSIE method is styleSheets[i].rules
                var rules = styleSheets[i].cssRules || styleSheets[i].rules;
                if (!rules) {
                    continue;
                }

                // Convert to uppercase as MSIIE defaults to UPPERCASE tags.
                // this could cause conflicts if you're using case sensetive ids
                selector = selector.toUpperCase();

                for (var j = 0; j < rules.length; j++) {
                    // Check if it matches
                    if (rules[j].selectorText.toUpperCase() == selector) {
                        for (var property in styles) {
                            if (!styles.hasOwnProperty(property)) {
                                continue;
                            }
                            // Set the new style property
                            rules[j].style[this.camelize(property)] = styles[property];
                        }
                    }
                }
            }
        },

        /*
         * 作用：添加一条样式规则
         * 参数：selector 选择器 | styles 样式对象 |index 索引 位置 | url css文件的资源位置 | media
         * 返回：无
         * */
        addCSS: function (selector, styles, index, url, media) {
            var declaration = '';

            // Build the declaration string from the style object
            for (var property in styles) {
                if (!styles.hasOwnProperty(property)) {
                    continue;
                }
                declaration += property + ':' + styles[property] + '; ';
            }

            var styleSheets = (typeof url == 'array' ? url : this.getSheets(url, media));
            var newIndex;
            for (var i = 0; i < styleSheets.length; i++) {
                // Add the rule
                if (styleSheets[i].insertRule) {
                    // The DOM2 Style method
                    // index = length is the end of the list
                    //我这里做了修改：newIndex超过了原来的索引数
                    newIndex = (index >= 0 ? index : styleSheets[i].cssRules.length) - 1;
                    styleSheets[i].insertRule(selector + ' { ' + declaration + ' } ',
                        newIndex);
                } else if (styleSheets[i].addRule) {
                    // The Microsoft method
                    // index = -1 is the end of the list
                    newIndex = (index >= 0 ? index : -1);
                    styleSheets[i].addRule(selector, declaration, newIndex);
                }
            }
        },

        /*
         * 作用：得到元素的样式属性值
         * 参数：element 目标元素 | property 要获取的属性
         * 返回：无
         * */
        getStyle: function (element, property) {
            if (!(element = d(element)) || !property) return false;
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
         * 作用：通过id修改单个元素的样式
         * 参数：element 元素 | styles 样式对象
         * 返回：布尔值
         * */
        setStyleById: function (element, styles) {
            // Retrieve an object reference
            if (!(element = d(element))) return false;
            // Loop through  the styles object an apply each property
            for (var property in styles) {
                if (!styles.hasOwnProperty(property)) continue;

                if (element.style.setProperty) {
                    //DOM2 Style method
                    element.style.setProperty(
                        this.uncamelize(property, '-'), styles[property], null);
                } else {
                    //Alternative method
                    element.style[this.camelize(property)] = styles[property];
                }
            }
            return true;
        },

        /*
         * 作用：通过类名修改多个元素的样式
         * 参数：parent 父元素 必填 | tag 标签名 | className 要添加的类名 | styles 要添加的样式对象
         * 返回：布尔值
         * */
        setStylesByClassName: function (parent, tag, className, styles) {
            if (!(parent = d(parent))) return false;
            var elements = this.getByClass(className, tag, parent);
            for (var e = 0; e < elements.length; e++) {
                this.setStyleById(elements[e], styles);
            }
            return true;
        },

        /*
         * 作用：通过标签名修改多个元素的样式
         * 参数：tagname 标签名 | styles 样式对象 | parent 父元素
         * 返回：无
         * */
        setStylesByTagName: function (tagname, styles, parent) {
            parent = d(parent) || document;
            var elements = parent.getElementsByTagName(tagname);
            for (var e = 0; e < elements.length; e++) {
                this.setStyleById(elements[e], styles);
            }
        },

        /*
         * 作用：获取元素class值数组
         * 参数：element 元素
         * 返回：class数组
         * */
        getClassNames: function (element) {
            if (!(element = d(element))) return false;
            return element.className.replace(/\s+/, ' ').split(' ');
        },

        /*
         * 作用：检测元素是否包含某class
         * 参数：element 元素 | className 类名
         * 返回：布尔值
         * */
        hasClassName: function (element, className) {
            if (!(element = d(element))) return false;
            var classes = this.getClassNames(element);
            for (var i = 0; i < classes.length; i++) {
                // Check if the className matches and return true if it does
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
        addClassName: function (element, className) {
            if (!(element = d(element))) return false;
            // Append the classname to the end of the current className
            // If there is no className, don't include the space
            element.className += (element.className ? ' ' : '') + className;
            return true;
        },

        /*
         * 作用：移除class
         * 参数：element 元素 | className 类名
         * 返回：布尔值
         * */
        removeClassName: function (element, className) {
            if (!(element = d(element))) return false;
            var classes = this.getClassNames(element);
            var length = classes.length;
            //loop through the array in reverse, deleting matching items
            // You loop in reverse as you're deleting items from
            // the array which will shorten it.
            for (var i = length - 1; i >= 0; i--) {
                if (classes[i] === className) {
                    delete(classes[i]);
                }
            }
            element.className = classes.join(' ');
            return (length != classes.length);
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
        insertAfter: function (node, referenceNode) {
            if (!(node = d(node))) {
                return false;
            }
            if (!(referenceNode = d(referenceNode))) {
                return false;
            }
            return referenceNode.parentNode.insertBefore(
                node, referenceNode.nextSibling
            );
        },

        /*
         * 作用：移除所有子元素
         * 参数：parent 要移除所有子元素的父元素
         * 返回：返回移除子元素后的父元素
         * */
        removeChildren: function (parent) {
            if (!(parent = d(parent))) {
                return false;
            }

            //当存在子节点时册除该子节点
            while (parent.firstChild) {
                parent.firstChild.parentNode.removeChild(parent.firstChild);
            }

            //再返回父元素，以便实现方法连缀
            return parent;
        },

        /*
         * 作用：移除指定单个元素或多个元素
         * 参数：element 要移除的元素
         * 返回：返回要移除的元素
         * 考虑：因为传入字符串，无法判断是id还是class，并且也不想因此而让大家多加个#或.号，所以只能传入DOM元素。
         * */
        remove: function (elements) {
            if (elements.nodeType == this.node.ELEMENT_NODE) {
                elements.parentNode.removeChild(elements);
            } else if (this.isArrayLike(elements)) {
                var len = elements.length;
                for (var i = 0; i < len; i++) {
                    elements[len - i - 1].parentNode.removeChild(elements[len - i - 1]);
                }
            } else {
                return new Error('undefined');
            }
            //再返回父元素，以便实现方法连缀
            return elements;
        },


        /*
         * 作用：插入新元素到子元素的最前面
         * 参数：parent 父元素 | newChild 要插入的新元素
         * 返回：返回插入新子元素后的父元素
         * */
        prependChild: function (parent, newChild) {
            if (!(parent = d(parent))) {
                return false;
            }
            if (!(newChild = d(newChild))) {
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
        },

        /*
         * 作用：获取当前浏览器窗口的宽高
         * 参数：无
         * 返回：宽高对象，包含width,height属性
         * */
        getBrowserWindowSize: function () {
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
        },

        /*
         * 作用：遍历元素节点，不关心DOM树的深度，不包含父节点
         * 参数：fn 回调函数 this代表当前节点 作用于遍历后的每个节点 | node 遍历指定节点
         * 返回：无
         * */
        walkElementsLinear: function (fn, node) {
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
        walkTheDOMRecursive: function (fn, node, depth, returnedFromParent) {
            var root = node || window.document;
            returnedFromParent = fn.call(root, depth++, returnedFromParent);
            node = root.firstChild;
            while (node) {
                this.walkTheDOMRecursive(fn, node, depth, returnedFromParent);
                node = node.nextSibling;
            }
        },

        /*
         * 作用：遍历元素节点，文本节点，属性节点，含父节点
         * 参数：node 遍历指定节点 | fn 回调函数 作用于遍历后的每个节点 | depth 遍历深度 | returnedFromParent 返回给func使用的对象 包含元素节点，文本节点，属性节点
         * 返回：无
         * */
        walkTheDOMWithAttributes: function (node, fn, depth, returnedFromParent) {
            var root = node || window.document;
            returnedFromParent = fn(root, depth++, returnedFromParent);
            if (root.attributes) {
                for (var i = 0; i < root.attributes.length; i++) {
                    this.walkTheDOMWithAttributes(root.attributes[i], fn, depth - 1, returnedFromParent);
                }
            }
            if (root.nodeType != YU.node.ATTRIBUTE_NODE) {
                node = root.firstChild;
                while (node) {
                    this.walkTheDOMWithAttributes(node, fn, depth, returnedFromParent);
                    node = node.nextSibling;
                }
            }
        },

        /*
         * 作用：遍历元素节点，文本节点，含父节点（同walkTheDOMRecursive），实现方法不同而已
         * 参数：node 遍历指定节点 | fn 回调函数 作用于遍历后的每个节点 node代表当前节点
         * 返回：无
         * */
        walkTheDOM: function (node, fn) {
            fn(node);
            node = node.firstChild;
            while (node) {
                this.walkTheDOM(node, fn);
                node = node.nextSibling;
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
        addURLParam: function (url, name, value) {
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
        unsetCookie: function (name, path, domain, secure) {
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
        bindContext: function (fn, context) {
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
        parseJSON: function (s, filter) {
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

            if (/^("(\\.|[^"\\\n\r])*?"|[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t])+?$/.test(s)) {
                try {
                    j = eval('(' + s + ')');
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
        runCompare: function (orignalFunc, compareFunc) {
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
        objectToArray: function (obj) {
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
        getLength: function (obj) {
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
        extendNamespace: function (namespace, namespaceString) {
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
    YU.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
        function (i, name) {
            yuObj["[object " + name + "]"] = name.toLowerCase();
        });

    //YU的命名空间
    if (!window.YU) {
        window['YU'] = YU;
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
        var browserWindowSize = YU.getBrowserWindowSize();
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


eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('v N=(o(2Z){v i,R,I,2Q,1Z,2v,31,26,2Y,23,2n,1O,F,1t,1u,19,2a,1g,1J,Q="6M"+1*Z 5M(),1r=2Z.F,1Q=0,4Q=0,4c=3I(),4D=3I(),33=3I(),3P=o(a,b){k(a===b){2n=P}l 0},4M=({}).5A,1F=[],2U=1F.2U,5b=1F.E,E=1F.E,S=1F.S,1q=o(42,c){v i=0,1m=42.u;1i(;i<1m;i++){k(42[i]===c){l i}}l-1},3q="37|2R|5W|5O|5J|5U|5Q|V|5h|5R|5S|5P|5V|5K|5N|5L",O="[\\\\6b\\\\t\\\\r\\\\n\\\\f]",2e="(?:\\\\\\\\.|[\\\\w-]|[^\\0-\\\\6j])+",2G="\\\\["+O+"*("+2e+")(?:"+O+"*([*^$|!~]?=)"+O+"*(?:\'((?:\\\\\\\\.|[^\\\\\\\\\'])*)\'|\\"((?:\\\\\\\\.|[^\\\\\\\\\\"])*)\\"|("+2e+"))|)"+O+"*\\\\]",1y=":("+2e+")(?:\\\\(("+"(\'((?:\\\\\\\\.|[^\\\\\\\\\'])*)\'|\\"((?:\\\\\\\\.|[^\\\\\\\\\\"])*)\\")|"+"((?:\\\\\\\\.|[^\\\\\\\\()[\\\\]]|"+2G+")*)|"+".*"+")\\\\)|)",5t=Z 15(O+"+","g"),36=Z 15("^"+O+"+|((?:^|[^\\\\\\\\])(?:\\\\\\\\.)*)"+O+"+$","g"),5y=Z 15("^"+O+"*,"+O+"*"),5D=Z 15("^"+O+"*([>+~]|"+O+")"+O+"*"),4R=Z 15("="+O+"*([^\\\\]\'\\"]*?)"+O+"*\\\\]","g"),5o=Z 15(1y),5x=Z 15("^"+2e+"$"),35={"2l":Z 15("^#("+2e+")"),"4i":Z 15("^\\\\.("+2e+")"),"3K":Z 15("^("+2e+"|[*])"),"49":Z 15("^"+2G),"44":Z 15("^"+1y),"3u":Z 15("^:(5k|1G|27|2H|2H-27)-(6l|5u-B)(?:\\\\("+O+"*(3k|2W|(([+-]|)(\\\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\\\d+)|))"+O+"*\\\\)|)","i"),"6g":Z 15("^(?:"+3q+")$","i"),"4X":Z 15("^"+O+"*[>+~]|:(3k|2W|4v|5w|5q|2H|1G|27)(?:\\\\("+O+"*((?:-\\\\d)?\\\\d*)"+O+"*\\\\)|)(?=[^-]|$)","i")},5r=/^(?:1c|26|6i|3i)$/i,5s=/^h\\d$/i,2P=/^[^{]+\\{\\s*\\[61 \\w/,59=/^(?:#([\\w-]+)|(\\w+)|\\.([\\w-]+))$/,3R=/[+~]/,1P=Z 15("\\\\\\\\([\\\\62-f]{1,6}"+O+"?|("+O+")|.)","63"),1V=o(5Y,4k,5m){v 2z="5Z"+4k-5I;l 2z!==2z||5m?4k:2z<0?5F.5H(2z+5I):5F.5H(2z>>10|67,2z&68|64)},48=/([\\0-\\5C\\4I]|^-?\\d)|^-$|[^\\0-\\5C\\4I-\\66\\w-]/g,47=o(2N,4F){k(4F){k(2N==="\\0"){l"\\65"}l 2N.S(0,-1)+"\\\\"+2N.69(2N.u-1).60(16)+" "}l"\\\\"+2N},43=o(){1O()},51=3d(o(c){l c.V===P&&("54"25 c||"3T"25 c)},{17:"X",4L:"6c"});3Y{E.1X((1F=S.2w(1r.3l)),1r.3l);1F[1r.3l.u].H}3Z(e){E={1X:1F.u?o(2u,3F){5b.1X(2u,S.2w(3F))}:o(2u,3F){v j=2u.u,i=0;J((2u[j++]=3F[i++])){}2u.u=j-1}}}o N(A,p,y,G){v m,i,c,2q,q,1R,34,2J=p&&p.1B,H=p?p.H:9;y=y||[];k(1H A!=="4d"||!A||H!==1&&H!==9&&H!==11){l y}k(!G){k((p?p.1B||p:1r)!==F){1O(p)}p=p||F;k(1u){k(H!==11&&(q=59.3O(A))){k((m=q[1])){k(H===9){k((c=p.2K(m))){k(c.U===m){y.E(c);l y}}T{l y}}T{k(2J&&(c=2J.2K(m))&&1J(p,c)&&c.U===m){y.E(c);l y}}}T k(q[2]){E.1X(y,p.2i(A));l y;}T k((m=q[3])&&R.2k&&p.2k){E.1X(y,p.2k(m));l y}}k(R.4g&&!33[A+" "]&&(!19||!19.18(A))){k(H!==1){2J=p;34=A;}T k(p.14.Y()!=="6f"){k((2q=p.1s("U"))){2q=2q.1b(48,47)}T{p.3M("U",(2q=Q))}1R=2v(A);i=1R.u;J(i--){1R[i]="#"+2q+" "+30(1R[i])}34=1R.3D(",");2J=3R.18(A)&&3C(p.X)||p}k(34){3Y{E.1X(y,2J.1E(34));l y}3Z(6e){}5g{k(2q===Q){p.6d("U")}}}}}}l 26(A.1b(36,"$1"),p,y,G)}o 3I(){v 45=[];o 1v(2B,1h){k(45.E(2B+" ")>I.5G){5X 1v[45.3E()]}l(1v[2B+" "]=1h)}l 1v}o 1C(1a){1a[Q]=P;l 1a}o 1I(1a){v C=F.4y("57");3Y{l!!1a(C)}3Z(e){l 1d}5g{k(C.X){C.X.5T(C)}C=12}}o 3n(56,4U){v 1F=56.52("|"),i=1F.u;J(i--){I.3U[1F[i]]=4U}}o 40(a,b){v 1k=b&&a,1e=1k&&a.H===1&&b.H===1&&a.4V-b.4V;k(1e){l 1e}k(1k){J((1k=1k.3b)){k(1k===b){l-1}}}l a?1:-1}o 5j(B){l o(c){v M=c.14.Y();l M==="1c"&&c.B===B}}o 5l(B){l o(c){v M=c.14.Y();l(M==="1c"||M==="3i")&&c.B===B}}o 4p(V){l o(c){k("54"25 c){k(c.X&&c.V===1d){k("3T"25 c){k("3T"25 c.X){l c.X.V===V}T{l c.V===V}}l c.55===V||c.55!==!V&&51(c)===V}l c.V===V;}T k("3T"25 c){l c.V===V}l 1d}}o 2g(1a){l 1C(o(13){13=+13;l 1C(o(G,1g){v j,1f=1a([],G.u,13),i=1f.u;J(i--){k(G[(j=1f[i])]){G[j]=!(1g[j]=G[j])}}})})}o 3C(p){l p&&1H p.2i!=="21"&&p}R=N.R={};1Z=N.1Z=o(c){v 2A=c&&(c.1B||c).2A;l 2A?2A.14!=="6m":1d};1O=N.1O=o(z){v 3y,29,32=z?z.1B||z:1r;k(32===F||32.H!==9||!32.2A){l F}F=32;1t=F.2A;1u=!1Z(F);k(1r!==F&&(29=F.6Q)&&29.6P!==29){k(29.53){29.53("6R",43,1d);}T k(29.4Z){29.4Z("6T",43)}}R.2G=1I(o(C){C.1S="i";l!C.1s("1S")});R.2i=1I(o(C){C.3e(F.6S(""));l!C.2i("*").u});R.2k=2P.18(F.2k);R.4W=1I(o(C){1t.3e(C).U=Q;l!F.41||!F.41(Q).u});k(R.4W){I.2b["2l"]=o(U){v 3w=U.1b(1P,1V);l o(c){l c.1s("U")===3w}};I.1N["2l"]=o(U,p){k(1H p.2K!=="21"&&1u){v c=p.2K(U);l c?[c]:[]}}}T{I.2b["2l"]=o(U){v 3w=U.1b(1P,1V);l o(c){v z=1H c.2I!=="21"&&c.2I("U");l z&&z.1h===3w}};I.1N["2l"]=o(U,p){k(1H p.2K!=="21"&&1u){v z,i,22,c=p.2K(U);k(c){z=c.2I("U");k(z&&z.1h===U){l[c]}22=p.41(U);i=0;J((c=22[i++])){z=c.2I("U");k(z&&z.1h===U){l[c]}}}l[]}}}I.1N["3K"]=R.2i?o(2M,p){k(1H p.2i!=="21"){l p.2i(2M);}T k(R.4g){l p.1E(2M)}}:o(2M,p){v c,4h=[],i=0,y=p.2i(2M);k(2M==="*"){J((c=y[i++])){k(c.H===1){4h.E(c)}}l 4h}l y};I.1N["4i"]=R.2k&&o(1S,p){k(1H p.2k!=="21"&&1u){l p.2k(1S)}};2a=[];19=[];k((R.4g=2P.18(F.1E))){1I(o(C){1t.3e(C).3A="<a U=\'"+Q+"\'></a>"+"<26 U=\'"+Q+"-\\r\\\\\' 5f=\'\'>"+"<3t 2R=\'\'></3t></26>";k(C.1E("[5f^=\'\']").u){19.E("[*^$]="+O+"*(?:\'\'|\\"\\")")}k(!C.1E("[2R]").u){19.E("\\\\["+O+"*(?:1h|"+3q+")")}k(!C.1E("[U~="+Q+"-]").u){19.E("~=")}k(!C.1E(":37").u){19.E(":37")}k(!C.1E("a#"+Q+"+*").u){19.E(".#.+[+~]")}});1I(o(C){C.3A="<a 3g=\'\' V=\'V\'></a>"+"<26 V=\'V\'><3t/></26>";v 1c=F.4y("1c");1c.3M("B","5h");C.3e(1c).3M("M","D");k(C.1E("[M=d]").u){19.E("M"+O+"*[*^$|!~]?=")}k(C.1E(":3r").u!==2){19.E(":3r",":V")}1t.3e(C).V=P;k(C.1E(":V").u!==2){19.E(":3r",":V")}C.1E("*,:x");19.E(",.*:")})}k((R.4e=2P.18((1g=1t.1g||1t.6U||1t.73||1t.71||1t.72)))){1I(o(C){R.4N=1g.2w(C,"*");1g.2w(C,"[s!=\'\']:x");2a.E("!=",1y)})}19=19.u&&Z 15(19.3D("|"));2a=2a.u&&Z 15(2a.3D("|"));3y=2P.18(1t.2c);1J=3y||2P.18(1t.1J)?o(a,b){v 4f=a.H===9?a.2A:a,1Y=b&&b.X;l a===1Y||!!(1Y&&1Y.H===1&&(4f.1J?4f.1J(1Y):a.2c&&a.2c(1Y)&16))}:o(a,b){k(b){J((b=b.X)){k(b===a){l P}}}l 1d};3P=3y?o(a,b){k(a===b){2n=P;l 0}v 2o=!a.2c-!b.2c;k(2o){l 2o}2o=(a.1B||a)===(b.1B||b)?a.2c(b):1;k(2o&1||(!R.58&&b.2c(a)===2o)){k(a===F||a.1B===1r&&1J(1r,a)){l-1}k(b===F||b.1B===1r&&1J(1r,b)){l 1}l 23?(1q(23,a)-1q(23,b)):0}l 2o&4?-1:1}:o(a,b){k(a===b){2n=P;l 0}v 1k,i=0,3S=a.X,1Y=b.X,39=[a],38=[b];k(!3S||!1Y){l a===F?-1:b===F?1:3S?-1:1Y?1:23?(1q(23,a)-1q(23,b)):0;}T k(3S===1Y){l 40(a,b)}1k=a;J((1k=1k.X)){39.4J(1k)}1k=b;J((1k=1k.X)){38.4J(1k)}J(39[i]===38[i]){i++}l i?40(39[i],38[i]):39[i]===1r?-1:38[i]===1r?1:0};l F};N.1g=o(1W,4S){l N(1W,12,12,4S)};N.4e=o(c,1W){k((c.1B||c)!==F){1O(c)}1W=1W.1b(4R,"=\'$1\']");k(R.4e&&1u&&!33[1W+" "]&&(!2a||!2a.18(1W))&&(!19||!19.18(1W))){3Y{v 24=1g.2w(c,1W);k(24||R.4N||c.F&&c.F.H!==11){l 24}}3Z(e){}}l N(1W,F,12,[c]).u>0};N.1J=o(p,c){k((p.1B||p)!==F){1O(p)}l 1J(p,c)};N.3f=o(c,M){k((c.1B||c)!==F){1O(c)}v 1a=I.3U[M.Y()],20=1a&&4M.2w(I.3U,M.Y())?1a(c,M,!1u):21;l 20!==21?20:R.2G||!1u?c.1s(M):(20=c.2I(M))&&20.5E?20.1h:12};N.6x=o(4P){l(4P+"").1b(48,47)};N.2y=o(5B){6w Z 6s("6n 2y, 6p 6r: "+5B)};N.5d=o(y){v c,4a=[],j=0,i=0;2n=!R.5c;23=!R.4E&&y.S(0);y.4Y(3P);k(2n){J((c=y[i++])){k(c===y[i]){j=4a.E(i)}}J(j--){y.4A(4a[j],1)}}23=12;l y};2Q=N.2Q=o(c){v z,24="",i=0,H=c.H;k(!H){J((z=c[i++])){24+=2Q(z)}}T k(H===1||H===9||H===11){k(1H c.4B==="4d"){l c.4B}T{1i(c=c.2E;c;c=c.3b){24+=2Q(c)}}}T k(H===3||H===4){l c.6F}l 24};I=N.6E={5G:50,6H:1C,q:35,3U:{},1N:{},2t:{">":{17:"X",1G:P}," ":{17:"X"},"+":{17:"4j",1G:P},"~":{17:"4j"}},2r:{"49":o(q){q[1]=q[1].1b(1P,1V);q[3]=(q[3]||q[4]||q[5]||"").1b(1P,1V);k(q[2]==="~="){q[3]=" "+q[3]+" "}l q.S(0,4)},"3u":o(q){q[1]=q[1].Y();k(q[1].S(0,3)==="2H"){k(!q[3]){N.2y(q[0])}q[4]=+(q[4]?q[5]+(q[6]||1):2*(q[3]==="3k"||q[3]==="2W"));q[5]=+((q[7]+q[8])||q[3]==="2W");}T k(q[3]){N.2y(q[0])}l q},"44":o(q){v 2F,2h=!q[6]&&q[2];k(35["3u"].18(q[0])){l 12}k(q[3]){q[2]=q[4]||q[5]||"";}T k(2h&&5o.18(2h)&&(2F=2v(2h,P))&&(2F=2h.1q(")",2h.u-2F)-2h.u)){q[0]=q[0].S(0,2F);q[2]=2h.S(0,2F)}l q.S(0,3)}},2b:{"3K":o(4b){v 14=4b.1b(1P,1V).Y();l 4b==="*"?o(){l P}:o(c){l c.14&&c.14.Y()===14}},"4i":o(1S){v 3p=4c[1S+" "];l 3p||(3p=Z 15("(^|"+O+")"+1S+"("+O+"|$)"))&&4c(1S,o(c){l 3p.18(1H c.1S==="4d"&&c.1S||1H c.1s!=="21"&&c.1s("6q")||"")})},"49":o(M,1T,1p){l o(c){v 1L=N.3f(c,M);k(1L==12){l 1T==="!="}k(!1T){l P}1L+="";l 1T==="="?1L===1p:1T==="!="?1L!==1p:1T==="^="?1p&&1L.1q(1p)===0:1T==="*="?1p&&1L.1q(1p)>-1:1T==="$="?1p&&1L.S(-1p.u)===1p:1T==="~="?(" "+1L.1b(5t," ")+" ").1q(1p)>-1:1T==="|="?1L===1p||1L.S(0,1p.u+1)===1p+"-":1d}},"3u":o(B,5v,13,1G,27){v 4l=B.S(0,3)!=="2H",3m=B.S(-4)!=="27",2X=5v==="5u-B";l 1G===1&&27===0?o(c){l!!c.X}:o(c,p,K){v 1v,1x,1n,z,1A,2L,17=4l!==3m?"3b":"4j",2s=c.X,M=2X&&c.14.Y(),3s=!K&&!2X,1e=1d;k(2s){k(4l){J(17){z=c;J((z=z[17])){k(2X?z.14.Y()===M:z.H===1){l 1d}}2L=17=B==="5k"&&!2L&&"3b"}l P}2L=[3m?2s.2E:2s.6t];k(3m&&3s){z=2s;1n=z[Q]||(z[Q]={});1x=1n[z.2j]||(1n[z.2j]={});1v=1x[B]||[];1A=1v[0]===1Q&&1v[1];1e=1A&&1v[2];z=1A&&2s.3l[1A];J((z=++1A&&z&&z[17]||(1e=1A=0)||2L.2U())){k(z.H===1&&++1e&&z===c){1x[B]=[1Q,1A,1e];2p}}}T{k(3s){z=c;1n=z[Q]||(z[Q]={});1x=1n[z.2j]||(1n[z.2j]={});1v=1x[B]||[];1A=1v[0]===1Q&&1v[1];1e=1A}k(1e===1d){J((z=++1A&&z&&z[17]||(1e=1A=0)||2L.2U())){k((2X?z.14.Y()===M:z.H===1)&&++1e){k(3s){1n=z[Q]||(z[Q]={});1x=1n[z.2j]||(1n[z.2j]={});1x[B]=[1Q,1e]}k(z===c){2p}}}}}1e-=27;l 1e===1G||(1e%1G===0&&1e/1G>=0)}}},"44":o(2f,13){v 46,1a=I.1y[2f]||I.2D[2f.Y()]||N.2y("5z 2f: "+2f);k(1a[Q]){l 1a(13)}k(1a.u>1){46=[2f,2f,"",13];l I.2D.5A(2f.Y())?1C(o(G,1g){v 3o,1o=1a(G,13),i=1o.u;J(i--){3o=1q(G,1o[i]);G[3o]=!(1g[3o]=1o[i])}}):o(c){l 1a(c,0,46)}}l 1a}},1y:{"6O":1C(o(A){v 1c=[],y=[],W=31(A.1b(36,"$1"));l W[Q]?1C(o(G,1g,p,K){v c,1U=W(G,12,K,[]),i=G.u;J(i--){k((c=1U[i])){G[i]=!(1g[i]=c)}}}):o(c,p,K){1c[0]=c;W(1c,12,K,y);1c[0]=12;l!y.2U()}}),"6K":1C(o(A){l o(c){l N(A,c).u>0}}),"1J":1C(o(2x){2x=2x.1b(1P,1V);l o(c){l(c.4B||c.6J||2Q(c)).1q(2x)>-1}}),"1w":1C(o(1w){k(!5x.18(1w||"")){N.2y("5z 1w: "+1w)}1w=1w.1b(1P,1V).Y();l o(c){v 2T;6L{k((2T=1u?c.1w:c.1s("K:1w")||c.1s("1w"))){2T=2T.Y();l 2T===1w||2T.1q(1w+"-")===0}}J((c=c.X)&&c.H===1);l 1d}}),"2u":o(c){v 3v=2Z.5n&&2Z.5n.3v;l 3v&&3v.S(1)===c.U},"6N":o(c){l c===1t},"70":o(c){l c===F.6W&&(!F.5i||F.5i())&&!!(c.B||c.3g||~c.6V)},"3r":4p(1d),"V":4p(P),"37":o(c){v 14=c.14.Y();l(14==="1c"&&!!c.37)||(14==="3t"&&!!c.2R)},"2R":o(c){k(c.X){c.X.6X}l c.2R===P},"5p":o(c){1i(c=c.2E;c;c=c.3b){k(c.H<6){l 1d}}l P},"2s":o(c){l!I.1y["5p"](c)},"6o":o(c){l 5s.18(c.14)},"1c":o(c){l 5r.18(c.14)},"3i":o(c){v M=c.14.Y();l M==="1c"&&c.B==="3i"||M==="3i"},"2x":o(c){v 3f;l c.14.Y()==="1c"&&c.B==="2x"&&((3f=c.1s("B"))==12||3f.Y()==="2x")},"1G":2g(o(){l[0]}),"27":2g(o(1f,u){l[u-1]}),"4v":2g(o(1f,u,13){l[13<0?13+u:13]}),"3k":2g(o(1f,u){v i=0;1i(;i<u;i+=2){1f.E(i)}l 1f}),"2W":2g(o(1f,u){v i=1;1i(;i<u;i+=2){1f.E(i)}l 1f}),"5q":2g(o(1f,u,13){v i=13<0?13+u:13;1i(;--i>=0;){1f.E(i)}l 1f}),"5w":2g(o(1f,u,13){v i=13<0?13+u:13;1i(;++i<u;){1f.E(i)}l 1f})}};I.1y["2H"]=I.1y["4v"];1i(i 25{6G:P,6I:P,6z:P,6y:P,6A:P}){I.1y[i]=5j(i)}1i(i 25{6v:P,6B:P}){I.1y[i]=5l(i)}o 2D(){}2D.6C=I.6D=I.1y;I.2D=Z 2D();2v=N.2v=o(A,4C){v 1o,q,L,B,1l,1R,3N,1z=4D[A+" "];k(1z){l 4C?0:1z.S(0)}1l=A;1R=[];3N=I.2r;J(1l){k(!1o||(q=5y.3O(1l))){k(q){1l=1l.S(q[0].u)||1l}1R.E((L=[]))}1o=1d;k((q=5D.3O(1l))){1o=q.3E();L.E({1h:1o,B:q[0].1b(36," ")});1l=1l.S(1o.u)}1i(B 25 I.2b){k((q=35[B].3O(1l))&&(!3N[B]||(q=3N[B](q)))){1o=q.3E();L.E({1h:1o,B:B,1g:q});1l=1l.S(1o.u)}}k(!1o){2p}}l 4C?1l.u:1l?N.2y(A):4D(A,1R).S(0)};o 30(L){v i=0,1m=L.u,A="";1i(;i<1m;i++){A+=L[i].1h}l A}o 3d(W,3W,4O){v 17=3W.17,3V=3W.4L,2B=3V||17,3X=4O&&2B==="X",4z=4Q++;l 3W.1G?o(c,p,K){J((c=c[17])){k(c.H===1||3X){l W(c,p,K)}}l 1d}:o(c,p,K){v 3h,1x,1n,3B=[1Q,4z];k(K){J((c=c[17])){k(c.H===1||3X){k(W(c,p,K)){l P}}}}T{J((c=c[17])){k(c.H===1||3X){1n=c[Q]||(c[Q]={});1x=1n[c.2j]||(1n[c.2j]={});k(3V&&3V===c.14.Y()){c=c[17]||c}T k((3h=1x[2B])&&3h[0]===1Q&&3h[1]===4z){l(3B[2]=3h[2])}T{1x[2B]=3B;k((3B[2]=W(c,p,K))){l P}}}}}l 1d}}o 3L(1K){l 1K.u>1?o(c,p,K){v i=1K.u;J(i--){k(!1K[i](c,p,K)){l 1d}}l P}:1K[0]}o 4G(A,4q,y){v i=0,1m=4q.u;1i(;i<1m;i++){N(A,4q[i],y)}l y}o 3j(1U,4s,2b,p,K){v c,4w=[],i=0,1m=1U.u,4H=4s!=12;1i(;i<1m;i++){k((c=1U[i])){k(!2b||2b(c,p,K)){4w.E(c);k(4H){4s.E(i)}}}}l 4w}o 3J(2r,A,W,2d,1D,4K){k(2d&&!2d[Q]){2d=3J(2d)}k(1D&&!1D[Q]){1D=3J(1D,4K)}l 1C(o(G,y,p,K){v 1M,i,c,4t=[],3x=[],4u=y.u,22=G||4G(A||"*",p.H?[p]:p,[]),3c=2r&&(G||!A)?3j(22,4t,2r,p,K):22,1j=W?1D||(G?2r:4u||2d)?[]:y:3c;k(W){W(3c,1j,p,K)}k(2d){1M=3j(1j,3x);2d(1M,[],p,K);i=1M.u;J(i--){k((c=1M[i])){1j[3x[i]]=!(3c[3x[i]]=c)}}}k(G){k(1D||2r){k(1D){1M=[];i=1j.u;J(i--){k((c=1j[i])){1M.E((3c[i]=c))}}1D(12,(1j=[]),1M,K)}i=1j.u;J(i--){k((c=1j[i])&&(1M=1D?1q(G,c):4t[i])>-1){G[1M]=!(y[1M]=c)}}}}T{1j=3j(1j===y?1j.4A(4u,1j.u):1j);k(1D){1D(12,y,1j,K)}T{E.1X(y,1j)}}})}o 3G(L){v 3a,W,j,1m=L.u,3z=I.2t[L[0].B],4r=3z||I.2t[" "],i=3z?1:0,4T=3d(o(c){l c===3a},4r,P),5a=3d(o(c){l 1q(3a,c)>-1},4r,P),1K=[o(c,p,K){v 24=(!3z&&(K||p!==2Y))||((3a=p).H?4T(c,p,K):5a(c,p,K));3a=12;l 24}];1i(;i<1m;i++){k((W=I.2t[L[i].B])){1K=[3d(3L(1K),W)]}T{W=I.2b[L[i].B].1X(12,L[i].1g);k(W[Q]){j=++i;1i(;j<1m;j++){k(I.2t[L[j].B]){2p}}l 3J(i>1&&3L(1K),i>1&&30(L.S(0,i-1).6u({1h:L[i-2].B===" "?"*":""})).1b(36,"$1"),W,i<j&&3G(L.S(i,j)),j<1m&&3G((L=L.S(j))),j<1m&&30(L))}1K.E(W)}}l 3L(1K)}o 5e(2O,2m){v 3H=2m.u>0,4x=2O.u>0,4m=o(G,p,K,y,2C){v c,j,W,2S=0,i="0",1U=G&&[],28=[],4n=2Y,22=G||4x&&I.1N["3K"]("*",2C),4o=(1Q+=4n==12?1:6Y.6Z()||0.1),1m=22.u;k(2C){2Y=p===F||p||2C}1i(;i!==1m&&(c=22[i])!=12;i++){k(4x&&c){j=0;k(!p&&c.1B!==F){1O(c);K=!1u}J((W=2O[j++])){k(W(c,p||F,K)){y.E(c);2p}}k(2C){1Q=4o}}k(3H){k((c=!W&&c)){2S--}k(G){1U.E(c)}}}2S+=i;k(3H&&i!==2S){j=0;J((W=2m[j++])){W(1U,28,p,K)}k(G){k(2S>0){J(i--){k(!(1U[i]||28[i])){28[i]=2U.2w(y)}}}28=3j(28)}E.1X(y,28);k(2C&&!G&&28.u>0&&(2S+2m.u)>1){N.5d(y)}}k(2C){1Q=4o;2Y=4n}l 1U};l 3H?1C(4m):4m}31=N.31=o(A,q){v i,2m=[],2O=[],1z=33[A+" "];k(!1z){k(!q){q=2v(A)}i=q.u;J(i--){1z=3G(q[i]);k(1z[Q]){2m.E(1z)}T{2O.E(1z)}}1z=33(A,5e(2O,2m));1z.A=A}l 1z};26=N.26=o(A,p,y,G){v i,L,2V,B,1N,3Q=1H A==="o"&&A,q=!G&&2v((A=3Q.A||A));y=y||[];k(q.u===1){L=q[0]=q[0].S(0);k(L.u>2&&(2V=L[0]).B==="2l"&&p.H===9&&1u&&I.2t[L[1].B]){p=(I.1N["2l"](2V.1g[0].1b(1P,1V),p)||[])[0];k(!p){l y;}T k(3Q){p=p.X}A=A.S(L.3E().1h.u)}i=35["4X"].18(A)?0:L.u;J(i--){2V=L[i];k(I.2t[(B=2V.B)]){2p}k((1N=I.1N[B])){k((G=1N(2V.1g[0].1b(1P,1V),3R.18(L[0].B)&&3C(p.X)||p))){L.4A(i,1);A=G.u&&30(L);k(!A){E.1X(y,G);l y}2p}}}}(3Q||31(A,q))(G,p,!1u,y,!p||3R.18(A)&&3C(p.X)||p);l y};R.4E=Q.52("").4Y(3P).3D("")===Q;R.5c=!!2n;1O();R.58=1I(o(C){l C.2c(F.4y("57"))&1});k(!1I(o(C){C.3A="<a 3g=\'#\'></a>";l C.2E.1s("3g")==="#"})){3n("B|3g|6a|6h",o(c,M,1Z){k(!1Z){l c.1s(M,M.Y()==="B"?1:2)}})}k(!R.2G||!1I(o(C){C.3A="<1c/>";C.2E.3M("1h","");l C.2E.1s("1h")===""})){3n("1h",o(c,M,1Z){k(!1Z&&c.14.Y()==="1c"){l c.6k}})}k(!1I(o(C){l C.1s("V")==12})){3n(3q,o(c,M,1Z){v 20;k(!1Z){l c[M]===P?M.Y():(20=c.2I(M))&&20.5E?20.1h:12}})}l N})(2Z);',62,438,'||||||||||||elem||||||||if|return|||function|context|match||||length|var|||results|node|selector|type|el||push|document|seed|nodeType|Expr|while|xml|tokens|name|Sizzle|whitespace|true|expando|support|slice|else|id|disabled|matcher|parentNode|toLowerCase|new|||null|argument|nodeName|RegExp||dir|test|rbuggyQSA|fn|replace|input|false|diff|matchIndexes|matches|value|for|matcherOut|cur|soFar|len|outerCache|matched|check|indexOf|preferredDoc|getAttribute|docElem|documentIsHTML|cache|lang|uniqueCache|pseudos|cached|nodeIndex|ownerDocument|markFunction|postFinder|querySelectorAll|arr|first|typeof|assert|contains|matchers|result|temp|find|setDocument|runescape|dirruns|groups|className|operator|unmatched|funescape|expr|apply|bup|isXML|val|undefined|elems|sortInput|ret|in|select|last|setMatched|subWindow|rbuggyMatches|filter|compareDocumentPosition|postFilter|identifier|pseudo|createPositionalPseudo|unquoted|getElementsByTagName|uniqueID|getElementsByClassName|ID|setMatchers|hasDuplicate|compare|break|nid|preFilter|parent|relative|target|tokenize|call|text|error|high|documentElement|key|outermost|setFilters|firstChild|excess|attributes|nth|getAttributeNode|newContext|getElementById|start|tag|ch|elementMatchers|rnative|getText|selected|matchedCount|elemLang|pop|token|odd|ofType|outermostContext|window|toSelector|compile|doc|compilerCache|newSelector|matchExpr|rtrim|checked|bp|ap|checkContext|nextSibling|matcherIn|addCombinator|appendChild|attr|href|oldCache|button|condense|even|childNodes|forward|addHandle|idx|pattern|booleans|enabled|useCache|option|CHILD|hash|attrId|postMap|hasCompare|leadingRelative|innerHTML|newCache|testContext|join|shift|els|matcherFromTokens|bySet|createCache|setMatcher|TAG|elementMatcher|setAttribute|preFilters|exec|sortOrder|compiled|rsibling|aup|label|attrHandle|skip|combinator|checkNonElements|try|catch|siblingCheck|getElementsByName|list|unloadHandler|PSEUDO|keys|args|fcssescape|rcssescape|ATTR|duplicates|nodeNameSelector|classCache|string|matchesSelector|adown|qsa|tmp|CLASS|previousSibling|escaped|simple|superMatcher|contextBackup|dirrunsUnique|createDisabledPseudo|contexts|implicitRelative|map|preMap|preexisting|eq|newUnmatched|byElement|createElement|doneName|splice|textContent|parseOnly|tokenCache|sortStable|asCodePoint|multipleContexts|mapped|x7f|unshift|postSelector|next|hasOwn|disconnectedMatch|base|sel|done|rattributeQuotes|elements|matchContext|handler|sourceIndex|getById|needsContext|sort|attachEvent||disabledAncestor|split|addEventListener|form|isDisabled|attrs|fieldset|sortDetached|rquickExpr|matchAnyContext|push_native|detectDuplicates|uniqueSort|matcherFromGroupMatchers|msallowcapture|finally|hidden|hasFocus|createInputPseudo|only|createButtonPseudo|escapedWhitespace|location|rpseudo|empty|lt|rinputs|rheader|rwhitespace|of|what|gt|ridentifier|rcomma|unsupported|hasOwnProperty|msg|x1f|rcombinators|specified|String|cacheLength|fromCharCode|0x10000|autoplay|readonly|scoped|Date|required|autofocus|multiple|defer|ismap|loop|removeChild|controls|open|async|delete|_|0x|toString|native|da|ig|0xDC00|uFFFD|uFFFF|0xD800|0x3FF|charCodeAt|height|x20|legend|removeAttribute|qsaError|object|bool|width|textarea|xa0|defaultValue|child|HTML|Syntax|header|unrecognized|class|expression|Error|lastChild|concat|submit|throw|escape|password|file|image|reset|prototype|filters|selectors|nodeValue|radio|createPseudo|checkbox|innerText|has|do|sizzle|root|not|top|defaultView|unload|createComment|onunload|webkitMatchesSelector|tabIndex|activeElement|selectedIndex|Math|random|focus|oMatchesSelector|msMatchesSelector|mozMatchesSelector'.split('|'),0,{}));

YU.$ = function (selector) {
    return Sizzle(selector)[0];
};
YU.$$ = Sizzle;
YU.attr=Sizzle.attr;
YU.contains = Sizzle.contains;
YU.escape = Sizzle.escape;
YU.text = Sizzle.getText;
YU.isXML = Sizzle.isXML;
YU.matches = Sizzle.matches;
YU.unique = Sizzle.uniqueSort;
//如果window对象中$命名空间未被占用，则用YU对象占用$命名空间
//如果window对象中$命名空间已经被占用，则放弃对$命名空间的占用
//例如引入其他库，如jQuery，如果jQuery先引用，则因$已经被先被jQuery占用，则YU放弃对$的占用
//如果jQuery后引用，则因为jQuery对$命名空间进行了覆盖性赋值，则YU被迫让出了对$的占用。
if (!window.$) {
    window['$'] = YU.$;
}

if (!window.$$) {
    window['$$'] = YU.$$;
}