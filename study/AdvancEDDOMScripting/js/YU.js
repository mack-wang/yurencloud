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

    window['YU']['getEventObject'] = getEventObject;

    //访问事件的目标元素，兼容IE
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

    //获取事件中鼠标按键值
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

    //获取鼠标相对文档的坐标（而非浏览器窗口）
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

    //把命名变成驼峰式的
    function camelize(s) {
        return s.replace(/-(\w)/g, function (strMatch, p1) {
            return p1.toUpperCase();
        });
    }

    window['YU']['camelize'] = camelize;

    //变成中横线式的,或者自选连接符
    function uncamelize(s, sep) {
        sep = sep || '-';
        return s.replace(/([a-z])([A-Z])/g, function (strMatch, p1, p2) {
            return p1 + sep + p2.toLowerCase();
        });
    }

    window['YU']['uncamelize'] = uncamelize;

    //添加新样式表
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

    //移除样式表
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

    //通过URL取得包含所有样式表的数组
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

    //编辑一条样式规则
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

    //添加一条样式规则
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

    //通过ID修改单个元素的样式
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

    //通过类名修改多个元素的样式
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

    //通过标签名修改多个元素的样式
    function setStylesByTagName(tagname, styles, parent) {
        parent = $(parent) || document;
        var elements = parent.getElementsByClassName(tagname);
        for (var e = 0; e < elements.length; e++) {
            setStyleById(elements[e], styles);
        }
    }

    window['YU']['setStyleByTagName'] = setStylesByTagName;

    /**
     * Retrieves the classes as an array
     */
    function getClassNames(element) {
        if (!(element = $(element))) return false;
        // Replace multiple spaces with one space and then
        // split the classname on spaces
        return element.className.replace(/\s+/, ' ').split(' ');
    };
    window['YU']['getClassNames'] = getClassNames;

    /**
     * Check if a class exists on an element
     */
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
    };
    window['YU']['hasClassName'] = hasClassName;

    /**
     * Add a class to an element
     */
    function addClassName(element, className) {
        if (!(element = $(element))) return false;
        // Append the classname to the end of the current className
        // If there is no className, don't include the space
        element.className += (element.className ? ' ' : '') + className;
        return true;
    };
    window['YU']['addClassName'] = addClassName;

    /**
     * remove a class from an element
     */
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
    };
    window['YU']['removeClassName'] = removeClassName;


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