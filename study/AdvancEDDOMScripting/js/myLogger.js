/**
 * Created by wanglecheng on 1/28/17.
 */
function myLogger(id) {
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
        logWindow.style.overflow = 'scroll';

        //添加一些样式以美化外观
        logWindow.style.padding = '0';
        logWindow.style.margin = '0';
        logWindow.style.border = '1px solid black';
        logWindow.style.backgroundColor = '1px solid black';
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
        li.style.padding = '2px';
        li.style.border = '0';
        li.style.borderBottom = '1px dotted black';
        li.style.margin = '0';
        li.style.color = '#000';
        li.style.font = '9px/9px Verdana,Tahoma,Sans';
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

myLogger.prototype = {
    //输出执行结果
    write: function (message) {
        //警告message为空值
        if (typeof message == 'string' && message.length == 0) {
            return this.writeRaw('YU.log: null message');
        }

        //如果message不是字符串，则尝试调用toString()方法，如果不存在，则访问该记录对象的类型
        if (typeof message != 'string') {
            if (message.toString) {
                return this.writeRaw(message.toString())
            } else {
                return this.writeRaw(typeof message);
            }
        }

        if (typeof message != 'string') {
            if (message.toString) {
                return this.writeRaw(message.toString())
            } else {
                return this.writeRaw(typeof message);
            }
        }

        //转换<>，以便innerHTML不会将message作为HTML解析
        message = message.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        return this.writeRaw(message);
    },

    //输出自定义标题
    header: function (message) {
        message = '<span style = "color:white;background-color:black;font-weight:bold;padding:0px 5px;">' + message + '</span>';
        return this.writeRaw(message);
    }
};

/*
还有一个好处：不用打开控制台来查看日志，因为直接在页面正中间就显示日志了
为了能够使用构造函数创建多个不同的日志记录对象
同时为了展示构造函数使用过程中，综合使用私有属性，公有属性，私有方法，公有方法的应用。
*/

window['YU']['log'] = new myLogger();//使用构造函数创建实例