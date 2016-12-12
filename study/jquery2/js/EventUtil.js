/**
 * Created by wanglecheng on 11/20/16.
 */
var EventUtil = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },

    getEvent: function (event) {
        return event ? event : window.event;
    },

    getTarget: function (event) {
        return event.target || event.srcElement;
    },

    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },

    removeHandler: function (element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },

    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },

    getRelatedTarget: function (event) {
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

    //主要兼容IE对DOM的button属性的反馈，button属性是指鼠标按钮，左，中，右三个键的点击情况
    getButton: function (event) {
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
                    return1;

            }
        }
    },

    //跨浏览器的鼠标滚轮事件
    getWheelDelta: function (event) {
        //主要判断是否支持wheelDelta,不支持就是firefox，要乘以40，支持就判断opera的版本，小于9.5的要正负颠倒一下
        if (event.wheelDelta) {
            return (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta);
        } else {
            return -event.detail * 40;
        }
    },

    //当发生keypress事件时，返回charCode的兼容用法
    getCharCode: function (event) {
        if (typeof event.charCode == "number") {
            return event.charCode;
        } else {
            return event.keyCode;
        }
    },

    getClipboardText: function (event) {
        var clipboardData = (event.clipboardData || window.clipboardData);
        return clipboardData.getData("text");
    },

    setClipboardText: function (event, value) {
        if (event.clipboardData) {
            return event.clipboardData.setData("text/plain", value);
        } else if (window.clipboardData) {
            return window.clipboardData.setData("text", value);
        }
    },

    //创建XHR对象
    //如果你要支持IE7以前的版本，那么使用下面的方式来创建XHR对象
    createXHR: function () {
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
    },
    /*  创建XHR用法：var xhr1 = createXHR();
     //如果你不用支持IE7以前的版本，直接使用下面方式来创建XHR对象即可
     var xhr = new XMLHttpRequest();
     */


    //表单序列化
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


    //辅助添加参数到URL末尾
    addURLParam: function (url, name, value) {
        url += (url.indexOf("?") == -1 ? "?" : "&");
        url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
        return url;
    }


};


var CookieUtil = {
    get: function (name) {
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

    set: function (name, value, expires, path, domain, secure) {
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

    unset: function (name, path, domain, secure) {
        this.set(name, "", new Date(0), path, domain, secure);
    }
};