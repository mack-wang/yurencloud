/**
 * 博客：www.yurencloud.com
 * 作者：Mack Wang 王乐城
 * 整理和改编自：ADS.js/Sambells,EventUtil&CookieUtil&etc/Nicholas,各大网站
 * 兼容低版本的浏览器 IE6+，Firefox1.5+,Safari2.0+,Opera9+
 */

/**
 * 更新日志:
 * 推出稳定版本：verstion 1.0.0 20170203
 *
 */

(function () {
    var yuObj = {},
        toString = yuObj.toString,
        version = '1.0.0';

    //YU的命名空间
    if (!window.YU) {
        window['YU'] = {}
    }
    //如果window对象中$命名空间未被占用，则用YU对象占用$命名空间
    //如果window对象中$命名空间已经被占用，则放弃对$命名空间的占用
    //例如引入其他库，如jQuery，如果jQuery先引用，则因$已经被先被jQuery占用，则YU放弃对$的占用
    //如果jQuery后引用，则因为jQuery对$命名空间进行了覆盖性赋值，则YU被迫让出了对$的占用。
    if (!window.$) {
        window['$'] = window['YU'];
    }

    /*
     * 作用：浏览器能力检测
     * 参数：other 其他条件判断结果 可选
     * 返回：布尔值
     * */
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

    /*
     * 仅YU库内部使用
     * 作用：通过id值获取单个元素或多个元素
     * 参数：单个或多个id值
     * 返回：元素数组，注意返回的是DOM元素数组，和jQuery不同
     * */
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
     * 作用：解决YU库和其他库在$上的命名冲突
     * 参数：name 取代$的新名字
     * 返回：无，注意YU库的添加位置置在其他库之前，以便其他库的$覆盖YU库的$
     * */
    function noConflict(name) {
        window[name] = $;
    }

    window['YU']['noConflict'] = noConflict;


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
    function addEvent(element, type, fn) {
        if (element.addEventListener) {
            element.addEventListener(type, fn, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, fn);
        } else {
            element["on" + type] = fn;
        }
    }

    window['YU']['addEvent'] = addEvent;

    /*
     * 作用：获取事件对象
     * 参数：event 事件对象
     * 返回：事件对象
     * */
    function getEvent(event) {
        return event ? event : window.event;
    }

    window['YU']['getEvent'] = getEvent;

    /*
     * 作用：获取当前发生事件的目标元素（兼容IE）
     * 参数：event 事件对象
     * 返回：当前发生事件的目标元素
     * */
    function getTarget(event) {
        return event.target || event.srcElement;
    }

    window['YU']['getTarget'] = getTarget;

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

    window['YU']['EventTarget'] = EventTarget;

    /*
     * 作用：取消默认事件
     * 参数：event 事件对象
     * 返回：无
     * */
    function preventDefault(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    }

    window['YU']['preventDefault'] = preventDefault;

    /*
     * 作用：移除事件
     * 参数：element 要移除事件的元素 | type 要移除事件类型 不加on | fn 要移除的回调函数
     * 返回：无
     * */
    function removeEvent(element, type, fn) {
        if (element.removeEventListener) {
            element.removeEventListener(type, fn, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, fn);
        } else {
            element["on" + type] = null;
        }
    }

    window['YU']['removeEvent'] = removeEvent;

    /*
     * 作用：停止事件冒泡
     * 参数：event 事件对象
     * 返回：无
     * */
    function stopPropagation(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }

    window['YU']['stopPropagation'] = stopPropagation;

    /*
     * 作用：获取上一级冒泡对象
     * 参数：event 事件对象
     * 返回：上一级冒泡对象
     * */
    function getRelatedTarget(event) {
        if (event.relateTarget) {
            return event.relatedTarget;
        } else if (event.toElement) {
            return event.toElement;
        } else if (event.fromElement) {
            return event.fromElement;
        } else {
            return null;
        }
    }

    window['YU']['getRelatedTarget'] = getRelatedTarget;

    /*
     * 作用：主要兼容IE对DOM的button属性的反馈，button属性是指鼠标按钮，左，中，右三个键的点击情况
     * 参数：event 事件对象
     * 返回：button对象，包含0，1，2三个属性，0左键，1中键，2右键
     * */
    function getMouseButton(event) {
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
    }

    window['YU']['getMouseButton'] = getMouseButton;

    /*
     * 作用：跨浏览器的鼠标滚轮事件
     * 参数：event 事件对象
     * 返回：wheelDelta对象，包含具体滚动数值
     * */
    function getWheelDelta(event) {
        //主要判断是否支持wheelDelta,
        //不支持就是firefox，要乘以40，支持就判断opera的版本，小于9.5的要正负颠倒一下
        if (event.wheelDelta) {
            return (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta);
        } else {
            return -event.detail * 40;
        }
    }

    window['YU']['getWheelDelta'] = getWheelDelta;

    /*
     * 作用：当发生keypress事件时，返回charCode的兼容用法
     * 参数：event 事件对象
     * 返回：返回charCode或者keyCode属性及值
     * */
    function getCharCode(event) {
        if (typeof event.charCode == "number") {
            return event.charCode;
        } else {
            return event.keyCode;
        }
    }

    window['YU']['getCharCode'] = getCharCode;

    /*
     * 作用：获取剪贴板文字
     * 参数：event 事件对象
     * 返回：剪贴板文字
     * */
    function getClipboardText(event) {
        var clipboardData = (event.clipboardData || window.clipboardData);
        return clipboardData.getData("text");
    }

    window['YU']['getClipboardText'] = getClipboardText;

    /*
     * 作用：设置剪贴板文字（由我们写入剪贴板）
     * 参数：event 事件对象
     * 返回：设置后的剪贴板文字
     * */
    function setClipboardText(event, value) {
        if (event.clipboardData) {
            return event.clipboardData.setData("text/plain", value);
        } else if (window.clipboardData) {
            return window.clipboardData.setData("text", value);
        }
    }

    window['YU']['setClipboardText'] = setClipboardText;

    /*
     * 作用：获取鼠标相对文档的坐标（而非浏览器窗口）
     * 参数：event 事件对象
     * 返回：坐标对象，包含x，y属性
     * */
    function getPointer(event) {
        event = event || getEvent(event);
        var x = event.pageX || (event.clientX + (document.documentElement.scrollLeft
            || document.body.scrollLeft));
        var y = event.pageY || (event.clientY + (document.documentElement.scrollTop
            || document.body.scrollTop));
        //返回x,y
        return {'x': x, 'y': y};
    }

    window['YU']['getPointer'] = getPointer;

    /*
     * 作用：在图片等资源加载完成前执行load（注意，事件不能涉及图片加载完成状态）
     * 参数：loadEvent 回调函数 要执行的载入事件 | waitForImages 等待标记 为true则使用常规事件
     * 返回：布尔值
     * */
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

    /*
     * 作用：对目标元素实现拖放
     * 参数：只要给指定元素添加draggable类即可使其被拖动，并注意，对象的position一定得是absolute
     * 返回：拖放事件对象
     * */
    function dragDrop() {

        var dragdrop = new EventTarget();
        var dragging = null;
        var diffX = 0;
        var diffY = 0;

        function handleEvent(event) {
            //获取事件和目标
            event = getEvent(event);
            var target = getTarget(event);

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
                        event = getEvent(event);

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
            addEvent(document, "mousedown", handleEvent);
            addEvent(document, "mousemove", handleEvent);
            addEvent(document, "mouseup", handleEvent);
        };
        dragdrop.disable = function () {
            removeEvent(document, "mousedown", handleEvent);
            removeEvent(document, "mousemove", handleEvent);
            removeEvent(document, "mouseup", handleEvent);
        };
        return dragdrop;
    }

    window['YU']['dragDrop'] = dragDrop;


    /**************************************
     *                                    *
     *            样式方法                  *
     *          STYLE METHODS             *
     *                                    *
     **************************************/

    /*
     * 作用：通过class值和标签名获取元素
     * 参数：className 元素的class值 | tag 元素的标签名 必填 | parent 元素的父元素(用来缩小范围) 可选
     * 返回：匹配后的元素数组
     * 这里是为了避免低级浏览器没有getElementsByClassName的方法，所以用TagName来变相实现效果，但导致要多写一个参数TagName
     * */
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


    /*
     * 作用：通过className获取元素集合
     * 参数：className 元素的className
     * 返回：匹配后的元素数组
     * 当元素中不含有getElementsByClassName方法时，通过遍历所有元素，匹配出符合条件的元素。
     * 注意：虽然参数可以用CSS3选择器，但为兼容低版本浏览器，参数应该为className
     * */
    function c(className) {

        var elements;
        //如果有getElementsByClassName方法，则优先使用该方法
        if (document.getElementsByClassName) {
            elements = document.getElementsByClassName(className);
        } else {
        elements = [];
            //如果没有则采取遍历所有元素的className来匹配出符合条件的元素，兼容低版本的浏览器
            walkElementsLinear(function () {
                var classArr = this.className.replace(/\s+/, ' ').split(' ');
                if (classArr.indexOf(className) > -1) {
                    elements.push(this)
                }
            }, window.document);
        }
        return elements;
    }

    window['YU']['c'] = c;

    /*
     * 作用：可以切换隐藏或者显示状态，也可以设置显示状态
     * 参数：node 要隐藏或者显示的元素 | value 显示时要设置的display值 可选
     * 返回：布尔值
     * */
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

    /*
     * 作用：添加样式表，添加link css标签
     * 参数：url css文件的资源位置 | media
     * 返回：无
     * */
    function addStyleSheet(url, media) {
        media = media || 'screen';
        var link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('type', 'text/css');
        link.setAttribute('href', url);
        link.setAttribute('media', media);
        document.getElementsByTagName('head')[0].appendChild(link);
    }

    window['YU']['addStyleSheet'] = addStyleSheet;

    /*
     * 作用：移除样式表，移除link css标签
     * 参数：url css文件的资源位置 | media
     * 返回：无
     * */
    function removeStyleSheet(url, media) {
        var styles = getStyleSheets(url, media);
        for (var i = 0; i < styles.length; i++) {
            var node = styles[i].ownerNode || styles[i].owningElement;
            //禁用样式表
            styles[i].disabled = true;
            //移除节点
            node.parentNode.removeChild(node);
        }
    }

    window['YU']['removeStyleSheet'] = removeStyleSheet;

    /*
     * 作用：通过URL取得包含所有样式表的数组
     * 参数：url css文件的资源位置 | media
     * 返回：样式表数组
     * */

    function getStyleSheets(url, media) {
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
    }

    window['YU']['getStyleSheets'] = getStyleSheets;

    /*
     * 作用：编辑一条样式规则
     * 参数：selector 选择器 | styles 样式对象 | url css文件的资源位置 | media
     * 返回：无
     * */
    function editCSSRule(selector, styles, url, media) {
        var styleSheets = (typeof url == 'array' ? url : getStyleSheets(url, media));

        for (i = 0; i < styleSheets.length; i++) {

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
                    for (property in styles) {
                        if (!styles.hasOwnProperty(property)) {
                            continue;
                        }
                        // Set the new style property
                        rules[j].style[camelize(property)] = styles[property];
                    }
                }
            }
        }
    }

    window['YU']['editCSSRule'] = editCSSRule;

    /*
     * 作用：添加一条样式规则
     * 参数：selector 选择器 | styles 样式对象 |index 索引 位置 | url css文件的资源位置 | media
     * 返回：无
     * */
    function addCSSRule(selector, styles, index, url, media) {
        var declaration = '';

        // Build the declaration string from the style object
        for (property in styles) {
            if (!styles.hasOwnProperty(property)) {
                continue;
            }
            declaration += property + ':' + styles[property] + '; ';
        }

        var styleSheets = (typeof url == 'array' ? url : getStyleSheets(url, media));
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
    }

    window['YU']['addCSSRule'] = addCSSRule;


    /*
     * 作用：得到元素的样式属性值
     * 参数：element 目标元素 | property 要获取的属性
     * 返回：无
     * */
    function getStyle(element, property) {
        if (!(element = $(element)) || !property) return false;
        // Check for the value in the element's style property
        var value = element.style[camelize(property)];
        if (!value) {
            // Retrieve the computed style value
            if (document.defaultView && document.defaultView.getComputedStyle) {
                // The DOM method
                var css = document.defaultView.getComputedStyle(element, null);
                value = css ? css.getPropertyValue(property) : null;
            } else if (element.currentStyle) {
                // The MSIE method
                value = element.currentStyle[camelize(property)];
            }
        }
        // Return an empty string rather than auto so that you don't
        // have to check for auto values
        return value == 'auto' ? '' : value;
    }

    window['YU']['getStyle'] = getStyle;
    window['YU']['getStyleById'] = getStyle;

    /*
     * 作用：通过id修改单个元素的样式
     * 参数：element 元素 | styles 样式对象
     * 返回：布尔值
     * */
    function setStyleById(element, styles) {
        // Retrieve an object reference
        if (!(element = $(element))) return false;
        // Loop through  the styles object an apply each property
        for (property in styles) {
            if (!styles.hasOwnProperty(property)) continue;

            if (element.style.setProperty) {
                //DOM2 Style method
                element.style.setProperty(
                    uncamelize(property, '-'), styles[property], null);
            } else {
                //Alternative method
                element.style[camelize(property)] = styles[property];
            }
        }
        return true;
    }

    //注册两个名字，其中一个名字为简化名字
    window['YU']['setStyle'] = setStyleById;
    window['YU']['setStyleById'] = setStyleById;

    /*
     * 作用：通过类名修改多个元素的样式
     * 参数：parent 父元素 必填 | tag 标签名 | className 要添加的类名 | styles 要添加的样式对象
     * 返回：布尔值
     * */
    function setStylesByClassName(parent, tag, className, styles) {
        if (!(parent = $(parent))) return false;
        var elements = getElementsByClassName(className, tag, parent);
        for (var e = 0; e < elements.length; e++) {
            setStyleById(elements[e], styles);
        }
        return true;
    }

    window['YU']['setStylesByClassName'] = setStylesByClassName;

    /*
     * 作用：通过标签名修改多个元素的样式
     * 参数：tagname 标签名 | styles 样式对象 | parent 父元素
     * 返回：无
     * */
    function setStylesByTagName(tagname, styles, parent) {
        parent = $(parent) || document;
        var elements = parent.getElementsByTagName(tagname);
        for (var e = 0; e < elements.length; e++) {
            setStyleById(elements[e], styles);
        }
    }

    window['YU']['setStylesByTagName'] = setStylesByTagName;

    /*
     * 作用：获取元素class值数组
     * 参数：element 元素
     * 返回：class数组
     * */
    function getClassNames(element) {
        if (!(element = $(element))) return false;
        return element.className.replace(/\s+/, ' ').split(' ');
    }

    window['YU']['getClassNames'] = getClassNames;

    /*
     * 作用：检测元素是否包含某class
     * 参数：element 元素 | className 类名
     * 返回：布尔值
     * */
    function hasClassName(element, className) {
        if (!(element = $(element))) return false;
        var classes = getClassNames(element);
        for (var i = 0; i < classes.length; i++) {
            // Check if the className matches and return true if it does
            if (classes[i] === className) {
                return true;
            }
        }
        return false;
    }

    window['YU']['hasClassName'] = hasClassName;

    /*
     * 作用：添加class
     * 参数：element 元素 | className 类名
     * 返回：布尔值
     * */
    function addClassName(element, className) {
        if (!(element = $(element))) return false;
        // Append the classname to the end of the current className
        // If there is no className, don't include the space
        element.className += (element.className ? ' ' : '') + className;
        return true;
    }

    window['YU']['addClassName'] = addClassName;

    /*
     * 作用：移除class
     * 参数：element 元素 | className 类名
     * 返回：布尔值
     * */
    function removeClassName(element, className) {
        if (!(element = $(element))) return false;
        var classes = getClassNames(element);
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
    }

    window['YU']['removeClassName'] = removeClassName;

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

    /*
     * 作用：移除所有子元素
     * 参数：parent 要移除所有子元素的父元素
     * 返回：返回移除子元素后的父元素
     * */
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

    /*
     * 作用：插入新元素到子元素的最前面
     * 参数：parent 父元素 | newChild 要插入的新元素
     * 返回：返回插入新子元素后的父元素
     * */
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

    /*
     * 作用：获取当前浏览器窗口的宽高
     * 参数：无
     * 返回：宽高对象，包含width,height属性
     * */
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

    /*
     * 作用：自定义node核心对象的类型数值对应的字符串值
     * 参数：因为有些浏览器不会返回node核心对象的类型值，所以可以自定义，兼容所有浏览器
     * 返回：无
     * */
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

    /*
     * 作用：遍历元素节点，不关心DOM树的深度，不包含父节点
     * 参数：fn 回调函数 this代表当前节点 作用于遍历后的每个节点 | node 遍历指定节点
     * 返回：无
     * */
    function walkElementsLinear(fn, node) {
        var root = node || window.document;
        var nodes = root.getElementsByTagName("*");
        for (var i = 0; i < nodes.length; i++) {
            fn.call(nodes[i]);
        }
    }

    window['YU']['walkElementsLinear'] = walkElementsLinear;

    /*
     * 作用：遍历元素节点，文本节点，含父节点
     * 参数：fn 回调函数 this代表当前节点 作用于遍历后的每个节点 | node 遍历指定节点 | depth 遍历深度 | returnedFromParent
     * 返回：无
     * */
    function walkTheDOMRecursive(fn, node, depth, returnedFromParent) {
        var root = node || window.document;
        returnedFromParent = fn.call(root, depth++, returnedFromParent);
        node = root.firstChild;
        while (node) {
            walkTheDOMRecursive(fn, node, depth, returnedFromParent);
            node = node.nextSibling;
        }
    }

    window['YU']['walkTheDOMRecursive'] = walkTheDOMRecursive;

    /*
     * 作用：遍历元素节点，文本节点，属性节点，含父节点
     * 参数：node 遍历指定节点 | fn 回调函数 作用于遍历后的每个节点 | depth 遍历深度 | returnedFromParent 返回给func使用的对象 包含元素节点，文本节点，属性节点
     * 返回：无
     * */
    function walkTheDOMWithAttributes(node, fn, depth, returnedFromParent) {
        var root = node || window.document;
        returnedFromParent = fn(root, depth++, returnedFromParent);
        if (root.attributes) {
            for (var i = 0; i < root.attributes.length; i++) {
                walkTheDOMWithAttributes(root.attributes[i], fn, depth - 1, returnedFromParent);
            }
        }
        if (root.nodeType != YU.node.ATTRIBUTE_NODE) {
            node = root.firstChild;
            while (node) {
                walkTheDOMWithAttributes(node, fn, depth, returnedFromParent);
                node = node.nextSibling;
            }
        }
    }

    window['YU']['walkTheDOMWithAttributes'] = walkTheDOMWithAttributes;

    /*
     * 作用：遍历元素节点，文本节点，含父节点（同walkTheDOMRecursive），实现方法不同而已
     * 参数：node 遍历指定节点 | fn 回调函数 作用于遍历后的每个节点 node代表当前节点
     * 返回：无
     * */
    function walkTheDOM(node, fn) {
        fn(node);
        node = node.firstChild;
        while (node) {
            walkTheDOM(node, fn);
            node = node.nextSibling;
        }
    }

    window['YU']['walkTheDOM'] = walkTheDOM;


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
    function createXHR() {
        if (typeof XMLHttpRequest != "undefined") {
            return new XMLHttpRequest();
        } else if (typeof ActiveXObject != "undefined") {
            if (typeof arguments.callee.activeXString != "string") {
                var version = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp"],
                    i, len;
                for (i = 0, len = versions.length; i < len; i++) {
                    try {
                        new ActiveXObject(versions[i]);
                        arguments.callee.activeXString = versions[i];
                        break;
                    } catch (ex) {

                    }
                }
            }
            return new ActiveXObject(arguments.callee.activeXString);
        } else {
            throw new Error("No XHR object available.");
        }
    }

    window['YU']['createXHR'] = createXHR;

    /*
     * 作用：封装ajax
     * 参数：obj 对象,需要传递method方式，url访问地址，data数据，success成功后回调函数，async是否异步
     * 返回：无
     * */
    function ajax(obj) {
        var xhr = createXHR();	//创建XHR对象
        //通过使用JS随机字符串解决IE浏览器第二次默认获取缓存的问题
        obj.url = obj.url + '?rand=' + Math.random();
        obj.data = params(obj.data);  //通过params()将名值对转换成字符串
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
    }

    window['YU']['ajax'] = ajax;

    /*
     * 作用：序列化参数
     * 参数：data 要序列化的参数，键值对
     * 返回：用&符号连接的序列化参数
     * */
    function params(data) {
        var arr = [];
        for (var i in data) {
            //特殊字符传参产生的问题可以使用encodeURIComponent()进行编码处理
            arr.push(encodeURIComponent(i) + '=' + encodeURIComponent(data[i]));
        }
        return arr.join('&');
    }

    window['YU']['params'] = params;

    /*
     * 作用：表单序列化 会自动获取当前表单元素内填写的值并进行序列化
     * 参数：form 表单元素
     * 返回：用&符号连接的序列化参数
     * */
    function serialize(form) {
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
    }

    window['YU']['serialize'] = serialize;

    /*
     * 作用：辅助添加参数到URL末尾
     * 参数：url 要添加参数的url | name 要添加的键名 | value 要添加的键值
     * 返回：用&符号连接的序列化参数
     * */
    function addURLParam(url, name, value) {
        url += (url.indexOf("?") == -1 ? "?" : "&");//如果url中已经包含?则以&继续添加参数
        url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
        return url;
    }

    window['YU']['addURLParam'] = addURLParam;


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
    function getCookie(name) {
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
    }

    window['YU']['getCookie'] = getCookie;

    /*
     * 作用：设置cookie的值
     * 参数：name cookie名字 | value coookie值 | expires 有效期 | path 保存路径 | domain 网址主体 | secure 安全设置
     * 返回：无
     * */
    function setCookie(name, value, expires, path, domain, secure) {
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
    }

    window['YU']['setCookie'] = setCookie;

    /*
     * 作用: 移除cookie的值
     * 参数：name cookie名字 | path 保存路径 | domain 网址主体 | secure 安全设置
     * 返回：无
     * */
    function unsetCookie(name, path, domain, secure) {
        this.setCookie(name, "", new Date(0), path, domain, secure);
    }

    window['YU']['unsetCookie'] = unsetCookie;


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
    function isArray(obj) {
        return Object.prototype.toString.call(obj) == "[object Array]";
    }

    window['YU']['isArray'] = isArray;

    /*
     * 作用：检测是否是函数
     * 参数：obj 待检测的对象
     * 返回：布尔值 检测结果
     * */
    function isFunction(obj) {
        return Object.prototype.toString.call(obj) == "[object Function]";
    }

    window['YU']['isFunction'] = isFunction;

    /*
     * 作用：检测是否是正则式
     * 参数：obj 待检测的对象
     * 返回：布尔值 检测结果
     * */
    function isRegExp(obj) {
        return Object.prototype.toString.call(obj) == "[object RegExp]";
    }

    window['YU']['isRegExp'] = isRegExp;

    /*
     * 作用：检测是否是window对象
     * 参数：obj 待检测的对象
     * 返回：布尔值 检测结果
     * */
    function isWindow(obj) {
        return obj != null && obj === obj.window;
    }

    window['YU']['isWindow'] = isWindow;

    /*
     * 作用：检测对象类型，和typeof一样，但是兼容性更高，是安全检测
     * 参数：obj 待检测的对象
     * 返回：对象类型，英文小写
     * */
    function type(obj) {
        if (obj == null) {
            return obj + "";
        }
        // Support: Android <=2.3 only (functionish RegExp)
        return typeof obj === "object" || typeof obj === "function" ?
        yuObj[toString.call(obj)] || "object" :
            typeof obj;
    }

    window['YU']['type'] = type;

    //对上面type方法检测出来的object类型进行细分，补充
    each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
        function (i, name) {
            yuObj["[object " + name + "]"] = name.toLowerCase();
        });

    /*
     * 作用：检测对象是否为数值(字符串若为纯数字也视为数值)
     * 参数：obj 待检测的对象
     * 返回：布尔值 检测结果
     * */
    function isNumeric(obj) {
        // As of jQuery 3.0, isNumeric is limited to
        // strings and numbers (primitives or objects)
        // that can be coerced to finite numbers (gh-2662)
        var type = this.type(obj);
        return ( type === "number" || type === "string" ) && !isNaN(obj - parseFloat(obj));
    }

    window['YU']['isNumeric'] = isNumeric;

    /*
     * 作用：判断是否为空对象
     * 参数：obj 待检测的对象
     * 返回：布尔值 检测结果
     * */
    function isEmptyObject(obj) {
        var name;//name未定义，所以是一个空对象
        for (name in obj) {//如果obj中为空，则name in obj是true
            return false;
        }
        return true;
    }

    window['YU']['isEmptyObject'] = isEmptyObject;


    /*
     * 作用：判断是否为类数组对象（拥有length的非函数非window对像）
     * 参数：obj 待检测的对象
     * 返回：布尔值 检测结果
     * */
    function isArrayLike(obj) {
        //双叹号，把一个对象转成布尔值
        //检测对象中是否有length属性
        var length = !!obj && "length" in obj && obj.length,
            type = YU.type(obj);

        if (type === "function" || isWindow(obj)) {
            return false;
        }

        return type === "array" || length === 0 ||
            typeof length === "number" && length > 0 && ( length - 1 ) in obj;
    }

    window['YU']['isArrayLike'] = isArrayLike;


    /*
     * 作用：检测是否是JSON对象
     * 参数：obj 待检测的对象
     * 返回：布尔值 检测结果
     * */
    // function isNativeJSON(obj) {
    //    return window.JSON && Object.prototype.toString.call(obj) == "[object JSON]";
    // }
    //
    // window['YU']['isNativeJSON'] = isNativeJSON;

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
    function bindContext(fn, context) {
        return function () {
            return fn.apply(context, arguments);
        }
    }

    window['YU']['bindContext'] = bindContext;

    /*
     * 作用：克隆JavaScript对象
     * 参数：myObj 需要克隆的对象
     * 返回：返回克隆后的新对象
     * */
    function clone(myObj) {
        if (typeof(myObj) != 'object') {
            return myObj
        }
        if (myObj == null) {
            return myObj
        }
        var myNewObj = new Object();
        for (var i in myObj) {
            myNewObj[i] = clone(myObj[i]);
        }
        return myNewObj;
    }

    window['YU']['clone'] = clone;

    /*
     * 作用：把命名变成驼峰式的
     * 参数：str 要转变成驼峰式的字符串
     * 返回：驼峰式的字符串
     * */
    function camelize(str) {
        return str.replace(/-(\w)/g, function (strMatch, p1) {
            return p1.toUpperCase();
        });
    }

    window['YU']['camelize'] = camelize;

    /*
     * 作用：把命名变成非驼峰式的
     * 参数：str 驼峰式的字符串 | sep 连接符 可选 默认"-"
     * 返回：非驼峰式的字符串
     * */
    function uncamelize(str, sep) {
        sep = sep || '-';
        return str.replace(/([a-z])([A-Z])/g, function (strMatch, p1, p2) {
            return p1 + sep + p2.toLowerCase();
        });
    }

    window['YU']['uncamelize'] = uncamelize;


    /*
     * 作用：JSON值转成js对象，兼容低级浏览器
     * 参数：s JSON字符串 | filter 筛选
     * 返回：转换后的字符串
     * */
    function parseJSON(s, filter) {
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
    }

    window['YU']['parseJSON'] = parseJSON;

    /*
     * 作用：数组分块函数
     * 参数：array 要分块的数组 | process 要使用到数组的函数 | context 要执行的环境（没有特殊要求，可不设置该项）
     * 返回：无
     * 备注：有种依次排队显示出来的感觉
     * */
    function chunk(array, process, context) {
        setTimeout(function () {
            //shift()删除数组中的第一项，并返回该项。
            var item = array.shift();
            //process指的是当前正在执行的函数,call是调用函数自己，这样可以传入一个函数环境
            process.call(context, item);
            //只要数组的长度大于0，这个函数就会每隔100毫秒调用一次父setTimeout(),创建一个新的计时器
            if (array.length > 0) {//如果array被shift()删光了，就执行完毕了。
                setTimeout(arguments.callee, 100)
            }
        }, 100);//为什么要设置100毫秒？当然你可以根据自己的需要设置，但推荐用100毫秒
    }

    window['YU']['chunk'] = chunk;

    /*
     * 作用：为函数设置默认的参数值，柯里化函数，（curry 携带的意思）
     * 参数：第一个参数，传入要进行柯里化的函数，第二个及以后n个参数，都是设置函数的默认值。默认参数不能大于fn原来的参数个数
     * 返回：携带默认值的函数
     * */
    function curry(fn) {
        var args = Array.prototype.slice.call(arguments, 1);
        return function () {
            var innerArgs = Array.prototype.slice.call(arguments);
            var finalArgs = args.concat(innerArgs);
            return fn.apply(null, finalArgs);
        }
    }

    window['YU']['curry'] = curry;

    /*
     * 作用：打乱数组内的所有的项，随机排序
     * 参数：array 要打乱排序的数组
     * 返回：打乱排序后的数组
     * */
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    window['YU']['shuffleArray'] = shuffleArray;

    /*
     * 作用：对类数组对象中的每个项依次执行回调函数
     * 参数：obj 类数组对象 | callback 回调函数
     * 返回：执行函数后的类数组对象
     * */
    function each(obj, callback) {
        var length, i = 0;

        if (isArrayLike(obj)) {//检测obj是否为类数组对象
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
    }

    window['YU']['each'] = each;

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
    write: function (message) {
        //警告message为空值
        if (typeof message == 'string' && message.length == 0) {
            return this.writeRaw("► " + 'YU.log: 未定义任何消息');
        }

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
    },

    //输出自定义标题
    header: function (message) {
        message = '<span style = "color:#CB65D3;">' + message + '</span>';
        return this.writeRaw(message);
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