/*
 *  博客：www.yurencloud.com
 *  作者：Mack Wang 王乐城
 *  整理和改编自：ADS.js/Sambells,EventUtil&CookieUtil&etc/Nicholas,各大网站
 *  兼容低版本的浏览器 IE6+，Firefox1.5+,Safari2.0+,Opera9+
 *
 *  基于jQuery的YU-2.1.1.js扩展
 *  需要引入jQuery才能使用
 *  删减YU.js的一些与jQuery重复的方法，留下部分自有的方法
 *
 *
 * */
;(function ($, window, document, undefined) {
    $.extend({
        yu: {
            version: '2.1.1',


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
            /*
             * 作用：表单序列化 会自动获取当前表单元素内填写的值并进行序列化
             * 参数：form 表单元素
             * 返回：用&符号连接的序列化参数
             * */
            serialize: function (form) {
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
            shuffle: function (array) {
                for (var i = array.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
                return array;
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
        }

    })
})(jQuery, window, document);

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
        var browserWindowSize = jQuery.yu.windowSize();
        var top = ((browserWindowSize.height - 200) / 2 || 0);
        var left = ((browserWindowSize.width - 200) / 2 || 0);
        //创建作为日志窗口的DOM节点
        //使用受保护的logWindow属性维护引用
        logWindow = document.createElement('ul');
        //指定ID值，以便必要时在DOM树中能够识别它
        $(logWindow).attr('id', id);
        //在屏幕居中定位日志窗口
        $(logWindow).css({
            'position': 'absolute',
            'top': top + 'px',
            'left': left + 'px'
        });
        //设置固定的大小并允许窗口内容滚动
        $(logWindow).css({
            'width': '200px',
            'height': '200px',
            'overflow': 'auto'
        });
        //添加一些样式以美化外观
        $(logWindow).css({
            'padding': '5px',
            'margin': '5px',
            'border': '1px solid black',
            'background-color': '#232323',
            'list-style': 'none',
            'font': '10px/10px Verdana,Tahoma,Sans'
        });
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
        $(li).css({
            'line-height': '20px',
            'padding': '2px',
            'border': '0',
            'border-bottom': '1px solid #292929',
            'margin': '0',
            'color': '#9FA6AE',
            'font': '12px Verdana,Tahoma,Sans,Microsoft YaHei,Hiragino Sans GB'
        });
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

var log = new Logger();
window['log'] = log;
//如果浏览器没有console对象，则会用log.write()来代替console.log（主要针对IE低版本浏览器器）
if (!console) {
    var console = log;
    console.log = console.write;
}