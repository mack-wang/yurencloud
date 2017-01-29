/**
 * 博客：www.yurencloud.com
 * 作者：mack-wang
 * 改编自：ADS.js/Sambells
 * 兼容低版本的浏览器 IE6+，Firefox1.5+,Safari2.0+,Opera9+
 */

(function () {

    //YU的命名空间
    if (!window.YU) {
        window['YU'] = {}
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
     * 作用：通过id值获取单个元素或多个元素
     * 参数：单个或多个id值
     * 返回：元素数组
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
     * 作用：添加事件
     * 参数：node 绑定事件的元素 | type 事件类型 不加on | listener 回调函数
     * 返回：布尔值 表示事件是否添加成功
     * */
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

    /*
     * 作用：停止事件冒泡
     * 参数：eventObject 事件对象
     * 返回：无
     * */
    function stopPropagation(eventObject) {
        eventObject = eventObject || getEventObject(eventObject);
        if (eventObject.stopPropagation) {
            eventObject.stopPropagation();
        } else {
            eventObject.cancelBubble = true;
        }
    }

    window['YU']['stopPropagation'] = stopPropagation;

    /*
     * 作用：停止默认事件
     * 参数：eventObject 事件对象
     * 返回：无
     * */
    function preventDefault(eventObject) {
        eventObject = eventObject || getEventObject(eventObject);
        if (eventObject.preventDefault) {
            eventObject.preventDefault();
        } else {
            eventObject.returnValue = false;
        }
    }

    window['YU']['preventDefault'] = preventDefault;

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
     * 作用：获取事件对象（主要为了兼容所有浏览器）
     * 参数：W3CEvent 符合W3C事件对象规则的事件对象
     * 返回：事件对象
     * */
    function getEventObject(W3CEvent) {
        return W3CEvent || window.event;
    }

    window['YU']['getEventObject'] = getEventObject;

    /*
     * 作用：访问事件的目标元素，兼容IE
     * 参数：eventObject 事件对象
     * 返回：事件作用的元素
     * */
    function getTarget(eventObject) {
        eventObject = eventObject || getEventObject(eventObject);

        //如果是W3C或MSIE的模型
        var target = eventObject.target || eventObject.srcElement;

        //如果像Safari中一样是一个文本节点
        //重新将目标对象指定为父元素
        if (target.nodeType == YU.node.TEXT_NODE) {
            target = node.parentNode;
        }

        return target;
    }

    window['YU']['getTarget'] = getTarget;

    /*
     * 作用：获取事件中鼠标按键值
     * 参数：eventObject 事件对象
     * 返回：buttons对象 包含left middle right三个属性
     * */
    function getMouseButton(eventObject) {
        eventObject = eventObject || getEventObject(eventObject);
        var buttons = {
            'left': false,
            'middle': false,
            'right': false
        };

        //检查eventObject对象的toString()方法的值
        if (eventObject.toString && eventObject.toString().indexOf('MouseEvent') != -1) {
            //W3C方法
            switch (eventObject.button) {
                case 0 :
                    buttons.left = true;
                    break;
                case 1 :
                    buttons.middle = true;
                    break;
                case 2 :
                    button.right = true;
                    break;
                default :
                    break;
            }
        } else if (eventObject.button) {
            //MSIE方法
            switch (eventObject.button) {
                case 1:
                    buttons.left = true;
                    break;
                case 2:
                    buttons.right = true;
                    break;
                case 3:
                    buttons.left = true;
                    buttons.right = true;
                    break;
                case 4:
                    buttons.middle = true;
                    break;
                case 5:
                    buttons.left = true;
                    buttons.middle = true;
                    break;
                case 6:
                    buttons.middle = true;
                    buttons.right = true;
                    break;
                case 7:
                    buttons.left = true;
                    buttons.middle = true;
                    buttons.right = true;
                    break;
                default:
                    break;
            }
        } else {
            return false;

        }
        return buttons;
    }

    window['YU']['getMouseButton'] = getMouseButton;

    /*
     * 作用：获取鼠标相对文档的坐标（而非浏览器窗口）
     * 参数：eventObject 事件对象
     * 返回：坐标对象，包含x，y属性
     * */
    function getPointerPositionInDocument(eventObject) {
        eventObject = eventObject || getEventObject(eventObject);
        var x = eventObject.pageX || (eventObject.clientX + (document.documentElement.scrollLeft
            || document.body.scrollLeft));
        var y = eventObject.pageY || (eventObject.clientY + (document.documentElement.scrollTop
            || document.body.scrollTop));
        //返回x,y
        return {'x': x, 'y': y};
    }

    window['YU']['getPointerPositionInDocument'] = getPointerPositionInDocument;

    /*
     * 作用：移除绑定事件
     * 参数：node 要移除事件的元素 | type 要移除的事件类型 不加on | listener 回调函数
     * 返回：布尔值
     * */
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

    window['YU']['removeEvent'] = removeEvent;

    /*
     * 作用：通过class值和标签名获取元素
     * 参数：className 元素的class值 | tag 元素的标签名 必填 | parent 元素的父元素(用来缩小范围) 可选
     * 返回：匹配后的元素数组
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
     * 参数：func 回调函数 this代表当前节点 作用于遍历后的每个节点 | node 遍历指定节点
     * 返回：无
     * */
    function walkElementsLinear(func, node) {
        var root = node || window.document;
        var nodes = root.getElementsByTagName("*");
        for (var i = 0; i < nodes.length; i++) {
            func.call(nodes[i]);
        }
    }

    window['YU']['walkElementsLinear'] = walkElementsLinear;

    /*
     * 作用：遍历元素节点，文本节点，含父节点
     * 参数：func 回调函数 this代表当前节点 作用于遍历后的每个节点 | node 遍历指定节点 | depth 遍历深度 | returnedFromParent
     * 返回：无
     * */
    function walkTheDOMRecursive(func, node, depth, returnedFromParent) {
        var root = node || window.document;
        returnedFromParent = func.call(root, depth++, returnedFromParent);
        node = root.firstChild;
        while (node) {
            walkTheDOMRecursive(func, node, depth, returnedFromParent);
            node = node.nextSibling;
        }
    }

    window['YU']['walkTheDOMRecursive'] = walkTheDOMRecursive;

    /*
     * 作用：遍历元素节点，文本节点，属性节点，含父节点
     * 参数：node 遍历指定节点 | func 回调函数 作用于遍历后的每个节点 | depth 遍历深度 | returnedFromParent 返回给func使用的对象 包含元素节点，文本节点，属性节点
     * 返回：无
     * */
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

    /*
     * 作用：遍历元素节点，文本节点，含父节点（同walkTheDOMRecursive），实现方法不同而已
     * 参数：node 遍历指定节点 | func 回调函数 作用于遍历后的每个节点 node代表当前节点
     * 返回：无
     * */
    function walkTheDOM(node, func) {
        func(node);
        node = node.firstChild;
        while (node) {
            walkTheDOM(node, func);
            node = node.nextSibling;
        }
    }

    window['YU']['walkTheDOM'] = walkTheDOM;

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
    };
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
        return (length == classes.length ? false : true);
    }

    window['YU']['removeClassName'] = removeClassName;

    /*
     * 作用：JSON值转成js对象
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
     * 作用：改变函数环境
     * 参数：method 回调函数 | target 目标对象
     * 返回：返回改变环境后的函数
     * */
    function makeCallback(method, target) {
        return function () {
            method.apply(target, arguments);
        }
    }

    window['YU']['makeCallback'] = makeCallback;

    /*
     * 作用：克隆JavaScript对象
     * 参数：myObj 需要克隆的对象
     * 返回：返回克隆后的新对象
     * */
    function clone(myObj) {
        if (typeof(myObj) != 'object') return myObj;
        if (myObj == null) return myObj;
        var myNewObj = new Object();
        for (var i in myObj) {
            myNewObj[i] = clone(myObj[i]);
        }
        return myNewObj;
    }

    window['YU']['clone'] = clone;

})
();