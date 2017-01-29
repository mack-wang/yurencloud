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
        return button;
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

    window['YU']['removerEvent'] = removeEvent;

    /*
     * 作用：通过class值和标签名获取元素
     * 参数：className 元素的class值 | tag 元素的标签名 | parent 元素的父元素
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
     * 参数：node 指定元素 | referenceNode 要插入的元素
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
     * 作用：绑定函数的环境
     * 参数：obj 对象 | func要绑定obj对象环境的函数
     * 返回：返回绑定了新环境后的函数
     * */
    function bindFunction(obj, func) {
        return function () {
            func.apply(obj, arguments);
        };
    }

    window['YU']['bindFunction'] = bindFunction;

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
     * 作用：遍历所有节点，不关心DOM树的深度
     * 参数：func 回调函数 作用于遍历后的每个节点 | node 遍历指定节点
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
     * 作用：遍历所有节点，更多参数可设置
     * 参数：func 回调函数 作用于遍历后的每个节点 | node 遍历指定节点 | depth 遍历深度 | returnedFromParent
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
     * 作用：遍历所有节点的属性
     * 参数：node 遍历指定节点 | func 回调函数 作用于遍历后的每个节点 | depth 遍历深度 | returnedFromParent
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
     * 作用：遍历所有节点（同walkElementsLinear），实现方法不同而已
     * 参数：node 遍历指定节点 | func 回调函数 作用于遍历后的每个节点
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
            if (url && document.styleSheets[i].href.indexOf(url) == -1) {
                continue;
            }
            if (media) {
                //规范化media字符串
                media = media.replace(/,\s*/, ',');
                var sheetMedia;
                if (document.styleSheets[i].media.mediaText) {
                    //DOM方法
                    sheetMedia = document.styleSheets[i].media.mediaText.replace(/,\s*/, ',');
                    //Safari会添加额外的逗号和空格
                    sheetMedia = sheetMedia.replace(/,\s*$/, '');
                } else {
                    //MSIE方法
                    sheetMedia = document.styleSheets[i].media.replace(/,\s*/, ',');
                }
                //如果media不匹配则跳过
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
                newIndex = (index >= 0 ? index : styleSheets[i].cssRules.length);
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
     * 作用：通过id修改单个元素的样式
     * 参数：element 元素 | styles 样式对象
     * 返回：布尔值
     * */
    function setStyleById(element, styles) {
        //取得对象的引用
        if (!(element = $(element))) {
            return false;
        }
        //循环遍历style对象并应用每个属性
        for (property in style) {
            if (!styles.hasOwnProperty(property)) {
                continue;
            }

            if (element.style.setProperty) {
                //DOM2样式规范方法
                element.style.setProperty(
                    uncamelize(property, '-'), styles[property], null);
            } else {
                //备用方法
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
     * 参数：parent 父元素 | tag 标签名 | className 要添加的类名 | styles 要添加的样式对象
     * 返回：布尔值
     * */
    function setStylesByClassName(parent, tag, className, styles) {
        if (!(parent = $(parent))) {
            return false
        }
        ;
        var elements = getElementsByClassName(className, tag, parent);
        for (var e = 0; e < element.length; e++) {
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
        var elements = parent.getElementsByClassName(tagname);
        for (var e = 0; e < elements.length; e++) {
            setStyleById(elements[e], styles);
        }
    }

    window['YU']['setStyleByTagName'] = setStylesByTagName;

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
        var length = classes.length
        //loop through the array in reverse, deleting matching items
        // You loop in reverse as you're deleting items from 
        // the array which will shorten it.
        for (var i = length - 1; i >= 0; i--) {
            if (classes[i] === className) {
                delete(classes[i]);
            }
        }
        element.className = classes.join(' ');
        return (length = classes.length ? false : true);
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


    /*
     * 作用：创建AJAX对象
     * 参数：url 请求地址 | options 请求方法 GET POST DELETE 等
     * 返回：服务器响应请求返回的对象
     * */
    function getRequestObject(url, options) {

        // Initialize the request object
        var req = false;
        if (window.XMLHttpRequest) {
            var req = new window.XMLHttpRequest();
        } else if (window.ActiveXObject) {
            var req = new window.ActiveXObject('Microsoft.XMLHTTP');
        }
        if (!req) return false;

        // Define the default options
        options = options || {};
        options.method = options.method || 'GET';
        options.send = options.send || null;

        // Define the various listeners for each state of the request
        req.onreadystatechange = function () {
            switch (req.readyState) {
                case 1:
                    // Loading
                    if (options.loadListener) {
                        options.loadListener.apply(req, arguments);
                    }
                    break;
                case 2:
                    // Loaded
                    if (options.loadedListener) {
                        options.loadedListener.apply(req, arguments);
                    }
                    break;
                case 3:
                    // Interactive
                    if (options.ineractiveListener) {
                        options.ineractiveListener.apply(req, arguments);
                    }
                    break;
                case 4:
                    // Complete
                    // if aborted FF throws errors
                    try {
                        if (req.status && req.status == 200) {

                            // Specific listeners for content-type
                            // The Content-Type header can include the charset:
                            // Content-Type: text/html; charset=ISO-8859-4
                            // So we'll use a match to extract the part we need.
                            var contentType = req.getResponseHeader('Content-Type');
                            var mimeType = contentType.match(/\s*([^;]+)\s*(;|$)/i)[1];

                            switch (mimeType) {
                                case 'text/javascript':
                                case 'application/javascript':
                                    // The response is JavaScript so use the 
                                    // req.responseText as the argument to the callback
                                    if (options.jsResponseListener) {
                                        options.jsResponseListener.call(
                                            req,
                                            req.responseText
                                        );
                                    }
                                    break;
                                case 'application/json':
                                    // The response is json so parse   
                                    // req.responseText using the an anonymous functions
                                    // which simply returns the JSON object for the
                                    // argument to the callback
                                    if (options.jsonResponseListener) {
                                        try {
                                            var json = parseJSON(
                                                req.responseText
                                            );
                                        } catch (e) {
                                            var json = false;
                                        }
                                        options.jsonResponseListener.call(
                                            req,
                                            json
                                        );
                                    }
                                    break;
                                case 'text/xml':
                                case 'application/xml':
                                case 'application/xhtml+xml':
                                    // The response is XML so use the 
                                    // req.responseXML as the argument to the callback
                                    // This will be a Document object
                                    if (options.xmlResponseListener) {
                                        options.xmlResponseListener.call(
                                            req,
                                            req.responseXML
                                        );
                                    }
                                    break;
                                case 'text/html':
                                    // The response is HTML so use the 
                                    // req.responseText as the argument to the callback
                                    if (options.htmlResponseListener) {
                                        options.htmlResponseListener.call(
                                            req,
                                            req.responseText
                                        );
                                    }
                                    break;
                            }

                            // A complete listener
                            if (options.completeListener) {
                                options.completeListener.apply(req, arguments);
                            }

                        } else {
                            // Response completed but there was an error
                            if (options.errorListener) {
                                options.errorListener.apply(req, arguments);
                            }
                        }


                    } catch (e) {
                        //ignore errors
                        //alert('Response Error: ' + e);
                    }
                    break;
            }
        };
        // Open the request
        req.open(options.method, url, true);
        // Add a special header to identify the requests
        req.setRequestHeader('X-YU-Ajax-Request', 'AjaxRequest');
        return req;
    }

    window['YU']['getRequestObject'] = getRequestObject;

    /*
     * 作用：发送ajaxRequest请求
     * 参数：url 请求地址 | options 请求方法 GET POST DELETE 等
     * 返回：服务器响应请求返回的对象
     * */
    function ajaxRequest(url, options) {
        var req = getRequestObject(url, options);
        return req.send(options.send);
    }

    window['YU']['ajaxRequest'] = ajaxRequest;


    /**
     * A counter for the XssHttpRequest objects
     */
    var XssHttpRequestCount = 0;

    /*
     * 作用：创建一个跨浏览器的兼容的AJAX对象
     * */
    /**
     * An cross-site <script> tag implementation of the XMLHttpReqest object
     */
    var XssHttpRequest = function () {
        this.requestID = 'XSS_HTTP_REQUEST_' + (++XssHttpRequestCount);
    };
    XssHttpRequest.prototype = {
        url: null,
        scriptObject: null,
        responseJSON: null,
        status: 0,
        readyState: 0,
        timeout: 30000,
        onreadystatechange: function () {
        },

        setReadyState: function (newReadyState) {
            // Only update the ready state if it's newer than the current state
            if (this.readyState < newReadyState || newReadyState == 0) {
                this.readyState = newReadyState;
                this.onreadystatechange();
            }
        },

        open: function (url, timeout) {
            this.timeout = timeout || 30000;
            // Append a special variable to the URL called XSS_HTTP_REQUEST_CALLBACK
            // that contains the name of the callback function for this request
            this.url = url
                + ((url.indexOf('?') != -1) ? '&' : '?' )
                + 'XSS_HTTP_REQUEST_CALLBACK='
                + this.requestID
                + '_CALLBACK';
            this.setReadyState(0);
        },

        send: function () {
            var requestObject = this;

            // Create a new script object to load the external data
            this.scriptObject = document.createElement('script');
            this.scriptObject.setAttribute('id', this.requestID);
            this.scriptObject.setAttribute('type', 'text/javascript');
            // Don't set the src or append to the document yet...


            // Create a setTimeout() method that will trigger after a given 
            // number of milliseconds. If the script hasn't loaded by the given
            // time it will be cancelled
            var timeoutWatcher = setTimeout(function () {
                // Re-populate the window method with an empty method incase the 
                // script loads later on after we've assumed it stalled
                window[requestObject.requestID + '_CALLBACK'] = function () {
                };

                // Remove the script to prevent it from loading further
                requestObject.scriptObject.parentNode.removeChild(
                    requestObject.scriptObject
                );

                // Set the status to error
                requestObject.status = 2;
                requestObject.statusText = 'Timeout after '
                    + requestObject.timeout
                    + ' milliseconds.'

                // Update the state
                requestObject.setReadyState(2);
                requestObject.setReadyState(3);
                requestObject.setReadyState(4);

            }, this.timeout);


            // Create a method in the window object that matches the callback
            // in the request. When called it will processing the rest of 
            // the request
            window[this.requestID + '_CALLBACK'] = function (JSON) {
                // When the script loads this method will execute, passing in
                // the desired JSON object.

                // Clear the timeoutWatcher method as the request 
                // loaded successfully
                clearTimeout(timeoutWatcher);

                // Update the state
                requestObject.setReadyState(2);
                requestObject.setReadyState(3);

                // Set the status to success 
                requestObject.responseJSON = JSON;
                requestObject.status = 1;
                requestObject.statusText = 'Loaded.'

                // Update the state
                requestObject.setReadyState(4);
            };

            // Set the initial state
            this.setReadyState(1);

            // Now set the src property and append to the document's 
            // head. This will load the script
            this.scriptObject.setAttribute('src', this.url);
            var head = document.getElementsByTagName('head')[0];
            head.appendChild(this.scriptObject);

        }
    };

    window['YU']['XssHttpRequest'] = XssHttpRequest;

    /*
     * 作用：使用兼容的方式，创建AJAX对象
     * 参数：url 请求地址 | options 请求方法 GET POST DELETE 等
     * 返回：服务器响应请求返回的对象
     * */
    /**
     * Setup the various parts of the new XssHttpRequest Object
     */
    function getXssRequestObject(url, options) {
        var req = new XssHttpRequest();

        options = options || {};
        // Default timeout of 30 sec
        options.timeout = options.timeout || 30000;

        req.onreadystatechange = function () {
            switch (req.readyState) {
                case 1:
                    // Loading
                    if (options.loadListener) {
                        options.loadListener.apply(req, arguments);
                    }
                    break;
                case 2:
                    // Loaded
                    if (options.loadedListener) {
                        options.loadedListener.apply(req, arguments);
                    }
                    break;
                case 3:
                    // Interactive
                    if (options.ineractiveListener) {
                        options.ineractiveListener.apply(req, arguments);
                    }
                    break;
                case 4:
                    // Complete
                    if (req.status == 1) {
                        // The request was successful
                        if (options.completeListener) {
                            options.completeListener.apply(req, arguments);
                        }
                    } else {
                        // There was an error
                        if (options.errorListener) {
                            options.errorListener.apply(req, arguments);
                        }
                    }
                    break;
            }
        };
        req.open(url, options.timeout);

        return req;
    }

    window['YU']['getXssRequestObject'] = getXssRequestObject;

    /*
     * 作用：发送xssRequest请求（兼容多浏览器的发送xmlRequest请求）
     * 参数：url 请求地址 | options 请求方法 GET POST DELETE 等
     * 返回：服务器响应请求返回的对象
     * */
    function xssRequest(url, options) {
        var req = getXssRequestObject(url, options);
        return req.send(null);
    }

    window['YU']['xssRequest'] = xssRequest;

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

    /**
     * A URL hash listener used to trigger
     * registered methods based on hashes
     */
    var actionPager = {
        // The previous hash
        lastHash: '',
        // A list of the methods registered for the hash patterns
        callbacks: [],
        // The safari history list
        safariHistory: false,
        // A reference to the iframe for Internet Explorer
        msieHistory: false,
        // The class name of the links that should be converted
        ajaxifyClassName: '',
        // The root URL of the application. This will be stripped off the URLS
        // when creating the hashes
        ajaxifyRoot: '',


        init: function (ajaxifyClass, ajaxifyRoot, startingHash) {

            this.ajaxifyClassName = ajaxifyClass || 'YUActionLink';
            this.ajaxifyRoot = ajaxifyRoot || '';

            if (/Safari/i.test(navigator.userAgent)) {
                this.safariHistory = [];
            } else if (/MSIE/i.test(navigator.userAgent)) {
                // In the case of MSIE, add a iframe to track override the back button
                this.msieHistory = document.createElement("iframe");
                this.msieHistory.setAttribute("id", "msieHistory");
                this.msieHistory.setAttribute("name", "msieHistory");
                setStyleById(this.msieHistory, {
                    'width': '100px',
                    'height': '100px',
                    'border': '1px solid black',
                    'visibility': 'visible',
                    'zIndex': '-1'
                });
                document.body.appendChild(this.msieHistory);
                this.msieHistory = frames['msieHistory'];

            }

            // Convert the links to AJAX links
            this.ajaxifyLinks();

            // Get the current location
            var location = this.getLocation();

            // Check if the location has a hash (from a bookmark)
            // or if a hash has bee provided
            if (!location.hash && !startingHash) {
                startingHash = 'start';
            }

            // Store the hash as necessary
            ajaxHash = this.getHashFromURL(location.hash) || startingHash;
            this.addBackButtonHash(ajaxHash);

            // Add a watching event to look for changes in the location bar
            var watcherCallback = makeCallback(this.watchLocationForChange, this);
            window.setInterval(watcherCallback, 200);
        },
        ajaxifyLinks: function () {
            // Convert the links to anchors for ajax handling
            links = getElementsByClassName(this.ajaxifyClassName, 'a', document);
            for (var i = 0; i < links.length; i++) {
                if (hasClassName(links[i], 'YUActionPagerModified')) {
                    continue;
                }

                // Convert the herf attribute to #value
                links[i].setAttribute(
                    'href',
                    this.convertURLToHash(links[i].getAttribute('href'))
                );
                addClassName(links[i], 'YUActionPagerModified');

                // Attach a click event to add history as necessary
                addEvent(links[i], 'click', function () {
                    if (this.href && this.href.indexOf('#') > -1) {
                        actionPager.addBackButtonHash(
                            actionPager.getHashFromURL(this.href)
                        );
                    }
                });
            }
        },
        addBackButtonHash: function (ajaxHash) {
            // Store the hash
            if (!ajaxHash) return false;
            if (this.safariHistory !== false) {
                // Using a special array for Safari
                if (this.safariHistory.length == 0) {
                    this.safariHistory[window.history.length] = ajaxHash;
                } else {
                    this.safariHistory[window.history.length + 1] = ajaxHash;
                }
                return true;
            } else if (this.msieHistory !== false) {
                // By navigating the iframe in MSIE
                this.msieHistory.document.execCommand('Stop');
                this.msieHistory.location.href = '/fakepage?hash='
                    + ajaxHash
                    + '&title=' + document.title;
                return true;
            } else {
                // By changing the location value
                // The function is wrapped using makeCallback so that this 
                // will refer to the actionPager from within the timeout method
                var timeoutCallback = makeCallback(function () {
                    if (this.getHashFromURL(window.location.href) != ajaxHash) {
                        window.location.replace(location.href + '#' + ajaxHash);
                    }
                }, this);
                setTimeout(timeoutCallback, 200);
                return true;
            }
            return false;
        },
        watchLocationForChange: function () {

            var newHash;
            // Retrieve the value for the new hash
            if (this.safariHistory !== false) {
                // From the history array for safari
                if (this.safariHistory[history.length]) {
                    newHash = this.safariHistory[history.length];
                }
            } else if (this.msieHistory !== false) {
                // From the location of the iframe in MSIE
                newHash = this.msieHistory.location.href.split('&')[0].split('=')[1];
            } else if (location.hash != '') {
                // From the window.location otherwise
                newHash = this.getHashFromURL(window.location.href);

            }

            // Update the page if the new hash doesn't equal the last hash
            if (newHash && this.lastHash != newHash) {
                if (this.msieHistory !== false
                    && this.getHashFromURL(window.location.href) != newHash) {
                    // Fix the location bar in MSIE so it bookmarks properly
                    location.hash = newHash;
                }

                // Try executing any registered listeners
                // using try/catch incase of an exception
                try {
                    this.executeListeners(newHash);
                    // Update the links again incase any new
                    // ones were added with the handler
                    this.ajaxifyLinks();
                } catch (e) {
                    // This will catch any bad JS in the callbacks.
                    alert(e);
                }

                // Save this as the last hash
                this.lastHash = newHash;
            }
        },
        register: function (regex, method, context) {
            var obj = {'regex': regex};
            if (context) {
                // A context has been specified
                obj.callback = function (matches) {
                    method.apply(context, matches);
                };
            } else {
                // Use the window as the context
                obj.callback = function (matches) {
                    method.apply(window, matches);
                };
            }

            // Add listeners to the callback array
            this.callbacks.push(obj)
        },
        convertURLToHash: function (url) {
            if (!url) {
                // No url so return a pound
                return '#';
            } else if (url.indexOf("#") != -1) {
                // Has a hash so return it
                return url.split("#")[1];
            } else {
                // If the URL includes the domain name (MSIE) strip it off.
                if (url.indexOf("://") != -1) {
                    url = url.match(/:\/\/[^\/]+(.*)/)[1];
                }
                // Strip off the root as specified in init()
                return '#' + url.substr(this.ajaxifyRoot.length)
            }
        },
        getHashFromURL: function (url) {
            if (!url || url.indexOf("#") == -1) {
                return '';
            }
            return url.split("#")[1];
        },
        getLocation: function () {
            // Check for a hash
            if (!window.location.hash) {
                // Not one so make it
                var url = {host: null, hash: null};
                if (window.location.href.indexOf("#") > -1) {
                    parts = window.location.href.split("#")[1];
                    url.domain = parts[0];
                    url.hash = parts[1];
                } else {
                    url.domain = window.location;
                }
                return url;
            }
            return window.location;
        },
        executeListeners: function (hash) {
            // Execute any listeners that match the hash
            for (var i in this.callbacks) {
                if ((matches = hash.match(this.callbacks[i].regex))) {
                    this.callbacks[i].callback(matches);
                }
            }
        }
    };
    window['YU']['actionPager'] = actionPager;

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

    /**
     * 创建AJAX请求队列数组
     */
    var requestQueue = [];

    /*
     * 作用：发送xssRequest请求（兼容多浏览器的发送xmlRequest请求）
     * 参数：url 请求地址 | options 请求方法 GET POST DELETE 等 | queue 等待发送ajax请求的队列
     * 返回：无
     * */
    function ajaxRequestQueue(url, options, queue) {
        queue = queue || 'default';

        // This object will wrap the option listeners in another function
        // so the option object needs to be unique. If a shared options object 
        // is used when the method is call it will get into a recursive mess.
        options = clone(options) || {};
        if (!requestQueue[queue]) requestQueue[queue] = [];

        // The queue needs to invoke the next request using the completeListener
        // when the previous request is complete. If the complete listener is 
        // already defined then you need to invoke it first.

        // Grab the old listener
        var userCompleteListener = options.completeListener;

        // Add a new listener
        options.completeListener = function () {

            // If there was an old one invoke it first
            if (userCompleteListener) {
                // this will refer to the request object
                userCompleteListener.apply(this, arguments);
            }

            // Remove this request from the queue
            requestQueue[queue].shift();

            // Invoke the next item in the queue
            if (requestQueue[queue][0]) {
                // The request is in the req property but you alos need to include
                // the send option incase it's a POST request
                var q = requestQueue[queue][0].req.send(
                    requestQueue[queue][0].send
                );
            }
        };

        // If there's an error the rest of the queue should be cancelled
        // by calling their error methods

        // Grab the old listener
        var userErrorListener = options.errorListener;

        // Add a new listener
        options.errorListener = function () {

            if (userErrorListener) {
                userErrorListener.apply(this, arguments);
            }
            ;

            // Remove this request from the queue as the error 
            // was already invoked
            requestQueue[queue].shift();

            // Kill the rest of the queue as there was an error but call the
            // errorListener on each first. By invoking the error listener on
            // the next item in the queue it will clear all queued requests as
            // as each will invoke the next in a chain

            // Check if there is still anything in the queue
            if (requestQueue[queue].length) {

                // Grab the next one
                var q = requestQueue[queue].shift();

                // Abort the request.
                q.req.abort();

                // Fake a request object so that the errorListener thinks it
                // completed and runs accordingly

                var fakeRequest = new Object();

                // Set the status to 0 and readyState to 4 (as if 
                // the request completed but failed
                fakeRequest.status = 0;
                fakeRequest.readyState = 4

                fakeRequest.responseText = null;
                fakeRequest.responseXML = null;

                // Set an error so you can show a message if you wish.
                fakeRequest.statusText = 'A request in the queue received an error';

                // Invoke the state change. If readyState is 4 and 
                // status is not 200 then errorListener will be invoked.
                q.error.apply(fakeRequest);
            }

        };

        // Add this requests to the queue
        requestQueue[queue].push({
            req: getRequestObject(url, options),
            send: options.send,
            error: options.errorListener
        });


        // If the length of the queue is only one 
        // item (the first) invoke the request    
        if (requestQueue[queue].length == 1) {
            ajaxRequest(url, options);
        }
    }

    window['YU']['ajaxRequestQueue'] = ajaxRequestQueue;

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


 * */