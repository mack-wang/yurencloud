
>博客：www.yurencloud.com  
>作者：Mack Wang 王乐城  
>整理和改编自：ADS.js/Sambells,EventUtil&CookieUtil&etc/Nicholas,jQuery,各大网站  
>兼容低版本的浏览器 IE6+，Firefox1.5+,Safari2.0+,Opera9+  


###前言：

YU-2.0.2.js 完整版带中文注释 大小67kb  
YU-2.0.2.min.js 压缩版 大小14kb  
示例.html 大小23kb 使用示范及示例   
- [下载地址](https://github.com/mack-wang/yurencloud/blob/master/study/AdvancEDDOMScripting/dist/)  


###一、JavaScript库名
YU-2.0.2.js，取自个人博客愚人云端yurencloud第一个字，“愚 yu”。

###二、 YU.js的特点
1.轻量封装：YU.js是对js原生的轻量封装，方法偏向原生操作。   
 
2.命名空间：YU对象注册在window.YU对象，拥有YU的命名空间   

3.操作对象：YU.$()  获取的是DOM对象，而不像jQuery那样获取的是一个jQuery封装后的DOM对象不能直接使用原生方法。所以YU可以直接对$()  获取的对像使用原生方法。   

4.多库共存：YU.js可与其他库共存，例如jQuery.js,YUI.js,prototype.js等，YU会自动让出$的全局使用权。  

5.跨浏览器：兼容低版本的浏览器 IE6+，Firefox1.5+,Safari2.0+,Opera9+（已经在各浏览器中测试过，均可正常运行）   

6.语义化命名：所有的方法，形参等都按语义化要求规范命名，见名即可知其意。   

7.中文注释：详细的中文注释，让中文使用者可以更快使用。  


###示例：

 * 作用：通过id值获取单个元素或多个元素
 * 参数：单个或多个id值
 * 返回：元素数组，注意返回的是DOM元素数组，和jQuery不同  
 
`console.log('通过id值获取单个元素或多个元素1:' + YU.$('xiaoming')  .id)  ;  
 console.log('通过id值获取单个元素或多个元素2:' + YU.$('xiaoming', 'xiaohong', 'dingding')  )  ;`


 * 作用：添加事件
 * 参数：element 绑定事件的元素 | type 事件类型 不加on | fn 回调函数
 * 返回：无  
 
 
`YU.addEvent(YU.$('xiaoming')  , 'click', function ()   {  
     console.log('添加事件1:' + '成功')    
 })  ;`

###YU库源码


 * 作用：添加事件
 * 参数：element 绑定事件的元素 | type 事件类型 不加on | fn 回调函数
`
addEvent:function (element, type, fn)   {  
    if (element.addEventListener)   {  
        element.addEventListener(type, fn, false)  ;  
    } else if (element.attachEvent)   {  
        element.attachEvent("on" + type, fn)  ;  
    } else {  
        element["on" + type] = fn;  
    }  
}  
`

###三、YU.js的优点  

1.最贴近原生操作的$()  ,d()  ,c()  

2.最优秀的事件添加方法addEvent(element,type,fn)  

3.最兼容的样式操作hasClassName(element,className)  

4.最方便的拖放元素事件实现dragDrop()   

5.最简洁的AJAX创建和使用ajax(obj)    

6.最简便的cookie操作的封装  

7.最实用的数组交集，并集，差集，乱序方法  

8.最方便的console.log输出到页面 log.write(message)    

9.最实用的高级方法的实现：数组分块函数，柯里化函数，表单序列化，遍历元素文本属性等节点树等  


###四、YU.js包含的方法列表
备注：以下不含YU命名空间外的部分方法  
不含YU-2.0.1,YU-2.0.2中添加的几个新方法   


$:$()    
addCSSRule : (selector, styles, index, url, media)      
addClassName : (element, className)    
addEvent : (element, type, fn)    
addLoadEvent : (loadEvent, waitForImages)    
addStyleSheet : (url, media)    
addURLParam : (url, name, value)    
ajax : (obj)    
bindContext : (fn, context)    
c : (className)    
camelize : (str)    
chunk : (array, process, context)    
clone : (myObj)    
createXHR : ()    
curry : (fn)    
dragDrop : ()    
each : (obj, callback)    
editCSSRule : (selector, styles, url, media)    
getBrowserWindowSize : ()    
getCharCode : (event)    
getClassNames : (element)    
getClipboardText : (event)    
getCookie : (name)    
getElementsByClassName : (className, tag, parent)    
getEvent : (event)    
getMouseButton : (event)    
getPointer : (event)  
getRelatedTarget : (event)  
getStyle : (element, property)  
getStyleSheets : (url, media)  
getTarget : (event)  
getWheelDelta : (event)  
hasClassName : (element, className)  
insertAfter : (node, referenceNode)  
isArray : (obj)  
isArrayLike : (obj)  
isCompatible : (other)  
isEmptyObject : (obj)  
isFunction : (obj)  
isNumeric : (obj)  
isRegExp : (obj)  
isWindow : (obj)  
noConflict : (name)  
node : Object
params : (data)  
parseJSON : (s, filter)  
prependChild : (parent, newChild)  
preventDefault : (event)  
removeChildren : (parent)  
removeClassName : (element, className)  
removeEvent : (element, type, fn)  
removeStyleSheet : (url, media)  
serialize : (form)  
setClipboardText : (event, value)  
setCookie : (name, value, expires, path, domain, secure)  
setStyleById : (element, styles)  
setStylesByClassName : (parent, tag, className, styles)  
setStylesByTagName : (tagname, styles, parent)  
shuffleArray : (array)  
stopPropagation : (event)  
toggleDisplay : (node, value)  
type : (obj)  
uncamelize : (str, sep)  
unsetCookie : (name, path, domain, secure)  
version : "2.0.0"
walkElementsLinear : (fn, node)  
walkTheDOM : (node, fn)  
walkTheDOMRecursive : (fn, node, depth, returnedFromParent)  
walkTheDOMWithAttributes : (node, fn, depth, returnedFromParent)  
__proto__ : Object
