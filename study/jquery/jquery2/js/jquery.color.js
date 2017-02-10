/**
 * Created by wanglecheng on 12/18/16.
 */

//以下定义了一个color插件，用于获取元素的颜色值，以及设置元素的颜色值
;(function ($) {
    $.fn.extend({
        "color":function (value) {
            if (value == undefined){
                return this.css("color");
            }else{
                return this.css("color",value);
            }
        }
    })
})(jQuery);