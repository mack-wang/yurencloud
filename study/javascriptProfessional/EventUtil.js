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
        if(event.preventDefault){
            event.preventDefault();
        }else{
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
        if (event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble = true;
        }
    },

    getRelatedTarget: function (event) {
        if (event.relateTarget){
            return event.relatedTarget;
        }else if(event.toElement){
            return event.toElement;
        }else if(event.fromElement){
            return event.fromElement;
        }else {
            return null;
        }
    },

    //主要兼容IE对DOM的button属性的反馈，button属性是指鼠标按钮，左，中，右三个键的点击情况
    getButton: function (event) {
        if (document.implementation.hasFeature("MouseEvents","2.0")){
            return event.button;
        }else{
            switch(event.button){
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
    getWheelDelta:function (event) {
        //主要判断是否支持wheelDelta,不支持就是firefox，要乘以40，支持就判断opera的版本，小于9.5的要正负颠倒一下
        if (event.wheelDelta){
            return (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta);
        }else{
            return -event.detail * 40;
        }
    },

    //当发生keypress事件时，返回charCode的兼容用法
    getCharCode: function (event) {
        if (typeof event.charCode == "number"){
            return event.charCode;
        }else{
            return event.keyCode;
        }
    },

    getClipboardText: function (event) {
        var clipboardData = (event.clipboardData || window.clipboardData);
        return clipboardData.getData("text");
    },

    setClipboardText: function (event,value) {
        if (event.clipboardData){
            return event.clipboardData.setData("text/plain",value);
        }else if(window.clipboardData){
            return window.clipboardData.setData("text",value);
        }
    }
};